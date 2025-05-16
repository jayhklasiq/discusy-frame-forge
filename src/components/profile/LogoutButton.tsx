
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <Button 
      variant="outline" 
      className="w-full flex items-center justify-center gap-2 text-red-500 border-red-200 hover:bg-red-50"
      onClick={onLogout}
    >
      <LogOut size={18} />
      <span>Log Out</span>
    </Button>
  );
};

export default LogoutButton;
