/**
 * @see https://adventofcode.com/2020/day/2
 */

const utils = require('../../../shared/utils');
const path = require('path');

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

    const matchLow = password[low - 1] === letter;
    const matchHigh = password[high - 1] === letter;

    return !!(matchLow ^ matchHigh);
}

const result = utils.readInputSync(
    path.resolve(__dirname, '../../resources/input.txt')
).filter((policy) => validatePasswordPolicy(policy)).length

console.log(result);
