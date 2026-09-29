import Card from "./card";
import "../../design/bets.css";
import PieChartIcon from "../../assets/icons/pie_chart.svg";
import BasicPie from './BasicPie';


const BetsChart = () => {
  return (
    <Card>
      <div className="bets-container">
        <div className="bets-header">
          <span className="bets-label">Apuestas ganadas y perdidas</span>
          <div className="bets-resume-container">
            <img src={PieChartIcon} alt="Wallet Icon" className="bets-card-icon" />
            <span className="bets-resume-value">30 Apuestas totales</span>
          </div>
        </div>
        <div className="bets-body">
          <div className="bets-details">
            <BasicPie />
          </div>
          <div className="bets-chart-details">
            <div className="bet-item-detail">
              <div className="color"></div>
              <div className="bet-item-titles-container">
                <span className="item-title">Apuestas Ganadas</span>
                <span className="item-percent">60% de tasa de retorno</span>
              </div>
              <div className="item-num-container">
                <span className="item-num">18</span>
                <span className="item-num-title">races</span>
              </div>
            </div>
            <div className="bet-item-detail">
              <div className="color"></div>
              <div className="bet-item-titles-container">
                <span className="item-title">Apuestas Perdidas</span>
                <span className="item-percent">40% sin cobro de premio</span>
              </div>
              <div className="item-num-container">
                <span className="item-num">12</span>
                <span className="item-num-title">races</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BetsChart;