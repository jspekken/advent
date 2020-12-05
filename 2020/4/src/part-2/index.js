/**
 * @see https://adventofcode.com/2020/day/4
 */

const utils = require('../../../shared/utils');
const path = require('path');

/**
 * Check if the given value is between a and b.
 *
 * @param   {Number} value
 * @param   {Number} a
 * @param   {Number} b
 * @returns {boolean}
 */
const checkValueBetween = (value, a, b) => value >= a && value <= b;

/**
 *
 * @param   {string} passport
 * @returns {boolean}
 */
function validatePassport(passport) {
  passport = passport
    .replace(/(?:\r\n|\r|\n)/g, ' ')
    .trim();

  const pairs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  if (pairs.filter((pair) => passport.includes(pair)).length !== pairs.length) {
    return false;
  }

  let passes = true;

  for (let line of passport.split(' ')) {
    const [key, value] = line.split(':');

    switch (key) {
      case 'byr':
        if (!checkValueBetween(value, 1920, 2002)) {
          passes = false;
        }
        break;

      case 'iyr':
        if (!checkValueBetween(value, 2010, 2020)) {
          passes = false;
        }
        break;

      case 'eyr':
        if (!checkValueBetween(value, 2020, 2030)) {
          passes = false;
        }
        break;

      case 'hgt':
        const match = value.match(/(?<digit>\d+)(?<unit>in|cm)/);

        if (!match) {
          passes = false
        } else {
          const { digit, unit } = match.groups;

          if (unit === 'cm') {
            if (!checkValueBetween(digit, 150, 193)) {
              passes = false;
            }
          }

          if (unit === 'in') {
            if (!checkValueBetween(digit, 59, 76)) {
              passes = false;
            }
          }
        }
        break;

      case 'hcl':
        if (!/^#([0-9a-f]{6})$/.test(value)) {
          passes = false;
        }
        break;

      case 'ecl':
        if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)) {
          passes = false;
        }
        break;

      case 'pid':
        if (!/^\d{9}$/.test(value)) {
          passes = false;
        }
        break;
    }
  }

  return passes;
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
