"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import DiscusyLogo from "@/components/DiscusyLogo";

type AuthMode = "sso" | "login";

export default function LoginPage() {
	const router = useRouter();
	const [authMode, setAuthMode] = useState<AuthMode>("sso");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleSSOSubmit = () => {
		console.log("Submitting SSO with domain:", email);
		// This would redirect to university login in a real app
		// For demo purposes we'll go straight to dashboard
		router.push("/dashboard");
	};

	const handleLoginSubmit = () => {
		console.log("Logging in with:", email, password);
		router.push("/dashboard");
	};

	return (
		<div className="min-h-screen bg-discusy-blue p-6 flex flex-col">
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="w-full max-w-md">
					<div className="flex flex-col items-center mb-8">
						<DiscusyLogo className="mb-6" />
						<p className="text-white text-xl">Learn together, grow together</p>
					</div>

					{authMode === "sso" ? (
						<div className="w-full animate-fade-in">
							<h2 className="text-white text-2xl font-semibold mb-4 text-center">Sign in with SSO</h2>
							<div className="space-y-4">
								<div>
									<label htmlFor="domain" className="text-white mb-1 block">
										Company domain
									</label>
									<Input id="domain" type="text" placeholder="youruniversity.edu" className="bg-white/90 py-6" value={email} onChange={(e) => setEmail(e.target.value)} />
								</div>

								<Button className="w-full py-6 bg-gray-200 text-discusy-blue hover:bg-gray-300" onClick={handleSSOSubmit}>
									Continue
								</Button>

								<button className="text-white hover:underline w-full text-center mt-4" onClick={() => router.push("/school-info")}>
									I do not know my school domain
								</button>
							</div>
						</div>
					) : (
						<div className="w-full animate-fade-in">
							<h2 className="text-white text-2xl font-semibold mb-4 text-center">Login</h2>
							<div className="space-y-4">
								<div>
									<Input type="email" placeholder="Enter your email" className="bg-white/90 py-6" value={email} onChange={(e) => setEmail(e.target.value)} />
								</div>
								<div>
									<Input type="password" placeholder="Enter your password" className="bg-white/90 py-6" value={password} onChange={(e) => setPassword(e.target.value)} />
								</div>

								<div className="flex items-center space-x-2">
									<Checkbox id="remember" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(!!checked)} />
									<label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
										Remember me?
									</label>
								</div>

								<Button className="w-full py-6 bg-white text-discusy-blue hover:bg-white/90" onClick={handleLoginSubmit}>
									Login
								</Button>

								<button className="text-white/70 hover:underline w-full text-center mt-2">Forgot password?</button>

								<button className="text-white hover:underline w-full text-center mt-4" onClick={() => setAuthMode("sso")}>
									Sign in with school domain instead
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
