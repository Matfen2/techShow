import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <p className="title">Test Db</p>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to='/blockbuster'>BLOCKBUSTER</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/indies'>INDIES</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
