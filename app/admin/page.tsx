"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, MessageSquare, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Students", value: "1,234", icon: Users },
    { title: "Total Courses", value: "56", icon: BookOpen },
    { title: "Active Discussions", value: "289", icon: MessageSquare },
    { title: "Engagement Rate", value: "78%", icon: BarChart3 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your school's performance and activities
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-none">
                      Activity {i}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Description of activity {i}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {i}h ago
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <button className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5" />
                  <span>Create New Course</span>
                </div>
                <span>→</span>
              </button>
              <button className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5" />
                  <span>Add New User</span>
                </div>
                <span>→</span>
              </button>
              <button className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5" />
                  <span>View Messages</span>
                </div>
                <span>→</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
