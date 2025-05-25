
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Edit } from 'lucide-react';
import { getCurrentUser } from '@/utils/dataLoader';

interface ProfileCardProps {
  onEditProfile: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ onEditProfile }) => {
  const user = getCurrentUser();

  return (
    <Card className="shadow-sm mb-6">
      <CardHeader className="pb-0">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <img 
              src={user.avatar} 
              alt="Profile" 
              className="rounded-full h-16 w-16 object-cover border-4 border-white shadow"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-discusy-blue" onClick={onEditProfile}>
            <Edit size={16} className="mr-1" />
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-gray-500">University</p>
            <p className="font-medium">{user.university}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Major</p>
            <p className="font-medium">{user.major}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Year of Study</p>
            <p className="font-medium">{user.yearOfStudy}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
