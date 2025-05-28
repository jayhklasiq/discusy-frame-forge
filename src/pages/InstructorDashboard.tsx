
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, Book, BookOpen, UserSquare } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';

const InstructorDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Discusy Instructor</h1>
          <Button variant="ghost" size="sm">
            <Users size={20} />
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Recent Chats</h2>
          <div className="space-y-3">
            {[1, 2].map((item) => (
              <Card key={item} className="shadow-sm">
                <CardContent className="p-3 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Group Chat {item}</h3>
                    <p className="text-sm text-gray-500">Last activity: 2h ago</p>
                  </div>
                  <div className="flex items-center text-discusy-blue">
                    <MessageSquare size={20} />
                    <span className="ml-1 text-sm">3</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => navigate('/create-chat')}
            >
              <MessageSquare size={18} />
              <span>Create New Chat</span>
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Your Courses</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="shadow-sm">
                <CardContent className="p-3 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Course {item}</h3>
                    <p className="text-sm text-gray-500">Students: 32</p>
                  </div>
                  <div>
                    <BookOpen size={20} className="text-discusy-blue" />
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => navigate('/instructor/courses')}
            >
              <Book size={18} />
              <span>View All Courses</span>
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Team Chats</h2>
          <div className="space-y-3">
            {[1, 2].map((item) => (
              <Card key={item} className="shadow-sm">
                <CardContent className="p-3 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Team Chat {item}</h3>
                    <p className="text-sm text-gray-500">Course: CS101</p>
                  </div>
                  <div className="flex items-center text-discusy-blue">
                    <UserSquare size={20} />
                    <span className="ml-1 text-sm">5</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => navigate('/instructor/chats?tab=teams')}
            >
              <Users size={18} />
              <span>View All Team Chats</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavigationTabs isInstructor={true} />
    </div>
  );
};

export default InstructorDashboard;
