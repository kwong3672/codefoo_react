import React from 'react';

import './VideoDescription.css';

const VideoDescription = (props) => {
  return(
    <div className="col-xs-10">
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default VideoDescription;
