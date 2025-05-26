"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
	const { toast } = useToast();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
				<h1 className="text-4xl font-bold mb-8">Welcome to Discusy</h1>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
				<Button
					onClick={() => {
						toast({
							title: "Success!",
							description: "This is a test toast notification.",
						});
					}}
				>
					Show Toast
				</Button>

				<Button
					variant="destructive"
					onClick={() => {
						toast({
							variant: "destructive",
							title: "Error!",
							description: "This is a test error notification.",
						});
					}}
				>
					Show Error Toast
				</Button>

				<Button
					variant="outline"
					onClick={() => {
						toast({
							title: "With Action",
							description: "This toast has an action button.",
							action: (
								<Button variant="outline" size="sm">
									Undo
								</Button>
							),
						});
					}}
				>
					Show Toast with Action
				</Button>
			</div>
		</main>
	);
}
