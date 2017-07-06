import React from 'react';

const Answer = (props) => {

  return (
    <div onClick={props.displaySingleAnswer.bind(this, props.answer)}>
      {props.answer}
    </div>
  );
};

export default Answer;
