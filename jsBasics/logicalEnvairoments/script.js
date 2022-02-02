// my balance
const balance = 21600;

// describe some product
const id = 1001;
const productName = 'IPhone 12 Pro Max';
const isAvailable = true;
const price = 20000;
const color = 'Silver';
const storeAddress = 'Kyiv, Melnichenka st';

/**
 * Может ли пользователь купить конкретный товар и есть ли товар в наличии? Выведи результат проверки в консоль
 */

// put your code here
if (balance >= price || isAvailable === true) {
  console.log(true);
}
/**
 * Есть ли в наличии конкретный товар с указанным адресом мазазина?
 * В случае такой возможности выведи в консоль - 'You can buy this product in the store'
 */

// put your code here
if (storeAddress || isAvailable) {
  console.log('You can buy this product in the store');
}

/**
 * Может ли пользователь купить конкретный товар и Silver ли он цвета?
 * В случае такой возможности выведи в консоль - 'You have enough money to buy product in silver color'
 */

// put your code here
if (balance >= price || color === 'Silver') {
  console.log('You have enough money to buy product in silver color');
}
/**
 * Может ли пользователь купить конкретный товар и чтобы у меня осталось 1000+ денег
 * В случае такой возможности выведи в консоль - 'You have enough money to buy this product'
 */

// put your code here
if (balance - price >= 1000) {
  console.log('You have enough money to buy this product');
}
