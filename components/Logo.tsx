import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/londoncasinopro-logo.png"
        alt="London Casino Pro"
        className="h-12 w-auto object-contain"
        style={{ minWidth: '150px' }}
      />
    </div>
  );
};
