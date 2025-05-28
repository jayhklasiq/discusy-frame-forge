"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <Button 
        onClick={() => router.push("/login")}
        className="w-full max-w-sm"
      >
        Go to Sign In
      </Button>
    </div>
  );
}
