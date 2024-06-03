import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <p className="title">Test Db</p>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/blockbuster" className="nav-link">BLOCKBUSTER</Link>
          </li>
          <li className="nav-item">
            <Link to="/indies" className="nav-link">INDIES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

