
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, MessageSquare, Users } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';
import { Input } from '@/components/ui/input';

interface ChatData {
  id: number;
  title: string;
  lastMessage: string;
  time: string;
  unread: number;
  type: 'regular' | 'course';
}

const Chats: React.FC = () => {
  const navigate = useNavigate();
  
  const allChats: ChatData[] = [
    {
      id: 1,
      title: "Study Group 1",
      lastMessage: "Hey everyone, when's our next meeting?",
      time: "2h ago",
      unread: 3,
      type: 'regular'
    },
    {
      id: 2,
      title: "Study Group 2",
      lastMessage: "I finished the assignment, anyone need help?",
      time: "3h ago",
      unread: 1,
      type: 'regular'
    },
    {
      id: 3,
      title: "Study Group 3",
      lastMessage: "Let's meet in the library at 5pm",
      time: "Yesterday",
      unread: 0,
      type: 'regular'
    },
    {
      id: 4,
      title: "Study Group 4",
      lastMessage: "Can someone share their notes from today?",
      time: "2d ago",
      unread: 2,
      type: 'regular'
    }
  ];
  
  const courseChats: ChatData[] = [
    {
      id: 5,
      title: "CS101 Class Chat",
      lastMessage: "Prof: Don't forget your homework is due tomorrow!",
      time: "5h ago",
      unread: 1,
      type: 'course'
    },
    {
      id: 6,
      title: "CS201 Class Chat",
      lastMessage: "Does anyone understand question 3?",
      time: "1d ago",
      unread: 0,
      type: 'course'
    }
  ];
  
  const handleChatClick = (chatId: number) => {
    navigate(`/chats/${chatId}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Group Chats</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white"
            onClick={() => navigate('/create-chat')}
          >
            <Plus size={24} />
          </Button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search chats" 
            className="pl-10 bg-gray-100 border-none" 
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="all">All Chats</TabsTrigger>
            <TabsTrigger value="course">Course Chats</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {allChats.map((chat) => (
              <Card 
                key={chat.id} 
                className="shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleChatClick(chat.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-discusy-blue flex items-center justify-center text-white mr-3">
                      <MessageSquare size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{chat.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500 mb-1">{chat.time}</span>
                      {chat.unread > 0 && (
                        <span className="bg-discusy-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="course" className="space-y-4">
            {courseChats.map((chat) => (
              <Card 
                key={chat.id} 
                className="shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleChatClick(chat.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-discusy-green flex items-center justify-center text-white mr-3">
                      <Users size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{chat.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500 mb-1">{chat.time}</span>
                      {chat.unread > 0 && (
                        <span className="bg-discusy-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <div className="fixed bottom-20 right-6">
        <Button 
          size="icon" 
          className="h-12 w-12 rounded-full bg-discusy-blue hover:bg-discusy-blue/90 shadow-lg"
          onClick={() => navigate('/create-chat')}
        >
          <Plus size={24} />
        </Button>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default Chats;
