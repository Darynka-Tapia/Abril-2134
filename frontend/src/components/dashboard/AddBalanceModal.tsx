import { useState } from "react";
import "./../../design/addBalanceModal.css";
import { addBalance } from "./../../services/balance";

interface AddBalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddBalanceModal = ({
  isOpen,
  onClose,
}: AddBalanceModalProps) => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [fullName, setFullName] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return;
    }

    try {
      const response = await addBalance({
        amount: numericAmount,
        cardNumber,
        expirationDate,
        cvv,
        fullName,
      });

      if (response.status === "approved") {
        console.log("Pago aprobado:", response);

        localStorage.setItem(
          "balance",
          String(response.balance)
        );

        localStorage.setItem(
          "cardNumber",
          response.card_number
        );

        localStorage.setItem(
          "cvv",
          response.cvv
        );

        setAmount("");
        setCardNumber("");
        setExpirationDate("");
        setCvv("");
        setFullName("");

        onClose();

        return;
      }
      alert(`Pago rechazado: ${response.status_detail}`)
      console.log(
        "Pago rechazado:",
        response.status_detail
      );
    } catch (error) {
      alert(`Error al procesar el pago: ${error}`)
      console.error(
        "Error al procesar el pago:",
        error
      );
    }
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

          <label htmlFor="card-number">
            Número de tarjeta
          </label>

          <div className="balance-input-container">
            <input
              id="card-number"
              type="text"
              inputMode="numeric"
              maxLength={16}
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(event) =>
                setCardNumber(event.target.value)
              }
            />
          </div>

          <div className="balance-form-row">
            <div>
              <label htmlFor="expiration-date">
                Vencimiento
              </label>

              <div className="balance-input-container">
                <input
                  id="expiration-date"
                  type="text"
                  maxLength={5}
                  placeholder="MM/YY"
                  value={expirationDate}
                  onChange={(event) =>
                    setExpirationDate(event.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="cvv">
                CVV
              </label>

              <div className="balance-input-container">
                <input
                  id="cvv"
                  type="password"
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="123"
                  value={cvv}
                  onChange={(event) =>
                    setCvv(event.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <label htmlFor="full-name">
            Nombre completo
          </label>

          <div className="balance-input-container">
            <input
              id="full-name"
              type="text"
              placeholder="Nombre completo"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
            />
          </div>

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
            disabled={
              !amount ||
              !cardNumber ||
              !expirationDate ||
              !cvv ||
              !fullName ||
              Number(amount) <= 0
            }
          >
            Cargar saldo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBalanceModal;