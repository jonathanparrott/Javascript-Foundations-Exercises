const palindromes = function(words) {
  fixedWords = words.toLowerCase().replace(/[^A-Za-z]/g, "");
  return fixedWords.split('').reverse().join('') == fixedWords;
}

module.exports = palindromes
