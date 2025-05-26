
"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface AppProps {
	children: ReactNode;
}

export default function App({ children }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<div className="min-h-screen">
					{children}
				</div>
				<Toaster />
				<Sonner />
			</TooltipProvider>
		</QueryClientProvider>
	);
}
