export const QuestionTypes = "T/F";

export class Question {
  type = null;

  question = null;

  answers = null;

  correctAnswer = null;

  constructor(type, question, answers, correctAnswer) {
    this.type = type;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
