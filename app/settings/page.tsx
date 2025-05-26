"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, Sun, Globe, MessageSquare, Bell, Shield } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";

export default function SettingsPage() {
	const router = useRouter();
	const [settings, setSettings] = useState({
		theme: "system",
		language: "en",
		notifications: {
			messages: true,
			mentions: true,
			updates: false,
		},
		privacy: {
			onlineStatus: true,
			readReceipts: true,
			typingIndicator: true,
		},
	});

	const handleThemeChange = (value: string) => {
		setSettings((prev) => ({ ...prev, theme: value }));
	};

	const handleLanguageChange = (value: string) => {
		setSettings((prev) => ({ ...prev, language: value }));
	};

	const handleNotificationChange = (key: keyof typeof settings.notifications) => {
		setSettings((prev) => ({
			...prev,
			notifications: {
				...prev.notifications,
				[key]: !prev.notifications[key],
			},
		}));
	};

	const handlePrivacyChange = (key: keyof typeof settings.privacy) => {
		setSettings((prev) => ({
			...prev,
			privacy: {
				...prev.privacy,
				[key]: !prev.privacy[key],
			},
		}));
	};

	return (
		<div className="min-h-screen bg-gray-50 pb-16">
			{/* Header */}
			<header className="bg-discusy-blue text-white p-4">
				<h1 className="text-xl font-bold">Settings</h1>
			</header>

			{/* Content */}
			<div className="p-4 space-y-4">
				{/* Appearance */}
				<Card>
					<CardContent className="p-4">
						<div className="space-y-4">
							<h2 className="text-lg font-semibold flex items-center gap-2">
								<Sun size={20} />
								Appearance
							</h2>
							<div className="space-y-4">
								<div className="space-y-2">
									<Label>Theme</Label>
									<Select value={settings.theme} onValueChange={handleThemeChange}>
										<SelectTrigger>
											<SelectValue placeholder="Select theme" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="light">Light</SelectItem>
											<SelectItem value="dark">Dark</SelectItem>
											<SelectItem value="system">System</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label>Language</Label>
									<Select value={settings.language} onValueChange={handleLanguageChange}>
										<SelectTrigger>
											<SelectValue placeholder="Select language" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="es">Español</SelectItem>
											<SelectItem value="fr">Français</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Notifications */}
				<Card>
					<CardContent className="p-4">
						<div className="space-y-4">
							<h2 className="text-lg font-semibold flex items-center gap-2">
								<Bell size={20} />
								Notifications
							</h2>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label>Messages</Label>
										<p className="text-sm text-gray-500">Receive notifications for new messages</p>
									</div>
									<Switch checked={settings.notifications.messages} onCheckedChange={() => handleNotificationChange("messages")} />
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label>Mentions</Label>
										<p className="text-sm text-gray-500">Receive notifications when mentioned</p>
									</div>
									<Switch checked={settings.notifications.mentions} onCheckedChange={() => handleNotificationChange("mentions")} />
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label>Updates</Label>
										<p className="text-sm text-gray-500">Receive notifications for app updates</p>
									</div>
									<Switch checked={settings.notifications.updates} onCheckedChange={() => handleNotificationChange("updates")} />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Privacy */}
				<Card>
					<CardContent className="p-4">
						<div className="space-y-4">
							<h2 className="text-lg font-semibold flex items-center gap-2">
								<Shield size={20} />
								Privacy
							</h2>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label>Online Status</Label>
										<p className="text-sm text-gray-500">Show when you're online</p>
									</div>
									<Switch checked={settings.privacy.onlineStatus} onCheckedChange={() => handlePrivacyChange("onlineStatus")} />
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label>Read Receipts</Label>
										<p className="text-sm text-gray-500">Show when you've read messages</p>
									</div>
									<Switch checked={settings.privacy.readReceipts} onCheckedChange={() => handlePrivacyChange("readReceipts")} />
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label>Typing Indicator</Label>
										<p className="text-sm text-gray-500">Show when you're typing</p>
									</div>
									<Switch checked={settings.privacy.typingIndicator} onCheckedChange={() => handlePrivacyChange("typingIndicator")} />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Button className="w-full" onClick={() => router.back()}>
					Save Changes
				</Button>
			</div>

			<NavigationTabs />
		</div>
	);
}
