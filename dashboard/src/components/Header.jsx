import "./Header.css";
import logo from "../assets/images/logo/kairos-logo-color.png";

export default function Header() {
  return (
    <div className='header'>
      Soy el Header
      <img className='logo' src={logo}></img>
    </div>
  );
}
