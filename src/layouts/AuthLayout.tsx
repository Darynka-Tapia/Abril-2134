import { Outlet, useLocation } from "react-router-dom";
import "./../design/auth.css";
import Logo from "./../assets/snail-races-logo.png";

const AuthLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const title = isLoginPage
    ? "Inicia sesión"
    : "Crear una cuenta";
  return (
    <div className="auth-container">
        <img src={ Logo } alt="Logo" className="logo" />
        <h1>{ title }</h1>
        {!isLoginPage && (
          <p>Ingresa tus datos para registrarte en la plataforma</p>
        )}
      <main className="auth-main">
        <Outlet />
      </main>
    </div>
  )
};

export default AuthLayout;