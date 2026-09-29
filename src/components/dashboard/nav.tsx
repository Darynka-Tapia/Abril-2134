import "./../../design/nav.css";
import Logo from "./../../assets/snail-races-logo.png";
import Logout from "./../../assets/icons/logout.svg";
import { getUserFromLocalStorage, logoutUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";


function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const success = logoutUser();
    if (success) {
      navigate("/login");
    }
  }
  const user = getUserFromLocalStorage();

  return (
    <header className="nav-header">
      <div>
        <img src={ Logo } alt="Logo" className="logo-navbar" />
        <span>SNAIL RACES</span>
      </div>
      <nav>
        <span>{ user?.name  }</span>
        <a onClick={handleLogout}>
          Cerrar sesión <img src={ Logout } alt="Logo" className="icon" />
        </a>
      </nav>
    </header>
  );
};

export default Nav;