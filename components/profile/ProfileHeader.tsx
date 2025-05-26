"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Link from "next/link";

interface ProfileHeaderProps {
	name: string;
	role: string;
	avatarUrl?: string;
	bio?: string;
}

export function ProfileHeader({ name, role, avatarUrl, bio }: ProfileHeaderProps) {
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase();

	return (
		<Card className="mb-6">
			<CardContent className="p-6">
				<div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
					<Avatar className="h-24 w-24">
						<AvatarImage src={avatarUrl} alt={name} />
						<AvatarFallback className="text-lg">{initials}</AvatarFallback>
					</Avatar>
					<div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
						<div className="flex w-full items-center justify-between">
							<div>
								<h1 className="text-2xl font-bold">{name}</h1>
								<p className="text-muted-foreground">{role}</p>
							</div>
							<Button variant="outline" size="icon" asChild>
								<Link href="/settings">
									<Settings className="h-4 w-4" />
									<span className="sr-only">Settings</span>
								</Link>
							</Button>
						</div>
						{bio && <p className="mt-2 text-sm text-muted-foreground">{bio}</p>}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
