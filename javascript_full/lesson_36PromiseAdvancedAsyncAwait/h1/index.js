const fetchUser = async userId => {
  try {
    const respoUser = await fetch(`https://api.github.com/users/` + userId);
    if (respoUser.ok) {
      return respoUser.json();
    }
    throw new Error('Failed to load data');
  } catch (err) {
    return err.message;
  }
};

export const getUsersBlogs = arrId =>
  Promise.all(arrId.map(async el => fetchUser(el).then(res => res.blog)));

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
