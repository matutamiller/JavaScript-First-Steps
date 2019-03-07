var array = [1, 2, 3,,];

array.push(4);
console.log(array);

var array = [1, 2, 3, 4];

array.pop();
console.log((array.pop));
console.log(array);

var array = [1, 2, 3, 4];

array.shift();
console.log(array);

var array = [1, 2, 3, 4];

array.unshift('new');
console.log(array.indexOf('new'));

var newArray = array.splice(2, 2);
console.log(newArray);
console.log(array);

var newArray = array.slice(2, 4);
console.log(newArray);
console.log(array);