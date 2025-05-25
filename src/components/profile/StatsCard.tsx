
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, MessageSquare, Clock } from 'lucide-react';

const StatsCard: React.FC = () => {
  const stats = [
    { label: "Courses", value: "4", icon: BookOpen },
    { label: "Chats", value: "12", icon: MessageSquare },
    { label: "Study Hours", value: "48", icon: Clock }
  ];

  return (
    <Card className="shadow-sm mb-6">
      <CardContent className="p-4">
        <h3 className="font-medium mb-3">Activity Stats</h3>
        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-3 border rounded-md">
              <stat.icon size={20} className="text-discusy-blue mb-1" />
              <span className="font-bold text-lg">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
