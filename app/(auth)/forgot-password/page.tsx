"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";

export default function ForgotPasswordPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	async function onSubmit(event: React.FormEvent) {
		event.preventDefault();
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setEmailSent(true);
		}, 1000);
	}

	if (emailSent) {
		return (
			<div className="container flex h-screen w-screen flex-col items-center justify-center">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<Icons.mail className="mx-auto h-12 w-12 text-muted-foreground" />
						<h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
						<p className="text-sm text-muted-foreground">We sent you a link to reset your password. If you don't see it, check your spam folder.</p>
					</div>
					<Card>
						<CardFooter>
							<Button variant="outline" className="w-full" onClick={() => setEmailSent(false)}>
								Back to login
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className="container flex h-screen w-screen flex-col items-center justify-center">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">Forgot password</h1>
					<p className="text-sm text-muted-foreground">Enter your email address and we'll send you a link to reset your password</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Reset Password</CardTitle>
						<CardDescription>Enter your email to receive a password reset link</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={onSubmit}>
							<div className="grid gap-4">
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input id="email" placeholder="name@example.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" disabled={isLoading} required />
								</div>
								<Button disabled={isLoading}>
									{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
									Send Reset Link
								</Button>
							</div>
						</form>
					</CardContent>
					<CardFooter>
						<div className="text-sm text-muted-foreground text-center w-full">
							Remember your password?{" "}
							<Link href="/login" className="underline underline-offset-4 hover:text-primary">
								Sign in
							</Link>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
