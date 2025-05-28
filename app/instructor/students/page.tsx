import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data - in a real app, this would be fetched from an API
const getStudents = async (): Promise<{
  id: number;
  name: string;
  email: string;
  avatar: string;
  major: string;
  yearOfStudy: string;
  courses: string[];
  lastActive: string;
}[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock data
  return [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@university.edu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
      major: 'Computer Science',
      yearOfStudy: '3rd Year',
      courses: ['CS 401', 'CS 350', 'CS 320'],
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      name: 'Jamie Smith',
      email: 'jamie.smith@university.edu',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
      major: 'Data Science',
      yearOfStudy: '2nd Year',
      courses: ['DS 201', 'MATH 250', 'STAT 310'],
      lastActive: '1 day ago',
    },
    {
      id: 3,
      name: 'Taylor Wilson',
      email: 'taylor.wilson@university.edu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
      major: 'Computer Engineering',
      yearOfStudy: '4th Year',
      courses: ['CE 450', 'CE 410', 'MATH 350'],
      lastActive: '3 hours ago',
    },
    {
      id: 4,
      name: 'Jordan Lee',
      email: 'jordan.lee@university.edu',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
      major: 'Information Systems',
      yearOfStudy: '1st Year',
      courses: ['IS 101', 'BUS 100', 'MATH 120'],
      lastActive: '5 minutes ago',
    },
    {
      id: 5,
      name: 'Casey Kim',
      email: 'casey.kim@university.edu',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
      major: 'Cybersecurity',
      yearOfStudy: '3rd Year',
      courses: ['CS 401', 'CS 380', 'CYB 310'],
      lastActive: '1 hour ago',
    },
  ];
};

export default async function StudentsPage() {
  const students = await getStudents();
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-discusy-blue text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Students</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search students by name, email, or ID..."
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Majors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Majors</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ds">Data Science</SelectItem>
                    <SelectItem value="ce">Computer Engineering</SelectItem>
                    <SelectItem value="is">Information Systems</SelectItem>
                    <SelectItem value="cyb">Cybersecurity</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Students List */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <CardTitle className="text-lg">All Students</CardTitle>
              <div className="mt-2 sm:mt-0">
                <span className="text-sm text-gray-500">{students.length} students found</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="inactive">Inactive</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-3">
                  {students.map((student) => (
                    <div 
                      key={student.id}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                    >
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{student.name}</h3>
                        <p className="text-sm text-gray-500 truncate">{student.email}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {student.major}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {student.yearOfStudy}
                          </span>
                        </div>
                      </div>
                      
                      <div className="hidden md:flex flex-col items-end ml-4">
                        <div className="text-sm text-gray-500 mb-1">
                          Last active: {student.lastActive}
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {student.courses.slice(0, 2).map((course, i) => (
                            <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {course}
                            </span>
                          ))}
                          {student.courses.length > 2 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500">
                              +{student.courses.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="ml-4"
                        asChild
                      >
                        <a href={`/instructor/students/${student.id}`}>
                          View Profile
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="active">
                <p className="text-sm text-gray-500 py-4">
                  Active students will appear here. This is a placeholder tab.
                </p>
              </TabsContent>
              
              <TabsContent value="inactive">
                <p className="text-sm text-gray-500 py-4">
                  Inactive students will appear here. This is a placeholder tab.
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{students.length}</span> of{' '}
                <span className="font-medium">{students.length}</span> results
              </p>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
