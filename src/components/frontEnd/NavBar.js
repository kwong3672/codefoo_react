import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className="NavBar row">        
      <div className="col-xs-6 NavBar-videos">
        <NavLink 
          to="./videos" 
          activeClassName="active"
          activeStyle={{
            'color': 'black',
          }}
          style={{
            'color': 'white',
          }}
          onClick={() => props.changeCategory('videos')}
        >VIDEOS
        </NavLink>
      </div>
      <div className="col-xs-6 NavBar-articles">
        <NavLink to="./articles" 
          activeClassName="active"
          activeStyle={{
            'color': 'black'
          }}
          style={{
            'color': 'red',
          }}
          onClick={() => props.changeCategory('articles')}
        >ARTICLES</NavLink>
      </div>
    </div>
  );  
};


export default NavBar;
