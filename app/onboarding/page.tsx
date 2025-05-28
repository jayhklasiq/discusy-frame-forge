"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, GraduationCap, School, Users, Building2 } from "lucide-react";
import Image from "next/image";

const onboardingSteps = [
  {
    title: "Welcome to Discusy",
    description: "Your modern platform for educational discussions and collaboration.",
    icon: GraduationCap,
    image: "/onboarding/welcome.svg"
  },
  {
    title: "Connect with Your School",
    description: "Join your educational community and connect with peers and instructors.",
    icon: School,
    image: "/onboarding/school.svg"
  },
  {
    title: "Join Course Discussions",
    description: "Participate in real-time discussions and group chats for your courses.",
    icon: Users,
    image: "/onboarding/discussions.svg"
  },
  {
    title: "Access Department Resources",
    description: "Get easy access to department-specific resources and announcements.",
    icon: Building2,
    image: "/onboarding/department.svg"
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/login");
    }
  };

  const handleSkip = () => {
    router.push("/login");
  };

  const currentStepData = onboardingSteps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Discusy Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">{currentStepData.title}</CardTitle>
          <p className="text-muted-foreground">{currentStepData.description}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Icon className="w-16 h-16 text-primary" />
          </div>
          
          <Progress 
            value={(currentStep + 1) * (100 / onboardingSteps.length)} 
            className="h-2"
          />
          
          <div className="flex justify-center gap-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? "bg-primary" : "bg-muted-foreground/20"
                }`}
              />
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-muted-foreground"
          >
            Skip to Sign In
          </Button>
          <Button onClick={handleNext}>
            {currentStep === onboardingSteps.length - 1 ? (
              "Get Started"
            ) : (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 