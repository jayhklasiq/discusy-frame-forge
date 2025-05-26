import { getNavigationConfig, NavigationConfig } from "@/lib/navigation";
import { UserRole } from "@/lib/types";

// Mock user role - this will be replaced with actual auth later
const MOCK_USER_ROLE: UserRole = "student";

export function useNavigation() {
  // Using mock role for now
  const userRole = MOCK_USER_ROLE;
  const navigationConfig: NavigationConfig = getNavigationConfig(userRole);
  
  return {
    tabs: navigationConfig.tabs,
    showCreateChat: navigationConfig.showCreateChat,
    showCreateCourse: navigationConfig.showCreateCourse,
    userRole,
  };
} 