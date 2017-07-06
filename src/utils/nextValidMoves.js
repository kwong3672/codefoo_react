import validCoordinate from './validCoordinate';
import coordinateUsed from './coordinateUsed';


const nextValidMoves = (currentCell, usedCells, sum, grid) => {

  const row = parseInt(currentCell.cellId[0], 10);
  const column = parseInt(currentCell.cellId[1], 10);
  // const validMoves = {};
  const validMoves = [];

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (validCoordinate(row + i, column + j)) {
        if (!coordinateUsed(grid, row + i, column + j, usedCells)) {
          const key = '' + (row + i) + (column + j);
          // validMoves[key] = 'true';
          validMoves.push(key);
        }
      } 
    }
  }

  return validMoves;

}

export default nextValidMoves;
