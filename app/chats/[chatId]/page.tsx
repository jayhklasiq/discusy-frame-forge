"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, MoreVertical, Users, Plus } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";
import { getChatById, getMessagesByChatId } from "@/utils/dataLoader";

interface Message {
	id: number;
	text: string;
	sender: string;
	timestamp: string;
	isCurrentUser: boolean;
}

interface ChatRoomData {
	id: number;
	title: string;
	participants: string[];
	messages: Message[];
}

export default function ChatRoomPage({ params }: { params: { chatId: string } }) {
	const router = useRouter();
	const [message, setMessage] = useState("");
	const [chatData, setChatData] = useState<ChatRoomData | null>(null);

	useEffect(() => {
		const chatId = params.chatId;
		if (!chatId) return;

		const chat = getChatById(Number(chatId));
		const messages = getMessagesByChatId(chatId);

		if (chat) {
			setChatData({
				id: chat.id,
				title: chat.title,
				participants: chat.participants || ["You", "John Doe", "Jane Smith", "Alex Johnson"],
				messages,
			});
		}
	}, [params.chatId]);

	const handleSendMessage = () => {
		if (!message.trim() || !chatData) return;

		const newMessage: Message = {
			id: chatData.messages.length + 1,
			text: message,
			sender: "You",
			timestamp: "Just now",
			isCurrentUser: true,
		};

		setChatData({
			...chatData,
			messages: [...chatData.messages, newMessage],
		});

		setMessage("");
	};

	if (!chatData) {
		return <div className="flex items-center justify-center h-screen">Loading...</div>;
	}

	return (
		<div className="min-h-screen bg-gray-50 pb-16 flex flex-col">
			{/* Header */}
			<header className="bg-discusy-blue text-white p-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Button variant="ghost" size="icon" className="mr-2 text-white" onClick={() => router.push("/chats")}>
							<ArrowLeft size={20} />
						</Button>
						<div>
							<h1 className="text-xl font-bold">{chatData.title}</h1>
							<p className="text-xs opacity-80">{chatData.participants.join(", ")}</p>
						</div>
					</div>
					<div className="flex">
						<Button variant="ghost" size="icon" className="text-white">
							<Users size={20} />
						</Button>
						<Button variant="ghost" size="icon" className="text-white">
							<MoreVertical size={20} />
						</Button>
					</div>
				</div>
			</header>

			{/* Messages */}
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{chatData.messages.map((msg) => (
					<div key={msg.id} className={`flex ${msg.isCurrentUser ? "justify-end" : "justify-start"}`}>
						<div className={`max-w-3/4 rounded-lg px-4 py-2 ${msg.isCurrentUser ? "bg-discusy-blue text-white" : "bg-gray-200 text-gray-800"}`}>
							{!msg.isCurrentUser && <p className="text-xs font-semibold">{msg.sender}</p>}
							<p>{msg.text}</p>
							<p className="text-xs opacity-70 text-right mt-1">{msg.timestamp}</p>
						</div>
					</div>
				))}
			</div>

			{/* Message Input */}
			<div className="p-4 bg-white border-t border-gray-200 flex items-center">
				<Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} className="flex-grow" onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
				<Button variant="ghost" size="icon" className="ml-2 text-discusy-blue" onClick={handleSendMessage} disabled={!message.trim()}>
					<Send size={20} />
				</Button>
			</div>

			<div className="fixed bottom-20 right-6">
				<Button size="icon" className="h-12 w-12 rounded-full bg-discusy-blue hover:bg-discusy-blue/90 shadow-lg" onClick={() => router.push("/create-chat")}>
					<Plus size={24} />
				</Button>
			</div>

			{/* Navigation */}
			<NavigationTabs />
		</div>
	);
}
