
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiscusyLogo from '@/components/DiscusyLogo';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-discusy-blue animate-fade-in p-6">
      <DiscusyLogo />
      <p className="text-white text-xl mt-6">Learn together, grow together</p>
    </div>
  );
};

export default Splash;
