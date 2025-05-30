"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, MessageSquare, Users } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";
import { Input } from "@/components/ui/input";
import { getRegularChats, getCourseChats } from "@/utils/dataLoader";

export default function ChatsPage() {
	const router = useRouter();

	const allChats = getRegularChats();
	const courseChats = getCourseChats();

	const handleChatClick = (chatId: number) => {
		router.push(`/chats/${chatId}`);
	};

	return (
		<div className="min-h-screen bg-gray-50 pb-16">
			{/* Header */}
			<header className="bg-discusy-blue text-white p-4">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-bold">Group Chats</h1>
					<Button variant="ghost" size="icon" className="text-white" onClick={() => router.push("/create-chat")}>
						<Plus size={24} />
					</Button>
				</div>
			</header>

			{/* Search Bar */}
			<div className="p-4 bg-white">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
					<Input placeholder="Search chats" className="pl-10 bg-gray-100 border-none" />
				</div>
			</div>

			{/* Content */}
			<div className="p-4">
				<Tabs defaultValue="all" className="w-full">
					<TabsList className="grid w-full grid-cols-2 mb-4">
						<TabsTrigger value="all">All Chats</TabsTrigger>
						<TabsTrigger value="course">Course Chats</TabsTrigger>
					</TabsList>

					<TabsContent value="all" className="space-y-4">
						{allChats.map((chat) => (
							<Card key={chat.id} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleChatClick(chat.id)}>
								<CardContent className="p-3">
									<div className="flex items-center">
										<div className="w-10 h-10 rounded-full bg-discusy-blue flex items-center justify-center text-white mr-3">
											<MessageSquare size={18} />
										</div>
										<div className="flex-1">
											<h3 className="font-medium">{chat.title}</h3>
											<p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-xs text-gray-500 mb-1">{chat.time}</span>
											{chat.unread > 0 && <span className="bg-discusy-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{chat.unread}</span>}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</TabsContent>

					<TabsContent value="course" className="space-y-4">
						{courseChats.map((chat) => (
							<Card key={chat.id} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleChatClick(chat.id)}>
								<CardContent className="p-3">
									<div className="flex items-center">
										<div className="w-10 h-10 rounded-full bg-discusy-green flex items-center justify-center text-white mr-3">
											<Users size={18} />
										</div>
										<div className="flex-1">
											<h3 className="font-medium">{chat.title}</h3>
											<p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-xs text-gray-500 mb-1">{chat.time}</span>
											{chat.unread > 0 && <span className="bg-discusy-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{chat.unread}</span>}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</TabsContent>
				</Tabs>
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
