const getAdults = usersObj =>
  Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

// console.log(getAdults(user)); /* 'John Doe', 'Bob' */
