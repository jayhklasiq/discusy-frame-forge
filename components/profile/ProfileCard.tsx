"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

interface ProfileCardProps {
	email?: string;
	phone?: string;
	location?: string;
	joinDate?: string;
}

export function ProfileCard({ email, phone, location, joinDate }: ProfileCardProps) {
	const items = [
		{ icon: Mail, label: "Email", value: email },
		{ icon: Phone, label: "Phone", value: phone },
		{ icon: MapPin, label: "Location", value: location },
		{ icon: Calendar, label: "Joined", value: joinDate },
	].filter((item) => item.value);

	if (items.length === 0) return null;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Contact Information</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 sm:grid-cols-2">
					{items.map(({ icon: Icon, label, value }) => (
						<div key={label} className="flex items-center space-x-2">
							<Icon className="h-4 w-4 text-muted-foreground" />
							<div>
								<p className="text-sm font-medium">{label}</p>
								<p className="text-sm text-muted-foreground">{value}</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
