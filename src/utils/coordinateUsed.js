// function that checks to see if current coordinate has already been used in current chain
const coordinateUsed = (grid, row, column, chain) => {
  let used = false;
  const key = '' + row + column;
  // if value in object equal to value in cell, the cell has been used
  if ((chain[key] === grid[row][column]) || (chain[key] === true )) {
    used = true;
  }
  return used;
};

export default coordinateUsed;
