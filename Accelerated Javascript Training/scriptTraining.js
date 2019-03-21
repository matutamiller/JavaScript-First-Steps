var person = {
    name:'Matie',
    age: 33,
};

Object.prototype.greet = function(){
    console.log('Hello there!');
};

person.greet();

console.log(person.__proto__);
console.log(person.toString());