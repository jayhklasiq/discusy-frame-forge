"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

interface CourseHeaderProps {
	onSearch: (query: string) => void;
	onFilterClick: () => void;
}

export default function CourseHeader({ onSearch, onFilterClick }: CourseHeaderProps) {
	return (
		<div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center gap-4">
				<div className="flex flex-1 items-center gap-4">
					<div className="relative flex-1 max-w-sm">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input placeholder="Search courses..." className="pl-8" onChange={(e) => onSearch(e.target.value)} />
					</div>
					<Button variant="outline" size="icon" onClick={onFilterClick} className="shrink-0">
						<SlidersHorizontal className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
