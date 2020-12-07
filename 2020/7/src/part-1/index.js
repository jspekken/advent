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

function searchBag(graph, color, query) {
  const rule = graph.find(r => r.color === color);

  if (!rule) {
    return false;
  }

  if (rule.contents.some(content => content.color === query)) {
    return true;
  }

  return rule.contents.some(content => searchBag(graph, content.color, query));
}

const graph = constructGraph(input);

const result = graph
  .filter(rule => searchBag(graph, rule.color, 'shiny gold'))
  .map(rule => rule.color)
  .length;

console.log(result);
