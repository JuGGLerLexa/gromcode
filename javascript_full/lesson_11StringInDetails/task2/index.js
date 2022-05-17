// 'a'.localeCompare('A')

// String.fromCodePoint(65); // 'A'
// 'Ann'.charCodeAt(0); // 65

const sortContactsInVideo = contacts => {
  const result = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return result;
};

// test data:
const contactsInVideo = [
  {
    name: 'Lexa',
    phNum: '111-111-111',
  },
  {
    name: 'Exa',
    phNum: '222-222-222',
  },
  {
    name: 'Xa',
    phNum: '333-333-333',
  },
  {
    name: 'A',
    phNum: '444-444-444',
  },
];
console.log(sortContactsInVideo(contactsInVideo));

// inp - array, bool
// out - newArray (contacts)

// algo:
// 1. якщо не масив === null
// 4. if true збільшення, false на зменшення
// 2. перераховуюєм, сортуєм масивом sort
// 3. методом localeCompare сортуємо по алфавіту

const contacts = [
  {
    name: 'Lexa',
    phNum: '111-111-111',
  },
  {
    name: 'Exa',
    phNum: '222-222-222',
  },
  {
    name: 'Xa',
    phNum: '333-333-333',
  },
  {
    name: 'A',
    phNum: '444-444-444',
  },
];

// const sortContacts = (contacts, isAsc) => {
//   if (!Array.isArray(contacts)) return null;

//   const sortName = contacts.sort((a, b) => {
//     if (isAsc === true) {
//       return a.name.localeCompare(b.name);
//     }
//     if (isAsc === false) {
//       return b.name.localeCompare(a.name);
//     }
//   });
//   return contacts;
// };

// const sortContacts = (contacts, isAsc) => {
//   if (!Array.isArray(contacts)) return null;

//   const sortName = contacts.sort((a, b) => {
//     if (isAsc === true) {
//       return a.name.localeCompare(b.name);
//     }
//     return b.name.localeCompare(a.name);
//   });
//   return sortName;
// };

const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) return null;
  const result = contacts.sort((a, b) => {
    if (isAsc === false) return b.name.localeCompare(a.name);
    return a.name.localeCompare(b.name);
  });
  return result;
};

// test data

console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts, false));
