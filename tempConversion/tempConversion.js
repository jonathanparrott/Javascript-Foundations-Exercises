const ftoc = function(temp) {
  let convertedC = (temp - 32) * (5 / 9);
  if (Number.isInteger(convertedC)) {
    return Number(convertedC)
  }
  
  else {
    return Number(convertedC.toFixed(1))
  }
}

const ctof = function(temp) {
  let convertedF = temp * (9 / 5) + 32;
  
  if (Number.isInteger(convertedF)) {
    return Number(convertedF)
  }
  else {
    return Number(convertedF.toFixed(1))
  }
}

module.exports = {
  ftoc,
  ctof
}
