import { useLocalStorage } from "../hooks/useLocalStorage";

import TransactionForm from "../features/transactions/components/TransactionForm";
import TransactionList from "../features/transactions/components/TransactionList";

import type { Transaction } from "../features/transactions/types/transaction.types";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    "transactions",
    [],
  );
  const handleAddTransaction = (title: string, amount: number) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      title,
      amount,
    };

    setTransactions((previous) => [...previous, newTransaction]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id),
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transactions</h1>

      <TransactionForm onAdd={handleAddTransaction} />

      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
};

export default TransactionsPage;
