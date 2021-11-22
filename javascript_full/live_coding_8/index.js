/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

const numbersList = [1, 2, 3, 4, 5];

// input: num
// outinput: num

// const res = numbersList.push('sdaas');
// numbersList[numbersList.length] = 222;
// console.log(res);

// console.log(numbersList);
/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];

// put your code here
// input: callback;
// outinput: arr

// const anotherNumbersList.filter();
/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];

// put your code here
// input: none
// output: num
console.log(numbersList2.shift);

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here

/* TASCK CALLBACK
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */
// calback printer
// input: num
// out: undefined
// function sum(from, to, printer) {
//   let result = 0;
//   for (let index = from; index <= to; index += 1) {
//     result += index;
//   }
//   printer(result);
//   // put your code here
// }

// // test data
// const num1 = 5;
// const num2 = 10;

// function printResultExample(res) {
//   // put your code here
//   console.log('Result is ' + res);
//   // alert(res);
// }

//
//
//
//
//
//
anotherNumbersList.filter();

const filterRes = anotherNumbersList.filter(function (num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
});

console.log(filterRes);
