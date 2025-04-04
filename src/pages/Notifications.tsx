
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, Check } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';

const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      title: "New message in Group Chat 1",
      description: "John posted a new message",
      time: "2h ago",
      isRead: false
    },
    {
      id: 2,
      title: "Course 2 assignment due soon",
      description: "Your assignment is due in 24 hours",
      time: "5h ago",
      isRead: false
    },
    {
      id: 3,
      title: "New course material available",
      description: "Prof. Johnson uploaded new materials",
      time: "Yesterday",
      isRead: true
    },
    {
      id: 4,
      title: "Your question was answered",
      description: "Sarah replied to your question in Course 1",
      time: "2 days ago",
      isRead: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Notifications</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4">
        <div className="space-y-3 mb-16">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`shadow-sm ${!notification.isRead ? 'border-l-4 border-l-discusy-blue' : ''}`}>
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className={`rounded-full p-2 ${!notification.isRead ? 'bg-discusy-blue text-white' : 'bg-gray-200'}`}>
                    <Bell size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.description}</p>
                  </div>
                  {!notification.isRead && (
                    <div className="text-discusy-blue">
                      <Check size={18} />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default Notifications;
