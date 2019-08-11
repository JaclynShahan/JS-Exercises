/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
    let strArr = str.split('')
    console.log(strArr)
    let newStr = strArr.reverse()
    console.log(newStr)
    let answer = newStr.join('')
    console.log(answer)
    return answer
    }

module.exports = reverse;
