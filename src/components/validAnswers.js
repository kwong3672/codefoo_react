import React from 'react';

import Answer from './Answer';




const ValidAnswers = (props) => {

  const sum = props.userSelectedChain ? props.sum : 0

  return (
    <div style={{clear: 'left'}}>
      <h1><strong>Sum: </strong>{sum}</h1>
      Total Answers: {props.totalAnswers}<br />
      {props.validAnswers.map((answer) => {
        return (
          <Answer key={answer} answer={answer} displaySingleAnswer={props.displaySingleAnswer}/>
        )
      })}    
      <hr />
    </div>
  );
};

export default ValidAnswers;
