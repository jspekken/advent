/**
 * @see https://adventofcode.com/2020/day/1
 */

const utils = require('../../../shared/utils');
const path = require('path');

/**
 * Identify three numbers from the given input that sum
 * up to the given match and find their product.
 *
 * @param   {number[]} input
 * @param   {number} match
 * @returns {number}
 */
const getCalculatedProduct = (input, match) => {
    for (let a of input) {
        for (let b of input) {
            for (let c of input) {
                if (a + b + c === match) {
                    return a * b * c;
                }
            }
        }
    }
};

const input = utils.readInputSync(
    path.resolve(__dirname, '../../resources/input.txt')
).map(Number);

console.log(getCalculatedProduct(input, 2020));
