// algo:
// 1. обєкт user дії відбувають в ньому чи ні?
// 2. getFullName повинен ретьорнути імя
// 3. setFullName повинен розбити getFullName на масив щоб зберігати окремо фімілію і імя по умові
// використовуємо метод split

// export const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     const data = fullName.split(' ');
//     // eslint-disable-next-line no-sequences
//     (this.firstName = data[0]), (this.lastName = data[1]);
//   },
// };

// console.log(user.getFullName());
// console.log(user.setFullName('Jim Carrey'));

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  },
};

console.log(user.getFullName());
console.log(user.setFullName('Jim Carrey'));
console.log(user.getFullName());
console.log(user.getFullName([4]));
