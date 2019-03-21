var person = {
    name:'Matie',
    age: 33,
};

Object.prototype.greet = function(){
    console.log('Hello there, I am ' + this.name + '!');
};

person.greet();
var max = Object.create(person);
var anna = Object.create(person);
console.log(anna.__proto__.__proto__ == Object.prototype);
console.log(Object.getPrototypeOf(anna) == person);
