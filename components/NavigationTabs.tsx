"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/use-navigation";
import { NavigationTab } from "@/lib/navigation";
import { Home, Book, MessageSquare, Bell, User } from "lucide-react";
import { Button } from "./ui/button";

// Map of icon names to components
const iconMap = {
	Home,
	Book,
	MessageSquare,
	Bell,
	User,
};

interface NavigationTabsProps {
	className?: string;
	customTabs?: NavigationTab[];
}

export default function NavigationTabs({ className, customTabs }: NavigationTabsProps) {
	const pathname = usePathname();
	const { showCreateChat, showCreateCourse } = useNavigation();

	// Define the navigation tabs
	const defaultTabs = [
		{ label: "Home", href: "/dashboard", icon: "Home" },
		{ label: "Courses", href: "/courses", icon: "Book" },
		{ label: "Chats", href: "/chats", icon: "MessageSquare" },
		{ label: "Notifications", href: "/notifications", icon: "Bell" },
		{ label: "Profile", href: "/profile", icon: "User" },
	];

	const activeTabs = customTabs || defaultTabs;

	return (
		<nav className={cn("fixed bottom-0 left-0 right-0 bg-discusy-dark border-t bg-slate-700 border-gray-800 z-50", className)}>
			<div className="max-w-screen-xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex-1 flex items-center justify-around">
						{activeTabs.map((tab) => {
							const isActive = pathname === tab.href ||
								(tab.href !== '/' && pathname.startsWith(tab.href));
							const Icon = tab.icon ? iconMap[tab.icon as keyof typeof iconMap] : null;

							return (
								<Link
									key={tab.href}
									href={tab.href}
									className={cn(
										"flex flex-col items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors w-full",
										isActive
											? "text-white bg-discusy-primary/20"
											: "text-gray-300 hover:text-white hover:bg-discusy-dark/50"
									)}
									aria-current={isActive ? 'page' : undefined}
								>
									{Icon && (
										<Icon
											className={cn(
												"h-5 w-5 mb-1",
												isActive ? "text-white" : "text-gray-300"
											)}
										/>
									)}
									<span className={cn(
										"text-xs sm:text-sm",
										isActive ? "text-white font-medium" : "text-gray-300"
									)}>
										{tab.label}
									</span>
								</Link>
							);
						})}
					</div>

					{/* Action Buttons - Only show if user has appropriate permissions */}
					<div className="flex items-center space-x-2">
						{showCreateChat && (
							<Button
								variant="ghost"
								size="icon"
								className="text-gray-300 hover:text-white hover:bg-discusy-primary/20"
								asChild
								aria-label="Create new chat"
							>
								<Link href="/create-chat">
									<MessageSquare className="h-5 w-5" />
								</Link>
							</Button>
						)}
						{showCreateCourse && (
							<Button
								variant="ghost"
								size="icon"
								className="text-gray-300 hover:text-white hover:bg-discusy-primary/20"
								asChild
								aria-label="Create new course"
							>
								<Link href="/instructor/create-course">
									<Book className="h-5 w-5" />
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}