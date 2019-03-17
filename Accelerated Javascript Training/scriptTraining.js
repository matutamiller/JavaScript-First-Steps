var person = {
    name:'Matie',
    age: 33,
};


var anotherPerson = Object.create(person);
anotherPerson.name = 'Tiger';

console.log(anotherPerson.age);
