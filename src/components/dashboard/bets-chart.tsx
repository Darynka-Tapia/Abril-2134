import Card from "./card";
import "../../design/bets.css";
import WalletIcon from "../../assets/icons/account_balance_wallet.svg";

const BetsChart = () => {
  return (
    <Card>
      <div className="bets-container">
        <div className="bets-header">
          <span className="bets-label">Apuestas ganadas y perdidas</span>
          <div className="bets-resume-container">
            <img src={WalletIcon} alt="Wallet Icon" className="bets-card-icon" />
            <span className="bets-resume-value">0 Apuestas totales</span>
          </div>
        </div>
        <div className="bets-body">
          <div className="bets-chart">
            <span>Gráfico de apuestas</span>
          </div>
          
          <div className="bets-details">
            
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BetsChart;