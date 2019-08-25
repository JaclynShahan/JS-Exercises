/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
let strArr = [];

str.split(' ').forEach(word => {
    strArr.push(word[0].toUpperCase() + word.slice(1))
})
return strArr.join(' ')
}
// for(let i = 1; i < str.length; i++) {
//     if(str[i - 1] === '') {
//         newWord += str[i].toUpperCase()
//     } else {
//         newWord += str[i]
//     }
// }
// return newWord
// }

module.exports = capitalize;
