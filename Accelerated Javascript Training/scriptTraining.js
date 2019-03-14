var person = {
    "first-name": 'Matie',
    age: 33,
    details: {
        hobbies: ["Sports", "Cooking"],
        location: 'Poland'
    },
    greet: function() {
        console.group('Hello!, I am ' + this.age + ' years old');
    }
};
person.greet();