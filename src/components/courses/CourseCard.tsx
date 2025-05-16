
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock } from 'lucide-react';
import { CourseDetails } from '@/types/course';

interface CourseCardProps {
  course: CourseDetails;
  onViewDetails: (course: CourseDetails) => void;
  isPast?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onViewDetails, isPast = false }) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{course.title}</h3>
          <BookOpen size={20} className={isPast ? "text-gray-400" : "text-discusy-blue"} />
        </div>
        <div className="text-sm text-gray-500 mb-3">
          {course.instructor} • {course.code}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-600">
            {isPast ? (
              <span>{course.semester}</span>
            ) : (
              <>
                <Clock size={14} className="mr-1" />
                <span>Next class: {course.nextClass}</span>
              </>
            )}
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs"
            onClick={() => onViewDetails(course)}
          >
            {isPast ? 'View Materials' : 'View Details'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
