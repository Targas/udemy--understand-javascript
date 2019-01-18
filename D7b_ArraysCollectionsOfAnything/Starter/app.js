var arr = [
    1,
    false,

    {
        nome: 'aaa',
        end: 'rua'
    },

    function(nome) {
        var greet = 'eae ';
        console.log(greet + nome);
    },

    "eae"
];

console.log(arr);
arr[3](arr[2].nome);