
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NavigationTabs from '@/components/NavigationTabs';
import CourseCard from '@/components/courses/CourseCard';
import CourseDetailsDialog from '@/components/courses/CourseDetailsDialog';
import CourseHeader from '@/components/courses/CourseHeader';
import { CourseDetails } from '@/types/course';

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
      <CourseHeader title="Courses" />

      <div className="p-4">
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="current">Current Courses</TabsTrigger>
            <TabsTrigger value="past">Past Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="space-y-4">
            {currentCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onViewDetails={handleViewDetails} 
              />
            ))}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {pastCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onViewDetails={handleViewDetails}
                isPast={true}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <CourseDetailsDialog 
        isOpen={showDetails}
        onOpenChange={setShowDetails}
        course={selectedCourse}
      />

      <NavigationTabs />
    </div>
  );
};

export default Courses;
