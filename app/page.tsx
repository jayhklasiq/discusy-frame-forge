"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
	const router = useRouter();

	useEffect(() => {
		router.push("/splash");
	}, [router]);

	return null; // This page will immediately redirect, so no need to render anything
}
