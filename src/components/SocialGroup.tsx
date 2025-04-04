
import React from 'react';
import SocialButton from './SocialButton';

interface SocialGroupProps {
  onSocialLogin: (provider: string) => void;
}

const SocialGroup: React.FC<SocialGroupProps> = ({ onSocialLogin }) => {
  return (
    <div className="flex justify-center space-x-4">
      <SocialButton type="facebook" onClick={() => onSocialLogin('facebook')} />
      <SocialButton type="google" onClick={() => onSocialLogin('google')} />
      <SocialButton type="apple" onClick={() => onSocialLogin('apple')} />
    </div>
  );
};

export default SocialGroup;
