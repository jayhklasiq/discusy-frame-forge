"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/use-navigation";
import { NavigationTab } from "@/lib/navigation";
import { Plus, Home, Book, MessageSquare, Users, Settings, Building } from "lucide-react";
import { Button } from "./ui/button";

// Map of icon names to components
const iconMap = {
	Home,
	Book,
	MessageSquare,
	Users,
	Settings,
	Building,
};

interface NavigationTabsProps {
	className?: string;
	customTabs?: NavigationTab[]; // Optional custom tabs override
}

export default function NavigationTabs({ className, customTabs }: NavigationTabsProps) {
	const pathname = usePathname();
	const { tabs, showCreateChat, showCreateCourse } = useNavigation();
	const activeTabs = customTabs || tabs;

	return (
		<nav className={cn("fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200", className)}>
			<div className="max-w-screen-xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex-1 flex items-center justify-around">
						{activeTabs.map((tab) => {
							const isActive = pathname === tab.href;
							const Icon = tab.icon ? iconMap[tab.icon as keyof typeof iconMap] : null;

							return (
								<Link key={tab.href} href={tab.href} className={cn("flex flex-col items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors", isActive ? "text-discusy-blue" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50")}>
									{Icon && <Icon className="h-5 w-5 mb-1" />}
									<span>{tab.label}</span>
								</Link>
							);
						})}
					</div>

					{/* Action Buttons */}
					<div className="flex items-center space-x-2">
						{showCreateChat && (
							<Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900" asChild>
								<Link href="/create-chat">
									<Plus className="h-5 w-5" />
								</Link>
							</Button>
						)}
						{showCreateCourse && (
							<Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900" asChild>
								<Link href="/instructor/create-course">
									<Plus className="h-5 w-5" />
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
