/*
      Проверить равны ли между собой  два входных слова
*/

function anagrams(word, words) {
  
    
  word = word.toLowerCase().split("").sort().join("");
  words = words.toLowerCase().split("").sort().join("");
    if (word === words){
      return true;
    }else {
      return false;
    }
}

