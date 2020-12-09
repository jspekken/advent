/**
 * @see https://adventofcode.com/2020/day/7
 */

const utils = require('../../../shared/utils');
const path = require('path');

const input = utils.readInputSync(
  path.resolve(__dirname, '../../resources/input.txt')
);

function constructGraph(input) {
  return input.map((row) => {
    const { color, contents } = row
      .match(/^\s*(?<color>.*) bags contain (?<contents>.*)\.\s*$/m)
      .groups;

    return {
      color,
      contents: contents
        .split(/,/g)
        .filter(content => !/no other bags/.test(content))
        .map((content) => {
          const { bags, color } = content.match(/^\s*(?<bags>\d+) (?<color>.*) bags?\.?\s*$/).groups;

          return {
            color,
            count: Number(bags),
          }
        }),
    };
  });
}

const countBags = (graph, color) => (
  graph.find(r => r.color === color)
    .contents
    .reduce((acc, curr) => acc + curr.count + curr.count * countBags(graph, curr.color), 0)
);

const graph = constructGraph(input);
const result = countBags(graph, 'shiny gold');

console.log(result);
