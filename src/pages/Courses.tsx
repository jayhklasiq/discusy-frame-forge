
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NavigationTabs from '@/components/NavigationTabs';
import CourseCard from '@/components/courses/CourseCard';
import CourseDetailsDialog from '@/components/courses/CourseDetailsDialog';
import CourseHeader from '@/components/courses/CourseHeader';
import { CourseDetails } from '@/types/course';
import { getCurrentCourses, getPastCourses } from '@/utils/dataLoader';

const Courses: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);
  
  const currentCourses = getCurrentCourses();
  const pastCourses = getPastCourses();
  
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
