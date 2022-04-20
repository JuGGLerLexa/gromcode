/* eslint-disable */
class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  }

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor d`);
  }
}

const ship1 = new Ship('Aurora', 17);

ship1.startMachine();

console.log(ship1);
