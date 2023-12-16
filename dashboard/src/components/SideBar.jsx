import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav>
      <ul className='link'>
        <li>
          <Link to=''>Login</Link>
        </li>
        <li>
          <Link to=''>Relojes</Link>
          <ul className='inside-link'>
            <li>
              <Link to=''>Clasicos</Link>
            </li>
            <li>
              <Link to=''>Deportivos</Link>
            </li>
            <li>
              <Link to=''>Moda Alta Gama</Link>
            </li>
            <li>
              <Link to=''>Deporte Profesional</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to=''>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
}
