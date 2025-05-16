
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Auth from "./pages/Auth";
import SchoolInfo from "./pages/SchoolInfo";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Chats from "./pages/Chats";
import ChatRoom from "./pages/ChatRoom";
import CreateChat from "./pages/CreateChat";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Instructor pages
import InstructorDashboard from "./pages/InstructorDashboard";
import InstructorCourses from "./pages/InstructorCourses";
import InstructorChats from "./pages/InstructorChats";
import InstructorProfile from "./pages/InstructorProfile";

// Admin pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCourses from "./pages/admin/Courses";
import AdminInstructors from "./pages/admin/Instructors";
import AdminStudents from "./pages/admin/Students";
import AdminDepartments from "./pages/admin/Departments";
import AdminSettings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/school-info" element={<SchoolInfo />} />
          
          {/* Student routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chats/:chatId" element={<ChatRoom />} />
          <Route path="/create-chat" element={<CreateChat />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Instructor routes */}
          <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
          <Route path="/instructor/courses" element={<InstructorCourses />} />
          <Route path="/instructor/chats" element={<InstructorChats />} />
          <Route path="/instructor/profile" element={<InstructorProfile />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="instructors" element={<AdminInstructors />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="departments" element={<AdminDepartments />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
