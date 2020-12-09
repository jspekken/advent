/**
 * @see https://adventofcode.com/2020/day/6
 */

const utils = require('../../../shared/utils');
const path = require('path');

const input = utils.readInputSync(
  path.resolve(__dirname, '../../resources/input.txt'),
  /\n\r/
);

function countUnanimousVotes(input) {
  const characters = [
    ...new Set(
      input.replace(/(\r\n|\r|\n)/g, '').split('')
    )
  ];

  const groups = input.trim().split(/\r?\n/);

  return characters.map((character) => (
    groups.map((group) => {
      return group.split('').some((vote) => vote === character);
    }).every(Boolean)
  )).filter(Boolean).length;
}

const result = input
  .map(i => countUnanimousVotes(i))
  .reduce((acc, curr) => acc + curr);

console.log(result);
