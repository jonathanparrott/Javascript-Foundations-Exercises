const sumAll = function(firstNum, secondNum) {
  let sum = 0;
  if ((typeof firstNum != "number") || (typeof secondNum != "number")) {
    return "ERROR"
  }
    else if ((firstNum < 0) || (secondNum < 0)) {
      return "ERROR"
    }

    else if (firstNum > secondNum) {
    
      for (let i = secondNum; i < firstNum + 1; i++) {
      sum += i;
      }
  }
    else if (firstNum == secondNum) {
      sum = 0;
      }

    else {
      for (let i = firstNum; i < secondNum + 1; i++) {
        sum += i;
    }
  }

  return sum
    }

module.exports = sumAll;