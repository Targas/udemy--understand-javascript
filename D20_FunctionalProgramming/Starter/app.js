function mapforeach(arr, fn) {
    var newarray = [];
    
    for (var i=0; i < arr.length; i++) {
        newarray.push(
            fn(arr[i])   
        )
    };
    return newarray;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapforeach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);

var arr3 = mapforeach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);

var checkpastlimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapforeach(arr1, checkpastlimit.bind(this, 1));
console.log(arr4);

var checkpastlimitsimp = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapforeach(arr1, checkpastlimitsimp(1));
console.log(arr5);