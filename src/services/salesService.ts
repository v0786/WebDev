import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { SalesRequest, ClientFile } from '../demos/sales/SalesDemo';

const LOCAL_STORAGE_KEYS = {
  REQUESTS: 'sales_portal_requests',
  PAYMENTS: 'sales_portal_payments',
  FILES: 'sales_portal_files',
  TASKS: 'sales_portal_tasks'
};

// Helper: Get local data
const getLocalData = <T>(key: string): T[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

// Helper: Save local data
const setLocalData = <T>(key: string, data: T[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  } catch {}
};

export const salesService = {
  // Fetch Sales Requests
  async fetchRequests(): Promise<SalesRequest[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('sales_requests')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data) {
          return data.map((item) => ({
            id: item.id,
            requestNumber: item.request_number,
            clientName: item.client_name,
            clientEmail: item.client_email,
            businessName: item.business_name,
            requestType: item.request_type,
            budget: item.budget,
            status: item.status,
            dateSubmitted: item.date_submitted,
            deadline: item.deadline,
            requirementsSummary: item.requirements_summary,
            detailedRequirements: item.detailed_requirements || [],
            techStackPreference: item.tech_stack_preference || [],
            attachedFilesCount: item.attached_files_count || 0,
            channel: item.channel
          }));
        }
      } catch (err) {
        console.warn('Supabase fetch failed, using local storage:', err);
      }
    }
    return getLocalData<SalesRequest>(LOCAL_STORAGE_KEYS.REQUESTS);
  },

  // Add New Sales Request
  async createRequest(newReq: SalesRequest): Promise<void> {
    const currentLocal = getLocalData<SalesRequest>(LOCAL_STORAGE_KEYS.REQUESTS);
    setLocalData(LOCAL_STORAGE_KEYS.REQUESTS, [newReq, ...currentLocal]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('sales_requests').insert([
          {
            id: newReq.id,
            request_number: newReq.requestNumber,
            client_name: newReq.clientName,
            client_email: newReq.clientEmail,
            business_name: newReq.businessName,
            request_type: newReq.requestType,
            budget: newReq.budget,
            status: newReq.status,
            date_submitted: newReq.dateSubmitted,
            deadline: newReq.deadline,
            requirements_summary: newReq.requirementsSummary,
            detailed_requirements: newReq.detailedRequirements,
            tech_stack_preference: newReq.techStackPreference,
            attached_files_count: newReq.attachedFilesCount,
            channel: newReq.channel
          }
        ]);
      } catch (err) {
        console.error('Supabase insert failed:', err);
      }
    }
  },

  // Fetch Files
  async fetchFiles(): Promise<ClientFile[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('client_files')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data) {
          return data.map((item) => ({
            id: item.id,
            name: item.name,
            size: item.size,
            type: item.type,
            category: item.category,
            requestNumber: item.request_number,
            clientName: item.client_name,
            uploadedBy: item.uploaded_by,
            uploadedAt: item.uploaded_at,
            contentSnippet: item.content_snippet,
            downloadUrl: item.download_url
          }));
        }
      } catch (err) {
        console.warn('Supabase fetch files failed, using local storage:', err);
      }
    }
    return getLocalData<ClientFile>(LOCAL_STORAGE_KEYS.FILES);
  },

  // Upload File to Supabase Storage Bucket ('client-files')
  async uploadFile(
    fileObj: File | null,
    fileName: string,
    category: ClientFile['category'],
    requestNumber: string,
    clientName: string,
    contentSnippet?: string
  ): Promise<ClientFile> {
    const fileId = `file-${Date.now()}`;
    const formattedSize = fileObj ? `${(fileObj.size / (1024 * 1024)).toFixed(2)} MB` : '1.2 MB';
    let downloadUrl = '';

    if (isSupabaseConfigured && supabase && fileObj) {
      try {
        const storagePath = `${requestNumber}/${Date.now()}_${fileObj.name}`;
        const { error: uploadError } = await supabase.storage
          .from('client-files')
          .upload(storagePath, fileObj, { upsert: true });

        if (!uploadError) {
          const { data: publicUrlData } = supabase.storage
            .from('client-files')
            .getPublicUrl(storagePath);
          downloadUrl = publicUrlData.publicUrl;
        }
      } catch (err) {
        console.warn('Supabase bucket upload failed, using fallback:', err);
      }
    }

    const newFileRecord: ClientFile = {
      id: fileId,
      name: fileName.includes('.') ? fileName : `${fileName}.pdf`,
      size: formattedSize,
      type: fileName.endsWith('.json') ? 'JSON Data' : fileName.endsWith('.zip') ? 'ZIP Archive' : 'PDF Document',
      category: category,
      requestNumber: requestNumber,
      clientName: clientName,
      uploadedBy: 'Client / Admin',
      uploadedAt: new Date().toISOString().split('T')[0],
      contentSnippet: contentSnippet || `Document specifications for ${requestNumber}`,
      downloadUrl: downloadUrl || undefined
    };

    // Save locally
    const currentFiles = getLocalData<ClientFile>(LOCAL_STORAGE_KEYS.FILES);
    setLocalData(LOCAL_STORAGE_KEYS.FILES, [newFileRecord, ...currentFiles]);

    // Save metadata in Supabase client_files table
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('client_files').insert([
          {
            id: newFileRecord.id,
            name: newFileRecord.name,
            size: newFileRecord.size,
            type: newFileRecord.type,
            category: newFileRecord.category,
            request_number: newFileRecord.requestNumber,
            client_name: newFileRecord.clientName,
            uploaded_by: newFileRecord.uploadedBy,
            uploaded_at: newFileRecord.uploadedAt,
            content_snippet: newFileRecord.contentSnippet,
            download_url: newFileRecord.downloadUrl
          }
        ]);
      } catch (err) {
        console.error('Supabase file DB insert failed:', err);
      }
    }

    return newFileRecord;
  },

  // Subscribe to Realtime Requests
  subscribeToRequests(onUpdate: (requests: SalesRequest[]) => void) {
    if (isSupabaseConfigured && supabase) {
      const channel = supabase
        .channel('public:sales_requests')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'sales_requests' },
          async () => {
            const updated = await this.fetchRequests();
            onUpdate(updated);
          }
        )
        .subscribe();

      return () => {
        if (supabase) {
          supabase.removeChannel(channel);
        }
      };
    }

    const handleStorage = async () => {
      const data = await this.fetchRequests();
      onUpdate(data);
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('focus', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('focus', handleStorage);
    };
  },

  // Subscribe to Realtime Files
  subscribeToFiles(onUpdate: (files: ClientFile[]) => void) {
    if (isSupabaseConfigured && supabase) {
      const channel = supabase
        .channel('public:client_files')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'client_files' },
          async () => {
            const updated = await this.fetchFiles();
            onUpdate(updated);
          }
        )
        .subscribe();

      return () => {
        if (supabase) {
          supabase.removeChannel(channel);
        }
      };
    }

    const handleStorage = async () => {
      const data = await this.fetchFiles();
      onUpdate(data);
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('focus', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('focus', handleStorage);
    };
  }
};
