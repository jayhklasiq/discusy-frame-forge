"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, BookOpen, Award } from "lucide-react";

interface StatsCardProps {
	coursesEnrolled?: number;
	messagesSent?: number;
	coursesCompleted?: number;
	achievements?: number;
}

export function StatsCard({ coursesEnrolled, messagesSent, coursesCompleted, achievements }: StatsCardProps) {
	const stats = [
		{ icon: BookOpen, label: "Courses Enrolled", value: coursesEnrolled },
		{ icon: MessageSquare, label: "Messages Sent", value: messagesSent },
		{ icon: Award, label: "Courses Completed", value: coursesCompleted },
		{ icon: Users, label: "Achievements", value: achievements },
	].filter((stat) => typeof stat.value === "number");

	if (stats.length === 0) return null;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Statistics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map(({ icon: Icon, label, value }) => (
						<div key={label} className="flex flex-col items-center space-y-1 text-center">
							<Icon className="h-6 w-6 text-muted-foreground" />
							<p className="text-2xl font-bold">{value}</p>
							<p className="text-xs text-muted-foreground">{label}</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
