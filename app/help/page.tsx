"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail, Phone } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "How do I create a new chat?",
		answer: "To create a new chat, click the '+' button in the bottom right corner of the Chats page. You can then add participants and set a chat title.",
	},
	{
		question: "How do I join a course?",
		answer: "You can join a course by visiting the Courses page, selecting a course, and clicking the 'Join Course' button. You'll need to be enrolled in the course through your institution.",
	},
	{
		question: "How do I change my notification settings?",
		answer: "You can manage your notification settings by going to the Profile page and selecting the 'Notifications' tab. Here you can customize which notifications you receive.",
	},
	{
		question: "How do I report an issue?",
		answer: "You can report issues by clicking the 'Contact Support' button below and filling out the support form. Our team will get back to you as soon as possible.",
	},
	{
		question: "How do I update my profile?",
		answer: "You can update your profile information by going to the Profile page and clicking the 'Edit' button. Here you can change your name, email, and other details.",
	},
];

export default function HelpPage() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

	const filteredFaqs = faqs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

	const toggleFaq = (index: number) => {
		setExpandedFaqs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
	};

	return (
		<div className="min-h-screen bg-gray-50 pb-16">
			{/* Header */}
			<header className="bg-discusy-blue text-white p-4">
				<h1 className="text-xl font-bold">Help & Support</h1>
			</header>

			{/* Search */}
			<div className="p-4 bg-white">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
					<Input placeholder="Search help topics..." className="pl-10 bg-gray-100 border-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
				</div>
			</div>

			{/* Content */}
			<div className="p-4 space-y-4">
				{/* FAQs */}
				<Card>
					<CardContent className="p-4">
						<h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
						<div className="space-y-4">
							{filteredFaqs.map((faq, index) => (
								<div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
									<button className="w-full flex justify-between items-center text-left" onClick={() => toggleFaq(index)}>
										<span className="font-medium">{faq.question}</span>
										{expandedFaqs.includes(index) ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
									</button>
									{expandedFaqs.includes(index) && <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>}
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Contact Support */}
				<Card>
					<CardContent className="p-4">
						<h2 className="text-lg font-semibold mb-4">Contact Support</h2>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<MessageCircle size={20} className="text-discusy-blue" />
								<div>
									<h3 className="font-medium">Live Chat</h3>
									<p className="text-sm text-gray-500">Available 24/7</p>
								</div>
								<Button variant="outline" className="ml-auto" onClick={() => router.push("/support/chat")}>
									Start Chat
								</Button>
							</div>
							<div className="flex items-center gap-3">
								<Mail size={20} className="text-discusy-blue" />
								<div>
									<h3 className="font-medium">Email Support</h3>
									<p className="text-sm text-gray-500">support@discusy.com</p>
								</div>
								<Button variant="outline" className="ml-auto" onClick={() => router.push("/support/email")}>
									Send Email
								</Button>
							</div>
							<div className="flex items-center gap-3">
								<Phone size={20} className="text-discusy-blue" />
								<div>
									<h3 className="font-medium">Phone Support</h3>
									<p className="text-sm text-gray-500">+1 (555) 123-4567</p>
								</div>
								<Button variant="outline" className="ml-auto" onClick={() => router.push("/support/phone")}>
									Call Now
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<NavigationTabs />
		</div>
	);
}
