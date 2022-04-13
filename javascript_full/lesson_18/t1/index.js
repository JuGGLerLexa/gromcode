/* eslint-disable */
'use strict';

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // obj.sayHi();

// const func = obj.sayHi;

// func();

// var a = 1;

// console.log(window.a);

// let b = 2;

// console.log(window.b);

// console.log(this);

// function func() {
//     console.log(this);
// }

// func();

// setTimeout(user.sayHi.bind(user), 100);
// setTimeout(() => user.sayHi(), 100);

const event = {
    guests: [
        { name: 'Tom', email: 't@gmail.com', age: 17},
        { name: 'Bob', email: 'b@gmail.com', age: 18},
    ],
    message: 'Welcome to the party',
    getInvintations() {
        return this.guests
        .filter(({ age }) => age >= 18)
        .map(({ name, email}) => ({
            text: `Hi ${name}. ${this.message}`,
            email
           }));
    }
}

console.log(event.getInvintations());
