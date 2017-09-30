import React from 'react';

import './Image.css';

const Image = (props) => {
  return (
    <div className="col-xs-12 Image" style={{display: props.display}}>
      <img src={props.url} alt="" />
    </div>
  );
};

export default Image;
