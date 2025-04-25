import { useState } from "react";
import css from "./TransactionForm.module.css";

const TransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = Number(amount);
    if (!description.trim() || isNaN(numericAmount) || numericAmount <= 0) {
      alert("올바른 입력을 확인해주세요.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: numericAmount,
      type,
      date: new Date().toISOString().split("T")[0],
    };

    onAdd(newTransaction);

    setDescription("");
    setAmount("");
    setType("income");
  };

  return (
    <div className={css.formSection}>
      <h2 className={css.sectionTitle}>새로운 거래 추가</h2>

      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="내용 입력..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={css.input}
        />

        <div className={css.radioGroup}>
          <label
            className={`${css.radioLabel} ${
              type === "income" ? css.radioActive : ""
            }`}
          >
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
              className={css.radioInput}
            />
            <span className={css.radioCircle}></span>
            <span className={css.radioText}>수입</span>
          </label>

          <label
            className={`${css.radioLabel} ${
              type === "expense" ? css.radioActive : ""
            }`}
          >
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
              className={css.radioInput}
            />
            <span className={css.radioCircle}></span>
            <span className={css.radioText}>지출</span>
          </label>
        </div>

        <input
          type="number"
          placeholder="금액 입력..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={css.input}
        />

        <button type="submit" className={css.submitButton}>
          거래 추가
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
