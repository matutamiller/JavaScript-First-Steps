function Person(name, age) {
    this.name = name;
    this.age = age;
}

var Person = new Person();
console.log(person);

var person = Object.create(null);