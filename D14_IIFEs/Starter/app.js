function greet(name) {
    console.log('Eae' + name);
}

greet('aaa');

var greetfunc = function(name) {
    console.log('Eae ' + name);
};

greetfunc('aaa');

var greeting = function(name) {
    return 'Eae ' + name;
}('aaa');

console.log(greeting);