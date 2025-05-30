"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/onboarding");
	}, [router]);

	return null; // This page will immediately redirect, so no need to render anything
}
