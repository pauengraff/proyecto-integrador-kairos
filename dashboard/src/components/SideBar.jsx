import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to=''>Login</Link>
        </li>
        <li>
          <Link to=''>Relojes</Link>
        </li>
        <li>
          <Link to=''>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
}
