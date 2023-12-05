import logo from "../assets/images/logo/kairos-logo-color.png";
import "./Dashboard.css";
import Products from "./Content/Products";
import Users from "./Content/Users";

function Dashboard() {
  return (
    <div>
      <Products />
      <Users />
      <img className="width-20" src={logo}></img>
    </div>
  );
}

export default Dashboard;
