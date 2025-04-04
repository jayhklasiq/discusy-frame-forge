
import React from 'react';
import { cn } from '@/lib/utils';

interface SocialButtonProps {
  type: 'facebook' | 'google' | 'apple';
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ type, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#1877F2" d="M24 12.073c0-5.8-4.2-10.6-9.7-11.6v8.6h2.7l.5 3h-3.2v1.8c0 .8.4 1.6 1.7 1.6h1.3v2.5s-1.2.2-2.3.2c-2.4 0-3.9-1.5-3.9-4v-2.1h-2.6v-3h2.6v-8.6C4.3 1.473.1 6.273.1 12.073c0 6.6 5.4 12 12 12s11.9-5.4 11.9-12z" />
          </svg>
        );
      case 'google':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        );
      case 'apple':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91-.83 0-2.1-.89-3.46-.86a4.92 4.92 0 0 0-4.14 2.53C2.31 12.61 3.9 17.59 6 20.15c1 1.46 2.25 3.09 3.86 3c1.55-.06 2.14-1 4-1s2.39 1 4 1 2.68-1.48 3.69-2.94a13.08 13.08 0 0 0 1.67-3.43 4.4 4.4 0 0 1-2.66-4.05z" fill="#000"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      className={cn("w-12 h-12 rounded-full flex items-center justify-center bg-white")}
      onClick={onClick}
    >
      {getIcon()}
    </button>
  );
};

export default SocialButton;
