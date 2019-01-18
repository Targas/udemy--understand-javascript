var aaa = {
    firstname: 'aaa',
    lastname: 'bbb',
    address: {
        street: 'rua',
        city: 'cidade',
        state: 'estado'
    }
};

function greet(person) {
    console.log('eae ' + person.firstname);
}

greet(aaa);

greet({
    firstname: 'LALA',
    lastname: 'LALALA'
});