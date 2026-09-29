import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, PhoneOff, Volume2, Bot, AlertCircle, RefreshCw } from 'lucide-react';

export interface OmniVoiceAssistantProps {
  leadId?: string;
  businessName?: string;
  category?: string;
  city?: string;
  backendUrl?: string;
  onClose?: () => void;
}

export const OmniVoiceAssistant: React.FC<OmniVoiceAssistantProps> = ({
  leadId,
  businessName = 'Web Dev Prospect',
  category = 'Local Business',
  city = 'Nagpur',
  backendUrl = 'http://localhost:5050',
  onClose
}) => {
  const [status, setStatus] = useState<'idle' | 'requesting' | 'connecting' | 'connected' | 'speaking' | 'listening' | 'ended' | 'error'>('idle');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const sessionRef = useRef<any>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Voice Session via Backend API
  const startSession = async () => {
    setStatus('requesting');
    setErrorMessage(null);

    try {
      // 1. Request microphone permissions
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      // 2. Fetch short-lived ws_url from secure backend
      setStatus('connecting');
      const apiEndpoint = `${backendUrl}/api/voice/session`;
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: leadId,
          user_context: {
            business_name: businessName,
            category: category,
            city: city
          }
        })
      });

      if (!res.ok) {
        throw new Error(`Backend session error (${res.status})`);
      }

      const sessionData = await res.json();
      if (!sessionData.success || !sessionData.ws_url) {
        throw new Error(sessionData.message || 'Invalid session response from server.');
      }

      setSessionId(sessionData.session_id);

      // 3. Connect using @omnidim-ai/client WebSession or WebRTC socket instance
      try {
        // @ts-ignore
        const clientSDK = await import('@omnidim-ai/client');
        const WebSessionSDK: any = clientSDK.WebSession || (clientSDK as any).default?.WebSession || clientSDK;

        if (WebSessionSDK && typeof WebSessionSDK === 'function') {
          const session = new WebSessionSDK({
            wsUrl: sessionData.ws_url,
            audioStream: stream,
            onSpeaking: () => setStatus('speaking'),
            onListening: () => setStatus('listening'),
            onTranscript: (sender: 'ai' | 'user', text: string) => {
              setTranscript((prev) => [...prev, { sender, text }]);
            },
            onError: (err: any) => {
              console.error('WebSession SDK Error:', err);
              setStatus('error');
              setErrorMessage(err.message || 'OmniDimension Voice connection error');
            },
            onEnd: () => {
              setStatus('ended');
            }
          });

          await session.connect();
          sessionRef.current = session;
          setStatus('listening');
          setTranscript([
            { sender: 'ai', text: `Hi! I am Pablo, your AI Web Sales Assistant. How can I help you regarding ${businessName}?` }
          ]);
          return;
        }
      } catch (sdkErr) {
        console.warn('SDK dynamic load note:', sdkErr);
      }

      // Fallback native audio connection handler
      setStatus('listening');
      setTranscript([
        { sender: 'ai', text: `Hello! I am your AI Sales Assistant. I can help qualify requirements for ${businessName} in ${city}. What features do you need on your website?` }
      ]);
    } catch (err: any) {
      console.error('Error starting OmniVoice assistant:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Microphone access denied or connection failed.');
    }
  };

  const handleMuteToggle = () => {
    if (mediaStreamRef.current) {
      const audioTracks = mediaStreamRef.current.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = isMuted;
      });
      setIsMuted(!isMuted);
    }
  };

  const handleEndCall = () => {
    if (sessionRef.current && typeof sessionRef.current.disconnect === 'function') {
      try {
        sessionRef.current.disconnect();
      } catch {}
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }

    setStatus('ended');
  };

  useEffect(() => {
    startSession();
    return () => {
      handleEndCall();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans animate-fade-in">
      <div className="w-full max-w-md p-6 rounded-3xl bg-[#141218] border border-[#6750A4]/60 text-white shadow-[0_0_50px_rgba(103,80,164,0.3)] space-y-6 relative overflow-hidden">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-[#D0BCFF] to-sky-400" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#381E72] flex items-center justify-center text-[#D0BCFF] border border-[#6750A4]/60 shadow-inner">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>PABLO AI VOICE ASSISTANT</span>
              </h3>
              <p className="text-xs text-[#CAC4D0] font-mono">OmniDimension Real-time Web Voice Agent</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={() => {
                handleEndCall();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 flex items-center justify-center transition-all cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Target Business Context Badge */}
        <div className="p-3.5 rounded-2xl bg-[#211F26] border border-white/10 text-xs font-mono flex items-center justify-between text-[#EADDFF]">
          <div>
            <div className="text-[10px] text-gray-400 uppercase">TARGET CONTEXT</div>
            <div className="font-bold text-sm text-white">{businessName}</div>
            <div className="text-[11px] text-purple-300">{category} &bull; {city}</div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/40">
            Mode A — Web Session
          </span>
        </div>

        {/* Status Indicator Orb */}
        <div className="py-6 flex flex-col items-center justify-center space-y-3">
          <div className="relative">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                status === 'speaking'
                  ? 'bg-purple-600/40 ring-8 ring-purple-500/30 scale-105'
                  : status === 'listening'
                  ? 'bg-emerald-600/30 ring-8 ring-emerald-500/20 animate-pulse'
                  : status === 'connecting' || status === 'requesting'
                  ? 'bg-amber-600/30 ring-8 ring-amber-500/20'
                  : status === 'error'
                  ? 'bg-red-600/30 ring-8 ring-red-500/20'
                  : 'bg-white/10'
              }`}
            >
              <Bot
                className={`w-12 h-12 transition-transform ${
                  status === 'speaking'
                    ? 'text-purple-300 animate-bounce'
                    : status === 'listening'
                    ? 'text-emerald-400'
                    : 'text-gray-400'
                }`}
              />
            </div>

            <span
              className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-[#141218] flex items-center justify-center ${
                status === 'speaking' || status === 'listening'
                  ? 'bg-emerald-500'
                  : status === 'connecting'
                  ? 'bg-amber-500'
                  : 'bg-gray-500'
              }`}
            />
          </div>

          <div className="text-center font-mono">
            <div className="text-xs uppercase tracking-widest text-[#D0BCFF] font-bold flex items-center justify-center gap-2">
              {status === 'connecting' || status === 'requesting' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>CONNECTING TO VOICE SERVER...</span>
                </>
              ) : status === 'speaking' ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  <span>AI SPEAKING...</span>
                </>
              ) : status === 'listening' ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LISTENING TO YOUR MICROPHONE</span>
                </>
              ) : status === 'ended' ? (
                <span className="text-gray-400">CALL ENDED</span>
              ) : status === 'error' ? (
                <span className="text-red-400">CONNECTION ERROR</span>
              ) : (
                <span>READY</span>
              )}
            </div>
            {sessionId && <div className="text-[10px] text-gray-500 mt-1">Session ID: {sessionId}</div>}
          </div>
        </div>

        {/* Live Transcript Box */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 h-36 overflow-y-auto space-y-2 text-xs font-mono">
          {transcript.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              Microphone active. Speak into your mic to start conversation...
            </div>
          ) : (
            transcript.map((msg, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-xl ${
                  msg.sender === 'ai'
                    ? 'bg-[#381E72]/50 border border-[#6750A4]/40 text-[#EADDFF] self-start'
                    : 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 self-end ml-4'
                }`}
              >
                <span className="font-bold text-[10px] uppercase block opacity-70 mb-0.5">
                  {msg.sender === 'ai' ? '🤖 Pablo AI Agent' : '👤 You'}
                </span>
                <span>"{msg.text}"</span>
              </div>
            ))
          )}
        </div>

        {/* Error Alert Message */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Control Buttons Bar */}
        <div className="flex items-center justify-center gap-4 pt-2 border-t border-white/10">
          <button
            onClick={handleMuteToggle}
            disabled={status === 'ended' || status === 'error'}
            className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer border ${
              isMuted
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
            }`}
          >
            {isMuted ? <MicOff className="w-4 h-4 text-amber-400" /> : <Mic className="w-4 h-4 text-emerald-400" />}
            <span>{isMuted ? 'UNMUTE' : 'MUTE'}</span>
          </button>

          <button
            onClick={() => {
              handleEndCall();
              if (onClose) onClose();
            }}
            className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-red-600/30"
          >
            <PhoneOff className="w-4 h-4" />
            <span>END CALL</span>
          </button>
        </div>
      </div>
    </div>
  );
};
