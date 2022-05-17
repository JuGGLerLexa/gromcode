/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// first look in task

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

const addPropertyV2 = (userData, userId) => Object.assign(userData, { id: userId });

const addPropertyV3 = (userData, userId) => Object.assign({}, userData, { id: userId });

const addPropertyV4 = (userData, userId) => Object.assign({ ...userData }, { id: userId });

// examples
const user = {
  name: 'Sam',
};

addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

addPropertyV2(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

addPropertyV3(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

console.log(user);
console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
