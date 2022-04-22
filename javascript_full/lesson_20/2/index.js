/* eslint-disable */
export class Vehicle {
  constructor(name, numberOfWheels) {
    this.numberOfWheels = numberOfWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle { // extends Ship наслідує Vehicle
  constructor(name, numberOfWheels ,maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Aurora', 17);

ship1.move();

console.log(ship1);
