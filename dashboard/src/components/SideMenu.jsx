import "./SideMenu.css";
import { SideMenu2Data } from "./SideMenuData";

import { Link } from "react-router-dom";

export default function SideBar2() {
  return (
    <div className='sidebar'>
      <h3>Bienvenido</h3>
      <ul className='sidebarList'>
        {SideMenu2Data.map((val, key) => {
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
