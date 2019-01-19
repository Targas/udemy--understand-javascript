function person(fname, lname) {
    console.log(this);
    this.fname = fname;
    this.lname = lname;
    console.log('evocou');
}

var John = new person('John', 'Doe');
console.log(John);

var Jane = new person('Jane', 'Doe');
console.log(Jane);