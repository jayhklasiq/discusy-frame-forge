"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashPage() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push("/onboarding");
		}, 2000);

		return () => clearTimeout(timer);
	}, [router]);

	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 0.5,
					ease: "easeOut",
				}}
				className="text-center space-y-4"
			>
				<motion.div
					initial={{ y: 20 }}
					animate={{ y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<Image src="/logo.png" alt="Discusy Logo" width={180} height={180} className="mx-auto rounded-xl shadow-lg" priority />
				</motion.div>

				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.5,
						delay: 0.4,
						ease: "easeOut",
					}}
					className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
				>
					Discusy
				</motion.h1>

				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.5,
						delay: 0.6,
						ease: "easeOut",
					}}
					className="text-muted-foreground"
				>
					Modern Educational Discussions
				</motion.p>
			</motion.div>
		</div>
	);
}
