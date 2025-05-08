
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { BookOpen, Clock, Users, Calendar } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';

interface CourseDetails {
  id: number;
  title: string;
  instructor: string;
  code: string;
  schedule: string;
  nextClass: string;
  semester: string;
  enrolledStudents: number;
}

const Courses: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);
  
  const currentCourses: CourseDetails[] = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "Prof. Williams",
      code: "CS101",
      schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
      nextClass: "Mon, 10 AM",
      semester: "Spring 2025",
      enrolledStudents: 32
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      instructor: "Prof. Johnson",
      code: "CS201",
      schedule: "Tue, Thu 1:00 PM - 3:00 PM",
      nextClass: "Tue, 1 PM",
      semester: "Spring 2025",
      enrolledStudents: 28
    },
    {
      id: 3,
      title: "Database Systems",
      instructor: "Prof. Garcia",
      code: "CS301",
      schedule: "Mon, Wed 3:30 PM - 5:00 PM",
      nextClass: "Mon, 3:30 PM",
      semester: "Spring 2025",
      enrolledStudents: 24
    },
    {
      id: 4,
      title: "Web Development",
      instructor: "Prof. Taylor",
      code: "CS401",
      schedule: "Thu, Fri 9:00 AM - 11:00 AM",
      nextClass: "Thu, 9 AM",
      semester: "Spring 2025",
      enrolledStudents: 30
    }
  ];
  
  const pastCourses: CourseDetails[] = [
    {
      id: 5,
      title: "Advanced Algorithms",
      instructor: "Prof. Smith",
      code: "CS301",
      schedule: "Tue, Thu 2:00 PM - 4:00 PM",
      nextClass: "N/A",
      semester: "Fall 2024",
      enrolledStudents: 26
    },
    {
      id: 6,
      title: "Operating Systems",
      instructor: "Prof. Davis",
      code: "CS402",
      schedule: "Mon, Wed, Fri 11:00 AM - 12:30 PM",
      nextClass: "N/A",
      semester: "Fall 2024",
      enrolledStudents: 22
    }
  ];
  
  const handleViewDetails = (course: CourseDetails) => {
    setSelectedCourse(course);
    setShowDetails(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Courses</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4">
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="current">Current Courses</TabsTrigger>
            <TabsTrigger value="past">Past Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="space-y-4">
            {currentCourses.map((course) => (
              <Card key={course.id} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <BookOpen size={20} className="text-discusy-blue" />
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {course.instructor} • {course.code}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock size={14} className="mr-1" />
                      <span>Next class: {course.nextClass}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs"
                      onClick={() => handleViewDetails(course)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {pastCourses.map((course) => (
              <Card key={course.id} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <BookOpen size={20} className="text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {course.instructor} • {course.code}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-600">
                      <span>{course.semester}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs"
                      onClick={() => handleViewDetails(course)}
                    >
                      View Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Course Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedCourse?.title}</DialogTitle>
            <DialogDescription>{selectedCourse?.code}</DialogDescription>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-discusy-blue" />
                <span className="text-sm">
                  <strong>Enrolled Students:</strong> {selectedCourse.enrolledStudents}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-discusy-blue" />
                <span className="text-sm">
                  <strong>Schedule:</strong> {selectedCourse.schedule}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-discusy-blue" />
                <span className="text-sm">
                  <strong>Instructor:</strong> {selectedCourse.instructor}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-discusy-blue" />
                <span className="text-sm">
                  <strong>Semester:</strong> {selectedCourse.semester}
                </span>
              </div>
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <Button onClick={() => setShowDetails(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default Courses;
