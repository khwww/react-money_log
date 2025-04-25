import css from "./ConfirmModal.module.css";

const ConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p className={css.message}>정말 삭제하시겠습니까?</p>
        <div className={css.buttons}>
          <button onClick={onCancel} className={css.cancel}>
            취소
          </button>
          <button onClick={onConfirm} className={css.confirm}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
