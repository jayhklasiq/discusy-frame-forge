import { UserRole } from "@/lib/types";

export interface NavigationTab {
  label: string;
  href: string;
  icon?: string; // Optional icon name from lucide-react
}

export interface NavigationConfig {
  tabs: NavigationTab[];
  showCreateChat?: boolean;
  showCreateCourse?: boolean;
}

// Mock navigation configurations for UI testing
const studentNavigation: NavigationConfig = {
  tabs: [
    { label: "Dashboard", href: "/dashboard", icon: "Home" },
    { label: "Courses", href: "/courses", icon: "Book" },
    { label: "Chats", href: "/chats", icon: "MessageSquare" },
    { label: "Teams", href: "/teams", icon: "Users" },
    { label: "Settings", href: "/settings", icon: "Settings" },
  ],
  showCreateChat: true,
};

const instructorNavigation: NavigationConfig = {
  tabs: [
    { label: "Dashboard", href: "/instructor/dashboard", icon: "Home" },
    { label: "Courses", href: "/instructor/courses", icon: "Book" },
    { label: "Chats", href: "/instructor/chats", icon: "MessageSquare" },
    { label: "Teams", href: "/instructor/teams", icon: "Users" },
    { label: "Settings", href: "/instructor/settings", icon: "Settings" },
  ],
  showCreateChat: true,
  showCreateCourse: true,
};

const adminNavigation: NavigationConfig = {
  tabs: [
    { label: "Dashboard", href: "/admin/dashboard", icon: "Home" },
    { label: "Users", href: "/admin/users", icon: "Users" },
    { label: "Courses", href: "/admin/courses", icon: "Book" },
    { label: "Departments", href: "/admin/departments", icon: "Building" },
    { label: "Settings", href: "/admin/settings", icon: "Settings" },
  ],
};

// For UI testing, you can change this value to test different roles
// This will be replaced with actual auth later
let mockRole: UserRole = "student";

export function setMockRole(role: UserRole) {
  mockRole = role;
}

export function getNavigationConfig(role: UserRole): NavigationConfig {
  switch (role) {
    case "instructor":
      return instructorNavigation;
    case "admin":
      return adminNavigation;
    case "student":
    default:
      return studentNavigation;
  }
}

// Helper function to get navigation tabs for a specific role
export function getNavigationTabs(role: UserRole): NavigationTab[] {
  return getNavigationConfig(role).tabs;
} 