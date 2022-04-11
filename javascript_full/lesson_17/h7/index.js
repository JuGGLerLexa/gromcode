const user = {
  getFullName: function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

user.getFullName = function setFullName(name) {
  const result = name.split(' ');
  this.firstName = result[0];
  this.lastName = result[1];
  console.log(`${this.firstName} ${this.lastName}`);
};

user.getFullName('John Doe');
