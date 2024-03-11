export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (grade[0]) {
      return { ...student, grade: grade[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
