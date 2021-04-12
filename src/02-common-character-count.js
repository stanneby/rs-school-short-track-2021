/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const c1 = {};
  const c2 = {};

  s1.split('').forEach((value) => {
    if (c1[value] === undefined) {
      c1[value] = 1;
    } else {
      c1[value] += 1;
    }
  });

  s2.split('').forEach((value) => {
    if (c2[value] === undefined) {
      c2[value] = 1;
    } else {
      c2[value] += 1;
    }
  });

  Object.keys(c1).forEach((par) => {
    sum += Math.min(c1[par], c2[par] || 0);
  });

  return sum;
}

module.exports = getCommonCharacterCount;
