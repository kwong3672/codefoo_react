import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="Navbar">
      <ul>
        <NavLink to="/" activeClassName="active" exact><li>Home</li></NavLink>
        <NavLink to="/grid"><li>Grid</li></NavLink>
        <NavLink to="/frontend"><li>Frontend</li></NavLink>
        <img src="../images/codefoo.jpg" alt=""  height="50px" width="auto" className="floatRight"/>
      </ul>
    </div>
  );
}

export default NavBar;
