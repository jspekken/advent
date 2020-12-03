/**
 * @see https://adventofcode.com/2020/day/2
 */

const utils = require('../../../shared/utils');
const path = require('path');

/**
 * Count the occurrences of the given character in the given string.
 *
 * @param   {string} string
 * @param   {string} character
 * @returns {number}
 */
const countCharOccurrence = (string, character) => (
    (string.match(new RegExp(character, 'ig')) || []).length
)

/**
 * Validate the given password policy.
 *
 * @param   {string} policy
 * @returns {boolean}
 */
function validatePasswordPolicy(policy) {
    const regexp = /(?<low>\d*)-(?<high>\d*)\s(?<letter>.*):\s(?<password>.*)$/;

    const {
        low,
        high,
        letter,
        password,
    } = policy.match(regexp).groups;

    const charOccurrence = countCharOccurrence(password, letter);

    return charOccurrence >= low
        && charOccurrence <= high;
}

const result = utils.readInputSync(
    path.resolve(__dirname, '../../resources/input.txt')
).filter((policy) => validatePasswordPolicy(policy)).length

console.log(result);
