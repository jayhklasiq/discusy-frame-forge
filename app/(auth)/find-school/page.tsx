"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function FindSchoolPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [suggestedDomains, setSuggestedDomains] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate domain lookup
    setTimeout(() => {
      setIsLoading(false);
      // For now, just show some example domains
      setSuggestedDomains(["example.edu", "university.edu", "college.edu"]);
    }, 1000);
  };

  const handleDomainSelect = (domain: string) => {
    router.push(`/login?domain=${domain}`);
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Find Your School</h1>
          <p className="text-sm text-muted-foreground">Enter your school name to find your .edu domain</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Find Your School Domain</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="schoolName">School Name</Label>
                <Input
                  id="schoolName"
                  placeholder="e.g., Harvard University"
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              <Button disabled={isLoading} className="w-full">
                {isLoading ? "Looking up..." : "Find Domain"}
              </Button>
            </form>

            {suggestedDomains.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium">Suggested Domains:</p>
                <div className="space-y-2">
                  {suggestedDomains.map((domain) => (
                    <Button
                      key={domain}
                      variant="outline"
                      onClick={() => handleDomainSelect(domain)}
                      className="w-full justify-start"
                    >
                      {domain}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="hover:text-primary">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
