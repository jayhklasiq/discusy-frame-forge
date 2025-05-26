"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Users, BookOpen, Building2, Settings, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems = [
	{
		title: "Dashboard",
		href: "/admin",
		icon: LayoutDashboard,
	},
	{
		title: "Courses",
		href: "/admin/courses",
		icon: BookOpen,
	},
	{
		title: "Instructors",
		href: "/admin/instructors",
		icon: Users,
	},
	{
		title: "Students",
		href: "/admin/students",
		icon: Users,
	},
	{
		title: "Departments",
		href: "/admin/departments",
		icon: Building2,
	},
	{
		title: "Settings",
		href: "/admin/settings",
		icon: Settings,
	},
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-40 border-b bg-background">
				<div className="container flex h-16 items-center justify-between py-4">
					<div className="flex items-center gap-2">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon" className="md:hidden">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="pr-0">
								<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
									<div className="flex flex-col space-y-3">
										{sidebarNavItems.map((item) => (
											<Link key={item.href} href={item.href} className={cn("flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground", pathname === item.href ? "bg-accent" : "transparent")}>
												<item.icon className="h-4 w-4" />
												{item.title}
											</Link>
										))}
									</div>
								</ScrollArea>
							</SheetContent>
						</Sheet>
						<Link href="/admin" className="flex items-center gap-2">
							<BookOpen className="h-6 w-6" />
							<span className="font-bold">Discusy Admin</span>
						</Link>
					</div>
				</div>
			</header>
			<div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
				<aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
					<ScrollArea className="h-full py-6 pr-6 lg:py-8">
						<div className="flex flex-col space-y-3">
							{sidebarNavItems.map((item) => (
								<Link key={item.href} href={item.href} className={cn("flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground", pathname === item.href ? "bg-accent" : "transparent")}>
									<item.icon className="h-4 w-4" />
									{item.title}
								</Link>
							))}
						</div>
					</ScrollArea>
				</aside>
				<main className="flex w-full flex-col overflow-hidden">{children}</main>
			</div>
		</div>
	);
}
