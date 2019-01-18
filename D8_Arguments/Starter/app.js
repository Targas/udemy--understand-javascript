function greet(fname, lname, lang) {
    lang = lang || 'ptbr';

    if (arguments.length === 0) {
        console.log('Sem parametros!');
        console.log('-----');

        return;
    }

    console.log(fname);
    console.log(lname);
    console.log(lang);
    console.log(arguments);
    console.log('arguments 0: ' + arguments[0]);
    console.log('-----');

}

greet();
greet('aaa');
greet('aaa', 'bbb');
greet('aaa', 'bbb', 'ptbr');