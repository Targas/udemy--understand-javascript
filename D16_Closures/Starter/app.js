function greet(wts) {
    return function(name) {
        console.log(wts + ' ' + name);
    }
 
 }
 
 var eae = greet('eae');
 eae('man');