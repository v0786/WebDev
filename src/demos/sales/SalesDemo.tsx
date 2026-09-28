import React, { useState, useMemo } from 'react';
import { salesService } from '../../services/salesService';
import { LeadScraperPortal } from '../../components/sales/LeadScraperPortal';
import { AISalesAutomationDashboard } from '../../components/sales/AISalesAutomationDashboard';
import { PrivacyBlurGuard } from '../../components/ui/PrivacyBlurGuard';
import {
  Lock,
  Unlock,
  User,
  Key,
  FileText,
  UploadCloud,
  Download,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  DollarSign,
  Building2,
  Search,
  Plus,
  X,
  Eye,
  Check,
  FolderOpen,
  TrendingUp,
  LogOut,
  Sparkles,
  Layers3,
  CheckSquare,
  Zap,
  LayoutDashboard,
  Bot
} from 'lucide-react';

// Types
export interface SalesRequest {
  id: string;
  requestNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  businessName: string;
  requestType: 'Custom Web App' | 'UI/UX Redesign' | 'SaaS Automation' | 'Mobile Application' | 'API & Cloud Backend';
  budget: string;
  status: 'New' | 'In Review' | 'In Progress' | 'Implemented' | 'On Hold';
  dateSubmitted: string;
  deadline: string;
  requirementsSummary: string;
  detailedRequirements: string[];
  techStackPreference: string[];
  attachedFilesCount: number;
  channel?: 'Website Form' | 'WhatsApp Inquiry' | 'Instagram DM' | 'Email Commission';
}

export interface PaymentRecord {
  id: string;
  invoiceNumber: string;
  requestNumber: string;
  clientName: string;
  businessName: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Processing';
  dueDate: string;
  paidDate?: string;
  method: 'Stripe Credit Card' | 'Wire Transfer' | 'Crypto USDT' | 'PayPal';
}

export interface ClientFile {
  id: string;
  name: string;
  size: string;
  type: string;
  category: 'PRD Specification' | 'Client Data' | 'Contract' | 'Asset Upload' | 'Deliverable';
  requestNumber: string;
  clientName: string;
  uploadedBy: string;
  uploadedAt: string;
  contentSnippet?: string;
  downloadUrl?: string;
  fileDataUrl?: string;
  mimeType?: string;
}

export interface ImplementationTask {
  id: string;
  requestNumber: string;
  title: string;
  category: 'Frontend' | 'Backend API' | 'Database' | 'Security' | 'DevOps';
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

const getStoredRequests = (): SalesRequest[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('sales_portal_requests');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

const getStoredPayments = (): PaymentRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('sales_portal_payments');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

const getStoredFiles = (): ClientFile[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('sales_portal_files');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

const getStoredTasks = (): ImplementationTask[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('sales_portal_tasks');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

export const SalesDemo: React.FC = () => {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userIdInput, setUserIdInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Active Portal Mode (Choice Launchpad, Dashboard, or Scraper)
  const [portalMode, setPortalMode] = useState<'choice' | 'dashboard' | 'scraper'>('choice');

  // Active Main Navigation Tab after login
  const [activeTab, setActiveTab] = useState<'requests' | 'payments' | 'analyzer' | 'checklist' | 'files' | 'automation'>('automation');

  // App Data States (Loaded dynamically from storage)
  const [requests, setRequests] = useState<SalesRequest[]>(getStoredRequests);
  const [payments, setPayments] = useState<PaymentRecord[]>(getStoredPayments);
  const [files, setFiles] = useState<ClientFile[]>(getStoredFiles);
  const [tasks, setTasks] = useState<ImplementationTask[]>(getStoredTasks);

  // Sync to LocalStorage
  React.useEffect(() => {
    try {
      localStorage.setItem('sales_portal_requests', JSON.stringify(requests));
    } catch {}
  }, [requests]);

  React.useEffect(() => {
    try {
      localStorage.setItem('sales_portal_payments', JSON.stringify(payments));
    } catch {}
  }, [payments]);

  React.useEffect(() => {
    try {
      localStorage.setItem('sales_portal_files', JSON.stringify(files));
    } catch {}
  }, [files]);

  React.useEffect(() => {
    try {
      localStorage.setItem('sales_portal_tasks', JSON.stringify(tasks));
    } catch {}
  }, [tasks]);

  // Sync live inquiries via salesService (Realtime PostgreSQL / local fallback)
  React.useEffect(() => {
    // Initial fetch
    salesService.fetchRequests().then((data) => setRequests(data));

    // Subscribe to realtime changes
    const unsubscribe = salesService.subscribeToRequests((updatedRequests) => {
      setRequests(updatedRequests);
      setPayments(getStoredPayments());
      setFiles(getStoredFiles());
      setTasks(getStoredTasks());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [requestTypeFilter, setRequestTypeFilter] = useState<string>('All');

  // Modals
  const [selectedRequestModal, setSelectedRequestModal] = useState<SalesRequest | null>(null);
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [isSendFileModalOpen, setIsSendFileModalOpen] = useState<boolean>(false);
  const [previewFileModal, setPreviewFileModal] = useState<ClientFile | null>(null);

  // New Request Form State
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newBusinessName, setNewBusinessName] = useState('');
  const [newRequestType, setNewRequestType] = useState<SalesRequest['requestType']>('Custom Web App');
  const [newBudget, setNewBudget] = useState('');
  const [newRequirementsSummary, setNewRequirementsSummary] = useState('');
  const [newRequirementsList, setNewRequirementsList] = useState('');

  // Upload Form State
  const [selectedUploadFile, setSelectedUploadFile] = useState<File | null>(null);
  const [uploadFileName, setUploadFileName] = useState('');
  const [uploadCategory, setUploadCategory] = useState<ClientFile['category']>('PRD Specification');
  const [uploadRequestNumber, setUploadRequestNumber] = useState(requests[0]?.requestNumber || '');
  const [uploadSnippet, setUploadSnippet] = useState('');

  // Send File Form State
  const [sendFileId, setSendFileId] = useState(files[0]?.id || '');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [sendNote, setSendNote] = useState('');

  // Analyzer Tool State
  const [analyzerSelectedReqId, setAnalyzerSelectedReqId] = useState<string>(requests[0]?.id || '');

  // Notifications Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  // Handle Login Submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    // Check credentials strictly:
    // id: sonkusarevaibhavs
    // psw: Student@105
    if (userIdInput.trim() === 'sonkusarevaibhavs' && passwordInput === 'Student@105') {
      setIsLoggedIn(true);
      showToast('Welcome back, Sonkusare Vaibhav! Material 3 Sales Portal Authenticated.');
    } else {
      setAuthError('Invalid User ID or Password.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserIdInput('');
    setPasswordInput('');
    showToast('Logged out successfully.');
  };

  // Filtered Requests
  const filteredRequests = useMemo(() => {
    return requests.filter((req) => {
      const matchesSearch =
        req.requestNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.requirementsSummary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'All' || req.status === statusFilter;
      const matchesType = requestTypeFilter === 'All' || req.requestType === requestTypeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [requests, searchQuery, statusFilter, requestTypeFilter]);

  const [newChannel, setNewChannel] = useState<'Website Form' | 'WhatsApp Inquiry' | 'Instagram DM' | 'Email Commission'>('Website Form');

  // Handle Creating New Sales Request
  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newBusinessName || !newRequirementsSummary) {
      showToast('Please fill in required fields (Client Name, Business Name, Requirements).');
      return;
    }

    const nextNumber = `REQ-2026-0${100 + requests.length + 1}`;
    const newReq: SalesRequest = {
      id: `req-${Date.now()}`,
      requestNumber: nextNumber,
      clientName: newClientName,
      clientEmail: newClientEmail || `${newClientName.toLowerCase().replace(/\s+/g, '')}@business.com`,
      businessName: newBusinessName,
      requestType: newRequestType,
      budget: newBudget ? (newBudget.startsWith('$') ? newBudget : `$${newBudget}`) : '$15,000',
      status: 'New',
      dateSubmitted: new Date().toISOString().split('T')[0],
      deadline: '2026-11-30',
      requirementsSummary: newRequirementsSummary,
      detailedRequirements: newRequirementsList
        ? newRequirementsList.split('\n').filter((item) => item.trim().length > 0)
        : [newRequirementsSummary],
      techStackPreference: ['React', 'TypeScript', 'Material 3 UI', 'Tailwind CSS'],
      attachedFilesCount: 0,
      channel: newChannel
    };

    salesService.createRequest(newReq);
    setIsNewRequestModalOpen(false);
    setNewClientName('');
    setNewClientEmail('');
    setNewBusinessName('');
    setNewBudget('');
    setNewRequirementsSummary('');
    setNewRequirementsList('');
    showToast(`Created New Request ${nextNumber} for ${newBusinessName}!`);
  };

  // Handle Uploading File (Supports Video, Audio, Image, PDF, Code Archives)
  const handleUploadFileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let fileName = uploadFileName.trim();
    let fileSizeStr = '1.2 MB';
    let mimeTypeStr = 'application/octet-stream';
    let fileUrl: string | undefined = undefined;

    if (selectedUploadFile) {
      fileName = selectedUploadFile.name;
      fileSizeStr = `${(selectedUploadFile.size / (1024 * 1024)).toFixed(2)} MB`;
      mimeTypeStr = selectedUploadFile.type || 'application/octet-stream';
      fileUrl = URL.createObjectURL(selectedUploadFile);
    }

    if (!fileName) {
      showToast('Please select a file or enter file name.');
      return;
    }

    let fileTypeCategory = 'PDF Document';
    if (mimeTypeStr.startsWith('video/') || fileName.match(/\.(mp4|webm|mov|mkv)$/i)) {
      fileTypeCategory = 'Video Recording';
    } else if (mimeTypeStr.startsWith('audio/') || fileName.match(/\.(mp3|wav|ogg|m4a)$/i)) {
      fileTypeCategory = 'Audio File';
    } else if (mimeTypeStr.startsWith('image/') || fileName.match(/\.(png|jpg|jpeg|webp|gif|svg)$/i)) {
      fileTypeCategory = 'Image Asset';
    } else if (fileName.endsWith('.json')) {
      fileTypeCategory = 'JSON Data';
    } else if (fileName.endsWith('.zip')) {
      fileTypeCategory = 'ZIP Archive';
    }

    const matchedReq = requests.find((r) => r.requestNumber === uploadRequestNumber) || requests[0];
    const newFile: ClientFile = {
      id: `file-${Date.now()}`,
      name: fileName,
      size: fileSizeStr,
      type: fileTypeCategory,
      category: uploadCategory,
      requestNumber: matchedReq.requestNumber,
      clientName: matchedReq.clientName,
      uploadedBy: 'Sonkusare Vaibhav (Portal Admin)',
      uploadedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      contentSnippet: uploadSnippet || `Uploaded requirement file (${fileTypeCategory}) for request ${matchedReq.requestNumber}.`,
      fileDataUrl: fileUrl,
      mimeType: mimeTypeStr,
    };

    setFiles([newFile, ...files]);
    setIsUploadModalOpen(false);
    setSelectedUploadFile(null);
    setUploadFileName('');
    setUploadSnippet('');

    setRequests((prev) =>
      prev.map((r) => (r.requestNumber === matchedReq.requestNumber ? { ...r, attachedFilesCount: r.attachedFilesCount + 1 } : r))
    );

    showToast(`Uploaded ${fileTypeCategory} "${newFile.name}" successfully!`);
  };

  // Handle Send File to Client
  const handleSendFileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fileToSend = files.find((f) => f.id === sendFileId);
    if (!fileToSend || !recipientEmail) {
      showToast('Please select a file and enter recipient email.');
      return;
    }

    setIsSendFileModalOpen(false);
    setRecipientEmail('');
    setSendNote('');
    showToast(`Sent file "${fileToSend.name}" to ${recipientEmail}!`);
  };

  // Handle Download File Trigger
  const handleDownloadFile = (file: ClientFile) => {
    if (file.fileDataUrl) {
      const link = document.createElement('a');
      link.href = file.fileDataUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(`Downloading binary file: ${file.name}`);
      return;
    }

    const fileContent = `===========================================================
MATERIAL 3 SALES & CLIENT REQUIREMENTS VAULT - EXPORT
===========================================================
File Name: ${file.name}
Category: ${file.category}
Request Number: ${file.requestNumber}
Client Name: ${file.clientName}
Uploaded By: ${file.uploadedBy}
Uploaded At: ${file.uploadedAt}

REQUIREMENT SUMMARY:
-----------------------------------------------------------
${file.contentSnippet}

SYSTEM SPECIFICATION:
- Material 3 Design Token Compliance Verified
- Client Requirements Status: Approved for Development

Generated by Sonkusare Vaibhav Material 3 Sales Portal.
===========================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name.endsWith('.txt') ? file.name : `${file.name.replace(/\.[^/.]+$/, '')}_export.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`Downloading file: ${file.name}`);
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleMarkPaymentPaid = (payId: string) => {
    setPayments((prev) =>
      prev.map((p) =>
        p.id === payId
          ? { ...p, status: 'Paid', paidDate: new Date().toISOString().split('T')[0] }
          : p
      )
    );
    showToast('Payment updated to Paid successfully!');
  };

  const totalRevenue = useMemo(() => {
    return payments
      .filter((p) => p.status === 'Paid')
      .reduce((sum, p) => sum + p.amount, 0);
  }, [payments]);

  const pendingReceivables = useMemo(() => {
    return payments
      .filter((p) => p.status === 'Pending' || p.status === 'Processing' || p.status === 'Overdue')
      .reduce((sum, p) => sum + p.amount, 0);
  }, [payments]);

  const selectedAnalyzerReq = useMemo(() => {
    return requests.find((r) => r.id === analyzerSelectedReqId) || requests[0];
  }, [requests, analyzerSelectedReqId]);

  return (
    <PrivacyBlurGuard
      title="🔒 Login & Portal Privacy Active"
      subtitle="Screen content is automatically blurred during app switching or screenshot capture attempts."
    >
      <div className="min-h-screen bg-[#141218] text-[#E6E1E5] font-sans selection:bg-[#D0BCFF] selection:text-[#381E72]">
      
      {/* Toast Notification Banner - M3 Snack Bar */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#E6E1E5] text-[#1C1B1F] px-6 py-3.5 rounded-[16px] shadow-2xl font-medium text-sm border border-[#CAC4D0]">
          <Sparkles className="w-5 h-5 text-[#6750A4] shrink-0" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-[#49454F] hover:text-[#1C1B1F] ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* MATERIAL 3 BRAND TOP APP BAR */}
      <header className="bg-[#1D1B20] border-b border-[#49454F]/40 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#381E72] border border-[#6750A4]/50 flex items-center justify-center text-[#D0BCFF] shadow-sm">
              <Layers3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold tracking-tight text-[#E6E1E5]">
                  Sales Operations <span className="text-[#D0BCFF] text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#381E72] border border-[#6750A4]/40">Material 3</span>
                </h1>
              </div>
              <p className="text-[11px] text-[#CAC4D0] hidden sm:block">Client Requirements & Revenue HQ</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.omnidim.io/customer/my-ai-bot-for-calls-6818"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#381E72] hover:bg-[#4F378B] border border-[#6750A4]/60 text-[#EADDFF] transition-all text-xs font-mono font-bold shadow-md cursor-pointer"
              title="Test Live OmniDimension AI Voice Calling Bot"
            >
              <Bot className="w-3.5 h-3.5 text-[#D0BCFF]" />
              <span>Live AI Voice Bot ↗</span>
            </a>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                {/* Portal View Switcher Pills */}
                <div className="flex items-center bg-[#2B2930] p-1 rounded-full border border-[#49454F]">
                  <button
                    onClick={() => setPortalMode('dashboard')}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      portalMode === 'dashboard'
                        ? 'bg-[#EADDFF] text-[#21005D] font-bold shadow'
                        : 'text-[#CAC4D0] hover:text-white'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </button>

                  <button
                    onClick={() => setPortalMode('scraper')}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      portalMode === 'scraper'
                        ? 'bg-[#D4AF37] text-black font-bold shadow'
                        : 'text-[#CAC4D0] hover:text-white'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Lead Scraper</span>
                  </button>
                </div>

                <div className="hidden md:flex flex-col text-right font-mono">
                  <span className="text-xs font-semibold text-[#D0BCFF] flex items-center justify-end gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A6F4C5]" />
                    sonkusarevaibhavs
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#F2B8B5]/40 bg-[#601410]/30 text-[#F2B8B5] hover:bg-[#601410]/60 transition-all text-xs font-semibold cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <a
                href="#m3-login"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6750A4] text-white hover:bg-[#7F67BE] transition-all text-xs font-semibold shadow-md active:scale-95"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>M3 Portal Login</span>
              </a>
            )}
          </div>

        </div>
      </header>

      {/* BODY CONTENT */}
      {!isLoggedIn ? (
        /* MATERIAL 3 FRONT PAGE & LOGIN SCREEN */
        <main id="m3-login" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Pitch with Material 3 Design Tokens */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#381E72] border border-[#6750A4]/40 text-[#EADDFF] text-xs font-medium tracking-wide">
                <Sparkles className="w-4 h-4 text-[#D0BCFF]" />
                <span>Material Design 3 Expressive Suite</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E1E5] tracking-tight leading-tight">
                Material 3 Sales Portal <br />
                <span className="text-[#D0BCFF]">Requests, Payments & Client Tools</span>
              </h1>

              <p className="text-[#CAC4D0] text-sm sm:text-base leading-relaxed max-w-2xl">
                Integrated sales environment designed with Google Material 3 guidelines. Log client requests, 
                manage business requirements, track payments, run architecture scope analysis, and exchange client files seamlessly.
              </p>

              {/* Material 3 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-[24px] bg-[#1D1B20] border border-[#49454F]/40 flex items-start gap-3.5">
                  <div className="p-3 rounded-[16px] bg-[#381E72] text-[#D0BCFF] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#E6E1E5]">Request Management</h4>
                    <p className="text-xs text-[#CAC4D0] mt-1">Track Request #, client business requirements, and budget details.</p>
                  </div>
                </div>

                <div className="p-5 rounded-[24px] bg-[#1D1B20] border border-[#49454F]/40 flex items-start gap-3.5">
                  <div className="p-3 rounded-[16px] bg-[#005232] text-[#A6F4C5] shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#E6E1E5]">Dashboard Payments</h4>
                    <p className="text-xs text-[#CAC4D0] mt-1">Monitor paid, pending, and overdue invoices with live totals.</p>
                  </div>
                </div>

                <div className="p-5 rounded-[24px] bg-[#1D1B20] border border-[#49454F]/40 flex items-start gap-3.5">
                  <div className="p-3 rounded-[16px] bg-[#4F378B] text-[#EADDFF] shrink-0">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#E6E1E5]">File Upload & Download</h4>
                    <p className="text-xs text-[#CAC4D0] mt-1">Send, upload, and download PRD specifications and requirement docs.</p>
                  </div>
                </div>

                <div className="p-5 rounded-[24px] bg-[#1D1B20] border border-[#49454F]/40 flex items-start gap-3.5">
                  <div className="p-3 rounded-[16px] bg-[#2B2930] text-[#D0BCFF] border border-[#49454F] shrink-0">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#E6E1E5]">Implementation Tools</h4>
                    <p className="text-xs text-[#CAC4D0] mt-1">Scope analyzer & sprint checklist tool to verify client deliverables.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Material 3 Login Card Container */}
            <div className="lg:col-span-5">
              <div className="bg-[#211F26] border border-[#49454F] rounded-[28px] p-6 sm:p-8 shadow-2xl relative space-y-6">
                
                {/* M3 Card Header */}
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-[20px] bg-[#381E72] border border-[#6750A4]/60 flex items-center justify-center mx-auto text-[#D0BCFF] shadow-md">
                    <Lock className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#E6E1E5]">Sign In</h3>
                  <p className="text-xs text-[#CAC4D0]">Material 3 Authentication Portal</p>
                </div>

                {authError && (
                  <div className="p-4 rounded-[16px] bg-[#601410]/50 border border-[#F2B8B5]/40 text-[#F2B8B5] text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                {/* Material 3 Outlined Form Fields */}
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  
                  {/* M3 Outlined User ID Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#E6E1E5] ml-1">User ID</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-[#CAC4D0] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Enter User ID"
                        value={userIdInput}
                        onChange={(e) => setUserIdInput(e.target.value)}
                        className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] pl-11 pr-4 py-3 text-sm text-[#E6E1E5] placeholder-[#938F99] focus:outline-none focus:border-[#D0BCFF] focus:ring-2 focus:ring-[#D0BCFF]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* M3 Outlined Password Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#E6E1E5] ml-1">Password</label>
                    <div className="relative">
                      <Key className="w-5 h-5 text-[#CAC4D0] absolute left-3.5 top-3.5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter Password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] pl-11 pr-11 py-3 text-sm text-[#E6E1E5] placeholder-[#938F99] focus:outline-none focus:border-[#D0BCFF] focus:ring-2 focus:ring-[#D0BCFF]/30 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-[#CAC4D0] hover:text-[#E6E1E5]"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* M3 Primary Filled Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#6750A4] hover:bg-[#7F67BE] text-white font-semibold text-sm transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
                  >
                    <Unlock className="w-4 h-4" />
                    <span>Authenticate & Access Portal</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </main>
      ) : portalMode === 'scraper' ? (
        <LeadScraperPortal
          onBackToPortalChoice={() => setPortalMode('choice')}
          onImportLeadToDashboard={(name) => {
            salesService.fetchRequests().then((data) => setRequests(data));
            setPortalMode('dashboard');
            setActiveTab('requests');
            showToast(`Lead '${name}' added to CRM & Sales Dashboard!`);
          }}
        />
      ) : portalMode === 'choice' ? (
        /* PORTAL LAUNCHPAD CHOICE SCREEN */
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#381E72] border border-[#6750A4]/40 text-[#D0BCFF] text-xs font-mono">
              <Sparkles className="w-4 h-4" />
              <span>AUTHENTICATED PORTAL LAUNCHPAD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Select Destination</h2>
            <p className="text-sm text-gray-400 font-mono max-w-lg mx-auto">
              Choose an operation suite below to manage client sales inquiries or run Google Maps lead extraction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CHOICE 1: DASHBOARD */}
            <div
              onClick={() => setPortalMode('dashboard')}
              className="p-8 rounded-[32px] bg-gradient-to-b from-[#211F26] to-[#1D1B20] border border-[#49454F]/60 hover:border-[#6750A4] transition-all duration-300 space-y-6 cursor-pointer group shadow-xl hover:shadow-[0_0_30px_rgba(103,80,164,0.25)] relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-[22px] bg-[#381E72] text-[#D0BCFF] border border-[#6750A4]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LayoutDashboard className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D0BCFF] font-bold tracking-widest uppercase">
                  OPTION 1
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#D0BCFF] transition-colors">
                  Go to Dashboard
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  Access your central sales operation hub. Review client requests, manage budget quotes, track payment invoices, and exchange project PRD specifications.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D0BCFF]">
                <span>Sales &amp; Client HQ</span>
                <span className="group-hover:translate-x-1 transition-transform">OPEN DASHBOARD →</span>
              </div>
            </div>

            {/* CHOICE 2: LEAD GENERATION SCRAPER */}
            <div
              onClick={() => setPortalMode('scraper')}
              className="p-8 rounded-[32px] bg-gradient-to-b from-[#211F26] to-[#1D1B20] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 space-y-6 cursor-pointer group shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-[22px] bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase">
                  OPTION 2
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Lead Generation Scraper
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  Run Google Maps scraping queries to extract local business leads without websites. Send direct prefilled proposals via WhatsApp, Email, or Instagram.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D4AF37]">
                <span>Prospect Lead Engine</span>
                <span className="group-hover:translate-x-1 transition-transform">LAUNCH SCRAPER →</span>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* AFTER LOGIN MATERIAL 3 DASHBOARD VIEW */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* MATERIAL 3 METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[24px] p-6 hover:border-[#6750A4]/60 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#CAC4D0]">TOTAL REQUESTS</span>
                <div className="p-2.5 rounded-[14px] bg-[#381E72] text-[#D0BCFF]">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-[#E6E1E5] mt-3">{requests.length}</div>
              <div className="text-xs text-[#CAC4D0] mt-1 flex items-center gap-1">
                <span className="text-[#A6F4C5] font-semibold">{requests.filter((r) => r.status === 'In Progress').length} Active</span>
                <span>• {requests.filter((r) => r.status === 'New').length} New</span>
              </div>
            </div>

            <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[24px] p-6 hover:border-[#6750A4]/60 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#CAC4D0]">REVENUE COLLECTED</span>
                <div className="p-2.5 rounded-[14px] bg-[#005232] text-[#A6F4C5]">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-[#A6F4C5] mt-3">${totalRevenue.toLocaleString()}</div>
              <div className="text-xs text-[#CAC4D0] mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#A6F4C5]" />
                <span>Confirmed Paid Invoices</span>
              </div>
            </div>

            <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[24px] p-6 hover:border-[#6750A4]/60 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#CAC4D0]">PENDING RECEIVABLES</span>
                <div className="p-2.5 rounded-[14px] bg-[#4A4458] text-[#EADDFF]">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-[#EADDFF] mt-3">${pendingReceivables.toLocaleString()}</div>
              <div className="text-xs text-[#CAC4D0] mt-1">Pending client reconciliation</div>
            </div>

            <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[24px] p-6 hover:border-[#6750A4]/60 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#CAC4D0]">REQUIREMENTS VAULT</span>
                <div className="p-2.5 rounded-[14px] bg-[#2B2930] text-[#D0BCFF] border border-[#49454F]">
                  <FolderOpen className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-[#D0BCFF] mt-3">{files.length} Files</div>
              <div className="text-xs text-[#CAC4D0] mt-1">PRD & requirement specs</div>
            </div>

          </div>

          {/* MATERIAL 3 NAVIGATION SEGMENTED PILLS */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#49454F]/40 pb-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('automation')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs transition-all cursor-pointer ${
                  activeTab === 'automation'
                    ? 'bg-[#D0BCFF] text-[#381E72] font-bold shadow-md'
                    : 'bg-[#381E72]/40 text-[#D0BCFF] hover:bg-[#381E72] border border-[#6750A4]/50'
                }`}
              >
                <Bot className="w-4 h-4 text-[#D0BCFF]" />
                <span>AI Voice Calling Pipeline</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#6750A4]/40 text-[#EADDFF]">n8n</span>
              </button>

              <button
                onClick={() => setActiveTab('requests')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs transition-all ${
                  activeTab === 'requests'
                    ? 'bg-[#EADDFF] text-[#21005D] font-bold shadow-md'
                    : 'bg-[#1D1B20] text-[#CAC4D0] hover:bg-[#2B2930] hover:text-[#E6E1E5]'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Sales Requests & Clients</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#21005D]/20">{requests.length}</span>
              </button>

              <button
                onClick={() => setActiveTab('payments')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs transition-all ${
                  activeTab === 'payments'
                    ? 'bg-[#EADDFF] text-[#21005D] font-bold shadow-md'
                    : 'bg-[#1D1B20] text-[#CAC4D0] hover:bg-[#2B2930] hover:text-[#E6E1E5]'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>Dashboard Payments</span>
              </button>

              <button
                onClick={() => setActiveTab('analyzer')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs transition-all ${
                  activeTab === 'analyzer'
                    ? 'bg-[#EADDFF] text-[#21005D] font-bold shadow-md'
                    : 'bg-[#1D1B20] text-[#CAC4D0] hover:bg-[#2B2930] hover:text-[#E6E1E5]'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Tool 1: Scope Analyzer</span>
              </button>

              <button
                onClick={() => setActiveTab('checklist')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs transition-all ${
                  activeTab === 'checklist'
                    ? 'bg-[#EADDFF] text-[#21005D] font-bold shadow-md'
                    : 'bg-[#1D1B20] text-[#CAC4D0] hover:bg-[#2B2930] hover:text-[#E6E1E5]'
                }`}
              >
                <CheckSquare className="w-4 h-4" />
                <span>Tool 2: Dev Checklist</span>
              </button>

              <button
                onClick={() => setActiveTab('files')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs transition-all ${
                  activeTab === 'files'
                    ? 'bg-[#EADDFF] text-[#21005D] font-bold shadow-md'
                    : 'bg-[#1D1B20] text-[#CAC4D0] hover:bg-[#2B2930] hover:text-[#E6E1E5]'
                }`}
              >
                <UploadCloud className="w-4 h-4" />
                <span>Tool 3: File Vault</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#21005D]/20">{files.length}</span>
              </button>
            </div>

            <button
              onClick={() => setIsNewRequestModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6750A4] text-white font-semibold text-xs hover:bg-[#7F67BE] transition-all shadow-md active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>New Sales Request</span>
            </button>

          </div>

          {/* TAB 0: AI SALES AUTOMATION (n8n + OMNIDIMENSION) */}
          {activeTab === 'automation' && <AISalesAutomationDashboard />}

          {/* TAB 1: SALES REQUESTS & CLIENT LIST */}
          {activeTab === 'requests' && (
            <div className="space-y-6">
              
              {/* Material 3 Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#1D1B20] p-4 rounded-[24px] border border-[#49454F]/50">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#CAC4D0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search Request #, Client Name, Business, or Requirements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#2B2930] border border-[#49454F] rounded-[16px] pl-10 pr-4 py-2.5 text-xs text-[#E6E1E5] placeholder-[#938F99] focus:outline-none focus:border-[#D0BCFF]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#CAC4D0] font-mono">Status:</span>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-[#2B2930] border border-[#49454F] rounded-[12px] text-xs text-[#E6E1E5] px-3 py-2 focus:outline-none focus:border-[#D0BCFF]"
                    >
                      <option value="All">All Statuses</option>
                      <option value="New">New</option>
                      <option value="In Review">In Review</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Implemented">Implemented</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#CAC4D0] font-mono">Type:</span>
                    <select
                      value={requestTypeFilter}
                      onChange={(e) => setRequestTypeFilter(e.target.value)}
                      className="bg-[#2B2930] border border-[#49454F] rounded-[12px] text-xs text-[#E6E1E5] px-3 py-2 focus:outline-none focus:border-[#D0BCFF]"
                    >
                      <option value="All">All Types</option>
                      <option value="Custom Web App">Custom Web App</option>
                      <option value="UI/UX Redesign">UI/UX Redesign</option>
                      <option value="SaaS Automation">SaaS Automation</option>
                      <option value="API & Cloud Backend">API & Cloud Backend</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Material 3 Requests Table */}
              <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[28px] overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#2B2930] text-[#CAC4D0] font-mono uppercase tracking-wider border-b border-[#49454F]/50">
                      <tr>
                        <th className="py-4 px-5">Request #</th>
                        <th className="py-4 px-5">Client Name</th>
                        <th className="py-4 px-5">Business Name</th>
                        <th className="py-4 px-5">Channel</th>
                        <th className="py-4 px-5">Type of Request</th>
                        <th className="py-4 px-5">Budget</th>
                        <th className="py-4 px-5">Status</th>
                        <th className="py-4 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#49454F]/30">
                      {filteredRequests.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="py-16 px-5 text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-[#2B2930] border border-[#49454F] flex items-center justify-center mx-auto text-[#D0BCFF]">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div className="text-sm font-bold text-[#E6E1E5]">0 Sales Requests Registered</div>
                            <p className="text-xs text-[#CAC4D0] max-w-md mx-auto leading-relaxed">
                              When a prospect submits an inquiry via the Website Contact Form, WhatsApp Chat, Instagram DM, or Email, it will automatically populate here in real-time.
                            </p>
                            <div className="pt-2">
                              <button
                                onClick={() => setIsNewRequestModalOpen(true)}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6750A4] text-white text-xs font-semibold hover:bg-[#7F67BE] transition-all shadow-md"
                              >
                                <Plus className="w-4 h-4" />
                                <span>Add Client Request Manually</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredRequests.map((req) => (
                          <tr key={req.id} className="hover:bg-[#2B2930]/60 transition-colors">
                            <td className="py-4 px-5 font-mono font-bold text-[#D0BCFF]">
                              {req.requestNumber}
                            </td>
                            <td className="py-4 px-5 font-semibold text-[#E6E1E5]">
                              {req.clientName}
                              <div className="text-[10px] text-[#CAC4D0] font-normal">
                                {req.clientEmail} {req.clientPhone && `• 📞 ${req.clientPhone}`}
                              </div>
                            </td>
                            <td className="py-4 px-5 text-[#E6E1E5]">
                              <div className="flex items-center gap-1.5">
                                <Building2 className="w-3.5 h-3.5 text-[#CAC4D0] shrink-0" />
                                <span>{req.businessName}</span>
                              </div>
                            </td>
                            <td className="py-4 px-5">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#21005D] text-[#D0BCFF] border border-[#6750A4]/40 inline-flex items-center gap-1">
                                {req.channel || 'Website Form'}
                              </span>
                            </td>
                            <td className="py-4 px-5">
                              <span className="px-3 py-1 rounded-full text-[11px] bg-[#2B2930] border border-[#49454F] text-[#E6E1E5]">
                                {req.requestType}
                              </span>
                            </td>
                            <td className="py-4 px-5 font-mono font-bold text-[#A6F4C5]">
                              {req.budget}
                            </td>
                            <td className="py-4 px-5">
                              <span
                                className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                                  req.status === 'Implemented'
                                    ? 'bg-[#005232] text-[#A6F4C5] border border-[#A6F4C5]/30'
                                    : req.status === 'In Progress'
                                    ? 'bg-[#381E72] text-[#D0BCFF] border border-[#6750A4]/40'
                                    : 'bg-[#4A4458] text-[#EADDFF] border border-[#49454F]'
                                }`}
                              >
                                {req.status}
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right">
                              <button
                                onClick={() => setSelectedRequestModal(req)}
                                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#381E72] hover:bg-[#4F378B] text-[#D0BCFF] transition-all text-xs font-semibold"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>View Details</span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: DASHBOARD PAYMENTS */}
          {activeTab === 'payments' && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#E6E1E5]">Dashboard Payments & Invoices</h3>
                  <p className="text-xs text-[#CAC4D0]">Track client invoices, payment status, and received revenue</p>
                </div>
                <div className="text-xs font-mono text-[#A6F4C5] bg-[#005232]/60 px-4 py-2 rounded-full border border-[#A6F4C5]/30 font-semibold">
                  Total Paid: ${totalRevenue.toLocaleString()}
                </div>
              </div>

              <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[28px] overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#2B2930] text-[#CAC4D0] font-mono uppercase tracking-wider border-b border-[#49454F]/50">
                      <tr>
                        <th className="py-4 px-5">Invoice #</th>
                        <th className="py-4 px-5">Request #</th>
                        <th className="py-4 px-5">Client & Business</th>
                        <th className="py-4 px-5">Amount ($)</th>
                        <th className="py-4 px-5">Method</th>
                        <th className="py-4 px-5">Status</th>
                        <th className="py-4 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#49454F]/30">
                      {payments.map((pay) => (
                        <tr key={pay.id} className="hover:bg-[#2B2930]/60 transition-colors">
                          <td className="py-4 px-5 font-mono font-bold text-[#E6E1E5]">
                            {pay.invoiceNumber}
                          </td>
                          <td className="py-4 px-5 font-mono text-[#D0BCFF]">
                            {pay.requestNumber}
                          </td>
                          <td className="py-4 px-5">
                            <div className="font-semibold text-[#E6E1E5]">{pay.clientName}</div>
                            <div className="text-[10px] text-[#CAC4D0]">{pay.businessName}</div>
                          </td>
                          <td className="py-4 px-5 font-mono font-bold text-[#A6F4C5]">
                            ${pay.amount.toLocaleString()}
                          </td>
                          <td className="py-4 px-5 text-[#E6E1E5]">
                            {pay.method}
                          </td>
                          <td className="py-4 px-5">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                                pay.status === 'Paid'
                                  ? 'bg-[#005232] text-[#A6F4C5] border border-[#A6F4C5]/30'
                                  : 'bg-[#4A4458] text-[#EADDFF]'
                              }`}
                            >
                              {pay.status}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right">
                            {pay.status !== 'Paid' ? (
                              <button
                                onClick={() => handleMarkPaymentPaid(pay.id)}
                                className="px-4 py-1.5 rounded-full bg-[#005232] hover:bg-[#006E44] text-[#A6F4C5] transition-all text-xs font-semibold inline-flex items-center gap-1"
                              >
                                <Check className="w-3.5 h-3.5" />
                                <span>Mark Paid</span>
                              </button>
                            ) : (
                              <span className="text-[#A6F4C5] font-mono text-[11px] flex items-center justify-end gap-1 font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Verified Paid
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: TOOL 1 - SCOPE & ARCHITECTURE ANALYZER */}
          {activeTab === 'analyzer' && (
            <div className="space-y-6">
              <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[28px] p-6 sm:p-8 space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#49454F]/40 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#E6E1E5] flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#D0BCFF]" />
                      Client Requirements Scope & Architecture Analyzer
                    </h3>
                    <p className="text-xs text-[#CAC4D0]">Select any request to break down technical feasibility and recommended M3 architecture</p>
                  </div>

                  <div>
                    <label className="text-xs text-[#CAC4D0] font-mono block mb-1">Select Client Request:</label>
                    <select
                      value={analyzerSelectedReqId}
                      onChange={(e) => setAnalyzerSelectedReqId(e.target.value)}
                      className="bg-[#2B2930] border border-[#6750A4] rounded-[16px] px-4 py-2 text-xs font-bold text-[#D0BCFF] focus:outline-none"
                    >
                      {requests.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.requestNumber} - {r.businessName} ({r.clientName})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedAnalyzerReq && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    <div className="lg:col-span-6 space-y-4">
                      <div className="p-5 rounded-[20px] bg-[#2B2930] border border-[#49454F]/60 space-y-2">
                        <div className="text-xs font-mono text-[#D0BCFF] uppercase">Selected Request Overview</div>
                        <div className="text-base font-bold text-[#E6E1E5]">{selectedAnalyzerReq.businessName} — {selectedAnalyzerReq.requestType}</div>
                        <p className="text-xs text-[#CAC4D0] leading-relaxed">{selectedAnalyzerReq.requirementsSummary}</p>
                      </div>

                      <div className="p-5 rounded-[20px] bg-[#2B2930] border border-[#49454F]/60 space-y-3">
                        <div className="text-xs font-mono text-[#CAC4D0] uppercase">Detailed Requirements List</div>
                        <ul className="space-y-2 text-xs text-[#E6E1E5]">
                          {selectedAnalyzerReq.detailedRequirements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D0BCFF] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                      <div className="p-5 rounded-[20px] bg-[#381E72]/40 border border-[#6750A4]/60 space-y-3">
                        <div className="text-xs font-mono text-[#D0BCFF] uppercase font-semibold flex items-center justify-between">
                          <span>RECOMMENDED TECH STACK & M3 DESIGN SYSTEM</span>
                          <span className="px-3 py-1 rounded-full bg-[#6750A4] text-white text-[10px]">Material 3 Specs</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedAnalyzerReq.techStackPreference.map((tech, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-[#2B2930] border border-[#49454F] text-xs font-mono text-[#D0BCFF]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-[20px] bg-[#2B2930] border border-[#49454F]/60">
                          <div className="text-[11px] font-mono text-[#CAC4D0]">ESTIMATED DEV HOURS</div>
                          <div className="text-xl font-bold text-[#E6E1E5] mt-1">120 – 160 Hours</div>
                          <div className="text-[10px] text-[#CAC4D0] mt-0.5">4 Material 3 Sprints</div>
                        </div>

                        <div className="p-5 rounded-[20px] bg-[#2B2930] border border-[#49454F]/60">
                          <div className="text-[11px] font-mono text-[#CAC4D0]">CONTRACT BUDGET</div>
                          <div className="text-xl font-bold text-[#A6F4C5] mt-1">{selectedAnalyzerReq.budget}</div>
                          <div className="text-[10px] text-[#CAC4D0] mt-0.5">Approved scope value</div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveTab('checklist');
                          showToast(`Loaded tasks for ${selectedAnalyzerReq.requestNumber} in Dev Checklist!`);
                        }}
                        className="w-full py-3.5 rounded-full bg-[#6750A4] text-white font-bold text-xs hover:bg-[#7F67BE] transition-all flex items-center justify-center gap-2 shadow-md"
                      >
                        <span>Open Dev Implementation Checklist &rarr;</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>
          )}

          {/* TAB 4: TOOL 2 - DEV REQUIREMENTS CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[28px] p-6 sm:p-8 space-y-6">
                
                <div className="flex items-center justify-between border-b border-[#49454F]/40 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#E6E1E5] flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-[#A6F4C5]" />
                      Client Requirements Implementation Sprint Checklist
                    </h3>
                    <p className="text-xs text-[#CAC4D0]">Check off technical deliverables to fulfill client requirements</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {tasks.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => toggleTaskCompletion(t.id)}
                      className={`p-4 rounded-[20px] border cursor-pointer transition-all flex items-center justify-between ${
                        t.completed
                          ? 'bg-[#2B2930]/50 border-[#49454F]/40 text-[#CAC4D0] line-through'
                          : 'bg-[#2B2930] border-[#6750A4]/50 text-[#E6E1E5] hover:border-[#D0BCFF]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-6 h-6 rounded-[8px] border flex items-center justify-center shrink-0 ${
                          t.completed ? 'bg-[#A6F4C5] border-[#A6F4C5] text-black' : 'border-[#49454F]'
                        }`}>
                          {t.completed && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold">{t.title}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-mono text-[#D0BCFF]">{t.requestNumber}</span>
                            <span className="text-[10px] text-[#CAC4D0]">• {t.category}</span>
                          </div>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#381E72] text-[#D0BCFF]">
                        {t.priority} Priority
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: TOOL 3 - FILE UPLOAD & DOWNLOAD VAULT */}
          {activeTab === 'files' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#E6E1E5] flex items-center gap-2">
                    <UploadCloud className="w-5 h-5 text-[#D0BCFF]" />
                    Client Requirements File Management Vault
                  </h3>
                  <p className="text-xs text-[#CAC4D0]">Send files to clients, upload PRD specifications, and download requirement files</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSendFileModalOpen(true)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#2B2930] hover:bg-[#381E72] text-[#E6E1E5] border border-[#49454F] text-xs font-semibold transition-all"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D0BCFF]" />
                    <span>Send File to Client</span>
                  </button>

                  <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#6750A4] text-white font-semibold text-xs hover:bg-[#7F67BE] transition-all shadow-md active:scale-95"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Upload New File</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#1D1B20] border border-[#49454F]/50 rounded-[28px] overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#2B2930] text-[#CAC4D0] font-mono uppercase tracking-wider border-b border-[#49454F]/50">
                      <tr>
                        <th className="py-4 px-5">File Name</th>
                        <th className="py-4 px-5">Category</th>
                        <th className="py-4 px-5">Request #</th>
                        <th className="py-4 px-5">Uploaded By</th>
                        <th className="py-4 px-5">Size</th>
                        <th className="py-4 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#49454F]/30">
                      {files.map((file) => (
                        <tr key={file.id} className="hover:bg-[#2B2930]/60 transition-colors">
                          <td className="py-4 px-5 font-semibold text-[#E6E1E5]">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-[#D0BCFF] shrink-0" />
                              <span>{file.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-5">
                            <span className="px-3 py-1 rounded-full text-[10px] bg-[#2B2930] border border-[#49454F] text-[#E6E1E5] font-mono">
                              {file.category}
                            </span>
                          </td>
                          <td className="py-4 px-5 font-mono text-[#D0BCFF] font-bold">
                            {file.requestNumber}
                          </td>
                          <td className="py-4 px-5 text-[#E6E1E5]">
                            {file.uploadedBy}
                            <div className="text-[10px] text-[#CAC4D0] font-mono">{file.uploadedAt}</div>
                          </td>
                          <td className="py-4 px-5 font-mono text-[#CAC4D0]">
                            {file.size}
                          </td>
                          <td className="py-4 px-5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setPreviewFileModal(file)}
                                className="p-2 rounded-full bg-[#2B2930] text-[#CAC4D0] hover:text-white hover:bg-[#49454F] transition-colors"
                                title="Preview File"
                              >
                                <Eye className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => handleDownloadFile(file)}
                                className="px-4 py-1.5 rounded-full bg-[#381E72] hover:bg-[#4F378B] text-[#D0BCFF] transition-all text-xs font-semibold inline-flex items-center gap-1"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Download</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

        </main>
      )}

      {/* MODAL 1: DETAILED REQUEST MODAL */}
      {selectedRequestModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2B2930] border border-[#49454F] rounded-[28px] max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedRequestModal(null)}
              className="absolute top-5 right-5 text-[#CAC4D0] hover:text-white p-1 rounded-full hover:bg-[#49454F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-[#D0BCFF]">{selectedRequestModal.requestNumber}</span>
              <h3 className="text-xl font-bold text-[#E6E1E5]">{selectedRequestModal.businessName}</h3>
              <p className="text-xs text-[#CAC4D0]">Client: {selectedRequestModal.clientName} ({selectedRequestModal.clientEmail})</p>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 rounded-[16px] bg-[#1D1B20] border border-[#49454F]/50 text-xs">
              <div>
                <div className="text-[#CAC4D0] font-mono text-[10px]">TYPE</div>
                <div className="font-semibold text-[#E6E1E5] mt-0.5">{selectedRequestModal.requestType}</div>
              </div>
              <div>
                <div className="text-[#CAC4D0] font-mono text-[10px]">BUDGET</div>
                <div className="font-bold text-[#A6F4C5] mt-0.5">{selectedRequestModal.budget}</div>
              </div>
              <div>
                <div className="text-[#CAC4D0] font-mono text-[10px]">STATUS</div>
                <div className="font-semibold text-[#D0BCFF] mt-0.5">{selectedRequestModal.status}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-[#CAC4D0]">Client Requirements Summary</h4>
              <p className="text-xs text-[#E6E1E5] bg-[#1D1B20] p-4 rounded-[16px] border border-[#49454F]/40 leading-relaxed">
                {selectedRequestModal.requirementsSummary}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-[#CAC4D0]">Specific Deliverables</h4>
              <ul className="space-y-2 text-xs text-[#E6E1E5]">
                {selectedRequestModal.detailedRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#1D1B20] p-3 rounded-[12px] border border-[#49454F]/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D0BCFF] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#49454F]/40 flex justify-end">
              <button
                onClick={() => setSelectedRequestModal(null)}
                className="px-6 py-2.5 rounded-full bg-[#49454F] text-[#E6E1E5] hover:bg-[#605D68] text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: CREATE NEW SALES REQUEST */}
      {isNewRequestModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2B2930] border border-[#49454F] rounded-[28px] max-w-lg w-full p-6 sm:p-8 space-y-5 relative">
            <button
              onClick={() => setIsNewRequestModalOpen(false)}
              className="absolute top-5 right-5 text-[#CAC4D0] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-lg font-bold text-[#E6E1E5]">Create New Sales Request</h3>
              <p className="text-xs text-[#CAC4D0]">Log client requirements & business proposal</p>
            </div>

            <form onSubmit={handleCreateRequest} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#E6E1E5] font-semibold mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                  />
                </div>
                <div>
                  <label className="block text-[#E6E1E5] font-semibold mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={newBusinessName}
                    onChange={(e) => setNewBusinessName(e.target.value)}
                    className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#E6E1E5] font-semibold mb-1">Inquiry Channel</label>
                  <select
                    value={newChannel}
                    onChange={(e) => setNewChannel(e.target.value as any)}
                    className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3 py-2.5 text-[#E6E1E5]"
                  >
                    <option value="Website Form">Website Form</option>
                    <option value="WhatsApp Inquiry">WhatsApp Inquiry</option>
                    <option value="Instagram DM">Instagram DM</option>
                    <option value="Email Commission">Email Commission</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#E6E1E5] font-semibold mb-1">Request Type</label>
                  <select
                    value={newRequestType}
                    onChange={(e) => setNewRequestType(e.target.value as SalesRequest['requestType'])}
                    className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3 py-2.5 text-[#E6E1E5]"
                  >
                    <option value="Custom Web App">Custom Web App</option>
                    <option value="UI/UX Redesign">UI/UX Redesign</option>
                    <option value="SaaS Automation">SaaS Automation</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="API & Cloud Backend">API & Cloud Backend</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#E6E1E5] font-semibold mb-1">Budget ($)</label>
                  <input
                    type="text"
                    placeholder="e.g. $15,000"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3 py-2.5 text-[#E6E1E5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Requirements Summary *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Summary of client goals & requirements..."
                  value={newRequirementsSummary}
                  onChange={(e) => setNewRequirementsSummary(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] p-3 text-[#E6E1E5]"
                />
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Detailed Requirements (One per line)</label>
                <textarea
                  rows={3}
                  placeholder="- Responsive Material 3 design&#10;- Stripe invoice integration"
                  value={newRequirementsList}
                  onChange={(e) => setNewRequirementsList(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] p-3 text-[#E6E1E5]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsNewRequestModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#49454F] text-[#E6E1E5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#6750A4] text-white font-bold"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: UPLOAD FILE */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2B2930] border border-[#49454F] rounded-[28px] max-w-md w-full p-6 sm:p-8 space-y-4 relative">
            <button
              onClick={() => setIsUploadModalOpen(false)}
              className="absolute top-5 right-5 text-[#CAC4D0] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-lg font-bold text-[#E6E1E5]">Upload Requirement File</h3>
              <p className="text-xs text-[#CAC4D0]">Upload PRDs, wireframe zips, or contracts</p>
            </div>

            <form onSubmit={handleUploadFileSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Select File (Video, Audio, Image, PDF, Code, Zip) *</label>
                <input
                  type="file"
                  accept="image/*,video/*,audio/*,.pdf,.zip,.json,.txt,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const file = e.target.files[0];
                      setSelectedUploadFile(file);
                      setUploadFileName(file.name);
                    }
                  }}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5] file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#6750A4] file:text-white hover:file:bg-[#7F67BE]"
                />
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">File Display Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PRD_Requirements_Doc_v1.pdf"
                  value={uploadFileName}
                  onChange={(e) => setUploadFileName(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                />
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Tag Client Request Number</label>
                <select
                  value={uploadRequestNumber}
                  onChange={(e) => setUploadRequestNumber(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                >
                  {requests.map((r) => (
                    <option key={r.id} value={r.requestNumber}>
                      {r.requestNumber} - {r.businessName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Category</label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value as ClientFile['category'])}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                >
                  <option value="PRD Specification">PRD Specification</option>
                  <option value="Wireframe / Design">Wireframe / Design</option>
                  <option value="Code Archive">Code Archive</option>
                  <option value="Contract">Contract</option>
                  <option value="Client Data">Client Data</option>
                </select>
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Requirement Notes & Snippet</label>
                <textarea
                  rows={2}
                  placeholder="Notes about this requirement file..."
                  value={uploadSnippet}
                  onChange={(e) => setUploadSnippet(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] p-3 text-[#E6E1E5]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#49454F] text-[#E6E1E5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#6750A4] text-white font-bold"
                >
                  Upload File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: SEND FILE TO CLIENT */}
      {isSendFileModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2B2930] border border-[#49454F] rounded-[28px] max-w-md w-full p-6 sm:p-8 space-y-4 relative">
            <button
              onClick={() => setIsSendFileModalOpen(false)}
              className="absolute top-5 right-5 text-[#CAC4D0] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-lg font-bold text-[#E6E1E5]">Send File to Client</h3>
              <p className="text-xs text-[#CAC4D0]">Dispatch requirement file link to client email</p>
            </div>

            <form onSubmit={handleSendFileSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Select File to Send</label>
                <select
                  value={sendFileId}
                  onChange={(e) => setSendFileId(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                >
                  {files.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name} ({f.requestNumber})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Recipient Client Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. client@company.com"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] px-3.5 py-2.5 text-[#E6E1E5]"
                />
              </div>

              <div>
                <label className="block text-[#E6E1E5] font-semibold mb-1">Instructions / Note</label>
                <textarea
                  rows={2}
                  placeholder="Please review attached requirements specification..."
                  value={sendNote}
                  onChange={(e) => setSendNote(e.target.value)}
                  className="w-full bg-[#1D1B20] border border-[#49454F] rounded-[16px] p-3 text-[#E6E1E5]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsSendFileModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#49454F] text-[#E6E1E5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#6750A4] text-white font-bold"
                >
                  Send File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: FILE PREVIEW */}
      {previewFileModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2B2930] border border-[#49454F] rounded-[28px] max-w-lg w-full p-6 sm:p-8 space-y-4 relative">
            <button
              onClick={() => setPreviewFileModal(null)}
              className="absolute top-5 right-5 text-[#CAC4D0] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-[#D0BCFF]">{previewFileModal.category}</span>
              <h3 className="text-lg font-bold text-[#E6E1E5]">{previewFileModal.name}</h3>
              <p className="text-xs text-[#CAC4D0]">Request: {previewFileModal.requestNumber} • Size: {previewFileModal.size}</p>
            </div>

            <div className="p-4 rounded-[16px] bg-[#1D1B20] border border-[#49454F]/50 text-xs font-mono text-[#E6E1E5] leading-relaxed">
              {previewFileModal.contentSnippet}
            </div>

            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => handleDownloadFile(previewFileModal)}
                className="px-5 py-2.5 rounded-full bg-[#6750A4] text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Export File</span>
              </button>

              <button
                onClick={() => setPreviewFileModal(null)}
                className="px-5 py-2.5 rounded-full bg-[#49454F] text-[#E6E1E5] text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
    </PrivacyBlurGuard>
  );
};

export default SalesDemo;
