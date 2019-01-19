function greet(lang) {
     return function(fn, ln) {
        if (lang === 'ptbr') {
            console.log('eae ' + fn + ' ' + ln);   
        }
        if (lang === 'enus') {
            console.log('hi ' + fn + ' ' + ln);   
        }       
    }   
}

var greetptbr = greet('ptbr');
var greetenus = greet('enus');

greetptbr('aaa', 'bbb');
greetenus('ccc', 'ddd');