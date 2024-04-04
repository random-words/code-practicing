const journal = {
  students: [],

  addStudent({ name, grades = [] }) {
    this.students.push({
      name,
      grades,
    });
  },

  getMidGrade(grades) {
    return Math.round(
      grades.reduce((acc, grade) => acc + grade, 0) / grades.length
    );
  },

  getStudentMidGrade(studentName) {
    const student = this.students.find(
      (student) => student.name === studentName
    );
    return this.getMidGrade(student.grades);
  },

  getBiggestMidGradeStudent() {
    const allGrades = this.students.map((student) =>
      this.getStudentMidGrade(student.name)
    );
    const biggestMidGrade = Math.max(...allGrades);
    return this.students.filter(
      (student) => this.getStudentMidGrade(student.name) === biggestMidGrade
    );
  },

  getAllStudents() {
    return this.students;
  },
};

journal.addStudent({ name: "mango", grades: [1, 3, 4] });
journal.addStudent({ name: "poly", grades: [2, 3, 5] });
journal.addStudent({ name: "ajax", grades: [2, 1, 3] });

console.log(journal.getStudentMidGrade("mango"));
console.log(journal.getStudentMidGrade("poly"));
console.log(journal.getStudentMidGrade("ajax"));

console.log(journal.getBiggestMidGradeStudent());

console.log(journal.getAllStudents());
