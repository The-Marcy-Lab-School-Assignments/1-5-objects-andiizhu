// Question 1-  Abdullah
const coolGreeting = (person) => {
  if (person.isCool === true){
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  }else{
    return `Greetings ${person.name}, how have you been lately?`;
  };
}
  const person = {
    name: 'Sara',
    bio: 'Too cool 4 skool.',
    age: 32,
    isCool: true
  }
  // console.log(coolGreeting(person))

const haveBirthday = () => {
};

const becomeSecretAgent = () => {
};

const carMaker = () => {
};

const weAreNotFriends = () => {
};

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
