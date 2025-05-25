
import usersData from '@/data/users.json';
import coursesData from '@/data/courses.json';
import chatsData from '@/data/chats.json';
import messagesData from '@/data/messages.json';
import departmentsData from '@/data/departments.json';
import analyticsData from '@/data/analytics.json';

// Users
export const getStudents = () => usersData.students;
export const getInstructors = () => usersData.instructors;
export const getStudentById = (id: number) => usersData.students.find(student => student.id === id);
export const getInstructorById = (id: number) => usersData.instructors.find(instructor => instructor.id === id);

// Courses
export const getCurrentCourses = () => coursesData.current;
export const getPastCourses = () => coursesData.past;
export const getAllCourses = () => [...coursesData.current, ...coursesData.past];
export const getCourseById = (id: number) => getAllCourses().find(course => course.id === id);

// Chats
export const getRegularChats = () => chatsData.regular;
export const getCourseChats = () => chatsData.course;
export const getTeamChats = () => chatsData.team;
export const getAllChats = () => [...chatsData.regular, ...chatsData.course, ...chatsData.team];
export const getChatById = (id: number) => getAllChats().find(chat => chat.id === id);

// Messages
export const getMessagesByChatId = (chatId: string | number) => {
  const messages = messagesData[chatId.toString() as keyof typeof messagesData];
  return messages || [];
};

// Departments
export const getDepartments = () => departmentsData.departments;
export const getDepartmentById = (id: number) => departmentsData.departments.find(dept => dept.id === id);

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
export const getUserStats = () => [
  { label: "Courses", value: "4", icon: require('lucide-react').BookOpen },
  { label: "Chats", value: "12", icon: require('lucide-react').MessageSquare },
  { label: "Study Hours", value: "48", icon: require('lucide-react').Clock }
];
