import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { DashboardNav } from './DashboardNav';
import { DashboardImplementation } from './DashboardImplementation';
import { AuthGuard } from '@/features/auth/components/AuthGuard';

interface DashboardShellProps {
  children: React.ReactNode;
}

export const DashboardShell: React.FC<DashboardShellProps> = ({ children }) => {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <DashboardHeader />
        <div className="flex">
          <DashboardNav />
          <main className="flex-1">
            <DashboardImplementation />
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
};