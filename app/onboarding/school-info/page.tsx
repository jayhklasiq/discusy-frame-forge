"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, GraduationCap, School, ArrowRight } from "lucide-react";

const departments = ["Computer Science", "Business Administration", "Engineering", "Arts", "Medicine", "Law", "Other"];

const years = ["2024", "2023", "2022", "2021", "2020"];

export default function SchoolInfoPage() {
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		schoolName: "",
		studentId: "",
		department: "",
		graduationYear: "",
		role: "student",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (step === 1) {
			setStep(2);
		} else {
			// In a real app, we would save this data
			router.push("/dashboard");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
			<Card className="w-full max-w-2xl">
				<CardHeader className="space-y-4 text-center">
					<div className="flex justify-center mb-4">{step === 1 ? <School className="w-12 h-12 text-primary" /> : <GraduationCap className="w-12 h-12 text-primary" />}</div>
					<CardTitle className="text-2xl font-bold">{step === 1 ? "Tell us about your school" : "Complete your profile"}</CardTitle>
					<p className="text-muted-foreground">{step === 1 ? "Help us connect you with your educational community" : "Add your academic details to get started"}</p>
				</CardHeader>

				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-6">
						{step === 1 ? (
							<>
								<div className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="schoolName">School Name</Label>
										<Input id="schoolName" placeholder="Enter your school name" value={formData.schoolName} onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })} required />
									</div>

									<div className="space-y-2">
										<Label htmlFor="studentId">Student ID</Label>
										<Input id="studentId" placeholder="Enter your student ID" value={formData.studentId} onChange={(e) => setFormData({ ...formData, studentId: e.target.value })} required />
									</div>
								</div>
							</>
						) : (
							<>
								<div className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="department">Department</Label>
										<Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })} required>
											<SelectTrigger>
												<SelectValue placeholder="Select your department" />
											</SelectTrigger>
											<SelectContent>
												{departments.map((dept) => (
													<SelectItem key={dept} value={dept}>
														{dept}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label htmlFor="graduationYear">Expected Graduation Year</Label>
										<Select value={formData.graduationYear} onValueChange={(value) => setFormData({ ...formData, graduationYear: value })} required>
											<SelectTrigger>
												<SelectValue placeholder="Select graduation year" />
											</SelectTrigger>
											<SelectContent>
												{years.map((year) => (
													<SelectItem key={year} value={year}>
														{year}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label htmlFor="role">Role</Label>
										<Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })} required>
											<SelectTrigger>
												<SelectValue placeholder="Select your role" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="student">Student</SelectItem>
												<SelectItem value="instructor">Instructor</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</>
						)}
					</CardContent>

					<CardFooter className="flex justify-between">
						{step === 2 && (
							<Button type="button" variant="outline" onClick={() => setStep(1)}>
								Back
							</Button>
						)}
						<Button type="submit" className="ml-auto">
							{step === 1 ? (
								<>
									Continue
									<ArrowRight className="ml-2 h-4 w-4" />
								</>
							) : (
								"Complete Setup"
							)}
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
