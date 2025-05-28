
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Edit, LogOut, Book, MessageSquare, Bell, Settings, Award, GraduationCap, Calendar, Clock, FileText, Users } from 'lucide-react';
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
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const InstructorProfile: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  const [instructor, setInstructor] = useState({
    name: "Dr. William Johnson",
    email: "william.johnson@university.edu",
    avatar: "https://i.pravatar.cc/150?u=prof",
    university: "State University",
    department: "Computer Science",
    position: "Associate Professor",
    officeHours: "Mon, Wed 14:00-16:00",
    officeLocation: "CS Building, Room 305",
    phoneNumber: "(555) 123-4567",
    bio: "Ph.D. in Computer Science with over 10 years of teaching experience. Research interests include distributed systems, machine learning, and computer networks.",
    publications: 24,
    expertise: ["Distributed Systems", "Machine Learning", "Computer Networks", "Cloud Computing"]
  });
  
  const [formData, setFormData] = useState({ ...instructor });

  const stats = [
    { label: "Courses", value: "5", icon: Book },
    { label: "Students", value: "128", icon: Users },
    { label: "Chats", value: "12", icon: MessageSquare },
    { label: "Notifications", value: "8", icon: Bell },
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
    setFormData({ ...instructor });
    setIsEditDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setInstructor({ ...formData });
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
          <h1 className="text-xl font-bold">Instructor Profile</h1>
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
                  src={instructor.avatar} 
                  alt="Profile" 
                  className="rounded-full h-20 w-20 object-cover border-4 border-white shadow"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{instructor.name}</h2>
                    <Award className="text-yellow-500" size={18} />
                  </div>
                  <p className="text-sm text-gray-500">{instructor.email}</p>
                  <p className="text-sm text-gray-700 mt-1">{instructor.position}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 text-discusy-blue" onClick={handleEditProfile}>
                <Edit size={16} className="mr-1" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">University</p>
                  <p className="font-medium">{instructor.university}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Department</p>
                  <p className="font-medium">{instructor.department}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Clock size={16} className="text-discusy-blue mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Office Hours</p>
                    <p className="font-medium">{instructor.officeHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap size={16} className="text-discusy-blue mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Office Location</p>
                    <p className="font-medium">{instructor.officeLocation}</p>
                  </div>
                </div>
              </div>

              <Separator />
              
              <div>
                <p className="text-xs text-gray-500 mb-1">Biography</p>
                <p className="text-sm">{instructor.bio}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">Areas of Expertise</p>
                <div className="flex flex-wrap gap-1">
                  {instructor.expertise.map((area, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-discusy-blue" />
                <span className="text-sm">
                  <strong>{instructor.publications}</strong> Publications
                </span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <span className="text-xs text-blue-600 underline">View</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Recent Publications</h4>
                      <ul className="text-sm space-y-2">
                        <li>Johnson, W. et al. (2024). "Advances in Distributed Systems for Edge Computing"</li>
                        <li>Johnson, W. & Smith, J. (2023). "Machine Learning Applications in Network Security"</li>
                        <li>Johnson, W. et al. (2022). "Cloud-Based Architectures for Real-time Data Processing"</li>
                      </ul>
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        View all publications
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className="shadow-sm mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Activity Stats</h3>
            <div className="grid grid-cols-4 gap-2">
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

        {/* Teaching Schedule */}
        <Card className="shadow-sm mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">This Week's Schedule</h3>
            <div className="space-y-2">
              <div className="flex items-start p-2 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                <Calendar className="text-blue-600 mr-2 mt-1" size={16} />
                <div>
                  <p className="font-medium">CS101 - Introduction to Computer Science</p>
                  <p className="text-xs text-gray-600">Monday, 10:00 AM - 11:30 AM | Room CS-201</p>
                </div>
              </div>
              <div className="flex items-start p-2 border-l-4 border-green-500 bg-green-50 rounded-r">
                <Calendar className="text-green-600 mr-2 mt-1" size={16} />
                <div>
                  <p className="font-medium">CS201 - Data Structures</p>
                  <p className="text-xs text-gray-600">Tuesday, 1:00 PM - 3:00 PM | Room CS-305</p>
                </div>
              </div>
              <div className="flex items-start p-2 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <Calendar className="text-purple-600 mr-2 mt-1" size={16} />
                <div>
                  <p className="font-medium">CS301 - Database Systems</p>
                  <p className="text-xs text-gray-600">Wednesday, 3:30 PM - 5:00 PM | Room CS-101</p>
                </div>
              </div>
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
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Instructor Profile</DialogTitle>
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
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="officeHours">Office Hours</Label>
                  <Input
                    id="officeHours"
                    name="officeHours"
                    value={formData.officeHours}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="officeLocation">Office Location</Label>
                  <Input
                    id="officeLocation"
                    name="officeLocation"
                    value={formData.officeLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="bio">Biography</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={handleInputChange}
                />
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
      <NavigationTabs isInstructor={true} />
    </div>
  );
};

export default InstructorProfile;
