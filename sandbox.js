const person = { name: 'alex', age: 30, job: 'net ninja'}
const personPointer = person;
const personClone1 = {...person} // brand new object, not pointer
const personClone2 = {...person, location: 'London'}
console.log(personPointer == person, personClone1 == person);