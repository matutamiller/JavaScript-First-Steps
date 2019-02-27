var test = 'Global scope';

function localScope() {
    var test = 'Local scope'
    console.log(test);
}

localScope();
console.log(test);