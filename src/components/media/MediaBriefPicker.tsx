import React, { useState, useRef } from 'react';
import { Mic, Square, Trash2, Upload, FileText, Image as ImageIcon, Video as VideoIcon, Music, AlertCircle } from 'lucide-react';
import { soundFx } from '../audio/SoundEffects';

export interface AttachedMedia {
  file: File;
  id: string;
  name: string;
  sizeFormatted: string;
  typeCategory: 'audio' | 'image' | 'video' | 'document';
  previewUrl?: string;
}

interface MediaBriefPickerProps {
  attachments: AttachedMedia[];
  onAddAttachment: (media: AttachedMedia) => void;
  onRemoveAttachment: (id: string) => void;
}

export const MediaBriefPicker: React.FC<MediaBriefPickerProps> = ({
  attachments,
  onAddAttachment,
  onRemoveAttachment,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [micError, setMicError] = useState('');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Start Mic Voice Recording
  const startRecording = async () => {
    soundFx.playClick();
    setMicError('');
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioFile = new File([audioBlob], `Voice_Note_${Date.now()}.webm`, { type: 'audio/webm' });
        const previewUrl = URL.createObjectURL(audioBlob);

        const newMedia: AttachedMedia = {
          file: audioFile,
          id: `voice-${Date.now()}`,
          name: `Voice Brief (${Math.floor(audioBlob.size / 1024)} KB)`,
          sizeFormatted: `${(audioBlob.size / 1024).toFixed(1)} KB`,
          typeCategory: 'audio',
          previewUrl,
        };

        onAddAttachment(newMedia);
        // Stop stream tracks
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingSeconds(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      console.error('Microphone error:', err);
      setMicError('Microphone permission denied or unsupported in this browser.');
    }
  };

  // Stop Mic Voice Recording
  const stopRecording = () => {
    soundFx.playChirp(600, 0.04, 'sine', 0.03);
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // Handle File Input Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    soundFx.playClick();

    Array.from(selectedFiles).forEach((file) => {
      let typeCat: AttachedMedia['typeCategory'] = 'document';
      if (file.type.startsWith('image/')) typeCat = 'image';
      else if (file.type.startsWith('video/')) typeCat = 'video';
      else if (file.type.startsWith('audio/')) typeCat = 'audio';

      const previewUrl = typeCat === 'image' ? URL.createObjectURL(file) : undefined;
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);

      const newMedia: AttachedMedia = {
        file,
        id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        name: file.name,
        sizeFormatted: `${sizeMB} MB`,
        typeCategory: typeCat,
        previewUrl,
      };

      onAddAttachment(newMedia);
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] font-bold flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>ATTACH MEDIA BRIEF (VOICE NOTE, IMAGES, VIDEO)</span>
        </label>
        <span className="text-[9.5px] font-mono text-gray-400">Optional &bull; Max 5MB per file</span>
      </div>

      {micError && (
        <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
          <span>{micError}</span>
        </div>
      )}

      {/* Buttons Bar */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Voice Note Button */}
        {isRecording ? (
          <button
            type="button"
            onClick={stopRecording}
            className="px-3.5 py-2 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(239,68,68,0.5)] cursor-pointer animate-pulse"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>STOP RECORDING ({formatTimer(recordingSeconds)})</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={startRecording}
            className="px-3.5 py-2 rounded-xl bg-white/[0.05] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer min-h-[36px]"
          >
            <Mic className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>RECORD VOICE NOTE</span>
          </button>
        )}

        {/* Upload Files Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/15 hover:border-white/40 hover:bg-white/[0.08] text-gray-300 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer min-h-[36px]"
        >
          <Upload className="w-3.5 h-3.5 text-gray-400" />
          <span>UPLOAD IMAGE / VIDEO / PDF</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,audio/*,.pdf,.zip,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* List of Attached Media */}
      {attachments.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {attachments.map((item) => (
            <div
              key={item.id}
              className="p-2.5 rounded-xl border border-white/15 bg-white/[0.03] flex items-center justify-between text-xs font-mono text-gray-300 gap-2"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                {item.typeCategory === 'audio' && <Music className="w-4 h-4 text-[#D4AF37] shrink-0" />}
                {item.typeCategory === 'image' && <ImageIcon className="w-4 h-4 text-emerald-400 shrink-0" />}
                {item.typeCategory === 'video' && <VideoIcon className="w-4 h-4 text-purple-400 shrink-0" />}
                {item.typeCategory === 'document' && <FileText className="w-4 h-4 text-sky-400 shrink-0" />}

                <div className="truncate">
                  <div className="truncate text-white font-sans text-xs">{item.name}</div>
                  <div className="text-[9.5px] text-gray-400">{item.sizeFormatted}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {item.typeCategory === 'audio' && item.previewUrl && (
                  <audio src={item.previewUrl} controls className="h-6 w-28 scale-90" />
                )}

                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    onRemoveAttachment(item.id);
                  }}
                  className="p-1 rounded-md text-gray-500 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                  title="Remove file"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
