"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, MessageSquare, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
	{ name: "Home", href: "/", icon: Home },
	{ name: "Courses", href: "/courses", icon: Book },
	{ name: "Discussions", href: "/discussions", icon: MessageSquare },
	{ name: "Notifications", href: "/notifications", icon: Bell },
	{ name: "Profile", href: "/profile", icon: User },
];

export default function NavigationTabs() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-around">
					{navigation.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link key={item.name} href={item.href} className={cn("flex flex-col items-center justify-center gap-1 px-3 py-2 text-sm font-medium transition-colors", isActive ? "text-primary" : "text-muted-foreground hover:text-primary")}>
								<item.icon className="h-5 w-5" />
								<span className="text-xs">{item.name}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
