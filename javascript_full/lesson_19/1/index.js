const vehicle = {
  move() {
    console.log('moving');
  },
  stop() {
    console.log('stopped');
  },
};

const ship = {
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('lifting anchor down');
  },
  liftAnchorUp() {
    console.log('lifting anchor up');
  },
  __proto__: vehicle,
};

console.log(ship);
