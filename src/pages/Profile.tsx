
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Edit, LogOut, Book, MessageSquare, Bell, Settings } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';

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
    // In a real app, we would clear authentication state here
    toast({
      title: "Logging out",
      description: "You have been logged out successfully",
      duration: 2000,
    });
    
    // Redirect to onboarding page
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
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Profile</h1>
          <Button variant="ghost" size="sm">
            <Settings size={20} />
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="p-4">
        {/* Profile Card */}
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
              <Button variant="ghost" size="sm" className="h-8 text-discusy-blue" onClick={handleEditProfile}>
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

        {/* Stats */}
        <Card className="shadow-sm mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Activity Stats</h3>
            <div className="grid grid-cols-3 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center p-3 border rounded-md">
                  <stat.icon size={20} className="text-discusy-blue mb-1" />
                  <span className="font-bold text-lg">{stat.value}</span>
                  <span className="text-xs text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Log out button */}
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 text-red-500 border-red-200 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </Button>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img 
                  src={formData.avatar} 
                  alt="Profile" 
                  className="rounded-full h-20 w-20 object-cover border-4 border-white shadow"
                />
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="absolute bottom-0 right-0 rounded-full p-1 h-8 w-8"
                >
                  <Edit size={14} />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="university">University</Label>
                <Input
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="major">Major</Label>
                  <Input
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="yearOfStudy">Year of Study</Label>
                  <Input
                    id="yearOfStudy"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveProfile}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default Profile;
