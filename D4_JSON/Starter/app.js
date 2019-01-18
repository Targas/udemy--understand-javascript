var objectLiteral = {
    firstname: 'aaa',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "aaa", "isAProgrammer": true }');

console.log(jsonValue);