
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, MoreVertical, Users } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  isCurrentUser: boolean;
}

interface ChatRoomData {
  id: number;
  title: string;
  participants: string[];
  messages: Message[];
}

const ChatRoom: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [chatData, setChatData] = useState<ChatRoomData | null>(null);
  
  // Mock data for the chat
  useEffect(() => {
    // In a real app, we would fetch this data from an API
    const mockChat: ChatRoomData = {
      id: Number(chatId),
      title: `Study Group ${chatId}`,
      participants: ['You', 'John Doe', 'Jane Smith', 'Alex Johnson'],
      messages: [
        {
          id: 1,
          text: "Hey everyone! How's the studying going?",
          sender: "John Doe",
          timestamp: "Yesterday, 2:30 PM",
          isCurrentUser: false
        },
        {
          id: 2,
          text: "I'm having trouble with question 3 on the assignment.",
          sender: "Jane Smith",
          timestamp: "Yesterday, 2:35 PM",
          isCurrentUser: false
        },
        {
          id: 3,
          text: "I can help with that! Let's meet in the library at 5pm?",
          sender: "You",
          timestamp: "Yesterday, 2:40 PM",
          isCurrentUser: true
        },
        {
          id: 4,
          text: "That works for me!",
          sender: "Jane Smith",
          timestamp: "Yesterday, 2:42 PM",
          isCurrentUser: false
        },
        {
          id: 5,
          text: "I'll be there too. I've already finished most of the assignment.",
          sender: "Alex Johnson",
          timestamp: "Yesterday, 3:00 PM",
          isCurrentUser: false
        }
      ]
    };
    
    setChatData(mockChat);
  }, [chatId]);
  
  const handleSendMessage = () => {
    if (!message.trim() || !chatData) return;
    
    // In a real app, we would send this to an API
    const newMessage: Message = {
      id: chatData.messages.length + 1,
      text: message,
      sender: "You",
      timestamp: "Just now",
      isCurrentUser: true
    };
    
    setChatData({
      ...chatData,
      messages: [...chatData.messages, newMessage]
    });
    
    setMessage('');
  };
  
  if (!chatData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16 flex flex-col">
      {/* Header */}
      <header className="bg-discusy-blue text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2 text-white" 
              onClick={() => navigate('/chats')}
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{chatData.title}</h1>
              <p className="text-xs opacity-80">{chatData.participants.join(', ')}</p>
            </div>
          </div>
          <div className="flex">
            <Button variant="ghost" size="icon" className="text-white">
              <Users size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <MoreVertical size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatData.messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-3/4 rounded-lg px-4 py-2 ${
                msg.isCurrentUser 
                  ? 'bg-discusy-blue text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {!msg.isCurrentUser && (
                <p className="text-xs font-semibold">{msg.sender}</p>
              )}
              <p>{msg.text}</p>
              <p className="text-xs opacity-70 text-right mt-1">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-3 flex items-center">
        <Input
          placeholder="Type a message..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow"
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-2 text-discusy-blue"
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          <Send size={20} />
        </Button>
      </div>

      {/* Navigation */}
      <NavigationTabs />
    </div>
  );
};

export default ChatRoom;
