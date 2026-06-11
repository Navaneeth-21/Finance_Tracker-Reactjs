import { useState } from "react";

interface TransactionFormProps {
  onAdd: (title: string, amount: number) => void;
}

const TransactionForm = ({ onAdd }: TransactionFormProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !amount.trim()) {
      return;
    }
    onAdd(title, Number(amount));

    setTitle("");
    setAmount("");
  };

  return (
    <div className="rounded-lg border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Transaction Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded border p-3 dark:border-slate-700
  dark:bg-slate-800
"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="w-full rounded border p-3 dark:border-slate-700
  dark:bg-slate-800
"
        />

        <button
          onClick={handleSubmit}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
