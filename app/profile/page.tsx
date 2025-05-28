"use client";

import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { StatsCard } from "@/components/profile/StatsCard";
import NavigationTabs from "@/components/NavigationTabs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Toaster } from "@/components/ui/toaster";
import { LogOut } from "lucide-react";

// Mock data - replace with actual data fetching
const mockProfileData = {
	name: "John Doe",
	role: "Student",
	avatarUrl: "/avatars/john-doe.jpg",
	bio: "Passionate about learning and technology. Currently pursuing a degree in Computer Science.",
	email: "john.doe@example.com",
	phone: "+1 (555) 123-4567",
	location: "New York, USA",
	joinDate: "January 2024",
	coursesEnrolled: 5,
	messagesSent: 128,
	coursesCompleted: 3,
	achievements: 7,
};

export default function ProfilePage() {
	const router = useRouter();
	const { toast } = useToast();

	const handleLogout = () => {
		toast({
			title: "Logged out",
			description: "You have been logged out of your account",
		});
		router.push("/onboarding");
	};

	const handleEditProfile = () => {
		router.push("/settings");
	};

  const { name, role, avatarUrl, bio, email, phone, location, joinDate, coursesEnrolled, messagesSent, coursesCompleted, achievements } = mockProfileData;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto max-w-5xl p-4">
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleEditProfile}>
                Edit Profile
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
          <ProfileHeader name={name} role={role} avatarUrl={avatarUrl} bio={bio} />
          <div className="grid gap-6 md:grid-cols-2">
            <ProfileCard email={email} phone={phone} location={location} joinDate={joinDate} />
            <StatsCard coursesEnrolled={coursesEnrolled} messagesSent={messagesSent} coursesCompleted={coursesCompleted} achievements={achievements} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
}
