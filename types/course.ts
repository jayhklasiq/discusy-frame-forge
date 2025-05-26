// Basic type definitions for UI development
// These will be expanded when we implement actual functionality

export type CourseStatus = "active" | "upcoming" | "completed" | "draft" | "archived"
export type CourseLevel = "beginner" | "intermediate" | "advanced"

export interface CourseDetails {
  id: number
  title: string
  code: string
  instructor: string
  department: string
  schedule: string
  nextClass: string
  semester: string
  enrolledStudents: number
  activeChats: number
  status: CourseStatus
  level?: CourseLevel // Optional since it's not in the JSON
  description?: string // Optional since it's not in the JSON
  maxStudents?: number // Optional since it's not in the JSON
  tags?: string[] // Optional since it's not in the JSON
  imageUrl?: string // Optional since it's not in the JSON
}

// Mock data for UI development
export const mockCourses: CourseDetails[] = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    code: "CS101",
    instructor: "Prof. Williams",
    department: "Computer Science",
    schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
    nextClass: "Mon, 10 AM",
    semester: "Spring 2025",
    enrolledStudents: 32,
    activeChats: 8,
    status: "active",
    level: "beginner",
    description: "A comprehensive introduction to computer science fundamentals and programming concepts.",
    maxStudents: 40,
    tags: ["programming", "basics", "computer-science"],
    imageUrl: "https://picsum.photos/seed/cs101/400/200"
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    code: "CS201",
    instructor: "Prof. Johnson",
    department: "Computer Science",
    schedule: "Tue, Thu 1:00 PM - 3:00 PM",
    nextClass: "Tue, 1 PM",
    semester: "Spring 2025",
    enrolledStudents: 28,
    activeChats: 6,
    status: "active",
    level: "advanced",
    description: "Deep dive into complex data structures and their applications in modern software development.",
    maxStudents: 30,
    tags: ["data-structures", "algorithms", "advanced"],
    imageUrl: "https://picsum.photos/seed/cs201/400/200"
  },
  {
    id: 3,
    title: "Database Systems",
    code: "CS301",
    instructor: "Prof. Garcia",
    department: "Computer Science",
    schedule: "Mon, Wed 3:30 PM - 5:00 PM",
    nextClass: "Mon, 3:30 PM",
    semester: "Spring 2025",
    enrolledStudents: 24,
    activeChats: 5,
    status: "active",
    level: "intermediate",
    description: "Learn about database design, implementation, and management.",
    maxStudents: 35,
    tags: ["databases", "sql", "data-modeling"],
    imageUrl: "https://picsum.photos/seed/cs301/400/200"
  },
  {
    id: 4,
    title: "Web Development",
    code: "CS401",
    instructor: "Prof. Taylor",
    department: "Computer Science",
    schedule: "Thu, Fri 9:00 AM - 11:00 AM",
    nextClass: "Thu, 9 AM",
    semester: "Spring 2025",
    enrolledStudents: 30,
    activeChats: 7,
    status: "active",
    level: "intermediate",
    description: "Master modern web development with HTML, CSS, and JavaScript.",
    maxStudents: 40,
    tags: ["web", "frontend", "javascript"],
    imageUrl: "https://picsum.photos/seed/cs401/400/200"
  },
  {
    id: 5,
    title: "Marketing Fundamentals",
    code: "BUS101",
    instructor: "Prof. Smith",
    department: "Business",
    schedule: "Mon, Wed 2:00 PM - 3:30 PM",
    nextClass: "Mon, 2 PM",
    semester: "Fall 2025",
    enrolledStudents: 45,
    activeChats: 10,
    status: "upcoming",
    level: "beginner",
    description: "Introduction to marketing principles and strategies.",
    maxStudents: 50,
    tags: ["marketing", "business", "basics"],
    imageUrl: "https://picsum.photos/seed/bus101/400/200"
  }
] 