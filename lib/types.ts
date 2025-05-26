// Basic type definitions for UI development
// These will be expanded when we implement actual functionality

export type UserRole = "student" | "instructor" | "admin";

// We can add more types here as needed for UI development
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
} 