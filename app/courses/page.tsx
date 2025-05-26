"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseCard from "@/components/courses/CourseCard";
import CourseDetailsDialog from "@/components/courses/CourseDetailsDialog";
import CourseFilterDialog, { CourseFilters } from "@/components/courses/CourseFilterDialog";
import NavigationTabs from "@/components/NavigationTabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { mockCourses, CourseDetails } from "@/types/course";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filters, setFilters] = useState<CourseFilters>({
		level: "all",
		status: "all",
		department: "all",
	});
	const { toast } = useToast();

	const filteredCourses = mockCourses.filter((course) => {
		// Search in title, code, and department (since description is optional)
		const searchLower = searchQuery.toLowerCase();
		const matchesSearch = course.title.toLowerCase().includes(searchLower) || course.code.toLowerCase().includes(searchLower) || course.department.toLowerCase().includes(searchLower) || (course.description?.toLowerCase().includes(searchLower) ?? false);

		const matchesLevel = filters.level === "all" || course.level === filters.level;
		const matchesStatus = filters.status === "all" || course.status === filters.status;
		const matchesDepartment = filters.department === "all" || course.department === filters.department;

		return matchesSearch && matchesLevel && matchesStatus && matchesDepartment;
	});

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	const handleFilterClick = () => {
		setIsFilterOpen(true);
	};

	const handleApplyFilters = (newFilters: CourseFilters) => {
		setFilters(newFilters);
	};

	const handleCourseClick = (course: CourseDetails) => {
		setSelectedCourse(course);
		setIsDialogOpen(true);
	};

	const handleJoinCourse = (courseId: number) => {
		// This is just for UI demonstration - functionality will be added later
		toast({
			title: "Course Joined",
			description: "You have successfully joined the course. Course functionality will be available soon.",
		});
		setIsDialogOpen(false);
	};

	return (
		<div className="min-h-screen bg-background pb-16">
			<CourseHeader onSearch={handleSearch} onFilterClick={handleFilterClick} />

			<div className="container py-8">
				<div className="mb-8 space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold">Courses</h1>
							<p className="text-muted-foreground">Browse and enroll in courses offered by our instructors.</p>
						</div>
						{(filters.level !== "all" || filters.status !== "all" || filters.department !== "all") && <div className="text-sm text-muted-foreground">{filteredCourses.length} courses found</div>}
					</div>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
							<Input placeholder="Search courses..." value={searchQuery} onChange={(e) => handleSearch(e.target.value)} className="pl-9" />
						</div>
						<Button variant="outline" onClick={handleFilterClick}>
							<Filter className="mr-2 h-4 w-4" />
							Filters
						</Button>
					</div>
				</div>

				{filteredCourses.length === 0 ? (
					<div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
						<h3 className="mb-2 text-lg font-semibold">No courses found</h3>
						<p className="text-sm text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
					</div>
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{filteredCourses.map((course) => (
							<div key={course.id} onClick={() => handleCourseClick(course)}>
								<CourseCard course={course} />
							</div>
						))}
					</div>
				)}
			</div>

			<CourseDetailsDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} course={selectedCourse} onJoinCourse={handleJoinCourse} />
			<CourseFilterDialog isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} onApplyFilters={handleApplyFilters} />
			<NavigationTabs />
		</div>
	);
}
