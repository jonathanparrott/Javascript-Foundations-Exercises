const leapYears = function(year) {
    if ((year % 100 == 0) && (year % 400 != 0)) {
        return false
    }
        
    else if ((year % 100 == 0) && (year % 400 == 0)) {
        return true
    }

    else if (year % 4 == 0) {
        return true
    }
    
    else {
        return false
    }
    
}

module.exports = leapYears


var leapYears = function(year) {
    let isMultipleOfFour = year % 4 === 0
    let isNotMultipleOfHundredAndIsMultipleOfFourHundred = (year % 100 !== 0 && year % 400 == 0)

    return isMultipleOfFour && isNotMultipleOfHundredAndIsMultipleOfFourHundred
}

module.exports = leapYears