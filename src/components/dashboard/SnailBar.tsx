import Card from "./card";
import "../../design/bars.css";
import SnailIcon from "../../assets/icons/snail.svg";
import BasicBarChart from './BasicBarChart';


const SnailBar = () => {
  return (
    <Card>
      <div className="bar-container">
        <div className="bar-header">
          <span className="bar-label">Visctorias por caracol</span>
          <div className="bar-resume-container">
            <img src={SnailIcon} alt="Wallet Icon" className="bar-card-icon" />
            <span className="bar-resume-value">6 carreras disputadas</span>
          </div>
        </div>
        <div className="bar-body">
          <div className="bar-details">
            <BasicBarChart />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SnailBar;