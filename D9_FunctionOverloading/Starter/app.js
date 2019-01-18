function greet(fn, ln, lang) {
    lang = lang || 'ptbr';

    if (lang === 'ptbr') {
        console.log('eae ' + fn + ' ' + ln);
    }

    if (lang === 'enus') {
        console.log('Hi' + fn + ' ' + ln);
    }
}

function greetptbr(fn, ln) {
    greet(fn, ln, 'ptbr');
}

function greetenus(fn, ln) {
    greet(fn, ln, 'enus');
}

greetptbr('fnptbr', 'lnptbr');
greetenus('fnenus', 'lnenus');