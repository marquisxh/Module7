// Add to Zero

let array = [33, 41, -16, 27, 8, 0, 16]

let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}

console.log(value)

// Unique Characters

word = ["Car", "House", "Phone", "School", "Job"]
let unique = "";

function hasUniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
        if (unique.includes(word[i] === false)) {
            return uniq += str[i]
        }
    }
    return unique;
}

console.log(hasUniqueChars('Cars'))

//Pangram Sentence

function isPangram(string){
    const letters = string.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
}

console.log(isPangram("John quickly extemporized five tow bags"))

//Longest Word

words = []
function findLongestWord(words) {
    var longestWord = 0;
    for(var i = 0; i < words.length; i++){
      if(words.length > longestWord){
      longestWord = words[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord(['quick', 'brown', 'fox', 'lazy', 'unique']))