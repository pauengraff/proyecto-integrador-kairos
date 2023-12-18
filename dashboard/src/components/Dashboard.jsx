import "./Dashboard.css";
import Header from "./Header";
import SideMenu from "./SideMenu";
import SideMenuRoutes from "./SideMenuRoutes";

function Dashboard() {
  return (
    <div>
      <Header />
      <SideMenu />
      <SideMenuRoutes />
    </div>
  );
}

export default Dashboard;
