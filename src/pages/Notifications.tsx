
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, Check, MoreHorizontal, Trash, X } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Notifications: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
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
  ]);
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([]);

  // The required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (notificationId: number) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      markAsUnread(notificationId);
    } else if (isRightSwipe) {
      markAsRead(notificationId);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const markAsRead = (id: number) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    );
    setNotifications(updatedNotifications);
    toast({
      title: "Notification marked as read",
      duration: 2000,
    });
  };

  const markAsUnread = (id: number) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: false } : notification
    );
    setNotifications(updatedNotifications);
    toast({
      title: "Notification marked as unread",
      duration: 2000,
    });
  };

  const deleteNotification = (id: number) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    toast({
      title: "Notification deleted",
      duration: 2000,
    });
  };

  const toggleSelectNotification = (id: number) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(selectedNotifications.filter(notifId => notifId !== id));
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({ ...notification, isRead: true }));
    setNotifications(updatedNotifications);
    toast({
      title: "All notifications marked as read",
      duration: 2000,
    });
  };

  const markAllAsUnread = () => {
    const updatedNotifications = notifications.map(notification => ({ ...notification, isRead: false }));
    setNotifications(updatedNotifications);
    toast({
      title: "All notifications marked as unread",
      duration: 2000,
    });
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
    toast({
      title: "All notifications deleted",
      duration: 2000,
    });
  };

  const handleBulkAction = (action: 'read' | 'unread' | 'delete') => {
    if (selectedNotifications.length === 0) return;
    
    let updatedNotifications = [...notifications];
    
    if (action === 'read' || action === 'unread') {
      updatedNotifications = notifications.map(notification => 
        selectedNotifications.includes(notification.id) 
          ? { ...notification, isRead: action === 'read' } 
          : notification
      );
      
      toast({
        title: `Selected notifications marked as ${action}`,
        duration: 2000,
      });
    } else if (action === 'delete') {
      updatedNotifications = notifications.filter(
        notification => !selectedNotifications.includes(notification.id)
      );
      
      toast({
        title: "Selected notifications deleted",
        duration: 2000,
      });
    }
    
    setNotifications(updatedNotifications);
    setSelectedNotifications([]);
    setSelectMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Notifications</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <MoreHorizontal size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectMode(!selectMode)}>
                {selectMode ? "Cancel selection" : "Select"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={markAllAsRead}>Mark all as read</DropdownMenuItem>
              <DropdownMenuItem onClick={markAllAsUnread}>Mark all as unread</DropdownMenuItem>
              <DropdownMenuItem onClick={deleteAllNotifications} className="text-red-500">Delete all</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Content */}
      <div className="p-4">
        {selectMode && selectedNotifications.length > 0 && (
          <div className="mb-4 flex gap-2 justify-end">
            <Button size="sm" variant="outline" onClick={() => handleBulkAction('read')}>
              <Check size={16} className="mr-1" /> Mark Read
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleBulkAction('unread')}>
              <Bell size={16} className="mr-1" /> Mark Unread
            </Button>
            <Button size="sm" variant="outline" className="text-red-500" onClick={() => handleBulkAction('delete')}>
              <Trash size={16} className="mr-1" /> Delete
            </Button>
          </div>
        )}

        <div className="space-y-3 mb-16">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell size={40} className="mx-auto mb-2 opacity-30" />
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`shadow-sm ${!notification.isRead ? 'border-l-4 border-l-discusy-blue' : ''}`}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => onTouchEnd(notification.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    {selectMode && (
                      <div className="flex items-center h-full pt-1">
                        <input 
                          type="checkbox" 
                          checked={selectedNotifications.includes(notification.id)}
                          onChange={() => toggleSelectNotification(notification.id)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                    )}
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
                    
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <MoreHorizontal size={16} />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="bottom" className="h-[30vh] rounded-t-lg">
                        <SheetHeader>
                          <SheetTitle>Notification Actions</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6 space-y-4">
                          {notification.isRead ? (
                            <Button 
                              variant="outline" 
                              className="w-full justify-start"
                              onClick={() => markAsUnread(notification.id)}
                            >
                              <Bell size={16} className="mr-2" />
                              Mark as unread
                            </Button>
                          ) : (
                            <Button 
                              variant="outline" 
                              className="w-full justify-start"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <Check size={16} className="mr-2" />
                              Mark as read
                            </Button>
                          )}
                          <Button 
                            variant="outline" 
                            className="w-full justify-start text-red-500"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <Trash size={16} className="mr-2" />
                            Delete notification
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default Notifications;
