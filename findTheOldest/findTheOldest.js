let findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
      const getOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const getCurrent = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return getOldest < getCurrent ? currentPerson : oldest;
    })}

const getAge = function(birth, death) {
if (!death) {
  death = new Date().getFullYear();
  }
return death - birth;
}

module.exports = findTheOldest