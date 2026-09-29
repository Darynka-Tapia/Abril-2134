import BalanceCard from "../../components/dashboard/balance";
import "../../design/dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Centro de Control</h1>
      <BalanceCard />
    </div>
  );
};

export default Dashboard;