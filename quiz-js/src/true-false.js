import { Question } from "./question";

// eslint-disable-next-line import/prefer-default-export
export class TrueFalseQuestion extends Question {
  constructor(question, correctAnswer) {
    super("T/F", question, [true, false], correctAnswer);
  }
}
