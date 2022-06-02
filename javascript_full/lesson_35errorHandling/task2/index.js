const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(data => {
    console.log(data);
    throw new Error('Unexpected error');
  })
  .catch(err => {
    console.error(err);
  });
