import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';
import { trackEvent } from '@/lib/analytics';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const [isChecking, setIsChecking] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!isAuthenticated || !user) {
          trackEvent('auth_guard_redirect');
          window.location.href = '/login';
        }
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [isAuthenticated, user]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return <>{children}</>;
};