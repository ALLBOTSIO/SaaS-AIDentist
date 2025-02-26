import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { useTheme } from './lib/theme';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import './index.css';

const Root = () => {
  const { theme } = useTheme();
  
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <StrictMode>
        <HelmetProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HelmetProvider>
      </StrictMode>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <Root />
);