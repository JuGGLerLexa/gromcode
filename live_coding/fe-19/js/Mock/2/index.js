function markAdmins(usersList, adminIds) {
  return usersList.map(user => {
    const isAdmin = adminIds.includes(user.id);
    return { ...user, isAdmin };
  });
}

// examples
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];
const adminIds = ['1', '3'];
console.log(markAdmins(users, adminIds));
