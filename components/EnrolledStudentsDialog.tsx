"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, BookOpen } from "lucide-react";
import Link from "next/link";

interface Student {
  id: number;
  name: string;
  email: string;
  avatar: string;
  yearOfStudy: string;
  major: string;
  university: string;
}

interface EnrolledStudentsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  students: Student[];
  courseName: string;
}

export function EnrolledStudentsDialog({
  open,
  onOpenChange,
  students,
  courseName,
}: EnrolledStudentsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Enrolled Students
            <p className="text-sm font-normal text-gray-500 mt-1">{courseName}</p>
          </DialogTitle>
        </DialogHeader>
        
        <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-2">
          {students.length > 0 ? (
            students.map((student) => (
              <div 
                key={student.id} 
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Link 
                  href={`/instructor/students/${student.id}`}
                  className="flex items-center flex-1 min-w-0"
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{student.name}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {student.major} • {student.yearOfStudy}
                    </p>
                  </div>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2 text-discusy-blue"
                  asChild
                >
                  <Link href={`/instructor/students/${student.id}`}>
                    View
                  </Link>
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <BookOpen className="mx-auto h-10 w-10 text-gray-400 mb-3" />
              <h3 className="text-sm font-medium text-gray-900">No students enrolled</h3>
              <p className="text-sm text-gray-500 mt-1">
                There are no students enrolled in this course yet.
              </p>
            </div>
          )}
        </div>
        
        <div className="flex justify-end pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="mr-2"
          >
            Close
          </Button>
          <Button 
            variant="default"
            disabled={students.length === 0}
            onClick={() => {
              // TODO: Implement export functionality
              console.log('Export students list');
            }}
          >
            Export List
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
