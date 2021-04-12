/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((value) => {
    const arr = value.split('.').reverse();
    for (let i = 1; i <= arr.length; i++) {
      const domain = `.${arr.slice(0, i).join('.')}`;
      if (res[domain]) {
        res[domain]++;
      } else {
        res[domain] = 1;
      }
    }
  });
  return res;
}

module.exports = getDNSStats;
