
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Edit } from 'lucide-react';

interface EditProfileDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  formData: {
    name: string;
    email: string;
    avatar: string;
    university: string;
    major: string;
    yearOfStudy: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveProfile: () => void;
}

const EditProfileDialog: React.FC<EditProfileDialogProps> = ({ 
  isOpen, 
  onOpenChange, 
  formData, 
  onInputChange, 
  onSaveProfile 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
                onChange={onInputChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onInputChange}
              />
            </div>
            <div>
              <Label htmlFor="university">University</Label>
              <Input
                id="university"
                name="university"
                value={formData.university}
                onChange={onInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="major">Major</Label>
                <Input
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <Label htmlFor="yearOfStudy">Year of Study</Label>
                <Input
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={onSaveProfile}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
