import BalanceCard from "../../components/dashboard/balance";
import BetsChart from "../../components/dashboard/bets-chart";
import SnailBar from "../../components/dashboard/SnailBar";

import "../../design/dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Centro de Control</h1>
      <div className="cards-container">
        <div className="balance"><BalanceCard /></div>
        <div className="bets"><BetsChart /></div>
        <div className="ranking" ><SnailBar /></div>
      </div>
    </div>
  );
};

export default Dashboard;