import { GameOfLifeOptions } from "../interfaces/gameoflifeoptions";

const operations: Array<Array<number>> = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];  

export function checkNeighbors(i: number, j: number, grid: Array<Array<number | null>>, gameOptions: GameOfLifeOptions) {
  const rows: number = gameOptions.gridHeight;
  const columns: number = gameOptions.gridWidth;
  let neighbors: number = 0;
  operations.forEach(([x, y]) => {
      // Temp variables to avoid out of bounds errors when checking grid
      const newI: number = i + x;
      const newJ: number = j + y;
      if (newI >= 0 && newI < rows && newJ >= 0 && newJ < columns) {
          // Neighbor has to be alive to count
          if (grid[newI][newJ] === 1) {
              neighbors += 1;
          }
      }
  })
  return neighbors
}