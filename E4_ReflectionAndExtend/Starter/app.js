var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in John) {
    if (john.hasownproperty(prop)) {
        console.log(prop + ': ' + John[prop]);
    }
}

var Jane = {
    address: 'aaa',
    formalname: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var Jim = {
    getfirstname: function() {
        return firstname;
    }
}

_.extend(John, Jane, Jim);

console.log(John);