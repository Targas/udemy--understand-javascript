var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

var c = { greeting: 'oi' };
var d;

d = c;
c.greeting = 'olá';

console.log(c);
console.log(d);

function changeGreeting(obj) {
    obj.greeting = 'eae';
}

changeGreeting(d);

console.log(c);
console.log(d);

c = { greeting: 'eae man!' };

console.log(c);
console.log(d);