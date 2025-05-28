import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-background">
			<div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<Image src="/logo.svg" alt="Discusy Logo" width={32} height={32} className="mr-2" />
						Discusy
					</div>
					<div className="relative z-20 flex items-center justify-center h-full">
						<blockquote className="space-y-2 text-center">
							<p className="text-lg">&ldquo;This platform has transformed how our students engage with course material and each other. The discussion features are intuitive and foster meaningful academic conversations.&rdquo;</p>
							<footer className="text-sm">Sofia Davis, Professor of Computer Science</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8 lg:px-16 lg:py-8">{children}</div>
			</div>
		</div>
	);
}
