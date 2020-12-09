/**
 * @see https://adventofcode.com/2020/day/8
 */

const utils = require('../../../shared/utils');
const path = require('path');

const instructions = utils.readInputSync(
  path.resolve(__dirname, '../../resources/input.txt')
);

let cursor = 0;
let accumulator = 0;
const instructionCache = [];

function process(processCursor) {
  const command = instructions[processCursor];

  const cacheHit = instructionCache.some((instruction) => (
    instruction.command === command && instruction.processCursor === processCursor
  ));

  if (cacheHit) return;

  const {
    instruction,
    sign,
    value,
    argument = Number(value),
  } = command.match(/^(?<instruction>.*)\s(?<sign>\+|-)(?<value>\d*)$/).groups;

  switch (instruction) {
    case 'acc':
      if (sign === '+') accumulator += argument;
      if (sign === '-') accumulator -= argument;

      cursor++;

      break;

    case 'jmp':
      if (sign === '+') cursor += argument;
      if (sign === '-') cursor -= argument;
      break;

    case 'nop':
    default:
      cursor++;
      break;
  }

  instructionCache.push({ command, processCursor });

  process(cursor);
}

process(cursor);

console.log(accumulator);
