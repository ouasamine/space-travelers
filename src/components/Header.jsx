import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <div id="page-header">
      <div className="logo">
        <img alt="SpaceX logo" src="./planet.png" />
        <h1>Space Travelers&#39; Hub</h1>
      </div>
      <nav id="nav-links">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
