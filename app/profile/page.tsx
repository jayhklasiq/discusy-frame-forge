"use client";

import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { StatsCard } from "@/components/profile/StatsCard";
import NavigationTabs from "@/components/NavigationTabs";

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
	const { name, role, avatarUrl, bio, email, phone, location, joinDate, coursesEnrolled, messagesSent, coursesCompleted, achievements } = mockProfileData;

	return (
		<div className="min-h-screen bg-gray-50 pb-16">
			<div className="container mx-auto max-w-5xl p-4">
				<div className="space-y-6">
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
