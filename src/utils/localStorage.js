const STORAGE_KEY = "transactions";

export const saveTransactions = (transactions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch (err) {
    console.error("Failed to save transactions", err);
  }
};

export const loadTransactions = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to load transactions", err);
    return [];
  }
};
