
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
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

interface Student {
  id: number;
  name: string;
  year: string;
  degree: string;
}

const InstructorCourses: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showStudents, setShowStudents] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  
  const courses: CourseDetails[] = [
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
    }
  ];
  
  const students: Student[] = [
    { id: 1, name: "John Smith", year: "3rd year", degree: "Computer Science" },
    { id: 2, name: "Emma Johnson", year: "2nd year", degree: "Computer Science" },
    { id: 3, name: "Michael Brown", year: "4th year", degree: "Computer Science" },
    { id: 4, name: "Olivia Davis", year: "1st year", degree: "Computer Engineering" },
    { id: 5, name: "William Wilson", year: "3rd year", degree: "Information Systems" },
    { id: 6, name: "Sophia Martinez", year: "2nd year", degree: "Computer Science" },
    { id: 7, name: "James Taylor", year: "4th year", degree: "Data Science" },
    { id: 8, name: "Isabella Thomas", year: "3rd year", degree: "Computer Science" },
  ];
  
  const handleViewDetails = (course: CourseDetails) => {
    setSelectedCourse(course);
    setShowDetails(true);
  };
  
  const handleViewStudents = (course: CourseDetails) => {
    setSelectedCourse(course);
    setShowStudents(true);
  };
  
  const handleViewStudentProfile = (student: Student) => {
    setSelectedStudent(student);
    // In a real application, you would navigate to the student's profile
    // For now, we'll just close the dialog
    setShowStudents(false);
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
        <div className="space-y-4">
          {courses.map((course) => (
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
        </div>
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
              <div 
                className="flex items-center gap-2 cursor-pointer" 
                onClick={() => {
                  setShowDetails(false);
                  handleViewStudents(selectedCourse);
                }}
              >
                <Users size={18} className="text-discusy-blue" />
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm font-normal underline"
                >
                  <strong>Enrolled Students:</strong> {selectedCourse.enrolledStudents}
                </Button>
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

      {/* Students List Dialog */}
      <Dialog open={showStudents} onOpenChange={setShowStudents}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Enrolled Students: {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedCourse?.code} • {selectedCourse?.semester}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[300px] rounded-md border p-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Degree</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow 
                    key={student.id}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleViewStudentProfile(student)}
                  >
                    <TableCell className="font-medium text-blue-600">{student.name}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.degree}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
          
          <div className="flex justify-end mt-4">
            <Button onClick={() => setShowStudents(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <NavigationTabs isInstructor={true} />
    </div>
  );
};

export default InstructorCourses;
