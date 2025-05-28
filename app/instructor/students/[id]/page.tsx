import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, BookOpen, User, Calendar, GraduationCap, BarChart2 } from 'lucide-react';
import Link from 'next/link';

interface Student {
  id: number;
  name: string;
  email: string;
  avatar: string;
  university: string;
  major: string;
  yearOfStudy: string;
  joinDate: string;
  bio?: string;
  coursesEnrolled: {
    id: number;
    name: string;
    code: string;
    progress: number;
    lastAccessed: string;
  }[];
  performance: {
    averageGrade: string;
    assignmentsSubmitted: number;
    assignmentsPending: number;
    attendance: string;
  };
}

// Mock data - in a real app, this would be fetched from an API
const getStudentData = async (id: string): Promise<Student | null> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // This would be an API call in a real app
  // const response = await fetch(`/api/students/${id}`);
  // if (!response.ok) return null;
  // return response.json();
  
  // Mock data
  if (id === '1') {
    return {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@university.edu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
      university: 'Tech University',
      major: 'Computer Science',
      yearOfStudy: '3rd Year',
      joinDate: 'September 2022',
      bio: 'Passionate about machine learning and web development. Currently working on a research project in natural language processing.',
      coursesEnrolled: [
        { id: 1, name: 'Advanced Algorithms', code: 'CS 401', progress: 75, lastAccessed: '2 days ago' },
        { id: 2, name: 'Database Systems', code: 'CS 350', progress: 90, lastAccessed: '1 day ago' },
        { id: 3, name: 'Web Development', code: 'CS 320', progress: 60, lastAccessed: '3 days ago' },
      ],
      performance: {
        averageGrade: 'A-',
        assignmentsSubmitted: 12,
        assignmentsPending: 3,
        attendance: '95%',
      },
    };
  }
  
  return null;
};

export default async function StudentProfilePage({ params }: { params: { id: string } }) {
  const student = await getStudentData(params.id);
  
  if (!student) {
    notFound();
  }
  
  const { name, email, avatar, university, major, yearOfStudy, joinDate, bio, coursesEnrolled, performance } = student;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="container mx-auto flex items-center">
          <Link href="/instructor/students" className="mr-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Student Profile</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-discusy-blue to-discusy-blue/80 h-24"></div>
          <div className="px-6 pb-6 -mt-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="flex items-end">
                <Avatar className="h-24 w-24 border-4 border-white">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback>
                    <User className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <div className="ml-6 mb-2">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="text-gray-600">{major} • {yearOfStudy}</p>
                  <p className="text-sm text-gray-500 mt-1">{university}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" className="mr-2">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="default">
                  View Progress Report
                </Button>
              </div>
            </div>
            
            {bio && (
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium text-gray-500 mb-2">BIO</h3>
                <p className="text-gray-700">{bio}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Student Information */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Mail className="h-4 w-4 text-discusy-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${email}`} className="text-sm font-medium hover:text-discusy-blue">
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Major</p>
                    <p className="text-sm font-medium">{major}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <GraduationCap className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year of Study</p>
                    <p className="text-sm font-medium">{yearOfStudy}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Calendar className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="text-sm font-medium">{joinDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Performance Summary */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Performance Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-discusy-blue">{performance.averageGrade}</p>
                    <p className="text-xs text-gray-500">Average Grade</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{performance.attendance}</p>
                    <p className="text-xs text-gray-500">Attendance</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Assignments Submitted</span>
                    <span className="font-medium">{performance.assignmentsSubmitted}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Assignments Pending</span>
                    <span className="font-medium">{performance.assignmentsPending}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Enrolled Courses */}
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Enrolled Courses</CardTitle>
                  <Button variant="ghost" size="sm" className="text-discusy-blue">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coursesEnrolled.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div>
                        <h4 className="font-medium">{course.name}</h4>
                        <p className="text-sm text-gray-500">{course.code} • Last accessed {course.lastAccessed}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-3">
                          <div 
                            className="h-full bg-discusy-blue" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8 text-right">{course.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                        <BarChart2 className="h-4 w-4 text-discusy-blue" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">{name}</span> submitted "Assignment {item}" in 
                          <a href="#" className="text-discusy-blue hover:underline">CS 401 - Advanced Algorithms</a>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{item} day{item !== 1 ? 's' : ''} ago • 95/100</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-discusy-blue">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
