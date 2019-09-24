/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
   // console.log(sen)
    let max = 0
      let senArr = []
       //console.log(senArr)
       let arr = sen.match(/[a-z0-9]+/gi);
       //let placeholder = senArr[0]
       for (let i = 0; i < arr.length; i++) {
         //console.log(i + ' - ' + senArr[i])
         if(arr[i].length > max) {
           max = arr[i].length
           senArr.unshift(arr[i])
         } 
  
       }
      
       return senArr[0];
  
  }

module.exports = longestWord;
