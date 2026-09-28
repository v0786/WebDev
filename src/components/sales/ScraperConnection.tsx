import React from 'react';
import { ScraperConnectionPanel } from './ScraperConnectionPanel';

interface ScraperConnectionProps {
  onConnectionStatusChange?: (isConnected: boolean, url: string) => void;
}

export const ScraperConnection: React.FC<ScraperConnectionProps> = ({
  onConnectionStatusChange,
}) => {
  return (
    <ScraperConnectionPanel
      onConnectionStatusChange={(status, baseUrl) => {
        if (onConnectionStatusChange) {
          onConnectionStatusChange(status === 'connected', baseUrl);
        }
      }}
    />
  );
};
