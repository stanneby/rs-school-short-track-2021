/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        mines.push({ i, j });
      }
    }
  }

  const nums = matrix;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      if (nums[i][j] === true) {
        nums[i][j] = 1;
      } else {
        nums[i][j] = mines.reduce((total, value) => {
          if (Math.max(Math.abs(value.i - i), Math.abs(value.j - j)) < 2) {
            return total + 1;
          }
          return total;
        }, 0);
      }
    }
  }

  return nums;
}

module.exports = minesweeper;
