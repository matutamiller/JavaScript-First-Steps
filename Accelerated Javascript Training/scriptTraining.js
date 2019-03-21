var person = {
    name:'Matie',
    age: 33,
};

Object.prototype.greet = function(){
    console.log('Hello there, I am ' + this.name + '!');
};

person.greet();
var max = Object.create(person);
console.log(max.name);
max.greet();
