var person = {
    fname: 'def',
    lname: 'def',
    fullname: function() {
        return this.fname + ' ' + this.lname;  
    }
}

var nomedocara = {
    fname: 'aaa',
    lname: 'bbb'
}

// NUNCA NUNCA NUNCA usar assim pois fode a performance!!!

nomedocara.__proto__ = person;
console.log(nomedocara.fullname());
console.log(nomedocara.fname);

var nomedamulher = {
    fname: 'ccc'   
}

nomedamulher.__proto__ = person;
console.log(nomedamulher.fullname());

person.nomeformal = function() {
    return this.lname + ', ' + this.fname;   
}

console.log(nomedocara.nomeformal());
console.log(nomedamulher.nomeformal());