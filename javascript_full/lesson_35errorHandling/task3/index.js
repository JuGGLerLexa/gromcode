fetch('https://api.github.com/users/github')
  .then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('No data');
  })
  .then(data => console.log(data))
  .catch(err => {
    console.log(err);
  });
