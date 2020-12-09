/**
 * @see https://adventofcode.com/2020/day/6
 */

const utils = require('../../../shared/utils');
const path = require('path');

const input = utils.readInputSync(
  path.resolve(__dirname, '../../resources/input.txt'),
  /\n\r/
);

const result = input.map((i) => (
  new Set(i.replace(/(\r\n|\r|\n)/g, '').split('')).size
)).reduce((acc, curr) => acc + curr);

console.log(result);
