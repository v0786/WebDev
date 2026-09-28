import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface QuoteFeature {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
}

export interface QuoteRequest {
  id?: string;
  client_name: string;
  client_email: string;
  client_company?: string;
  project_type: string;
  timeline: 'rush' | 'standard' | 'flexible';
  selected_features: QuoteFeature[];
  estimated_cost: number;
  notes?: string;
  status: 'pending' | 'approved' | 'rejected' | 'converted';
  created_at?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unit_price: number;
  amount: number;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  quote_id?: string;
  client_name: string;
  client_email: string;
  client_address?: string;
  client_company?: string;
  sender_name: string;
  sender_email: string;
  sender_address: string;
  currency: 'USD' | 'INR' | 'EUR' | 'GBP';
  items: InvoiceItem[];
  subtotal: number;
  tax_rate: number; // percentage
  tax_amount: number;
  discount: number;
  total_amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  issue_date: string;
  due_date: string;
  payment_link?: string;
  upi_id?: string;
  notes?: string;
  created_at: string;
}

const STORAGE_KEYS = {
  QUOTES: 'antigravity_quotes_v1',
  INVOICES: 'antigravity_invoices_v1',
};

// Initial sample data if local storage is empty
const SAMPLE_INVOICES: Invoice[] = [
  {
    id: 'inv-sample-1',
    invoice_number: 'INV-2026-001',
    client_name: 'Apex Innovations Ltd',
    client_email: 'billing@apexinnovations.io',
    client_address: '742 Evergreen Terrace, San Francisco, CA',
    client_company: 'Apex Innovations',
    sender_name: 'Vaibhav Sonkusare',
    sender_email: 'vaibhavsonkusare12@gmail.com',
    sender_address: 'Nagpur, Maharashtra, India',
    currency: 'USD',
    items: [
      {
        id: 'item-1',
        description: 'Full-Stack Web Application Architecture & Design',
        quantity: 1,
        unit_price: 2400,
        amount: 2400,
      },
      {
        id: 'item-2',
        description: 'Custom Scraper API & Supabase Database Integration',
        quantity: 1,
        unit_price: 1200,
        amount: 1200,
      },
      {
        id: 'item-3',
        description: 'Performance Optimization & Automated CI/CD Setup',
        quantity: 1,
        unit_price: 450,
        amount: 450,
      },
    ],
    subtotal: 4050,
    tax_rate: 5,
    tax_amount: 202.5,
    discount: 252.5,
    total_amount: 4000,
    status: 'sent',
    issue_date: '2026-09-15',
    due_date: '2026-10-15',
    payment_link: 'https://stripe.com/pay/sample',
    upi_id: 'vaibhav@upi',
    notes: 'Thank you for your business! Payment is due within 30 days.',
    created_at: '2026-09-15T10:00:00Z',
  },
];

// Helper to manage localStorage fallback safely
const getLocalData = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const setLocalData = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }
};

export const invoiceService = {
  // QUOTE OPERATIONS
  async submitQuoteRequest(quoteData: Omit<QuoteRequest, 'id' | 'created_at' | 'status'>): Promise<QuoteRequest> {
    const newQuote: QuoteRequest = {
      ...quoteData,
      id: 'quote-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('quotes').insert([{
          client_name: newQuote.client_name,
          client_email: newQuote.client_email,
          client_company: newQuote.client_company,
          project_type: newQuote.project_type,
          timeline: newQuote.timeline,
          selected_features: newQuote.selected_features,
          estimated_cost: newQuote.estimated_cost,
          notes: newQuote.notes,
          status: newQuote.status,
        }]).select().single();

        if (!error && data) {
          return {
            ...newQuote,
            id: data.id,
            created_at: data.created_at,
          };
        }
      } catch (err) {
        console.warn('Supabase quote submission error, saving locally:', err);
      }
    }

    const currentQuotes = getLocalData<QuoteRequest[]>(STORAGE_KEYS.QUOTES, []);
    const updated = [newQuote, ...currentQuotes];
    setLocalData(STORAGE_KEYS.QUOTES, updated);
    return newQuote;
  },

  async getQuotes(): Promise<QuoteRequest[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('quotes').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data.map((q: any) => ({
            id: q.id,
            client_name: q.client_name,
            client_email: q.client_email,
            client_company: q.client_company,
            project_type: q.project_type,
            timeline: q.timeline,
            selected_features: q.selected_features || [],
            estimated_cost: Number(q.estimated_cost),
            notes: q.notes,
            status: q.status,
            created_at: q.created_at,
          }));
        }
      } catch (err) {
        console.warn('Supabase fetch quotes failed, fallback to local:', err);
      }
    }

    return getLocalData<QuoteRequest[]>(STORAGE_KEYS.QUOTES, []);
  },

  async updateQuoteStatus(id: string, status: QuoteRequest['status']): Promise<boolean> {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('quotes').update({ status }).eq('id', id);
      } catch (err) {
        console.warn('Supabase update quote error:', err);
      }
    }

    const quotes = getLocalData<QuoteRequest[]>(STORAGE_KEYS.QUOTES, []);
    const updated = quotes.map((q) => (q.id === id ? { ...q, status } : q));
    setLocalData(STORAGE_KEYS.QUOTES, updated);
    return true;
  },

  // INVOICE OPERATIONS
  async getInvoices(): Promise<Invoice[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('invoices').select('*, invoice_items(*)').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data.map((inv: any) => ({
            id: inv.id,
            invoice_number: inv.invoice_number,
            quote_id: inv.quote_id,
            client_name: inv.client_name,
            client_email: inv.client_email,
            client_address: inv.client_address,
            client_company: inv.client_company,
            sender_name: inv.sender_name || 'Vaibhav Sonkusare',
            sender_email: inv.sender_email || 'vaibhavsonkusare12@gmail.com',
            sender_address: inv.sender_address || 'Nagpur, Maharashtra, India',
            currency: inv.currency || 'USD',
            items: (inv.invoice_items || []).map((item: any) => ({
              id: item.id,
              description: item.description,
              quantity: Number(item.quantity),
              unit_price: Number(item.unit_price),
              amount: Number(item.amount),
            })),
            subtotal: Number(inv.subtotal),
            tax_rate: Number(inv.tax_rate || 0),
            tax_amount: Number(inv.tax_amount || 0),
            discount: Number(inv.discount || 0),
            total_amount: Number(inv.total_amount),
            status: inv.status,
            issue_date: inv.issue_date,
            due_date: inv.due_date,
            payment_link: inv.payment_link,
            upi_id: inv.upi_id,
            notes: inv.notes,
            created_at: inv.created_at,
          }));
        }
      } catch (err) {
        console.warn('Supabase fetch invoices failed, using local storage:', err);
      }
    }

    return getLocalData<Invoice[]>(STORAGE_KEYS.INVOICES, SAMPLE_INVOICES);
  },

  async saveInvoice(invoiceData: Partial<Invoice>): Promise<Invoice> {
    const isNew = !invoiceData.id;
    const now = new Date();

    const invoiceNumber =
      invoiceData.invoice_number ||
      `INV-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const fullInvoice: Invoice = {
      id: invoiceData.id || 'inv-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      invoice_number: invoiceNumber,
      quote_id: invoiceData.quote_id,
      client_name: invoiceData.client_name || 'Client Name',
      client_email: invoiceData.client_email || 'client@example.com',
      client_address: invoiceData.client_address || '',
      client_company: invoiceData.client_company || '',
      sender_name: invoiceData.sender_name || 'Vaibhav Sonkusare',
      sender_email: invoiceData.sender_email || 'vaibhavsonkusare12@gmail.com',
      sender_address: invoiceData.sender_address || 'Nagpur, Maharashtra, India',
      currency: invoiceData.currency || 'USD',
      items: invoiceData.items || [],
      subtotal: invoiceData.subtotal || 0,
      tax_rate: invoiceData.tax_rate || 0,
      tax_amount: invoiceData.tax_amount || 0,
      discount: invoiceData.discount || 0,
      total_amount: invoiceData.total_amount || 0,
      status: invoiceData.status || 'draft',
      issue_date: invoiceData.issue_date || now.toISOString().split('T')[0],
      due_date: invoiceData.due_date || new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      payment_link: invoiceData.payment_link || '',
      upi_id: invoiceData.upi_id || 'vaibhav@upi',
      notes: invoiceData.notes || 'Thank you for working with us.',
      created_at: invoiceData.created_at || now.toISOString(),
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const payload = {
          invoice_number: fullInvoice.invoice_number,
          quote_id: fullInvoice.quote_id,
          client_name: fullInvoice.client_name,
          client_email: fullInvoice.client_email,
          client_address: fullInvoice.client_address,
          client_company: fullInvoice.client_company,
          sender_name: fullInvoice.sender_name,
          sender_email: fullInvoice.sender_email,
          sender_address: fullInvoice.sender_address,
          currency: fullInvoice.currency,
          subtotal: fullInvoice.subtotal,
          tax_rate: fullInvoice.tax_rate,
          tax_amount: fullInvoice.tax_amount,
          discount: fullInvoice.discount,
          total_amount: fullInvoice.total_amount,
          status: fullInvoice.status,
          issue_date: fullInvoice.issue_date,
          due_date: fullInvoice.due_date,
          payment_link: fullInvoice.payment_link,
          upi_id: fullInvoice.upi_id,
          notes: fullInvoice.notes,
        };

        let savedId = fullInvoice.id;
        if (isNew) {
          const { data } = await supabase.from('invoices').insert([payload]).select().single();
          if (data) savedId = data.id;
        } else {
          await supabase.from('invoices').update(payload).eq('id', fullInvoice.id);
        }

        if (fullInvoice.items.length > 0) {
          await supabase.from('invoice_items').delete().eq('invoice_id', savedId);
          await supabase.from('invoice_items').insert(
            fullInvoice.items.map((item) => ({
              invoice_id: savedId,
              description: item.description,
              quantity: item.quantity,
              unit_price: item.unit_price,
              amount: item.amount,
            }))
          );
        }

        fullInvoice.id = savedId;
      } catch (err) {
        console.warn('Supabase invoice save error, persisting locally:', err);
      }
    }

    const invoices = getLocalData<Invoice[]>(STORAGE_KEYS.INVOICES, SAMPLE_INVOICES);
    const existingIndex = invoices.findIndex((i) => i.id === fullInvoice.id);

    let updatedList: Invoice[];
    if (existingIndex >= 0) {
      updatedList = [...invoices];
      updatedList[existingIndex] = fullInvoice;
    } else {
      updatedList = [fullInvoice, ...invoices];
    }

    setLocalData(STORAGE_KEYS.INVOICES, updatedList);
    return fullInvoice;
  },

  async deleteInvoice(id: string): Promise<boolean> {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('invoices').delete().eq('id', id);
      } catch (err) {
        console.warn('Supabase delete error:', err);
      }
    }

    const invoices = getLocalData<Invoice[]>(STORAGE_KEYS.INVOICES, SAMPLE_INVOICES);
    const filtered = invoices.filter((inv) => inv.id !== id);
    setLocalData(STORAGE_KEYS.INVOICES, filtered);
    return true;
  },

  convertQuoteToInvoiceData(quote: QuoteRequest): Partial<Invoice> {
    const items: InvoiceItem[] = quote.selected_features.map((feat, index) => ({
      id: `item-${index + 1}`,
      description: `${feat.category}: ${feat.name} - ${feat.description}`,
      quantity: 1,
      unit_price: feat.price,
      amount: feat.price,
    }));

    // Add timeline multiplier if rush
    if (quote.timeline === 'rush') {
      items.push({
        id: `item-rush`,
        description: 'Priority Rush Delivery Surcharge (30%)',
        quantity: 1,
        unit_price: Math.round(quote.estimated_cost * 0.3),
        amount: Math.round(quote.estimated_cost * 0.3),
      });
    }

    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);

    return {
      quote_id: quote.id,
      client_name: quote.client_name,
      client_email: quote.client_email,
      client_company: quote.client_company,
      currency: 'USD',
      items,
      subtotal,
      tax_rate: 0,
      tax_amount: 0,
      discount: 0,
      total_amount: subtotal,
      status: 'draft',
      notes: `Converted from Quote Request for ${quote.project_type}. ${quote.notes || ''}`,
    };
  },
};
