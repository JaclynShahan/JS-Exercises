/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
    
        //let splitString = string.split("")
        //console.log(splitString)
        let vowelsList = "aeiouAEIOU"
        console.log(vowels)
        let vowelCount = 0
        for (let x = 0; x < string.length; x++) {
          if(vowelsList.indexOf(string[x]) !== -1) {
           vowelCount += 1
          }
        }
        return vowelCount
        }
        
    

module.exports = vowels;
