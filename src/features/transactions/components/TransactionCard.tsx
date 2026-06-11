import type { Transaction } from "../types/transaction.types";
interface TransactionCardProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

const TransactionCard = ({ transaction, onDelete }: TransactionCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h3 className="font-medium">{transaction.title}</h3>
        <p>₹ {transaction.amount}</p>
      </div>

      <button
        onClick={() => onDelete(transaction.id)}
        className="rounded bg-red-500 px-3 py-2 text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default TransactionCard;
