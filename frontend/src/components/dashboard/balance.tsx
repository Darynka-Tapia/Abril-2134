import Card from "./card";
import "../../design/balance.css";
import WalletIcon from "../../assets/icons/account_balance_wallet.svg";
import AddIcon from "../../assets/icons/add.svg";
import RaceIcon from "../../assets/icons/sports_score.svg";
import AddBalanceModal from "./AddBalanceModal";
import { useState } from "react";

const BalanceCard = () => {
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const balance = Number(localStorage.getItem("balance") || 0.00);

  return (
    <Card>
      <div className="balance-container">
        <div className="balance-card-header">
          <span className="balance-card-label">Cartera</span>
          <img src={WalletIcon} alt="Wallet Icon" className="balance-card-icon" />
        </div>
        <div className="balance-card-body">
          <span className="balance-card-title">Saldo disponible</span>
          <div className="balance-card-value-container">
            <span className="balance-card-value">${balance.toFixed(2)}</span>
            <span className="balance-card-currency">SnailCoin</span>
          </div>          
        </div>
        <div className="balance-card-buttons-container">
          <button className="balance-card-button--primary">
            <img src={RaceIcon} alt="Race Icon" className="balance-card-button-icon" />
            <span>Elegir Caracol</span>
            </button>
          <button className="balance-card-button--secondary"  onClick={() => setIsBalanceModalOpen(true)}>
            <div className="balance-card-button-text-container">
              <img src={AddIcon} alt="Wallet Icon" className="balance-card-button-icon" />
              <span>Cargar saldo</span>
            </div>
            <span className="balance-card-button-description">Vía pasarela segura <b>SnailPay</b></span>
          </button>
        </div>
        
      </div>
      <AddBalanceModal
        isOpen={isBalanceModalOpen}
        onClose={() => setIsBalanceModalOpen(false)}
      />
    </Card>
  );
};

export default BalanceCard;