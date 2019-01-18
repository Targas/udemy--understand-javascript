function b() {
    var variavel;

    console.log(variavel);
}

function a() {
    var variavel = 2;

    console.log(variavel);

    b();
}

var variavel = 1;

console.log(variavel);

a();

console.log(variavel);