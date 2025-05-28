"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";

export default function LoginPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [domain, setDomain] = useState("");

	// Get domain from URL if it exists
	const searchParams = new URLSearchParams(window.location.search);
	const urlDomain = searchParams.get("domain");
	useEffect(() => {
		if (urlDomain) {
			setDomain(urlDomain);
		}
	}, [urlDomain]);

	async function onSubmit(event: React.FormEvent) {
		event.preventDefault();
		setIsLoading(true);

		// Simulate domain validation
		setTimeout(() => {
			setIsLoading(false);
			// For now, just redirect to dashboard if domain ends with .edu
			if (domain.toLowerCase().endsWith(".edu")) {
				router.push("/dashboard");
			} else {
				alert("Please enter a valid .edu domain");
			}
		}, 1000);
	}

	return (
		<div className="container flex h-screen flex-col items-center justify-center">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
					<p className="text-sm text-muted-foreground">Enter your school .edu domain to continue</p>
				</div>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
						<CardTitle className="text-sm font-medium">School Domain</CardTitle>
						<Link href="/auth/find-school" className="text-sm text-muted-foreground hover:text-primary">
							Don't know your school domain?
						</Link>
					</CardHeader>
					<CardContent>
						<form onSubmit={onSubmit} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="domain">School .edu Domain</Label>
								<Input
									id="domain"
									placeholder="example.edu"
									type="text"
									value={domain}
									onChange={(e) => setDomain(e.target.value)}
									disabled={isLoading}
									required
								/>
							</div>
							<Button disabled={isLoading} className="w-full">
								{isLoading ? "Loading..." : "Continue"}
							</Button>
						</form>
					</CardContent>
				</Card>

				<div className="px-8 text-center text-sm text-muted-foreground">
					<p>
						By continuing, you agree to our Terms of Service and Privacy Policy
					</p>
				</div>
			</div>
		</div>
	);
}
