import TransactionCard from "./TransactionCard";

import type { Transaction } from "../types/transaction.types";

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

const TransactionList = ({ transactions, onDelete }: TransactionListProps) => {
  if (transactions.length === 0) {
    return <div>No Transactions Found</div>;
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TransactionList;
