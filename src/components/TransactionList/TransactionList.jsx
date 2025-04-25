import TransactionItem from "../TransactionItem/TransactionItem";
import css from "./TransactionList.module.css";

const TransactionList = ({ transactions, onDeleteClick }) => {
  const isScrollable = transactions.length >= 4;
  if (transactions.length === 0) {
    return (
      <div className={css.listSection}>
        <h2 className={css.sectionTitle}>내역</h2>
        <p className={css.empty}>거래 내역이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={css.listSection}>
      <h2 className={css.sectionTitle}>내역</h2>
      <ul className={`${css.list} ${isScrollable ? css.scrollable : ""}`}>
        {transactions.map((t) => (
          <TransactionItem key={t.id} item={t} onDeleteClick={onDeleteClick} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
