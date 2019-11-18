function caesar(string, shift) {
  const array = string.split("");
  const toHex = array.map(x => x.charCodeAt());
  const getShifty = toHex.map(x => x += shift);
  const backToLetters = getShifty.map(x => String.fromCharCode(x));
  const backAgain = backToLetters.toString();
  
  return backAgain.replace(/,/g, "");
  }

caesar("Hello World", -4);

module.exports = caesar
