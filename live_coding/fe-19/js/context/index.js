// function run() {
//   console.log(this);
//   console.log(`I've done run in ${this.city}`);
// }

// function run1(city) {
//   console.log(`I've done run in ${city}`);
// }

// ===
// 1. what is context? +++
// 2. when context is lost
// 3. how to fix content

// => ()

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   // none
//   // undefined
//   startTimer() {
//     console.log(this);
//     console.log(this.secondsPassed);

//     setInterval(() => {
//       console.log(this);
//       console.log(this.secondsPassed);
//       this.secondsPassed += 1;
//     }, 1000);
//   },
//   stopTimer() {
//     //
//   },
//   getTime() {
//     //
//   },
//   resetTimer() {
//     //
//   },
// };

// // test data
// timer.startTimer();

// BIND ()

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   // none
//   // undefined
//   startTimer() {
//     console.log(this);
//     console.log(this.secondsPassed);

//     setInterval(function () {
//       console.log(this);
//       console.log(this.secondsPassed);

//       this.secondsPassed += 1;

//       if (this.secondsPassed == 60) {
//         this.secondsPassed += 1;
//         this.secondsPassed;
//       }
//     }, 1000);
//   },
//   stopTimer() {
//     //
//   },
//   getTime() {
//     //
//   },
//   resetTimer() {
//     //
//   },
// };

// // test data
// timer.startTimer();

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   // none
//   // undefined
//   startTimer() {
//     console.log(this);
//     console.log(this.secondsPassed);

//     setInterval(() => {
//       console.log(this);
//       console.log(this.secondsPassed);
//       this.secondsPassed += 1;
//     }, 1000);
//   },
//   stopTimer() {
//     //
//   },
//   getTime() {
//     //
//   },
//   resetTimer() {
//     //
//   },
// };

// // test data
// timer.startTimer();

// const obj = {
//   age: 100,
//   run() {
//     console.log(this);
//   },
// };

// obj.run();

function makeUser() {
  return {
    name: 'Джон',
    ref: this,
  };
}

const user = makeUser();

console.log(user.ref.name);
