
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  UserCog,
  BookOpen,
  Building2,
  MessageSquare,
  UserCheck
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { AnalyticsData } from '@/types/admin';

const AdminDashboard: React.FC = () => {
  // Mock data for demonstration
  const analyticsData: AnalyticsData = {
    totalStudents: 1250,
    totalInstructors: 48,
    totalCourses: 75,
    totalDepartments: 6,
    totalChats: 326,
    activeUsers: 890,
    chatsByDepartment: [
      { department: 'Computer Science', count: 120 },
      { department: 'Business', count: 85 },
      { department: 'Engineering', count: 65 },
      { department: 'Arts', count: 35 },
      { department: 'Medicine', count: 15 },
      { department: 'Law', count: 6 },
    ],
    courseEngagement: [
      { course: 'CS101', students: 120, chats: 45 },
      { course: 'BUS201', students: 85, chats: 32 },
      { course: 'ENG150', students: 65, chats: 28 },
      { course: 'ART102', students: 42, chats: 15 },
      { course: 'MED105', students: 28, chats: 10 },
    ],
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Students</p>
                <h3 className="text-2xl font-bold">{analyticsData.totalStudents}</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Instructors</p>
                <h3 className="text-2xl font-bold">{analyticsData.totalInstructors}</h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <UserCog className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Courses</p>
                <h3 className="text-2xl font-bold">{analyticsData.totalCourses}</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Departments</p>
                <h3 className="text-2xl font-bold">{analyticsData.totalDepartments}</h3>
              </div>
              <div className="p-2 bg-orange-100 rounded-full">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Chats</p>
                <h3 className="text-2xl font-bold">{analyticsData.totalChats}</h3>
              </div>
              <div className="p-2 bg-pink-100 rounded-full">
                <MessageSquare className="h-6 w-6 text-pink-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <h3 className="text-2xl font-bold">{analyticsData.activeUsers}</h3>
              </div>
              <div className="p-2 bg-teal-100 rounded-full">
                <UserCheck className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Chats by Department</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.chatsByDepartment}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4338ca" name="Chats" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Course Engagement</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.courseEngagement}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" name="Students" />
                <Bar dataKey="chats" fill="#8b5cf6" name="Chats" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
