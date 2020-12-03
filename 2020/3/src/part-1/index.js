/**
 * @see https://adventofcode.com/2020/day/3
 */

const utils = require('../../../shared/utils');
const path = require('path');

/**
 * Traverse the forrest in search for trees.
 *
 * @param  {string[]} input
 * @param  {number} right
 * @param  {number} down
 * @param  {string} treeCharacter
 * @return {number}
 */
function traverse(input, right, down, treeCharacter = '#') {
    let trees = 0;
    let rowCursor = 0;

    for (let i = 0; i < input.length; i += down) {
        const characterIndex = (right * rowCursor) % input[i].length;

        if (input[i][characterIndex] === treeCharacter) {
            trees++;
        }

        rowCursor++;
    }

    return trees;
}

const input = utils.readInputSync(
    path.resolve(__dirname, '../../resources/input.txt')
);

const result = traverse(input, 3, 1);

console.log(result);
