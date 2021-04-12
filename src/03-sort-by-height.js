/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      let reach = 1;
      while (array[j + reach] === -1) {
        reach++;
      }
      if (array[j] > array[j + reach]) {
        const buf = array[j + reach];
        array[j + reach] = array[j];
        array[j] = buf;
      }
      j += reach - 1;
    }
  }
  return array;
}

module.exports = sortByHeight;
