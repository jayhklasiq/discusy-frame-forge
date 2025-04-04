
import React from 'react';

interface DiscusyLogoProps {
  className?: string;
}

const DiscusyLogo: React.FC<DiscusyLogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-28 h-28 mb-4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Logo circle */}
            <circle cx="100" cy="100" r="55" fill="transparent" stroke="transparent" />
            
            {/* Top person icon - orange */}
            <circle cx="100" cy="45" r="15" fill="#FF914D" />
            <path d="M100 45 Q130 75 100 105" stroke="#FF914D" strokeWidth="8" fill="transparent" />
            
            {/* Right person icon - green */}
            <circle cx="155" cy="100" r="15" fill="#75C94D" />
            <path d="M155 100 Q125 130 95 100" stroke="#75C94D" strokeWidth="8" fill="transparent" />
            
            {/* Bottom person icon - purple */}
            <circle cx="100" cy="155" r="15" fill="#9B4DFF" />
            <path d="M100 155 Q70 125 100 95" stroke="#9B4DFF" strokeWidth="8" fill="transparent" />
            
            {/* Left person icon - pink */}
            <circle cx="45" cy="100" r="15" fill="#FF4D8D" />
            <path d="M45 100 Q75 70 105 100" stroke="#FF4D8D" strokeWidth="8" fill="transparent" />
            
            {/* Chat bubbles in center */}
            <circle cx="85" cy="100" r="5" fill="#6BBFFF" />
            <circle cx="100" cy="100" r="5" fill="#6BBFFF" />
            <circle cx="115" cy="100" r="5" fill="#6BBFFF" />
          </g>
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-white">Discusy</h1>
    </div>
  );
};

export default DiscusyLogo;
