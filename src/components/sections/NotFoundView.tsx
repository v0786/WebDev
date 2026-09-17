import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../ui/Button';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-7xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-electric to-neon-violet">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          The requested page or resource doesn't exist. Let's get you back to the main portfolio and project inquiry page.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <Button
            onClick={onReturnHome}
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
