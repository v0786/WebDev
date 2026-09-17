import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isOpen,
  onClose,
  duration = 3500,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm flex items-center gap-3 p-4 rounded-xl bg-dark-900/95 backdrop-blur-lg border border-neon-cyan/40 shadow-2xl shadow-neon-cyan/20 text-white animate-bounce-short">
      <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0" />
      <p className="text-sm font-medium text-slate-200">{message}</p>
      <button 
        onClick={onClose} 
        className="text-slate-400 hover:text-white ml-auto shrink-0 p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
