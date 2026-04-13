// Step 1: Create multiple students
let students = [
  { name: "Nikhil", marks: [80, 75, 90] },
  { name: "Rahul", marks: [60, 70, 65] },
  { name: "Anjali", marks: [85, 90, 95] }
];

// Step 2: Loop through each student
for (let i = 0; i < students.length; i++) {
  let total = 0;

  // Calculate total marks
  for (let j = 0; j < students[i].marks.length; j++) {
    total += students[i].marks[j];
  }

  // Calculate average
  let average = total / students[i].marks.length;

  // Display result
  console.log("Student Name:", students[i].name);
  console.log("Marks:", students[i].marks);
  console.log("Total:", total);
  console.log("Average:", average);
  console.log("----------------------");
}