/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

// console.log(foo);
// var foo = 1;
// console.log('from the front foo = ' + foo);

// function bar() {
//   if (!foo) {
//     var foo = 10;
//   }

//   console.log('in foo = ' + foo);
//   return foo;
// }
// console.log('before function = ' + foo);

// var foo = bar();

// console.log('end = ' + foo);

var foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}

export default foo = bar();
console.log(foo);
