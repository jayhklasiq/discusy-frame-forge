
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  UserCog,
  Building2,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  
  const sidebarLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/admin/courses' },
    { icon: UserCog, label: 'Instructors', path: '/admin/instructors' },
    { icon: Users, label: 'Students', path: '/admin/students' },
    { icon: Building2, label: 'Departments', path: '/admin/departments' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const handleLogout = () => {
    // Add logout logic here
    window.location.href = '/splash';
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-discusy-blue">School Admin</h1>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    location.pathname === link.path 
                      ? "bg-discusy-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="border-t mt-4 pt-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
