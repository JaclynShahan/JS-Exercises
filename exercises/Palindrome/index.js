/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str) {
    console.log(str)
    let splitStr = str.split("")
    console.log(splitStr)
    let reverseArr = splitStr.reverse()
    console.log(reverseArr)
    let answer = reverseArr.join("")
    console.log(answer)
    if (str === answer) {
      return true
    } else {
      return false
    }
    
  }

module.exports = palindrome;
