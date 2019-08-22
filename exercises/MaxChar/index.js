/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
//let splitStr = str.split("")
let count = {}
let biggestChar = ""
let strValue = 0
for (let char of str) {
if(count[char]) {
    count[char]++
} else {
    count[char] = 1
}
}
for (let char in count) {
    if(count[char] > strValue) {
        strValue = count[char]
        biggestChar = char
    }
}
return biggestChar

}

module.exports = maxChar;
