function sayhilater() {
    var greet = 'eae';
    
    setTimeout(function() {     
        console.log(greet);
    }, 3000);
}

sayhilater();

function whendone(callback) {
    var a = 1000;
    var b = 2000;
    callback();
}

whendone(function() {
    console.log('Feito!'); 
});

whendone(function() { 
    console.log('Terminou!');  
});