/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let current = str[0];
  let count = 1;
  let res = '';
  for (let i = 1; i < str.length; i++) {
    if (current !== str[i]) {
      if (count === 1) {
        res += current;
      } else {
        res += `${count}${current}`;
      }
      current = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count === 1) {
    res += current;
  } else {
    res += `${count}${current}`;
  }
  return res;
}

module.exports = encodeLine;
