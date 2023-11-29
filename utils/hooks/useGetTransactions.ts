import { useEffect, useState } from 'react';
import { Transaction } from '../models';

export const useGetTransactions = () => {
  const [state, setState] = useState<{
    transactions: Transaction[];
    loading: boolean;
    error: Error | undefined;
  }>({
    transactions: [],
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    (async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/transactions`
        );
        const data = await response.json();
        setState((prev) => ({ ...prev, transactions: data, loading: false }));
      } catch (err) {
        const error = err as Error;
        setState((prev) => ({ ...prev, loading: false, error }));
      }
    })();
  }, []);

  return state;
};
