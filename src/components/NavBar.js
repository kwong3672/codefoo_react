import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="Navbar">
      <ul>
        <NavLink to="/" activeClassName="active" exact><li>Grid</li></NavLink>
        <NavLink to="/frontend/videos"><li>Videos</li></NavLink>
        <NavLink to="/frontend/articles"><li>Articles</li></NavLink>
        <img src="../images/codefoo.jpg" alt=""  height="50px" width="auto" className="floatRight"/>
      </ul>
    </div>
  );
}

export default NavBar;
