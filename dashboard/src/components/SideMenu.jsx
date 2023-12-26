import "./SideMenu.css";
import { SideMenuData } from "./SideMenuData";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className='sidebar'>
      <h3>Bienvenido</h3>
      <ul className='sidebarList'>
        {SideMenuData.map((val, key) => {
          return (
            <li key={key}>
              <Link to={val.link} className='row'>
                <div className='icon'>{val.icon}</div>
                <div className='item'>{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
