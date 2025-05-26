// Mock data for development
const mockChats = [
  {
    id: 1,
    title: "CS101 Study Group",
    lastMessage: "Hey, when's the next study session?",
    time: "2m ago",
    unread: 3,
    courseCode: "CS101",
    participants: ["You", "John Doe", "Jane Smith"],
  },
  {
    id: 2,
    title: "Math Club",
    lastMessage: "Don't forget about the quiz tomorrow!",
    time: "1h ago",
    unread: 0,
    courseCode: "MATH201",
    participants: ["You", "Alex Johnson", "Sarah Wilson"],
  },
  {
    id: 3,
    title: "Physics Lab Group",
    lastMessage: "The lab report is due next week",
    time: "3h ago",
    unread: 1,
    courseCode: "PHYS101",
    participants: ["You", "Mike Brown", "Lisa Chen"],
  },
];

const mockMessages = {
  1: [
    {
      id: 1,
      text: "Hey everyone!",
      sender: "John Doe",
      timestamp: "10:30 AM",
      isCurrentUser: false,
    },
    {
      id: 2,
      text: "Hi! How's the studying going?",
      sender: "You",
      timestamp: "10:31 AM",
      isCurrentUser: true,
    },
    {
      id: 3,
      text: "Hey, when's the next study session?",
      sender: "Jane Smith",
      timestamp: "10:32 AM",
      isCurrentUser: false,
    },
  ],
  2: [
    {
      id: 1,
      text: "Don't forget about the quiz tomorrow!",
      sender: "Alex Johnson",
      timestamp: "1h ago",
      isCurrentUser: false,
    },
  ],
  3: [
    {
      id: 1,
      text: "The lab report is due next week",
      sender: "Mike Brown",
      timestamp: "3h ago",
      isCurrentUser: false,
    },
  ],
};

export const getRegularChats = () => {
  return mockChats;
};

export const getCourseChats = () => {
  return mockChats.filter(chat => chat.courseCode);
};

export const getTeamChats = () => {
  return mockChats.filter(chat => chat.title.includes("Team"));
};

export const getChatById = (id: number) => {
  return mockChats.find(chat => chat.id === id);
};

export const getMessagesByChatId = (chatId: string | number) => {
  return mockMessages[chatId as keyof typeof mockMessages] || [];
}; 