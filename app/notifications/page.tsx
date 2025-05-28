"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from '@/hooks/use-toast';
import { Toaster } from "@/components/ui/toaster";

interface Notification {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  timestamp: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New Course Discussion",
    message: "Your post in CS101 has received new replies",
    isRead: false,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "Course Update",
    message: "New assignment posted in Math 202",
    isRead: true,
    timestamp: "1 day ago",
  },
  {
    id: "3",
    title: "Group Chat Invitation",
    message: "You've been invited to join the Physics study group",
    isRead: false,
    timestamp: "3 hours ago",
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSwipe = (id: string, direction: "left" | "right") => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, isRead: direction === "right" }
        : notification
    );
    setNotifications(updatedNotifications);
    toast({
      title: direction === "right" ? "Marked as read" : "Marked as unread",
      description: `Notification "${updatedNotifications.find(n => n.id === id)?.title}" has been ${direction === "right" ? "marked as read" : "marked as unread"}`,
    });
  };

  const handleDelete = (id: string) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
    toast({
      title: "Notification deleted",
      description: "The notification has been removed from your list",
    });
  };

  const handleSelect = (id: string) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
    );
  };

  const handleMarkAll = (isRead: boolean) => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead,
    }));
    setNotifications(updatedNotifications);
    toast({
      title: `Marked all as ${isRead ? "read" : "unread"}`,
      description: `All notifications have been marked as ${isRead ? "read" : "unread"}`,
    });
  };

  const handleDeleteAll = () => {
    setNotifications([]);
    toast({
      title: "All notifications deleted",
      description: "All notifications have been removed from your list",
    });
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52">
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setIsSelecting(!isSelecting)}
              >
                {isSelecting ? "Cancel Selection" : "Select"}
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleMarkAll(true)}
              >
                Mark All as Read
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleMarkAll(false)}
              >
                Mark All as Unread
              </Button>
              <Button
                variant="destructive"
                className="w-full justify-start"
                onClick={handleDeleteAll}
              >
                Delete All
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`relative ${
              notification.isRead ? "opacity-70" : ""
            } ${isSelecting ? "cursor-pointer" : ""}`}
            onClick={() => isSelecting && handleSelect(notification.id)}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {notification.isRead ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="font-medium">{notification.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {notification.timestamp}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>
            </CardContent>

            <div className="absolute -left-full top-0 h-full w-full bg-green-500/20 transition-transform duration-300 hover:translate-x-full">
              <div className="h-full flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSwipe(notification.id, "right");
                  }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="absolute -right-full top-0 h-full w-full bg-yellow-500/20 transition-transform duration-300 hover:translate-x--full">
              <div className="h-full flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSwipe(notification.id, "left");
                  }}
                >
                  <AlertCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="absolute right-4 top-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSwipe(notification.id, notification.isRead ? "left" : "right");
                      }}
                    >
                      {notification.isRead ? "Mark as Unread" : "Mark as Read"}
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full justify-start"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(notification.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
