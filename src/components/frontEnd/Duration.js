import React from 'react';

import {} from './Duration.css';

const Duration = (props) => {
  return (
    <div className="col-xs-1 Duration">
      {props.duration}
    </div>
  );
};

export default Duration;
