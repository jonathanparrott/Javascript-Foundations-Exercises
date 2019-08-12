const removeFromArray = function(array, badArg) {
  let newArray = [];
  let i;
  for i in array {
    if (i !== badArg) {
      newArray += i;
    }
  return newArray
  }
}

module.exports = removeFromArray
