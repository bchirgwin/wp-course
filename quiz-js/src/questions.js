const questions = [
  { type: "T/F", question: "JavaScript is a language", correctAnswer: true },
  {
    type: "T/F",
    question: "JavaScript is valid TypeScript",
    correctAnswer: true,
  },
  { type: "FI", question: "2 + 2 = ?", correctAnswer: 4 },
  {
    type: "MC",
    question: "console.log( [1,2,3].map(x => x * 2))",
    answers: ["[2, 4, 6]", "[1, 2, 3]", "[1, 3, 6]", "[6, 4, 2]"],
    correctAnswer: [0],
  },
];

export default questions;
