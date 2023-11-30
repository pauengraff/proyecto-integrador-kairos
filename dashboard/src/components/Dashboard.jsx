import logo from "../assets/images/logo/kairos-logo-color.png";
import "./Dashboard.css";
import Products from "./Content/Products";

function Dashboard() {
  return (
    <div>
      <Products />
      <img className="width-20" src={logo}></img>
    </div>
  );
}

export default Dashboard;
