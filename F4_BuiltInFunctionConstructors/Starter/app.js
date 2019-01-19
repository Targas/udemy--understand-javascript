String.prototype.islengthgreaterthan = function(limit) {
    return this.length > limit;  
}

console.log("aaa".islengthgreaterthan(5));

Number.prototype.isPositive = function() {
    return this > 0;   
}