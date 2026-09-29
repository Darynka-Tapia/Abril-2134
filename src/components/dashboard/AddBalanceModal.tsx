import { useState } from "react";
import "./../../design/addBalanceModal.css";

interface AddBalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddBalanceModal = ({
  isOpen,
  onClose,
}: AddBalanceModalProps) => {
  const [amount, setAmount] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return;
    }

    console.log("Saldo a cargar:", numericAmount);

    setAmount("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div
        className="balance-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="balance-modal-title"
      >
        <div className="balance-modal-header">
          <div>
            <span className="balance-modal-label">
              SnailPay
            </span>

            <h2 id="balance-modal-title">
              Cargar saldo
            </h2>
          </div>

          <button
            type="button"
            className="balance-modal-close"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="balance-modal-content">
          <label htmlFor="balance-amount">
            ¿Cuánto quieres agregar?
          </label>

          <div className="balance-input-container">
            <span>$</span>

            <input
              id="balance-amount"
              type="number"
              min="1"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>

        <div className="balance-modal-actions">
          <button
            type="button"
            className="balance-modal-button secondary"
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="balance-modal-button primary"
            onClick={handleSubmit}
            disabled={!amount || Number(amount) <= 0}
          >
            Cargar saldo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBalanceModal;