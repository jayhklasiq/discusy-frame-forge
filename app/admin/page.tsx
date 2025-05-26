"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Building2, MessageSquare } from "lucide-react";

// Mock data - replace with actual data fetching
const stats = [
	{
		title: "Total Courses",
		value: "24",
		description: "Active courses this semester",
		icon: BookOpen,
	},
	{
		title: "Total Instructors",
		value: "12",
		description: "Active instructors",
		icon: Users,
	},
	{
		title: "Total Students",
		value: "1,234",
		description: "Enrolled students",
		icon: Users,
	},
	{
		title: "Total Departments",
		value: "8",
		description: "Active departments",
		icon: Building2,
	},
];

const recentActivity = [
	{
		title: "New Course Created",
		description: "Introduction to Computer Science",
		time: "2 hours ago",
	},
	{
		title: "New Instructor Joined",
		description: "Dr. Sarah Johnson",
		time: "5 hours ago",
	},
	{
		title: "Course Updated",
		description: "Advanced Mathematics",
		time: "1 day ago",
	},
	{
		title: "New Department Created",
		description: "Computer Engineering",
		time: "2 days ago",
	},
];

export default function AdminDashboardPage() {
	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => (
					<Card key={stat.title}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
							<stat.icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<p className="text-xs text-muted-foreground">{stat.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Recent Activity</CardTitle>
						<CardDescription>Latest updates and changes in the system</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-8">
							{recentActivity.map((activity, index) => (
								<div key={index} className="flex items-center">
									<div className="ml-4 space-y-1">
										<p className="text-sm font-medium leading-none">{activity.title}</p>
										<p className="text-sm text-muted-foreground">{activity.description}</p>
									</div>
									<div className="ml-auto font-medium">{activity.time}</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
				<Card className="col-span-3">
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
						<CardDescription>Common administrative tasks</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center space-x-4 rounded-md border p-4">
								<BookOpen className="h-5 w-5" />
								<div className="flex-1 space-y-1">
									<p className="text-sm font-medium leading-none">Create New Course</p>
									<p className="text-sm text-muted-foreground">Add a new course to the system</p>
								</div>
							</div>
							<div className="flex items-center space-x-4 rounded-md border p-4">
								<Users className="h-5 w-5" />
								<div className="flex-1 space-y-1">
									<p className="text-sm font-medium leading-none">Add New Instructor</p>
									<p className="text-sm text-muted-foreground">Register a new instructor account</p>
								</div>
							</div>
							<div className="flex items-center space-x-4 rounded-md border p-4">
								<Building2 className="h-5 w-5" />
								<div className="flex-1 space-y-1">
									<p className="text-sm font-medium leading-none">Manage Departments</p>
									<p className="text-sm text-muted-foreground">Update department information</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
