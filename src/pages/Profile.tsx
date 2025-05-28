
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, MessageSquare, Bell } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';
import { useToast } from '@/hooks/use-toast';

import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileCard from '@/components/profile/ProfileCard';
import StatsCard from '@/components/profile/StatsCard';
import LogoutButton from '@/components/profile/LogoutButton';
import EditProfileDialog from '@/components/profile/EditProfileDialog';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    university: "State University",
    major: "Computer Science",
    yearOfStudy: "3rd year"
  });
  
  const [formData, setFormData] = useState({ ...user });

  const stats = [
    { label: "Courses", value: "5", icon: Book },
    { label: "Chats", value: "8", icon: MessageSquare },
    { label: "Notifications", value: "12", icon: Bell },
  ];

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been logged out successfully",
      duration: 2000,
    });
    
    navigate('/onboarding');
  };

  const handleEditProfile = () => {
    setFormData({ ...user });
    setIsEditDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setUser({ ...formData });
    setIsEditDialogOpen(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <ProfileHeader title="Profile" />

      <div className="p-4">
        <ProfileCard user={user} onEditProfile={handleEditProfile} />
        <StatsCard stats={stats} />
        <LogoutButton onLogout={handleLogout} />
      </div>

      <EditProfileDialog 
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        formData={formData}
        onInputChange={handleInputChange}
        onSaveProfile={handleSaveProfile}
      />

      <NavigationTabs />
    </div>
  );
};

export default Profile;
