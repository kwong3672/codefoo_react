import React from 'react';

import Cell from './cell'

const style = {
  clear: 'left'
};


const Row = (props) => {
  return (
    <div id={'row' + props.rowIdx} style={style}>
      {props.row.map((cell, colIdx) => {
        const cellId = '' + props.rowIdx + colIdx;
        return (
          <Cell 
            value={cell.value} 
            cellId={cellId} 
            key={cellId}
            partOfAnswer={cell.partOfAnswer}
            cellClicked={props.cellClicked}
            validMove={cell.validMove}
          />
        );
      })}
    </div>  
  );
};


export default Row;
