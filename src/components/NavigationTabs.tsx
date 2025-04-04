
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, MessageSquare, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationTabs: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: Book, label: 'Courses', path: '/courses' },
    { icon: MessageSquare, label: 'Chats', path: '/chats' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={cn(
              "flex flex-col items-center py-1 px-3",
              isActive ? "text-discusy-blue" : "text-gray-500"
            )}
          >
            <tab.icon size={24} className={isActive ? "text-discusy-blue" : "text-gray-500"} />
            <span className="text-xs mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
