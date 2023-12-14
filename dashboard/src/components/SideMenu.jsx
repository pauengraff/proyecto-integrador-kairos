import "./SideMenu.css";
import SideBar from "./SideBar";
import ContentBar from "./ContentBar";

export default function SideMenu() {
  return (
    <div className='sideMenu'>
      <div>
        <p>Foto User</p>
      </div>
      <SideBar />
      <ContentBar />
    </div>
  );
}
