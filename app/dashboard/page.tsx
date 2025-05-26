"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";

export default function DashboardPage() {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-gray-50 pb-16">
			{/* Header */}
			<header className="bg-discusy-blue text-white p-4">
				<h1 className="text-xl font-bold">Dashboard</h1>
			</header>

			{/* Content */}
			<div className="p-4">
				<div className="mb-6">
					<h2 className="text-lg font-semibold mb-3">Recent Chats</h2>
					<div className="space-y-3">
						{[1, 2].map((item) => (
							<Card key={item} className="shadow-sm">
								<CardContent className="p-3 flex justify-between items-center">
									<div>
										<h3 className="font-medium">Group Chat {item}</h3>
										<p className="text-sm text-gray-500">Last activity: 2h ago</p>
									</div>
									<div className="flex items-center text-discusy-blue">
										<MessageSquare size={20} />
										<span className="ml-1 text-sm">3</span>
									</div>
								</CardContent>
							</Card>
						))}
						<Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={() => router.push("/create-chat")}>
							<MessageSquare size={18} />
							<span>Create New Chat</span>
						</Button>
					</div>
				</div>

				<div className="mb-6">
					<h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
					<div className="space-y-3">
						{[1, 2].map((item) => (
							<Card key={item} className="shadow-sm">
								<CardContent className="p-3">
									<div className="flex justify-between items-start">
										<div>
											<h3 className="font-medium">Study Session {item}</h3>
											<p className="text-sm text-gray-500">Tomorrow at 2:00 PM</p>
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
			</div>

			{/* Navigation */}
			<NavigationTabs />
		</div>
	);
}
