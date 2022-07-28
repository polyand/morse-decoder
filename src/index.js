const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let expr10 = [];
    for (let i = 0; i < expr.length; i += 10) {
        let subexpr = '';
        for (let j = 0; j < 10; j++) {
            subexpr += expr[i + j];
        }
        expr10.push(subexpr);
    }
    for (i = 0; i < expr10.length; i++) {
        let foundPos = expr10[i].indexOf('1');
        expr10[i] = expr10[i].slice(foundPos);
    }
    let arr = [];
    for (i = 0; i < expr10.length; i++) {
        arr[i] = '';
        for (let j = 0; j < expr10[i].length; j += 2) {
            if (expr10[i][j] == '1' && expr10[i][j + 1] == '0')
                arr[i] += '.';
            if (expr10[i][j] == '1' && expr10[i][j + 1] == '1')
                arr[i] += '-';
            if (expr10[i][j] == '*')
                arr[i] += ' ';
        }
    }
    let res = '';
    for (i = 0; i < arr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (arr[i] == key) {
            res += MORSE_TABLE[key];
            break;  
            }
            if (arr[i] == ' ') {
            res += ' ';  
            break;
            }
        }
    }
    return(res);
}

module.exports = {
    decode
}