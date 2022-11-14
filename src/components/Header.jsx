import { Link } from 'react-router-dom';

function NavLink() {
  return (
    <nav id="nav-links">
      <Link to="/Rockets">Rockets</Link>
      <Link to="/Missions">Missions</Link>
      <Link to="/Profile">My Profile</Link>
    </nav>
  );
}

function Header() {
  return (
    <div id="page-header">
      <div className="logo">
        <img alt="SpaceX logo" src="./planet.png" />
        <h1>Space Travelers&#39; Hub</h1>
      </div>
      <NavLink />
    </div>
  );
}

export default Header;
