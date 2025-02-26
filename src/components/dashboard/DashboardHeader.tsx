import React from 'react';
import { Bluetooth as Tooth, LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Button } from '@/components/ui/button';

export const DashboardHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Tooth className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AIDENTIST Admin
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {user?.email}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => logout()}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};