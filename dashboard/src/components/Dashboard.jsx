import "./Dashboard.css";
import Header from "./Header";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import Main from "./Main";
// import Footer from "./Footer";

function Dashboard() {
  return (
    <div>
      <Header />
      <TopMenu />
      <SideMenu />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
