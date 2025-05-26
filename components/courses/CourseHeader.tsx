"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface CourseHeaderProps {
	onSearch: (query: string) => void;
	onFilterClick: () => void;
}

export default function CourseHeader({ onSearch, onFilterClick }: CourseHeaderProps) {
	return (
		<div className="bg-white p-4 space-y-4">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-bold">Courses</h1>
				<Button variant="outline" size="icon" onClick={onFilterClick}>
					<Filter size={20} />
				</Button>
			</div>

			<div className="relative">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
				<Input placeholder="Search courses..." className="pl-10 bg-gray-100 border-none" onChange={(e) => onSearch(e.target.value)} />
			</div>
		</div>
	);
}
