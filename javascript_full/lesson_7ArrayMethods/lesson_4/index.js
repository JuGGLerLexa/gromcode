const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  // put your code here
  const passedStudents = allStudentsList.filter(name => !studentsForRetake.includes(name));

  const messages = passedStudents.map(name => 'Good job, ' + name);

  return messages;
};

// example 1:

// input: arr
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

// output:
// ['Good job, a', 'Good job, c']
