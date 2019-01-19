var person = {
    fname: 'aaa',
    lname: 'bbb',
    fullname: function() {
        var fullname = this.fname + ' ' + this.lname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logado: ' + this.fullname());
    console.log('Argumentos: ' + lang1 + ' ' + lang2);
    console.log('-----------');  
}

var logPersonName = logName.bind(person);
logPersonName('ptbr');

logName.call(person, 'ptbr', 'enus');
logName.apply(person, ['ptbr', 'enus']);

(function(lang1, lang2) {
    console.log('Logged: ' + this.fullname());
    console.log('Argumentos: ' + lang1 + ' ' + lang2);
    console.log('-----------');
}).apply(person, ['ptbr', 'enus']);

var person2 = {
    fname: 'ccc',
    lname: 'ddd'
}

console.log(person.fullname.apply(person2));

function multiply(a, b) {
    return a * b;   
}

var mbtwo = multiply.bind(this, 2);
console.log(mbtwo(4));

var mbthree = multiply.bind(this, 3);
console.log(mbthree(4));