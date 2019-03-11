var person = {
    "first-name": 'Matie',
    age: 33,
    details: {
        hobbies: ["Sports", "Cooking"],
        location: 'Poland'
    },
    greet: function() {
        console.group('Hello!');
    }
};
person.greet();
console.log(person.details.hobbies);
console.log(typeof person);
console.log(typeof person.name);

var person = {
    name: 'Matie',
    age: 33,
    details: {
        hobbies: ["Sports", "Cooking"],
        location: 'Poland'
    },
    greet: function() {
        console.group('Hello!');
    }
};

console.log(typeof person['first-name']);