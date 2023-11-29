import { useEffect, useState } from 'react';
import { Wallet } from '../models';

export const useGetWallet = () => {
  const [state, setState] = useState<{
    wallet: Wallet | undefined;
    loading: boolean;
    error: Error | undefined;
  }>({
    wallet: undefined,
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    (async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/wallet`);
        const data = await response.json();
        setState((prev) => ({
          ...prev,
          wallet: data,
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
