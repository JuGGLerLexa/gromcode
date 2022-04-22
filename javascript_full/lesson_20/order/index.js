export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random();
    this.confirmed = false;
    this.dateConfirmed = null;
    this.date = new Date();
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }

    return false;
  }

  confirmOrder() {
    this.confirmed = true;
    this.date = new Date();
    return this.confirmOrder;
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') return true;
    return false;
  }
}
