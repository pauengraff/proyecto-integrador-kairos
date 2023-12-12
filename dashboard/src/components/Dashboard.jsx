import "./Dashboard.css";
import Header from "./Header";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import Main from "./Main";
import Footer from "./Footer";

// import Products from "./Content/Products";
// import Users from "./Content/Users";

function Dashboard() {
  return (
    <div>
      {/* <Products />
      <Users /> */}
      <Header />
      <TopMenu />
      <SideMenu />
      <Main />
      <Footer />
    </div>
  );
}

export default Dashboard;
