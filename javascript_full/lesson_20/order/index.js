const validOrderTypes = ['Buy', 'Sell'];

export class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return validOrderTypes.iscludes(this.type);
  }
}

// test data

const newOrder = new Order();
console.log(newOrder.checkPrice(1200));
console.log(newOrder.isValidType());
