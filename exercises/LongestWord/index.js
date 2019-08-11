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
    console.log(sen)
      let senArr = sen.split(' ')
       console.log(senArr)
       sen.replace(/&!!/i,' ')
       let placeholder = senArr[0]
       for (let i = 0; i < senArr.length; i++) {
         console.log(i + ' - ' + senArr[i])
         if(senArr[i].length > placeholder.length) {
           placeholder = senArr[i]
         } 
  
       }
       console.log(placeholder)
       return placeholder
  
  }

module.exports = longestWord;
