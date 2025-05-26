"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CourseLevel, CourseStatus } from "@/types/course";

interface CourseFilterDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onApplyFilters: (filters: CourseFilters) => void;
}

export interface CourseFilters {
	level: CourseLevel | "all";
	status: CourseStatus | "all";
	department: string | "all";
}

// Using departments from our JSON data
const departments = ["Computer Science", "Business Administration", "Engineering", "Arts", "Medicine", "Law"];

export default function CourseFilterDialog({ isOpen, onClose, onApplyFilters }: CourseFilterDialogProps) {
	const [filters, setFilters] = React.useState<CourseFilters>({
		level: "all",
		status: "all",
		department: "all",
	});

	const handleApply = () => {
		onApplyFilters(filters);
		onClose();
	};

	const handleReset = () => {
		setFilters({
			level: "all",
			status: "all",
			department: "all",
		});
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Filter Courses</DialogTitle>
				</DialogHeader>

				<div className="grid gap-6 py-4">
					<div className="space-y-4">
						<Label>Course Level</Label>
						<RadioGroup value={filters.level} onValueChange={(value) => setFilters((prev) => ({ ...prev, level: value as CourseLevel | "all" }))}>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="all" id="level-all" />
								<Label htmlFor="level-all">All Levels</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="beginner" id="level-beginner" />
								<Label htmlFor="level-beginner">Beginner</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="intermediate" id="level-intermediate" />
								<Label htmlFor="level-intermediate">Intermediate</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="advanced" id="level-advanced" />
								<Label htmlFor="level-advanced">Advanced</Label>
							</div>
						</RadioGroup>
					</div>

					<div className="space-y-4">
						<Label>Course Status</Label>
						<RadioGroup value={filters.status} onValueChange={(value) => setFilters((prev) => ({ ...prev, status: value as CourseStatus | "all" }))}>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="all" id="status-all" />
								<Label htmlFor="status-all">All Status</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="active" id="status-active" />
								<Label htmlFor="status-active">Active</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="upcoming" id="status-upcoming" />
								<Label htmlFor="status-upcoming">Upcoming</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="completed" id="status-completed" />
								<Label htmlFor="status-completed">Completed</Label>
							</div>
						</RadioGroup>
					</div>

					<div className="space-y-4">
						<Label>Department</Label>
						<RadioGroup value={filters.department} onValueChange={(value) => setFilters((prev) => ({ ...prev, department: value }))}>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="all" id="dept-all" />
								<Label htmlFor="dept-all">All Departments</Label>
							</div>
							{departments.map((dept) => (
								<div key={dept} className="flex items-center space-x-2">
									<RadioGroupItem value={dept} id={`dept-${dept}`} />
									<Label htmlFor={`dept-${dept}`}>{dept}</Label>
								</div>
							))}
						</RadioGroup>
					</div>
				</div>

				<div className="flex justify-end gap-4">
					<Button variant="outline" onClick={handleReset}>
						Reset
					</Button>
					<Button onClick={handleApply}>Apply Filters</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
