
import usersData from '@/src/data/users.json';
import coursesData from '@/src/data/courses.json';
import chatsData from '@/src/data/chats.json';
import messagesData from '@/src/data/messages.json';
import departmentsData from '@/src/data/departments.json';
import analyticsData from '@/src/data/analytics.json';

// Type definitions
interface Student {
  id: number;
  name: string;
  email: string;
  avatar: string;
  university: string;
  major: string;
  yearOfStudy: string;
}

interface Instructor {
  id: number;
  name: string;
  email: string;
  avatar: string;
  department: string;
}

interface Course {
  id: number;
  name: string;
  code: string;
  instructor: string;
  schedule: string;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
}

interface Department {
  id: number;
  name: string;
  faculty: number;
  students: number;
}

// Users
export const getStudents = (): Student[] => usersData.students;
export const getInstructors = (): Instructor[] => usersData.instructors;
export const getStudentById = (id: number): Student | undefined => usersData.students.find((student: Student) => student.id === id);
export const getInstructorById = (id: number): Instructor | undefined => usersData.instructors.find((instructor: Instructor) => instructor.id === id);

// Courses
export const getCurrentCourses = (): Course[] => coursesData.current;
export const getPastCourses = (): Course[] => coursesData.past;
export const getAllCourses = (): Course[] => [...coursesData.current, ...coursesData.past];
export const getCourseById = (id: number): Course | undefined => getAllCourses().find((course: Course) => course.id === id);

// Chats
export const getRegularChats = (): Chat[] => chatsData.regular;
export const getCourseChats = (): Chat[] => chatsData.course;
export const getTeamChats = (): Chat[] => chatsData.team;
export const getAllChats = (): Chat[] => [...chatsData.regular, ...chatsData.course, ...chatsData.team];
export const getChatById = (id: number): Chat | undefined => getAllChats().find((chat: Chat) => chat.id === id);

// Messages
export const getMessagesByChatId = (chatId: string | number) => {
  const messages = messagesData[chatId.toString() as keyof typeof messagesData];
  return messages || [];
};

// Departments
export const getDepartments = (): Department[] => departmentsData.departments;
export const getDepartmentById = (id: number): Department | undefined => departmentsData.departments.find((dept: Department) => dept.id === id);

// Analytics
export const getAnalyticsData = () => analyticsData;

// Profile data (current user)
export const getCurrentUser = () => ({
  name: "Alex Johnson",
  email: "alex.johnson@university.edu",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80",
  university: "Tech University",
  major: "Computer Science",
  yearOfStudy: "3rd year"
});

// Stats data
export const getUserStats = () => {
  const { BookOpen, MessageSquare, Clock } = require('lucide-react');
  return [
    { label: "Courses", value: "4", icon: BookOpen },
    { label: "Chats", value: "12", icon: MessageSquare },
    { label: "Study Hours", value: "48", icon: Clock }
  ];
};
