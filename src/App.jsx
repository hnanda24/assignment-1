import React from "react";

const generateStudentMarkSheets = (students, details) => {
  const studentsMarkSheets = students.map((student) => {
    const studentDetails = details.find((detail) => detail.Roll === student.Roll);
    const { subjects } = studentDetails;
    const totalMarks = Object.values(subjects).reduce((acc, curr) => acc + curr, 0);
    const status = totalMarks >= 200 ? "pass" : "fail";

    return {
      ...student,
      ...subjects,
      total: totalMarks,
      status: status,
    };
  });

  return studentsMarkSheets;
};

const StudentMarkSheet = ({ student }) => {
  return (
    <div className="p-4 border mb-4">
      <h2 className="text-lg font-bold mb-2">{student.name}</h2>
      <p className="mb-2">Roll: {student.Roll}</p>
      <p className="mb-2">Math: {student.math}</p>
      <p className="mb-2">English: {student.english}</p>
      <p className="mb-2">Chemistry: {student.chemistry}</p>
      <p className="mb-2">Computer: {student.computer}</p>
      <p className="mb-2">Total: {student.total}</p>
      <p>Status: {student.status}</p>
    </div>
  );
};

const App = () => {
  const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
  ];

  const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
  ];

  const studentsMarkSheets = generateStudentMarkSheets(students, Details);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Mark Sheets</h1>
      {studentsMarkSheets.map((student, index) => (
        <StudentMarkSheet key={index} student={student} />
      ))}
    </div>
  );
};

export default App;
