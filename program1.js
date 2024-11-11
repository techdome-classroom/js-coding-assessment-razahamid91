const getTotalIsles = function (grid) {


  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;
  const rowCount = grid.length;
  const colCount = grid[0].length;

  const exploreIsland = (x, y) => {
    if (x < 0 || y < 0 || x >= rowCount || y >= colCount || grid[x][y] === 'W') return;

    grid[x][y] = 'W';
    exploreIsland(x + 1, y);
    exploreIsland(x - 1, y);
    exploreIsland(x, y + 1);
    exploreIsland(x, y - 1);
  };

  for (let x = 0; x < rowCount; x++) {
    for (let y = 0; y < colCount; y++) {
      if (grid[x][y] === 'L') {
        islandCount++;
        exploreIsland(x, y);
      }
    }
  }

  return islandCount;

};

module.exports = getTotalIsles;