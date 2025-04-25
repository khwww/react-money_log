import css from "./TransactionItem.module.css";

const TransactionItem = ({ item, onDeleteClick }) => {
  const sign = item.type === "income" ? "+" : "-";
  const amountStyle = item.type === "income" ? css.income : css.expense;
  const itemStyle = item.type === "income" ? css.incomeItem : css.expenseItem;

  return (
    <li className={`${css.item} ${itemStyle}`}>
      <div className={css.content}>
        <div className={css.description}>{item.description}</div>
        <div className={amountStyle}>
          {sign}₩{item.amount.toLocaleString()}
        </div>
      </div>
      <div className={css.meta}>
        <span className={css.date}>{item.date}</span>
        <button onClick={() => onDeleteClick(item.id)} className={css.delete}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
