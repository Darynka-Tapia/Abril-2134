import { Outlet } from "react-router-dom";
import Nav from "../components/dashboard/nav";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <main style={{ padding: "20px 40px" }}>
        <Outlet />
      </main>
    </div>
  )
};
export default MainLayout;