/* eslint-disable */
function Order(status) {
  this.status = status;

  this.showStatus = () => {
    console.log(this.status);
  };
}

var order = new Order('new'); // in my answear: Order('new')

order.showStatus()
