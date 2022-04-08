export function countLives(grid: Array<Array<number | null>>): number {
  let livesCount: number = 0;
  // Count all the cells with a value of 1
  grid.forEach((row, i) => {
    row.forEach((_col, j) => {
      if (grid[i][j] === 1) {
        livesCount += 1;
      }
    })
  })
  return livesCount;
}