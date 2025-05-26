import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Welcome to Discusy",
	description: "Modern Educational Discussions",
};

export default function SplashLayout({ children }: { children: React.ReactNode }) {
	return <div className="min-h-screen bg-background">{children}</div>;
}
