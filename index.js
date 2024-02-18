var students = {
  student1: {
    name: "Dilshodbek",
    age: 25,
    grade: 4,
  },
  student2: {
    name: "Ahad",
    age: 25,
    grade: 4,
  },
  student3: {
    name: "Murod",
    age: 25,
    grade: 3,
  },
};
// console.log(students);

function pupil(freshman) {
  switch (freshman.status) {
    case "newcomer":
      students[freshman.key] = [freshman.name, freshman.age, freshman.grade];
      break;
    case "remove":
      delete students[freshman.key];
      break;
  }
  return {
    "List of students": students,
  };
}

console.log(
  pupil({
    status: "newcomer",
    key: "New student",
    name: "Temur",
    age: 25,
    grade: 1,
  })
);

console.log(
  pupil({
    status: "remove",
    key: "student3",
  })
);
