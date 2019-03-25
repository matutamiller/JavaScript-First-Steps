function Person() {
    this.name = 'Matie';
    this.greet = function(){
        console.log('Hello, I am ' + this.name);
    }
}

var person = new Person();
person.name = "Matie";

console.log(person.name);

person.greet();