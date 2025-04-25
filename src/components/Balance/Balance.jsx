import css from "./Balance.module.css";

const Balance = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className={css.balanceContainer}>
      <div className={css.balanceCard}>
        <div className={css.balanceInfo}>
          <h2>잔액</h2>
          <p className={css.balanceAmount}>₩{balance.toLocaleString()}</p>
        </div>
      </div>

      <div className={css.summaryCard}>
        <div className={css.summaryItem}>
          <h3>수입</h3>
          <p className={css.incomeAmount}>₩{income.toLocaleString()}</p>
        </div>
        <div className={css.divider}></div>
        <div className={css.summaryItem}>
          <h3>지출</h3>
          <p className={css.expenseAmount}>₩{expense.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
