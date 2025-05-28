"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, UserSquare, BookOpen, ChevronRight } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";
import { fetchCourses, fetchTeamChats } from "@/lib/api";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  name: string;
  code: string;
  instructor: string;
  schedule: string;
  enrolledStudents: number;
}

interface TeamChat {
  id: number;
  title: string;
  courseCode: string;
  lastMessage: string;
  time: string;
  unread: number;
}

export default function InstructorDashboardPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [teamChats, setTeamChats] = useState<TeamChat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [coursesData, chatsData] = await Promise.all([
          fetchCourses(),
          fetchTeamChats()
        ]);
        setCourses(coursesData.current);
        setTeamChats(chatsData);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-discusy-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <h1 className="text-xl font-bold">Instructor Dashboard</h1>
      </header>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Current Courses */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Your Courses</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-discusy-blue"
              onClick={() => router.push('/instructor/courses')}
            >
              View All
            </Button>
          </div>
          
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {courses.slice(0, 3).map((course) => (
                <Card key={course.id} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-gray-600">{course.code} • {course.schedule}</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-discusy-blue"
                          onClick={(e) => {
                            e.stopPropagation();
                            // TODO: Show enrolled students popup
                          }}
                        >
                          {course.enrolledStudents || 0} students enrolled
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => router.push(`/instructor/courses/${course.id}`)}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No courses</h3>
              <p className="mt-1 text-sm text-gray-500">You don't have any courses assigned yet.</p>
            </div>
          )}
        </div>

        {/* Team Chats */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Team Chats</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-discusy-blue"
              onClick={() => router.push('/instructor/chats?tab=team')}
            >
              View All
            </Button>
          </div>
          
          {teamChats.length > 0 ? (
            <div className="space-y-3">
              {teamChats.slice(0, 3).map((chat) => (
                <Card 
                  key={chat.id} 
                  className="shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push(`/chats/${chat.id}`)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{chat.title}</h3>
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        <p className="text-xs text-discusy-blue mt-1">{chat.courseCode}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">{chat.time}</span>
                        {chat.unread > 0 && (
                          <span className="mt-1 bg-discusy-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No team chats</h3>
              <p className="mt-1 text-sm text-gray-500">No active team chats in your courses.</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
}
