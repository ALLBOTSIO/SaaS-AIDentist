import React from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  BarChart,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Patients', href: '/dashboard/patients' },
  { icon: Calendar, label: 'Appointments', href: '/dashboard/appointments' },
  { icon: MessageSquare, label: 'Messages', href: '/dashboard/messages' },
  { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export const DashboardNav = () => {
  return (
    <nav className="w-64 min-h-[calc(100vh-4rem)] border-r bg-white dark:bg-gray-900 p-4">
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = window.location.pathname === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};