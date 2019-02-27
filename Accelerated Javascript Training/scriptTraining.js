var aNumber = 5;
console.log(aNumber);
var anotherNumber = aNumber;
console.log(anotherNumber);
aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);

var array = [1,2,3];
var anotherArray = array;
console.log(array);
console.log(anotherArray);

array.push(4);
console.log(array);
console.log(anotherArray);

array = ['a', 'b'];
console.log(array);
console.log(anotherArray);