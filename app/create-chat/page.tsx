"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, ArrowLeft, X } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";

export default function CreateChatPage() {
	const router = useRouter();
	const [chatTitle, setChatTitle] = useState("");
	const [participants, setParticipants] = useState<string[]>([]);
	const [currentParticipant, setCurrentParticipant] = useState("");

	const handleAddParticipant = () => {
		if (currentParticipant.trim() && !participants.includes(currentParticipant)) {
			setParticipants([...participants, currentParticipant]);
			setCurrentParticipant("");
		}
	};

	const handleRemoveParticipant = (participant: string) => {
		setParticipants(participants.filter((p) => p !== participant));
	};

	const handleCreateChat = () => {
		// In a real app, we would create the chat on the backend
		console.log("Creating chat:", {
			title: chatTitle,
			participants,
		});

		// Navigate to the chats page
		router.push("/chats");
	};

	return (
		<div className="min-h-screen bg-gray-50 pb-16">
			{/* Header */}
			<header className="bg-discusy-blue text-white p-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Button variant="ghost" size="icon" className="mr-2 text-white" onClick={() => router.back()}>
							<ArrowLeft size={20} />
						</Button>
						<h1 className="text-xl font-bold">Create New Chat</h1>
					</div>
				</div>
			</header>

			{/* Content */}
			<div className="p-4">
				<div className="space-y-4">
					<div>
						<label htmlFor="chatTitle" className="text-sm font-medium text-gray-700 block mb-1">
							Chat Title
						</label>
						<Input id="chatTitle" placeholder="Enter chat title" value={chatTitle} onChange={(e) => setChatTitle(e.target.value)} />
					</div>

					<div>
						<label htmlFor="participants" className="text-sm font-medium text-gray-700 block mb-1">
							Add Participants
						</label>
						<div className="flex">
							<Input id="participants" placeholder="Enter email or name" value={currentParticipant} onChange={(e) => setCurrentParticipant(e.target.value)} className="flex-grow" onKeyPress={(e) => e.key === "Enter" && handleAddParticipant()} />
							<Button variant="outline" className="ml-2" onClick={handleAddParticipant}>
								<UserPlus size={20} />
							</Button>
						</div>
					</div>

					{participants.length > 0 && (
						<div className="mt-4">
							<h3 className="text-sm font-medium text-gray-700 mb-2">Participants:</h3>
							<div className="flex flex-wrap gap-2">
								{participants.map((participant, index) => (
									<div key={index} className="bg-discusy-blue text-white px-3 py-1 rounded-full text-sm flex items-center">
										{participant}
										<button className="ml-2" onClick={() => handleRemoveParticipant(participant)}>
											<X size={14} />
										</button>
									</div>
								))}
							</div>
						</div>
					)}

					<Button className="w-full mt-6" onClick={handleCreateChat} disabled={!chatTitle}>
						Create Chat
					</Button>
				</div>
			</div>

			{/* Navigation */}
			<NavigationTabs />
		</div>
	);
}
