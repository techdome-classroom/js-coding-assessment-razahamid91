const getTotalIsles = function (grid) {


  if (!grid || grid.length === 0) return 0;
  
  let numRows = grid.length;
  let numCols = grid[0].length;
  let islandCounter = 0;

  function explore(row, col) {
    if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === 'W') {
      return;
    }
    
    grid[row][col] = 'W';
    
    explore(row + 1, col);
    explore(row - 1, col);
    explore(row, col + 1);
    explore(row, col - 1);
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === 'L') {
        islandCounter++;
        explore(i, j);
      }
    }
  }

  return islandCounter;

};

module.exports = getTotalIsles;