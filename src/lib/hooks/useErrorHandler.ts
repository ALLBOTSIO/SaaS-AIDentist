import { useState, useCallback } from 'react';
import { trackError } from '../analytics';

interface UseErrorHandler {
  error: Error | null;
  handleError: (error: unknown) => void;
  clearError: () => void;
}

export const useErrorHandler = (): UseErrorHandler => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = useCallback((error: unknown) => {
    const errorObject = error instanceof Error ? error : new Error(String(error));
    setError(errorObject);
    trackError(errorObject.message);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
  };
};