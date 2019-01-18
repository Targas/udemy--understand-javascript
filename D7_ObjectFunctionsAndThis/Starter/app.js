function a() {
    console.log(this);
    this.novavar = 'eae';
}

var b = function() {
    console.log(this);
}

a();

console.log(novavar);

b();

var c = {
    name: 'obj c',
    log: function() {
        var self = this;

        self.name = 'Atualiza o c';

        console.log(self);

        var setname = function(nname) {
            self.name = nname;
        }

        setname('Atualiza o C maisumaveiz');

        console.log(self);
    }
};

c.log();