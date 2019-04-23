(function calc() {
    console.log('Calc');
})();

(function calc() {
    var number = 7;
    console.log(number);
})();

console.log(number);

(function calc(input) {
    var number = input;
    console.log(number);
})(10);

var obj = {};
(function calc(input) {
    obj.name = 'Matie';
})(obj);
console.log(obj);
