import "./Footer.css";
import logo from "../assets/images/logo/kairos-logo-blanco.png";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='main-footer'>
        <div className='left-section-footer'>
          <div className='logo-footer'>
            <img src={logo} alt='' />
          </div>

          <div className='icons-footer'>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-square-twitter'></i>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-youtube'></i>
          </div>
        </div>

        <div className='right-section-footer'>
          <p>Todo el tiempo para vos</p>
        </div>

        <p className='copyright'>©Copyright Kairos 2023</p>
      </div>
    </footer>
  );
}
