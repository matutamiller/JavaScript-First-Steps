var array = [1, 2, 3, 4];

array.unshift('new');
array[array.indexOf('new')] = 'old';
console.log(array.filter(function(value){
    return value > 2;
}));

var array = [1, 2, 3, 4];

array.unshift('new');
array[array.indexOf('new')] = 'old';
console.log(array.map(function(value){
    return value * 2;
}));
console.log(array);

var array = [1, 2, 3, 4];

array.unshift('new');
array[array.indexOf('new')] = 'old';
console.log(array.reverse());
console.log(array);
