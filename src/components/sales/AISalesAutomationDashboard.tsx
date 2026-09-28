import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Bot, 
  UserCheck, 
  CheckCircle2, 
  Volume2, 
  RefreshCw, 
  Zap, 
  FileText, 
  Server,
  Sparkles
} from 'lucide-react';
import { 
  salesAutomationService, 
  AutomatedLead, 
  CallRecord, 
  HumanFollowupTask 
} from '../../services/salesAutomationService';
import { isSupabaseConfigured } from '../../lib/supabase';

export const AISalesAutomationDashboard: React.FC = () => {
  const [leads, setLeads] = useState<AutomatedLead[]>([]);
  const [calls, setCalls] = useState<CallRecord[]>([]);
  const [followups, setFollowups] = useState<HumanFollowupTask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [callingLeadId, setCallingLeadId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'queue' | 'transcripts' | 'config'>('queue');
  const [selectedTranscript, setSelectedTranscript] = useState<CallRecord | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [lData, cData, fData] = await Promise.all([
        salesAutomationService.getLeads(),
        salesAutomationService.getCalls(),
        salesAutomationService.getFollowupTasks(),
      ]);
      setLeads(lData);
      setCalls(cData);
      setFollowups(fData);
    } catch (err) {
      console.error('Error loading AI sales automation data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000); // Polling every 5s for live call updates
    return () => clearInterval(interval);
  }, []);

  const handleTriggerAICall = async (leadId: string) => {
    setCallingLeadId(leadId);
    setStatusMessage('Initiating OmniDimension AI Voice Agent outbound call...');
    
    const res = await salesAutomationService.triggerAICall(leadId);
    if (res.success) {
      setStatusMessage(res.message);
      // Wait for call completion simulation
      setTimeout(async () => {
        await loadData();
        setCallingLeadId(null);
        setStatusMessage('AI Voice Call Completed & Structured Data Extracted!');
      }, 4500);
    } else {
      setStatusMessage(`Call Failed: ${res.message}`);
      setCallingLeadId(null);
    }
  };

  const handleCompleteFollowup = async (taskId: string) => {
    await salesAutomationService.markFollowupCompleted(taskId);
    await loadData();
    setStatusMessage('Follow-up task marked as completed!');
  };

  // Metrics
  const totalLeads = leads.length;
  const readyToCall = leads.filter((l) => l.status === 'READY_TO_CALL' || l.status === 'NEW').length;
  const callingNow = leads.filter((l) => l.status === 'CALLING').length;
  const hotLeads = leads.filter((l) => l.status === 'HOT' || l.interest === 'HOT').length;
  const doNotCallCount = leads.filter((l) => l.status === 'DO_NOT_CALL').length;

  return (
    <div className="space-y-6 text-[#E6E1E5]">
      
      {/* Top Banner & Refresh */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-[24px] bg-[#1D1B20] border border-[#6750A4]/40">
        <div>
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-[#D0BCFF]" />
            <h2 className="text-xl font-bold text-white tracking-tight">n8n + OmniDimension AI Sales Pipeline</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#381E72] text-[#D0BCFF] text-xs font-mono font-semibold">
              Live Voice Agent
            </span>
          </div>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Autonomous Google Maps lead qualification &amp; AI cold calling orchestrator.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={loadData}
            className="px-3.5 py-2 rounded-full bg-[#2B2930] hover:bg-[#381E72] border border-[#49454F] text-xs font-mono text-[#D0BCFF] flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Pipeline</span>
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-[16px] bg-[#381E72]/40 border border-[#6750A4] text-[#EADDFF] text-xs font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D0BCFF]" />
            <span>{statusMessage}</span>
          </div>
          <button onClick={() => setStatusMessage(null)} className="text-gray-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Summary Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="p-4 rounded-[20px] bg-[#1D1B20] border border-[#49454F]/50 font-mono">
          <div className="text-[10px] text-gray-400 uppercase">Total Ingested Leads</div>
          <div className="text-2xl font-bold text-white mt-1">{totalLeads}</div>
        </div>

        <div className="p-4 rounded-[20px] bg-[#1D1B20] border border-[#49454F]/50 font-mono">
          <div className="text-[10px] text-sky-400 uppercase">Ready To Call</div>
          <div className="text-2xl font-bold text-sky-400 mt-1">{readyToCall}</div>
        </div>

        <div className="p-4 rounded-[20px] bg-[#1D1B20] border border-[#49454F]/50 font-mono">
          <div className="text-[10px] text-amber-400 uppercase">Calling In Progress</div>
          <div className="text-2xl font-bold text-amber-400 mt-1">{callingNow}</div>
        </div>

        <div className="p-4 rounded-[20px] bg-[#1D1B20] border border-[#49454F]/50 font-mono">
          <div className="text-[10px] text-emerald-400 uppercase">Hot / Qualified Leads</div>
          <div className="text-2xl font-bold text-emerald-400 mt-1">{hotLeads}</div>
        </div>

        <div className="p-4 rounded-[20px] bg-[#1D1B20] border border-[#49454F]/50 font-mono">
          <div className="text-[10px] text-red-400 uppercase">Do Not Call (Opt-Outs)</div>
          <div className="text-2xl font-bold text-red-400 mt-1">{doNotCallCount}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3 font-mono text-xs">
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'queue' ? 'bg-[#EADDFF] text-[#21005D]' : 'bg-[#1D1B20] text-gray-400 hover:text-white'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Human Follow-Up Queue ({followups.filter((f) => !f.is_completed).length})</span>
        </button>

        <button
          onClick={() => setActiveTab('transcripts')}
          className={`px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'transcripts' ? 'bg-[#EADDFF] text-[#21005D]' : 'bg-[#1D1B20] text-gray-400 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>AI Voice Transcripts &amp; Recordings ({calls.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('config')}
          className={`px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'config' ? 'bg-[#EADDFF] text-[#21005D]' : 'bg-[#1D1B20] text-gray-400 hover:text-white'
          }`}
        >
          <Server className="w-4 h-4" />
          <span>n8n Pipeline Config</span>
        </button>
      </div>

      {/* TAB 1: HUMAN FOLLOWUP QUEUE */}
      {activeTab === 'queue' && (
        <div className="space-y-6">
          <div className="p-4 rounded-[16px] bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Below are high-priority qualified leads identified by OmniDimension AI voice agent. A human salesperson should close these deals via phone or WhatsApp.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {followups.map((task) => (
              <div
                key={task.id}
                className={`p-5 rounded-[24px] border transition-all space-y-4 ${
                  task.is_completed
                    ? 'bg-[#141218]/60 border-gray-800 opacity-60'
                    : 'bg-[#1D1B20] border-[#6750A4]/60 hover:border-[#D0BCFF]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                      🔥 {task.priority} PRIORITY FOLLOW-UP
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5">{task.business_name}</h3>
                    <p className="text-xs text-gray-400 font-mono">{task.city} • Phone: {task.phone}</p>
                  </div>
                  {task.is_completed ? (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Completed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleCompleteFollowup(task.id)}
                      className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold cursor-pointer transition-all"
                    >
                      Mark Closed
                    </button>
                  )}
                </div>

                <div className="p-3.5 rounded-[16px] bg-[#141218] border border-white/5 space-y-1.5 font-mono text-xs">
                  <div className="text-gray-400 text-[10px]">AI QUALIFICATION SUMMARY:</div>
                  <div className="text-gray-200">{task.summary}</div>
                  <div className="text-sky-400 text-[10px] pt-1">Website Need: {task.website_need}</div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
                  <a
                    href={`https://wa.me/${task.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${task.business_name}, following up on our AI cold call demo regarding your website requirement!`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Open WhatsApp Chat →</span>
                  </a>
                  <span className="text-gray-500 text-[10px]">{new Date(task.created_at).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* All Ingested Leads Table & Outbound Dispatch Trigger */}
          <div className="mt-8 space-y-4">
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>All Scraped Leads — Trigger Manual AI Call Demo</span>
            </h3>

            <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-[#1D1B20]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#2B2930] text-gray-300 border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Business Name</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Phone</th>
                    <th className="p-3.5">City</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Call Attempts</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {leads.map((l) => (
                    <tr key={l.id} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-bold text-white">{l.business_name}</td>
                      <td className="p-3.5 text-gray-400">{l.category}</td>
                      <td className="p-3.5 text-sky-400">{l.phone}</td>
                      <td className="p-3.5">{l.city}</td>
                      <td className="p-3.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            l.status === 'HOT'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : l.status === 'CALLING'
                              ? 'bg-amber-500/20 text-amber-400 animate-pulse'
                              : l.status === 'DO_NOT_CALL'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}
                        >
                          {l.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">{l.call_attempts} / {l.max_attempts}</td>
                      <td className="p-3.5 text-right">
                        <button
                          disabled={callingLeadId === l.id || l.status === 'DO_NOT_CALL'}
                          onClick={() => handleTriggerAICall(l.id)}
                          className="px-3 py-1.5 rounded-full bg-[#6750A4] hover:bg-[#7F67BE] text-white text-xs font-mono flex items-center gap-1.5 ml-auto cursor-pointer disabled:opacity-50"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>{callingLeadId === l.id ? 'Calling...' : 'Trigger AI Call'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: AI VOICE TRANSCRIPTS & RECORDINGS */}
      {activeTab === 'transcripts' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-mono text-gray-400 font-bold uppercase">Calls History</h3>
            {calls.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelectedTranscript(c)}
                className={`p-4 rounded-[20px] border cursor-pointer transition-all ${
                  selectedTranscript?.id === c.id
                    ? 'bg-[#381E72]/50 border-[#D0BCFF]'
                    : 'bg-[#1D1B20] border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white">{c.omnidim_call_id}</span>
                  <span className="text-[10px] font-mono text-emerald-400">{c.duration_seconds}s</span>
                </div>
                <div className="text-xs font-mono text-sky-400 mt-1">{c.phone_called}</div>
                <div className="text-[11px] text-gray-400 font-mono mt-2 truncate">
                  Agent ID: {c.agent_id}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 space-y-4">
            {selectedTranscript ? (
              <div className="p-6 rounded-[24px] bg-[#1D1B20] border border-[#6750A4]/50 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-mono">{selectedTranscript.omnidim_call_id}</h3>
                    <p className="text-xs text-gray-400 font-mono">To: {selectedTranscript.phone_called}</p>
                  </div>
                  <a
                    href={selectedTranscript.recording_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40 text-xs font-mono flex items-center gap-1.5 hover:bg-purple-600/30"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen MP3</span>
                  </a>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="text-gray-400 font-bold uppercase">CONVERSATION TRANSCRIPT</div>
                  <div className="p-4 rounded-[16px] bg-[#141218] border border-white/10 whitespace-pre-wrap leading-relaxed text-gray-200">
                    {selectedTranscript.transcript}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 rounded-[24px] bg-[#1D1B20] border border-white/10 text-center text-gray-400 font-mono text-xs">
                Select a call record from the left to view the full AI voice conversation transcript.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: N8N PIPELINE CONFIG */}
      {activeTab === 'config' && (
        <div className="p-6 rounded-[24px] bg-[#1D1B20] border border-[#6750A4]/40 space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-base font-bold text-white">n8n Orchestrator &amp; OmniDimension Configuration</h3>
              <p className="text-gray-400 mt-0.5">Webhook endpoints and credentials isolation map.</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs ${isSupabaseConfigured ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
              {isSupabaseConfigured ? '🟢 Supabase Connected' : '🟡 Local Storage Fallback'}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-gray-400 uppercase text-[10px]">Lead Ingestion Webhook Endpoint</label>
              <div className="p-3 rounded-xl bg-[#141218] border border-white/10 text-sky-400 mt-1 flex items-center justify-between">
                <span>POST https://n8n.yourdomain.com/webhook/leads/new</span>
                <span className="text-gray-500">X-Webhook-Secret</span>
              </div>
            </div>

            <div>
              <label className="text-gray-400 uppercase text-[10px]">OmniDimension Post-Call Result Webhook</label>
              <div className="p-3 rounded-xl bg-[#141218] border border-white/10 text-purple-400 mt-1 flex items-center justify-between">
                <span>POST https://n8n.yourdomain.com/webhook/omnidim/call-result</span>
                <span className="text-gray-500">HMAC Authentication</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 uppercase text-[10px]">OmniDimension Voice Agent Specs & Python Setup</label>
              <div className="p-4 rounded-xl bg-[#141218] border border-white/10 text-gray-300 space-y-3 font-mono text-[11px]">
                <div className="flex flex-wrap items-center justify-between text-xs font-bold text-[#D0BCFF]">
                  <span>Agent Name: Web Presence Qualifier</span>
                  <span>Model: gpt-4.1-mini • Voice: Cartesia (4cd9f881-58f7-4969-876a-00983214c362)</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 text-gray-300 border border-white/5">
                  <span className="text-purple-400 font-bold">Welcome Message: </span>
                  "Hi [user_name], this is the AI assistant for a local web development service. Am I speaking with the business owner?"
                </div>
                <div className="text-[10px] text-gray-400">
                  <span className="text-emerald-400 font-bold">Supported Languages: </span>
                  English (India), Hindi, Marathi • Transcriber: Soniox (400ms silence timeout)
                </div>
                <div className="text-[10px] text-gray-400">
                  <span className="text-sky-400 font-bold">Context Breakdown Rules: </span>
                  Identity & Purpose, Facts, Actions & Limits, Identity Flow, Purpose & Need Flow, Needs & Callback Flow, Scope & Redirects, Guardrails, FAQ.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
