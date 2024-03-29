/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {
    let newArr = int.toString().split("").reverse().join("")
    console.log(newArr)
    return parseInt(newArr) * Math.sign(int)
}

module.exports = reverse;
