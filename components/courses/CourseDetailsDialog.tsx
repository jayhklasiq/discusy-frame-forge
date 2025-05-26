"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MessageSquare, Calendar, BookOpen } from "lucide-react";
import { CourseDetails } from "@/types/course";

interface CourseDetailsDialogProps {
	isOpen: boolean;
	onClose: () => void;
	course: CourseDetails | null;
	onJoinCourse: (courseId: number) => void;
}

export default function CourseDetailsDialog({ isOpen, onClose, course, onJoinCourse }: CourseDetailsDialogProps) {
	if (!course) return null;

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<div className="flex items-start justify-between gap-4">
						<DialogTitle className="text-2xl">{course.title}</DialogTitle>
						<Badge variant="outline" className="shrink-0 text-base">
							{course.code}
						</Badge>
					</div>
				</DialogHeader>

				<div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
					<img src={course.imageUrl || "https://picsum.photos/seed/course/800/400"} alt={course.title} className="w-full h-full object-cover" />
					<div className="absolute right-2 top-2">
						<Badge variant={course.status === "active" ? "default" : "secondary"}>{course.status}</Badge>
					</div>
				</div>

				<div className="space-y-6">
					<div>
						<h3 className="font-semibold mb-2">Course Information</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex items-center gap-2">
								<BookOpen className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">{course.department}</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">{course.semester}</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">{course.schedule}</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">
									{course.enrolledStudents} students enrolled
									{course.maxStudents && ` (max ${course.maxStudents})`}
								</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className="font-semibold mb-2">Instructor</h3>
						<p className="text-muted-foreground">{course.instructor}</p>
					</div>

					{course.description && (
						<div>
							<h3 className="font-semibold mb-2">About this course</h3>
							<p className="text-muted-foreground">{course.description}</p>
						</div>
					)}

					{course.tags && course.tags.length > 0 && (
						<div>
							<h3 className="font-semibold mb-2">Tags</h3>
							<div className="flex flex-wrap gap-2">
								{course.tags.map((tag) => (
									<Badge key={tag} variant="outline">
										{tag}
									</Badge>
								))}
							</div>
						</div>
					)}

					<div className="flex items-center justify-between pt-4 border-t">
						<div className="flex items-center gap-2">
							<MessageSquare className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">{course.activeChats} active discussions</span>
						</div>
						<div className="flex gap-4">
							<Button variant="outline" onClick={onClose}>
								Close
							</Button>
							{course.status === "active" && <Button onClick={() => onJoinCourse(course.id)}>Join Course</Button>}
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
