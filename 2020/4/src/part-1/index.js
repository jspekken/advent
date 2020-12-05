/**
 * @see https://adventofcode.com/2020/day/4
 */

const utils = require('../../../shared/utils');
const path = require('path');

/**
 *
 * @param   {string} passport
 * @returns {boolean}
 */
function validatePassport(passport) {
  const pairs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  return pairs
    .filter((pair) => passport.includes(pair))
    .length === pairs.length;
}

const passports = utils.readInputSync(
  path.resolve(__dirname, '../../resources/input.txt'),
  /\n\n/,
);

const result = passports
  .map(passport => validatePassport(passport))
  .filter(Boolean)
  .length;

console.log(result);
