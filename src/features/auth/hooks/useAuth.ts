import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { appCache } from '@/lib/cache';
import { trackEvent } from '@/lib/analytics';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          // For demo purposes, hardcode admin credentials
          if (email === 'admin@aidentist.com' && password === 'admin123') {
            const user = {
              id: '1',
              email,
              role: 'admin' as const,
            };
            set({ user, isAuthenticated: true });
            trackEvent('auth_login_success', { role: user.role });
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          trackEvent('auth_login_error', { error: (error as Error).message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
        appCache.clear();
        trackEvent('auth_logout');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);