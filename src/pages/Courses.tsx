
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';

const Courses: React.FC = () => {
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
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Introduction to Computer Science</h3>
                    <BookOpen size={20} className="text-discusy-blue" />
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    Prof. Williams • CS101
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock size={14} className="mr-1" />
                      <span>Next class: Mon, 10 AM</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {[1, 2].map((item) => (
              <Card key={item} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Advanced Algorithms</h3>
                    <BookOpen size={20} className="text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    Prof. Smith • CS301
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-600">
                      <span>Fall 2024</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default Courses;
