const getTotalIsles = function (grid) {


  if (!grid || grid.length === 0) return 0;
  
  let rows = grid.length;
  let cols = grid[0].length;
  let islandCount = 0;

  // Helper function for DFS
  function dfs(row, col) {
    // Check if out of bounds or at water
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
      return;
    }
    
    
    grid[row][col] = 'W';
    
    // Explore all 4 directions (up, down, left, right)
    dfs(row + 1, col);  // Down
    dfs(row - 1, col);  // Up
    dfs(row, col + 1);  // Right
    dfs(row, col - 1);  // Left
  }

  // Iterate through each cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        islandCount++;  // Found a new island
        dfs(i, j);      // Mark all connected lands as visited
      }
    }
  }

  return islandCount;

};

module.exports = getTotalIsles;