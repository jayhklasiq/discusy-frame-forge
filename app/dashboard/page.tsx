"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";

export default function DashboardPage() {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="bg-primary text-background p-4">
				<div className="flex items-center justify-between">
					<h1 className="text-xl font-bold">Dashboard</h1>
					<Button variant="ghost" className="text-muted-foreground">
						Profile
					</Button>
				</div>
			</header>

			{/* Main Content */}
			<main className="p-4 space-y-6">
				{/* Recent Chats */}
				<div className="space-y-4">
					<h2 className="text-lg font-semibold">Recent Chats</h2>
					<div className="space-y-3">
						{[1, 2].map((item) => (
							<Card key={item} className="shadow-sm">
								<CardContent className="p-4 flex justify-between items-start">
									<div>
										<h3 className="font-medium">Group Chat {item}</h3>
										<p className="text-sm text-muted-foreground">Last activity: 2h ago</p>
									</div>
									<div className="flex items-center text-primary">
										<MessageSquare size={20} />
										<span className="ml-1 text-sm">3</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					<Button 
						variant="outline" 
						className="w-full flex items-center justify-center gap-2"
						onClick={() => router.push("/create-chat")}
					>
						<MessageSquare size={18} />
						<span>Create New Chat</span>
					</Button>
				</div>

				{/* Upcoming Events */}
				<div className="space-y-4">
					<h2 className="text-lg font-semibold">Upcoming Events</h2>
					<div className="space-y-3">
						{[1, 2].map((item) => (
							<Card key={item} className="shadow-sm">
								<CardContent className="p-4">
									<div className="flex justify-between items-start">
										<div>
											<h3 className="font-medium">Study Session {item}</h3>
											<p className="text-sm text-muted-foreground">Tomorrow at 2:00 PM</p>
										</div>
										<Button variant="outline" size="sm">
											Join
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</main>

			{/* Navigation */}
			<NavigationTabs />
		</div>
	);
}
