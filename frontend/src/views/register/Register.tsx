import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserToLocalStorage } from "../../services/auth";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = {
      email,
      name: fullName,
      password
    };
    const success = saveUserToLocalStorage(user);
    if (success) {
      navigate("/login");
    } else {
      alert("Error al registrar el usuario");
    }
  };
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordRequirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
  
  const passwordsMatch =
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword;

  return (
    <>
      <div className="inputs">
        <div className="input-container">
          <label htmlFor="fullName">Nombre completo</label>
          <div className="input-wrapper">
            <span>👤</span>
            <input
              id="fullName"
              type="text"
              placeholder="Tu nombre(s) y apellido(s)"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
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
              placeholder="Cree una contraseña segura"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password-requirements">
            <span className={passwordRequirements.length ? "valid" : ""}>
              {passwordRequirements.length ? "✓" : "○"} At least 8 characters
            </span>
            <span className={passwordRequirements.uppercase ? "valid" : ""}>
              {passwordRequirements.uppercase ? "✓" : "○"} One uppercase letter
            </span>
            <span className={passwordRequirements.lowercase ? "valid" : ""}>
              {passwordRequirements.lowercase ? "✓" : "○"} One lowercase letter
            </span>
            <span className={passwordRequirements.number ? "valid" : ""}>
              {passwordRequirements.number ? "✓" : "○"} One number
            </span>
            <span className={passwordRequirements.special ? "valid" : ""}>
              {passwordRequirements.special ? "✓" : "○"} One special character
            </span>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <div className="input-wrapper">
            <span>🔒</span>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme su contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {confirmPassword && (
            <span className={passwordsMatch ? "password-match valid" : "password-match"}>
            {passwordsMatch
              ? "✓ Las contraseñas coinciden"
              : "✕ Las contraseñas no coinciden"}
            </span>
          )}
        </div>
      </div>
      <button className="primary-button" onClick={handleRegister}>
        Regístrate
      </button>
      <p className="form-text">¿Ya tienes una cuenta? <a className="form-link" href="/login">Inicia sesión aquí</a></p>
    </>
  );
};

export default Register;