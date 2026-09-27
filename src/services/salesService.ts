import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { SalesRequest } from '../demos/sales/SalesDemo';

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
    // Always write to local storage first for instant responsive feel
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

  // Subscribe to Realtime Updates
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

    // Local fallback listener
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
  }
};
