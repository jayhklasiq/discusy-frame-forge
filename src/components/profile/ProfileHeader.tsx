
import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

interface ProfileHeaderProps {
  title: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title }) => {
  return (
    <header className="bg-discusy-blue text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <Button variant="ghost" size="sm">
          <Settings size={20} />
        </Button>
      </div>
    </header>
  );
};

export default ProfileHeader;
