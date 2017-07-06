import React from 'react';

const Footer = (props) => {
  return (
    <div onClick={props.getMore}>
      See more {props.category}...
    </div>
  );  

};

export default Footer;


