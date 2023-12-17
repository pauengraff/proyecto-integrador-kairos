import "./Dashboard.css";
import Header from "./Header";
import TopMenu from "./TopMenu";
import SideMenu2 from "./SideMenu2";
// import SideMenu from "./SideMenu";
import Main from "./Main";
// import Footer from "./Footer";

function Dashboard() {
  return (
    <div>
      <Header />
      <TopMenu />
      <SideMenu2 />
      <Main />
    </div>
  );
}

export default Dashboard;
