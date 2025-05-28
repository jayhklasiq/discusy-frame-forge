import { promises as fs } from 'fs';
import path from 'path';

type Student = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  university: string;
  major: string;
  yearOfStudy: string;
};

type Instructor = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  department: string;
};

type Course = {
  id: number;
  name: string;
  code: string;
  instructor: string;
  schedule: string;
};

type Department = {
  id: number;
  name: string;
  faculty: number;
  students: number;
};

type Message = {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
};

const readJsonFile = async <T>(filename: string): Promise<T> => {
  const filePath = path.join(process.cwd(), 'app/data', filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
};

export const getUsers = async () => {
  return readJsonFile<{ students: Student[]; instructors: Instructor[] }>('users.json');
};

export const getCourses = async () => {
  return readJsonFile<{ current: Course[]; past: Course[] }>('courses.json');
};

export const getDepartments = async () => {
  const data = await readJsonFile<{ departments: Department[] }>('departments.json');
  return data.departments;
};

export const getChats = async () => {
  return readJsonFile<{ regular: any[]; course: any[]; team: any[] }>('chats.json');
};

export const getMessages = async (chatId: string | number) => {
  const data = await readJsonFile<Record<string, Message[]>>('messages.json');
  return data[chatId] || [];
};

export const getAnalytics = async () => {
  return readJsonFile<{
    studentEngagement: {
      totalStudents: number;
      activeStudents: number;
      averageSessionTime: string;
    };
    courseMetrics: {
      totalCourses: number;
      activeCourses: number;
      completionRate: string;
    };
  }>('analytics.json');
};
