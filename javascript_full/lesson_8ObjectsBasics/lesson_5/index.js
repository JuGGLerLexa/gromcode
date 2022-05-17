/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

/*
пустий об"єкт = {}
всім кому 18 виводимо, методом масива (на мою думку, краще перевірити методом find)
кому не 18 - ігноруєм

input: any (obj)
outinput: obj
*/

const getAdults = obj => {
  // put your code here
  const spaceObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
    spaceObj[key] = obj[key];
    }
  }
  return spaceObj;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
