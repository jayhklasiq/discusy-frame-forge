
import React from 'react';

const AuthDivider: React.FC = () => {
  return (
    <div className="flex items-center my-6 w-full">
      <div className="flex-1 h-px bg-white/20"></div>
      <div className="px-4 text-sm text-white/60">Or</div>
      <div className="flex-1 h-px bg-white/20"></div>
    </div>
  );
};

export default AuthDivider;
