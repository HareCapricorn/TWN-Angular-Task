export function createGrid(height: number, width: number, probability: number): Array<Array<number | null>> {
  // Create an array of height size that is filled with arrays of width size that contain either 1 or null
  return Array.from(Array(height), () => {
    return Array.from(Array(width), () => {
      return Math.random() <= (probability / 100) ? 1 : null
    })
  });
}