/* eslint-disable */

function revBySep(str, sep) {
    return str.split(sep).reverse().join(sep);
}

// var str = 'I want to become a JavaScript Ninja!';

console.log(revBySep('I want to become a JavaScript Ninja!', ''));

console.log(revBySep('I want to become a JavaScript Ninja!', ' '));
