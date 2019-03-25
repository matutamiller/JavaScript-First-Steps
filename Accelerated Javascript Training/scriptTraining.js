function Person() {

}

var person = new Person();
person.name = "Matie";

console.log(person.__proto__ == Person.prototype);