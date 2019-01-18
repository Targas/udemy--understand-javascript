greet();

function greet() {
    console.log('eae');
}

var anGreet = function() {
    console.log('eae2');
}

anGreet();

function log(a) {
    a();
}

log(function() {
    console.log('eae3');
});