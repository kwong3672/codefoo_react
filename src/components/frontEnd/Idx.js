import React from 'react';

const Idx = (props) => {
  return(
    <div className="col-xs-1">
      {props.idx + 1 < 10 ? '0' + (props.idx + 1) : props.idx + 1}
    </div>
  );
};

export default Idx;