import "./SideMenu2.css";
import { SideMenu2Data } from "./SideMenu2Data";

export default function SideBar2() {
  return (
    <div className='sidebar'>
      <h3>Bienvenido</h3>
      <ul className='sidebarList'>
        {SideMenu2Data.map((val, key) => {
          return (
            <li
              key={key}
              className='row'
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div className='icon'>{val.icon}</div>
              <div className='item'>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
