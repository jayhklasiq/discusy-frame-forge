
export interface Department {
  id: number;
  name: string;
  code: string;
  description: string;
  headOfDepartment: string;
  totalCourses: number;
  totalInstructors: number;
  totalStudents: number;
}

export interface AdminInstructor {
  id: number;
  name: string;
  email: string;
  department: string;
  coursesAssigned: number;
  activeChats: number;
  joinedDate: string;
  status: 'active' | 'inactive' | 'pending';
  profileImage?: string;
}

export interface AdminStudent {
  id: number;
  name: string;
  email: string;
  year: string;
  degree: string;
  department: string;
  enrolledCourses: number;
  activeChats: number;
  joinedDate: string;
  status: 'active' | 'inactive' | 'pending';
  profileImage?: string;
}

export interface AdminCourse {
  id: number;
  title: string;
  code: string;
  department: string;
  instructor: string;
  semester: string;
  enrolledStudents: number;
  activeChats: number;
  status: 'active' | 'upcoming' | 'completed';
}

export interface AnalyticsData {
  totalStudents: number;
  totalInstructors: number;
  totalCourses: number;
  totalDepartments: number;
  totalChats: number;
  activeUsers: number;
  chatsByDepartment: {
    department: string;
    count: number;
  }[];
  courseEngagement: {
    course: string;
    students: number;
    chats: number;
  }[];
}
