import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Printer, 
  Clock, 
  Search, 
  Edit3, 
  Eye, 
  ChevronLeft,
  QrCode,
  ArrowRight,
  RefreshCw,
  Sliders,
  Sparkles
} from 'lucide-react';
import { Invoice, InvoiceItem, QuoteRequest, invoiceService } from '../../services/invoiceService';

interface InvoiceStudioProps {
  onBackToCalculator?: () => void;
  initialInvoiceId?: string;
}

const CURRENCY_SYMBOLS: Record<Invoice['currency'], string> = {
  USD: '$',
  INR: '₹',
  EUR: '€',
  GBP: '£',
};

export const InvoiceStudio: React.FC<InvoiceStudioProps> = ({
  onBackToCalculator,
  initialInvoiceId,
}) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'invoices' | 'quotes' | 'editor'>('invoices');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Currently active / editing invoice
  const [editingInvoice, setEditingInvoice] = useState<Partial<Invoice> | null>(null);
  const [isLivePreview, setIsLivePreview] = useState(true);

  const printRef = useRef<HTMLDivElement>(null);

  // Load invoices and quotes on mount
  const refreshData = async () => {
    setLoading(true);
    try {
      const [invData, quoteData] = await Promise.all([
        invoiceService.getInvoices(),
        invoiceService.getQuotes(),
      ]);
      setInvoices(invData);
      setQuotes(quoteData);

      if (initialInvoiceId) {
        const found = invData.find((i) => i.id === initialInvoiceId);
        if (found) {
          setEditingInvoice(found);
          setActiveTab('editor');
        }
      }
    } catch (err) {
      console.error('Error fetching invoice data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, [initialInvoiceId]);

  // Handle starting a new invoice
  const handleCreateNewInvoice = () => {
    const now = new Date();
    const invoiceNum = `INV-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInv: Partial<Invoice> = {
      invoice_number: invoiceNum,
      client_name: 'Client Name',
      client_email: 'client@example.com',
      client_company: 'Client Business Ltd',
      client_address: '123 Tech Park, Suite 400',
      sender_name: 'Vaibhav Sonkusare',
      sender_email: 'vaibhavsonkusare12@gmail.com',
      sender_address: 'Nagpur, Maharashtra, India',
      currency: 'USD',
      items: [
        {
          id: 'item-1',
          description: 'Custom Web Development & Design',
          quantity: 1,
          unit_price: 1500,
          amount: 1500,
        },
      ],
      subtotal: 1500,
      tax_rate: 0,
      tax_amount: 0,
      discount: 0,
      total_amount: 1500,
      status: 'draft',
      issue_date: now.toISOString().split('T')[0],
      due_date: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      notes: 'Thank you for your business. Please make payments via bank transfer or online gateway.',
      payment_link: 'https://stripe.com/pay/sample',
      upi_id: 'vaibhav@upi',
    };
    setEditingInvoice(newInv);
    setActiveTab('editor');
  };

  // Convert Quote to Invoice
  const handleConvertQuote = async (quote: QuoteRequest) => {
    const draft = invoiceService.convertQuoteToInvoiceData(quote);
    setEditingInvoice(draft);
    await invoiceService.updateQuoteStatus(quote.id!, 'converted');
    setActiveTab('editor');
  };

  // Save current invoice in editor
  const handleSaveInvoice = async () => {
    if (!editingInvoice) return;
    try {
      const saved = await invoiceService.saveInvoice(editingInvoice);
      setEditingInvoice(saved);
      alert(`Invoice ${saved.invoice_number} saved successfully!`);
      await refreshData();
      setActiveTab('invoices');
    } catch (err) {
      console.error(err);
      alert('Failed to save invoice.');
    }
  };

  // Delete invoice
  const handleDeleteInvoice = async (id: string, invNum: string) => {
    if (!window.confirm(`Are you sure you want to delete invoice ${invNum}?`)) return;
    await invoiceService.deleteInvoice(id);
    await refreshData();
    if (editingInvoice?.id === id) {
      setEditingInvoice(null);
      setActiveTab('invoices');
    }
  };

  // Line Items Calculation
  const handleItemChange = (index: number, field: keyof InvoiceItem, value: any) => {
    if (!editingInvoice || !editingInvoice.items) return;
    const items = [...editingInvoice.items];
    const item = { ...items[index], [field]: value };

    if (field === 'quantity' || field === 'unit_price') {
      const qty = Number(field === 'quantity' ? value : item.quantity) || 0;
      const price = Number(field === 'unit_price' ? value : item.unit_price) || 0;
      item.amount = qty * price;
    }

    items[index] = item;
    recalculateInvoiceTotals(items, editingInvoice.tax_rate || 0, editingInvoice.discount || 0);
  };

  const handleAddItem = () => {
    if (!editingInvoice) return;
    const items = editingInvoice.items || [];
    const newItem: InvoiceItem = {
      id: `item-${Date.now()}`,
      description: 'New Scope Item',
      quantity: 1,
      unit_price: 250,
      amount: 250,
    };
    const updatedItems = [...items, newItem];
    recalculateInvoiceTotals(updatedItems, editingInvoice.tax_rate || 0, editingInvoice.discount || 0);
  };

  const handleRemoveItem = (index: number) => {
    if (!editingInvoice || !editingInvoice.items) return;
    const items = editingInvoice.items.filter((_, i) => i !== index);
    recalculateInvoiceTotals(items, editingInvoice.tax_rate || 0, editingInvoice.discount || 0);
  };

  const recalculateInvoiceTotals = (items: InvoiceItem[], taxRate: number, discount: number) => {
    const subtotal = items.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    const tax_amount = Math.round((subtotal * (Number(taxRate) || 0)) / 100 * 100) / 100;
    const total_amount = Math.max(0, subtotal + tax_amount - (Number(discount) || 0));

    setEditingInvoice((prev) => ({
      ...prev,
      items,
      subtotal,
      tax_rate: taxRate,
      tax_amount,
      discount,
      total_amount,
    }));
  };

  // Filtered Invoices
  const filteredInvoices = useMemo(() => {
    return invoices.filter((inv) => {
      const matchesSearch =
        inv.invoice_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.client_email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || inv.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [invoices, searchQuery, statusFilter]);

  // Print function
  const handleTriggerPrint = () => {
    window.print();
  };

  const symbol = editingInvoice?.currency ? CURRENCY_SYMBOLS[editingInvoice.currency] : '$';

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-[#090807] text-[#f1e9df] min-h-screen">
      {/* Top Navbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#d8a66b]/30 pb-6 mb-8 gap-4">
        <div className="flex items-center gap-4">
          {onBackToCalculator && (
            <button
              onClick={onBackToCalculator}
              className="p-2 bg-[#171410] border border-[#d8a66b]/30 hover:border-[#f0c892] rounded-lg text-[#f0c892] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d8a66b] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#f0c892]" />
              Invoicing & Quoting Studio
            </div>
            <h1 className="text-3xl font-display uppercase tracking-tight text-[#f1e9df]">
              Project <span className="font-serif italic lowercase text-[#f0c892]">Billing</span> System
            </h1>
          </div>
        </div>

        {/* Tab Switcher & New Invoice Button */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors border ${
              activeTab === 'invoices'
                ? 'bg-[#d8a66b] text-[#090807] font-bold border-[#f0c892]'
                : 'bg-[#15120e] text-[#b5a89d] border-[#d8a66b]/20 hover:border-[#d8a66b]/50'
            }`}
          >
            Invoices ({invoices.length})
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors border ${
              activeTab === 'quotes'
                ? 'bg-[#d8a66b] text-[#090807] font-bold border-[#f0c892]'
                : 'bg-[#15120e] text-[#b5a89d] border-[#d8a66b]/20 hover:border-[#d8a66b]/50'
            }`}
          >
            Client Quotes ({quotes.length})
          </button>

          <button
            onClick={handleCreateNewInvoice}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d8a66b] to-[#f0c892] text-[#090807] font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:opacity-95 shadow-md shadow-[#d8a66b]/20"
          >
            <Plus className="w-4 h-4" />
            Create Invoice
          </button>
        </div>
      </div>

      {/* VIEW TAB 1: INVOICE LIST */}
      {activeTab === 'invoices' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#14110d] border border-[#d8a66b]/20 rounded-xl">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#b5a89d] absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search invoice # or client..."
                className="w-full pl-9 pr-4 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded-lg text-xs text-[#f1e9df] outline-none focus:border-[#f0c892]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
              <Sliders className="w-4 h-4 text-[#d8a66b] hidden sm:block" />
              {['all', 'draft', 'sent', 'paid', 'overdue'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider whitespace-nowrap border ${
                    statusFilter === status
                      ? 'bg-[#d8a66b]/20 border-[#f0c892] text-[#f0c892]'
                      : 'bg-[#090807] border-[#d8a66b]/15 text-[#b5a89d] hover:border-[#d8a66b]/30'
                  }`}
                >
                  {status}
                </button>
              ))}
              <button
                onClick={refreshData}
                className="p-2 text-[#d8a66b] hover:text-[#f0c892] transition-colors"
                title="Refresh data"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table Container */}
          {loading ? (
            <div className="p-12 text-center text-xs font-mono text-[#b5a89d] space-y-3">
              <div className="w-6 h-6 border-2 border-[#d8a66b] border-t-transparent rounded-full animate-spin mx-auto" />
              <div>Loading Invoices...</div>
            </div>
          ) : filteredInvoices.length === 0 ? (
            <div className="p-12 text-center bg-[#120f0c] border border-[#d8a66b]/20 rounded-xl space-y-4">
              <FileText className="w-12 h-12 text-[#d8a66b]/40 mx-auto" />
              <div className="text-sm font-mono text-[#b5a89d]">No invoices found.</div>
              <button
                onClick={handleCreateNewInvoice}
                className="px-4 py-2 bg-[#d8a66b] text-[#090807] font-mono text-xs font-bold uppercase tracking-wider rounded-lg"
              >
                Create First Invoice
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto border border-[#d8a66b]/20 rounded-xl bg-[#120f0c]">
              <table className="w-full text-left border-collapse text-xs font-sans">
                <thead>
                  <tr className="border-b border-[#d8a66b]/20 bg-[#181410] font-mono text-[#d8a66b] uppercase text-[11px] tracking-wider">
                    <th className="p-4">Invoice #</th>
                    <th className="p-4">Client</th>
                    <th className="p-4">Issue / Due</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d8a66b]/10">
                  {filteredInvoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-[#1a1612] transition-colors">
                      <td className="p-4 font-mono font-bold text-[#f0c892]">
                        {inv.invoice_number}
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-[#f1e9df]">{inv.client_name}</div>
                        <div className="text-[11px] text-[#b5a89d] font-mono">{inv.client_email}</div>
                      </td>
                      <td className="p-4 font-mono text-[#b5a89d]">
                        <div>Issue: {inv.issue_date}</div>
                        <div className="text-[10px] text-[#d8a66b]">Due: {inv.due_date}</div>
                      </td>
                      <td className="p-4 font-mono font-bold text-sm text-[#f1e9df]">
                        {CURRENCY_SYMBOLS[inv.currency] || '$'}
                        {inv.total_amount.toLocaleString()}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                            inv.status === 'paid'
                              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400'
                              : inv.status === 'sent'
                              ? 'bg-blue-950/60 border-blue-500/40 text-blue-400'
                              : inv.status === 'overdue'
                              ? 'bg-rose-950/60 border-rose-500/40 text-rose-400'
                              : 'bg-amber-950/60 border-amber-500/40 text-amber-400'
                          }`}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingInvoice(inv);
                              setActiveTab('editor');
                            }}
                            className="p-1.5 bg-[#090807] border border-[#d8a66b]/30 hover:border-[#f0c892] text-[#f0c892] rounded"
                            title="Edit / View Invoice"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteInvoice(inv.id, inv.invoice_number)}
                            className="p-1.5 bg-[#090807] border border-rose-500/30 hover:border-rose-400 text-rose-400 rounded"
                            title="Delete Invoice"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* VIEW TAB 2: CLIENT QUOTE REQUESTS */}
      {activeTab === 'quotes' && (
        <div className="space-y-6">
          <div className="p-4 bg-[#14110d] border border-[#d8a66b]/20 rounded-xl text-xs font-mono text-[#b5a89d]">
            Quotations requested by clients through your website's <span className="text-[#f0c892]">"Get Quoted"</span> estimator. Click <span className="text-[#f0c892]">"Convert to Invoice"</span> to issue an official bill.
          </div>

          {quotes.length === 0 ? (
            <div className="p-12 text-center bg-[#120f0c] border border-[#d8a66b]/20 rounded-xl space-y-3">
              <Clock className="w-10 h-10 text-[#d8a66b]/40 mx-auto" />
              <div className="text-sm font-mono text-[#b5a89d]">No client quote requests yet.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quotes.map((q) => (
                <div
                  key={q.id}
                  className="p-5 bg-[#120f0c] border border-[#d8a66b]/30 rounded-xl space-y-4 hover:border-[#f0c892] transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-[#d8a66b]/15 pb-3">
                    <span className="text-xs font-mono text-[#f0c892] uppercase font-bold">{q.project_type}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase border ${
                        q.status === 'converted'
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                          : 'bg-amber-950 border-amber-500 text-amber-400'
                      }`}
                    >
                      {q.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#f1e9df]">{q.client_name}</div>
                    <div className="text-xs font-mono text-[#b5a89d]">{q.client_email}</div>
                    {q.client_company && <div className="text-[11px] text-[#b5a89d]">{q.client_company}</div>}
                  </div>

                  <div className="p-3 bg-[#090807] border border-[#d8a66b]/10 rounded-lg text-xs font-mono space-y-1">
                    <div className="flex justify-between text-[#b5a89d]">
                      <span>Features:</span>
                      <span>{q.selected_features.length} selected</span>
                    </div>
                    <div className="flex justify-between text-[#b5a89d]">
                      <span>Timeline:</span>
                      <span className="uppercase text-[#f0c892]">{q.timeline}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#d8a66b]/10 text-sm font-bold text-[#f0c892]">
                      <span>Estimate:</span>
                      <span>${q.estimated_cost.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleConvertQuote(q)}
                    className="w-full py-2 bg-[#d8a66b] hover:bg-[#f0c892] text-[#090807] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Convert to Invoice
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIEW TAB 3: LIVE EDITOR & PREVIEW */}
      {activeTab === 'editor' && editingInvoice && (
        <div className="space-y-8">
          {/* Top Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#14110d] border border-[#d8a66b]/30 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#d8a66b] uppercase">Editing:</span>
              <span className="text-sm font-mono font-bold text-[#f0c892]">{editingInvoice.invoice_number}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsLivePreview(!isLivePreview)}
                className="px-3 py-1.5 bg-[#090807] border border-[#d8a66b]/30 text-[#f0c892] rounded-lg text-xs font-mono uppercase flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                {isLivePreview ? 'Hide Live Preview' : 'Show Live Preview'}
              </button>

              <button
                onClick={handleTriggerPrint}
                className="px-3 py-1.5 bg-[#090807] border border-[#d8a66b]/30 text-[#f1e9df] hover:border-[#f0c892] rounded-lg text-xs font-mono uppercase flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-[#d8a66b]" />
                Print / Export PDF
              </button>

              <button
                onClick={handleSaveInvoice}
                className="px-5 py-1.5 bg-gradient-to-r from-[#d8a66b] to-[#f0c892] text-[#090807] font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md"
              >
                Save Invoice
              </button>
            </div>
          </div>

          <div className={`grid grid-cols-1 ${isLivePreview ? 'lg:grid-cols-12' : ''} gap-8`}>
            {/* Editor Input Form Panel */}
            <div className={`${isLivePreview ? 'lg:col-span-6' : 'max-w-3xl mx-auto'} space-y-6 bg-[#120f0c] p-6 rounded-xl border border-[#d8a66b]/30`}>
              <div className="text-xs font-mono text-[#d8a66b] uppercase tracking-wider border-b border-[#d8a66b]/20 pb-2">
                Invoice Details & Line Items
              </div>

              {/* Status & Currency */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Status</label>
                  <select
                    value={editingInvoice.status || 'draft'}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, status: e.target.value as any })}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="sent">Sent</option>
                    <option value="paid">Paid</option>
                    <option value="overdue">Overdue</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Currency</label>
                  <select
                    value={editingInvoice.currency || 'USD'}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, currency: e.target.value as any })}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>

              {/* Dates & Invoice Number */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Invoice #</label>
                  <input
                    type="text"
                    value={editingInvoice.invoice_number || ''}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, invoice_number: e.target.value })}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Issue Date</label>
                  <input
                    type="date"
                    value={editingInvoice.issue_date || ''}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, issue_date: e.target.value })}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Due Date</label>
                  <input
                    type="date"
                    value={editingInvoice.due_date || ''}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, due_date: e.target.value })}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                </div>
              </div>

              {/* Client Info */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-mono text-[#d8a66b] uppercase">Billed To (Client)</div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Client Name"
                    value={editingInvoice.client_name || ''}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, client_name: e.target.value })}
                    className="px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Client Email"
                    value={editingInvoice.client_email || ''}
                    onChange={(e) => setEditingInvoice({ ...editingInvoice, client_email: e.target.value })}
                    className="px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Client Address / Location"
                  value={editingInvoice.client_address || ''}
                  onChange={(e) => setEditingInvoice({ ...editingInvoice, client_address: e.target.value })}
                  className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                />
              </div>

              {/* Dynamic Line Items */}
              <div className="space-y-3 pt-4 border-t border-[#d8a66b]/20">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#d8a66b] uppercase">Line Items</div>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="px-2.5 py-1 bg-[#d8a66b]/20 text-[#f0c892] rounded text-[10px] font-mono uppercase border border-[#d8a66b]/40 flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> Add Item
                  </button>
                </div>

                <div className="space-y-2">
                  {(editingInvoice.items || []).map((item, idx) => (
                    <div key={item.id || idx} className="p-3 bg-[#090807] border border-[#d8a66b]/20 rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Item description"
                          value={item.description}
                          onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                          className="flex-1 px-2.5 py-1.5 bg-[#14110d] border border-[#d8a66b]/20 rounded text-xs text-[#f1e9df] outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(idx)}
                          className="p-1.5 text-rose-400 hover:text-rose-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                        <div>
                          <label className="text-[10px] text-[#b5a89d]">Qty / Hrs</label>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
                            className="w-full px-2 py-1 bg-[#14110d] border border-[#d8a66b]/20 rounded text-xs text-[#f1e9df]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-[#b5a89d]">Rate ({symbol})</label>
                          <input
                            type="number"
                            min="0"
                            value={item.unit_price}
                            onChange={(e) => handleItemChange(idx, 'unit_price', e.target.value)}
                            className="w-full px-2 py-1 bg-[#14110d] border border-[#d8a66b]/20 rounded text-xs text-[#f1e9df]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-[#b5a89d]">Subtotal</label>
                          <div className="py-1 px-2 text-[#f0c892] font-bold">
                            {symbol}{item.amount}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Taxes & Payment URLs */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#d8a66b]/20">
                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Tax Rate (%)</label>
                  <input
                    type="number"
                    value={editingInvoice.tax_rate || 0}
                    onChange={(e) => {
                      const rate = Number(e.target.value) || 0;
                      recalculateInvoiceTotals(editingInvoice.items || [], rate, editingInvoice.discount || 0);
                    }}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Discount ({symbol})</label>
                  <input
                    type="number"
                    value={editingInvoice.discount || 0}
                    onChange={(e) => {
                      const disc = Number(e.target.value) || 0;
                      recalculateInvoiceTotals(editingInvoice.items || [], editingInvoice.tax_rate || 0, disc);
                    }}
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">UPI ID for Direct Instant Payment (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. yourname@upi"
                  value={editingInvoice.upi_id || ''}
                  onChange={(e) => setEditingInvoice({ ...editingInvoice, upi_id: e.target.value })}
                  className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] outline-none"
                />
              </div>
            </div>

            {/* Live Visual Printable Preview Panel */}
            {isLivePreview && (
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-mono text-[#b5a89d] uppercase flex items-center justify-between">
                  <span>Live Print & PDF Preview</span>
                  <span className="text-[10px] text-[#f0c892]">Pixel-Perfect Output</span>
                </div>

                {/* Paper View Container */}
                <div
                  ref={printRef}
                  id="printable-invoice"
                  className="p-8 bg-[#ffffff] text-[#1a1714] rounded-xl shadow-2xl space-y-8 font-sans border border-[#d8a66b]/40 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start border-b border-gray-200 pb-6">
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">INVOICE</h2>
                      <div className="text-xs font-mono text-gray-500 mt-1">
                        #{editingInvoice.invoice_number}
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <div className="font-bold text-gray-900">{editingInvoice.sender_name}</div>
                      <div>{editingInvoice.sender_email}</div>
                      <div>{editingInvoice.sender_address}</div>
                    </div>
                  </div>

                  {/* Client & Date Info */}
                  <div className="grid grid-cols-2 gap-6 text-xs border-b border-gray-200 pb-6">
                    <div>
                      <div className="font-mono text-gray-400 uppercase text-[10px] tracking-wider mb-1">Billed To</div>
                      <div className="font-bold text-sm text-gray-900">{editingInvoice.client_name}</div>
                      <div className="text-gray-600">{editingInvoice.client_email}</div>
                      {editingInvoice.client_address && (
                        <div className="text-gray-500 mt-0.5">{editingInvoice.client_address}</div>
                      )}
                    </div>
                    <div className="text-right space-y-1 font-mono">
                      <div>
                        <span className="text-gray-400">Issue Date: </span>
                        <span className="font-medium text-gray-800">{editingInvoice.issue_date}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Due Date: </span>
                        <span className="font-bold text-gray-900">{editingInvoice.due_date}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Status: </span>
                        <span className="uppercase font-bold text-[#d8a66b]">{editingInvoice.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Items Table */}
                  <div>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-900 font-mono text-gray-500 uppercase text-[10px]">
                          <th className="py-2">Description</th>
                          <th className="py-2 text-center">Qty</th>
                          <th className="py-2 text-right">Rate</th>
                          <th className="py-2 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(editingInvoice.items || []).map((item, idx) => (
                          <tr key={idx}>
                            <td className="py-3 pr-4 font-medium text-gray-800">{item.description}</td>
                            <td className="py-3 text-center text-gray-600 font-mono">{item.quantity}</td>
                            <td className="py-3 text-right text-gray-600 font-mono">{symbol}{item.unit_price}</td>
                            <td className="py-3 text-right font-bold font-mono text-gray-900">{symbol}{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Totals */}
                  <div className="flex justify-end pt-4 border-t border-gray-200">
                    <div className="w-64 space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal:</span>
                        <span>{symbol}{editingInvoice.subtotal?.toLocaleString()}</span>
                      </div>
                      {Boolean(editingInvoice.tax_amount) && (
                        <div className="flex justify-between text-gray-600">
                          <span>Tax ({editingInvoice.tax_rate}%):</span>
                          <span>+{symbol}{editingInvoice.tax_amount}</span>
                        </div>
                      )}
                      {Boolean(editingInvoice.discount) && (
                        <div className="flex justify-between text-emerald-600">
                          <span>Discount:</span>
                          <span>-{symbol}{editingInvoice.discount}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm font-bold text-gray-900 border-t-2 border-gray-900 pt-2">
                        <span>Total Due:</span>
                        <span>{symbol}{editingInvoice.total_amount?.toLocaleString()} {editingInvoice.currency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  {editingInvoice.upi_id && (
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                      <div className="space-y-0.5 text-xs">
                        <div className="font-mono text-gray-400 uppercase text-[10px]">Instant UPI Direct Payment</div>
                        <div className="font-mono font-bold text-gray-900">{editingInvoice.upi_id}</div>
                      </div>
                      <QrCode className="w-8 h-8 text-gray-700" />
                    </div>
                  )}

                  {/* Notes */}
                  {editingInvoice.notes && (
                    <div className="text-[11px] text-gray-500 font-serif italic border-t border-gray-100 pt-4">
                      {editingInvoice.notes}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
