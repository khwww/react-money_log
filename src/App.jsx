import { useState, useEffect } from "react";
import Balance from "./components/Balance/Balance";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";
import ConfirmModal from "./components/Modal/ConfirmModal";
import { loadTransactions, saveTransactions } from "./utils/localStorage";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const saved = loadTransactions();
    setTransactions(saved);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      saveTransactions(transactions);
    }
  }, [transactions, isInitialized]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setTransactions((prev) => prev.filter((t) => t.id !== selectedId));
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">용돈기입장</h1>
      <Balance transactions={transactions} />
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteClick={handleDeleteClick}
      />
      {isModalOpen && (
        <ConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default App;
