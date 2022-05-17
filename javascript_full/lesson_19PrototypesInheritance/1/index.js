export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};

Object.setPrototypeOf(ship, vehicle);

ship.startMachine();
