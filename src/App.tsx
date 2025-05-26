
"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<div className="min-h-screen">
					{/* Your app content will go here */}
					<h1>Discusy App</h1>
				</div>
				<Toaster />
				<Sonner />
			</TooltipProvider>
		</QueryClientProvider>
	);
}
