"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MessageSquare } from "lucide-react";
import { CourseDetails } from "@/types/course";
import { cn } from "@/lib/utils";

interface CourseCardProps {
	course: CourseDetails;
	className?: string;
	onJoinCourse?: (courseId: number) => void;
}

export function CourseCard({ course, className, onJoinCourse }: CourseCardProps) {
	const handleClick = (e: React.MouseEvent) => {
		if (onJoinCourse) {
			e.preventDefault(); // Prevent navigation if we have an onJoinCourse handler
			onJoinCourse(course.id);
		}
	};

	return (
		<Link href={`/courses/${course.id}`} onClick={handleClick}>
			<Card className={cn("h-full transition-colors hover:bg-muted/50", className)}>
				<CardHeader className="p-0">
					<div className="relative h-48 w-full">
						<Image src={course.imageUrl || "https://picsum.photos/seed/course/400/200"} alt={course.title} fill className="object-cover" />
						<div className="absolute right-2 top-2">
							<Badge variant={course.status === "active" ? "default" : "secondary"}>{course.status}</Badge>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-4">
					<div className="space-y-2">
						<div className="flex items-start justify-between gap-2">
							<h3 className="font-semibold leading-none tracking-tight">{course.title}</h3>
							<Badge variant="outline" className="shrink-0">
								{course.code}
							</Badge>
						</div>
						<p className="text-sm text-muted-foreground line-clamp-2">{course.description || `${course.department} - ${course.semester}`}</p>
						<div className="flex items-center gap-2">
							<span className="text-sm text-muted-foreground">{course.instructor}</span>
						</div>
					</div>
				</CardContent>
				<CardFooter className="p-4 pt-0">
					<div className="flex w-full items-center justify-between text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Clock className="h-4 w-4" />
							<span>{course.nextClass}</span>
						</div>
						<div className="flex items-center gap-2">
							<Users className="h-4 w-4" />
							<span>{course.enrolledStudents}</span>
						</div>
						<div className="flex items-center gap-2">
							<MessageSquare className="h-4 w-4" />
							<span>{course.activeChats}</span>
						</div>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
