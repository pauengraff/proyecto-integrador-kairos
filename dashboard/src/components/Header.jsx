import "./Header.css";
import logo from "../assets/images/logo/kairos-logo-color.png";

export default function Header() {
  return (
    <div>
      Soy el Header
      <img className='width-20' src={logo}></img>
    </div>
  );
}
