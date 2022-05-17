export class Order {
  constructor(price, city, type) {
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.id = Math.random().toString();
    this.price = price;
    this.city = city;
    this.type = type;
    this.dateCreated = new Date();
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
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}
