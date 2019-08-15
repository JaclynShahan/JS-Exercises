/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    let splitStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split("")
    console.log(splitStringA)
    let splitStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split("")
    console.log(splitStringB)
    for(let i = 0; i < splitStringA.length; i++ ) {
     // console.log(splitStringA[0])
      if (!splitStringB.includes(splitStringA[i])) {
        return false
      }
    }
    return true
    }
   
  
module.exports = anagrams;
