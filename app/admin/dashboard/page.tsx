"use client";

import AdminLayout from "@/src/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Building, Settings } from "lucide-react";

const stats = [
	{
		name: "Total Users",
		value: "1,234",
		icon: Users,
		description: "Active users across all roles",
	},
	{
		name: "Active Courses",
		value: "56",
		icon: BookOpen,
		description: "Courses currently in session",
	},
	{
		name: "Departments",
		value: "12",
		icon: Building,
		description: "Academic departments",
	},
	{
		name: "System Status",
		value: "Healthy",
		icon: Settings,
		description: "All systems operational",
	},
];

export default function AdminDashboard() {
	return (
		<AdminLayout>
			<div className="space-y-6">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
					<p className="text-muted-foreground">Welcome to your admin dashboard. Here's an overview of your system.</p>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat) => (
						<Card key={stat.name}>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
								<stat.icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{stat.value}</div>
								<p className="text-xs text-muted-foreground">{stat.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</AdminLayout>
	);
}
