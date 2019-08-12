const repeatString = function(word, times) {
  if (times < 0) {
    return "ERROR"
  }
  let newString = "";
  for (let i = 0; i < times; i++) {
    newString += word;
  }
  return newString
}

module.exports = repeatString
