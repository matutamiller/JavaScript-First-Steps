function message(message){
    console.log(message);
    console.log(arguments);
}

message('Hi!', 10);

function message(message){
    console.log(message);
    console.log(arguments.length);
}

message('Hi!', 10);
var msg = message;
console.log(msg.name);
console.log(msg.length);

var msg = function(message) {
    console.log(message);
}

console.log(msg.name);