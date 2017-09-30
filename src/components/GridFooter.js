import React from 'react';

const GridFooter = (props) => {
  return (
    <div style={style}>
      <button onClick={() => { 
        props.resetGrid();
        props.displayAnswers(); 
      }}>Get All Answers</button>
      <button onClick={props.newGrid.bind(this)}>Create New Grid</button>
      <button onClick={props.resetGrid.bind(this)}>Reset Grid</button>
    </div>
  );
}

const style = {
  clear: 'left',
  padding: '10px 0',
}

export default GridFooter;
