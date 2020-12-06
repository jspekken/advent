/**
 * @see https://adventofcode.com/2020/day/5
 */

const utils = require('../../../shared/utils');
const path = require('path');

Array.prototype.splitInHalf = function () {
  const lengthAtHalf = Math.ceil(this.length / 2);

  const lower = this.slice(0, lengthAtHalf);
  const upper = this.slice(lengthAtHalf);

  return {
    lower: lower.length ? lower : this,
    upper: upper.length ? upper : this,
  };
}

const range = (r) => [...Array(r).keys()];

function getSeat(boardingPass) {
  let rows = range(128);
  let cols = range(8);

  for (const character of boardingPass) {
    if (character === 'F') {
      rows = rows.splitInHalf().lower;
    } else if (character === 'B') {
      rows = rows.splitInHalf().upper;
    } else if (character === 'L') {
      cols = cols.splitInHalf().lower;
    } else if (character === 'R') {
      cols = cols.splitInHalf().upper;
    }
  }

  return rows[0] * 8 + cols[0];
}

const input = utils.readInputSync(
  path.resolve(__dirname, '../../resources/input.txt'),
);

const seats = Math.max(...input.map(getSeat));

console.log(seats);
