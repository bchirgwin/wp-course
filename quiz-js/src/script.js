import { Quiz } from "./quiz.js";

// window.addEventListener("DOMContentLoaded", (event) => {});

// eslint-disable-next-line import/prefer-default-export
export function handleStartQuiz(e) {
  e.stopPropagation();

  const quizEl = document.querySelectorAll(".quiz")[0];
  console.log("handleStartQuiz");
  const quiz = new Quiz(quizEl);
  quiz.start();
}

export function handleAnswer() {
  console.log("handleAnswer");
}

window.handleStartQuiz = handleStartQuiz;
window.handleAnswer = handleAnswer;
