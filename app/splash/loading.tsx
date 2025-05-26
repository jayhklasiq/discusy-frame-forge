export default function SplashLoading() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="animate-pulse space-y-4">
				<div className="w-32 h-32 bg-muted rounded-xl mx-auto" />
				<div className="h-8 w-48 bg-muted rounded mx-auto" />
				<div className="h-4 w-64 bg-muted rounded mx-auto" />
			</div>
		</div>
	);
}
