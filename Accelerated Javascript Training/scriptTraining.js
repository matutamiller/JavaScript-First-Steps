var person = {
   name: 'Matie',
   age: 33,
   greet: function() {
       console.log('Hello');
   }
};

for (var field in person) {
    console.log(field);
}