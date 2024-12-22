import { ApiError } from '../client/core/ApiError';

export const extractErrorMessage = (error: unknown): string => {
    // check if is ApiError type
    if (error instanceof ApiError) {
      // check if body exist, and extract message
      if (error.body && typeof error.body === 'object' && 'msg' in error.body) {
        return (error.body as { msg: string }).msg || 'An unknown error occurred';
      }
      return 'An unknown error occurred (no message provided)';
    }
  
    // non api error (e.g: internet error)
    return 'A network error occurred. Please try again later.';
  };
  