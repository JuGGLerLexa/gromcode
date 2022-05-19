const formElem = document.querySelector('.login-form');

console.log('formElem created');
console.dir(new Date());

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler() {
  //   event.preventDefault();
  console.log('test');

  // validate
  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Oleksii',
    password: '123',
  };

  // input: url(srting), options (obj)
  // output: promise
  const promise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  // then
  // inp: callback, callback (optional)
  // out: promise

  // callback
  // input: result of prev promise
  // out: ANY - will be wrapped in the promise

  promise
    .then(res => {
      console.log('response is here');

      // console.log(res.body);
      // inp: none
      // out: promise
      return res.json();
    })
    .then(body => {
      console.log('body is read');

      console.log(body);
    });
}

formElem.addEventListener('submit', createUserHandler);
console.log('listener added');
