import React from 'react';


const Cell = (props) => {
  const style = {
    fontSize: '50px',
    textAlign: 'center',
    float: 'left',
    width: '32%',
    maxWidth: '100px',
    height: '100px',
    backgroundColor: props.partOfAnswer ? 'green' : props.validMove ? 'yellow' : 'white',
    border: 'solid',
  }

  return (
    <div 
      id={props.cellId}
      style={style}
      onClick={props.cellClicked.bind(this, {
        cellId: props.cellId,
        value: props.value
      })}
    >
      {props.value}
    </div>
  )
};


export default Cell;
