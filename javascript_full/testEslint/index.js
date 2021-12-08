/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
function run() {
  const a = 0;
  
  if (a === 1) {
    return c;
  }

  for (let i = 1; i < 10; i++) {
      console.log(i);
  }

  return (d = a);
}

run();
