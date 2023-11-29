export interface FilterType {
  dateRange: { start?: Date; end?: Date };
  transactionType: string[];
  transactionStatus: string[];
}

export interface Transaction {
  amount: number;
  date: string;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: 'deposit' | 'withdrawal';
}

export interface Wallet {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
}

export interface User {
  email: string;
  first_name: string;
  last_name: string;
}
