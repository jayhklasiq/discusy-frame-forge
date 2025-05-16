
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Users, Clock, BookOpen, Calendar } from 'lucide-react';
import { CourseDetails } from '@/types/course';

interface CourseDetailsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  course: CourseDetails | null;
}

const CourseDetailsDialog: React.FC<CourseDetailsDialogProps> = ({ 
  isOpen, 
  onOpenChange, 
  course 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{course?.title}</DialogTitle>
          <DialogDescription>{course?.code}</DialogDescription>
        </DialogHeader>
        
        {course && (
          <div className="space-y-4 mt-2">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-discusy-blue" />
              <span className="text-sm">
                <strong>Enrolled Students:</strong> {course.enrolledStudents}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-discusy-blue" />
              <span className="text-sm">
                <strong>Schedule:</strong> {course.schedule}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-discusy-blue" />
              <span className="text-sm">
                <strong>Instructor:</strong> {course.instructor}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-discusy-blue" />
              <span className="text-sm">
                <strong>Semester:</strong> {course.semester}
              </span>
            </div>
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsDialog;
