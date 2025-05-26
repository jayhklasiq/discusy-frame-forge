"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Users, Building, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
	{ name: "Courses", href: "/admin/courses", icon: BookOpen },
	{ name: "Users", href: "/admin/users", icon: Users },
	{ name: "Departments", href: "/admin/departments", icon: Building },
	{ name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<div className="hidden md:flex md:w-64 md:flex-col">
				<div className="flex min-h-0 flex-1 flex-col border-r border-border bg-background">
					<div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
						<div className="flex flex-shrink-0 items-center px-4">
							<h1 className="text-xl font-semibold">Admin Panel</h1>
						</div>
						<nav className="mt-5 flex-1 space-y-1 px-2">
							{navigation.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link key={item.name} href={item.href} className={cn(isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground", "group flex items-center px-2 py-2 text-sm font-medium rounded-md")}>
										<item.icon className={cn(isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground", "mr-3 flex-shrink-0 h-6 w-6")} aria-hidden="true" />
										{item.name}
									</Link>
								);
							})}
						</nav>
					</div>
				</div>
			</div>

			{/* Main content */}
			<div className="flex flex-1 flex-col">
				<main className="flex-1">
					<div className="py-6">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{children}</div>
					</div>
				</main>
			</div>
		</div>
	);
}
