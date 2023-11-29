import { useEffect, useState } from 'react';
import { User } from '../models';

export const useGetUser = () => {
  const [state, setState] = useState<{
    user: User | undefined;
    loading: boolean;
    error: Error | undefined;
  }>({
    user: undefined,
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    (async () => {
      setState((prev) => ({ ...prev, loading: true }));
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`);
        const data = await response.json();
        setState((prev) => ({
          ...prev,
          user: data,
          loading: false,
        }));
      } catch (err) {
        const error = err as Error;
        setState((prev) => ({ ...prev, loading: false, error }));
      }
    })();
  }, []);

  return state;
};
