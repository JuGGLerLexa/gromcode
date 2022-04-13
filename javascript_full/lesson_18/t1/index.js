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

export const event = {
    guests: [
        { name: 'Tom', age: 17, email: 't@gmail.com' },
        { name: 'Lexa', age: 21, email: 'lexa@gmail.com' },
        { name: 'John', age: 18, email: 'example@server.com' },
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests

        .filter(({ age }) => age >= 18)
        .map(({ name, email}) => ({
            email,
            message: `Dear ${name}! ${this.message}`,
           }));
    },
};

console.log(event.getInvitations());
