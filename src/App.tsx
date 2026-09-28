import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/register/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
// import { isAuthenticated } from "./services/auth";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        {/* Rutas públicas */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        {/* Rutas privadas */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}


export default App
