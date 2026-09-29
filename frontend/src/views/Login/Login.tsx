import { useState } from "react";
import { loginUser } from "../../services/auth";
import "./../../design/auth.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = loginUser(email, password);
    if (success) {
      navigate("/dashboard");
      console.log("Usuario logueado correctamente");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };
  return (
    <>
      <div className="inputs">
          <div className="input-container">
          <label htmlFor="email">Correo electrónico</label>

          <div className="input-wrapper">
            <span>@</span>
            <input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña</label>
          <div className="input-wrapper">
            <span>🔒</span>
            <input
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="primary-button" onClick={handleLogin}>
        Iniciar sesión
      </button>
      <p className="form-text">¿No tienes una cuenta? <a className="form-link" href="/register">Regístrate aquí</a></p>
    </>
  );
};

export default Login;