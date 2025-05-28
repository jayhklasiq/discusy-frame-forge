// Mock data for courses
const mockCourses = [
  {
    id: 1,
    name: 'Introduction to Computer Science',
    code: 'CS 101',
    instructor: 'Dr. Smith',
    schedule: 'Mon/Wed 10:00 AM - 11:30 AM',
    enrolledStudents: 45,
    description: 'Fundamental concepts of computer science and programming using Python.',
    room: 'Science Building 205',
  },
  {
    id: 2,
    name: 'Data Structures and Algorithms',
    code: 'CS 201',
    instructor: 'Dr. Johnson',
    schedule: 'Tue/Thu 1:00 PM - 2:30 PM',
    enrolledStudents: 32,
    description: 'Advanced data structures and algorithm analysis.',
    room: 'Engineering 101',
  },
  {
    id: 3,
    name: 'Web Development',
    code: 'CS 320',
    instructor: 'Dr. Williams',
    schedule: 'Mon/Wed/Fri 2:00 PM - 3:00 PM',
    enrolledStudents: 28,
    description: 'Modern web development with React and Node.js',
    room: 'Computer Lab 3',
  },
];

// Mock data for team chats
const mockTeamChats = [
  {
    id: 1,
    title: 'CS 101 Study Group',
    courseCode: 'CS 101',
    lastMessage: 'Has anyone started the homework yet?',
    time: '2h ago',
    unread: 3,
    members: 8,
  },
  {
    id: 2,
    title: 'CS 201 Project Team',
    courseCode: 'CS 201',
    lastMessage: 'I pushed the latest changes to the repo',
    time: '1d ago',
    unread: 0,
    members: 4,
  },
  {
    id: 3,
    title: 'Web Dev Study Group',
    courseCode: 'CS 320',
    lastMessage: 'The API documentation is now available',
    time: '3h ago',
    unread: 5,
    members: 6,
  },
];

// Simulate API calls with delay
const simulateAPICall = <T,>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300); // Simulate network delay
  });
};

// API functions
export const fetchCourses = async (): Promise<Course[]> => {
  return simulateAPICall(mockCourses);
};

export const fetchTeamChats = async (): Promise<TeamChat[]> => {
  return simulateAPICall(mockTeamChats);
};

// Types
export interface Course {
  id: number;
  name: string;
  code: string;
  instructor: string;
  schedule: string;
  enrolledStudents: number;
  description?: string;
  room?: string;
}

export interface TeamChat {
  id: number;
  title: string;
  courseCode: string;
  lastMessage: string;
  time: string;
  unread: number;
  members?: number;
}
