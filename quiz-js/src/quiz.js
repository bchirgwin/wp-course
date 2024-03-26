import questions from "./questions.js";

export class Quiz {
  questions = [];

  quizEl = null;

  constructor(quizEl) {
    this.questions = questions;
    this.quizEl = quizEl;
  }

  renderTFQuestion(questionText) {
    return `
      <h2 id="question">${questionText}</h2>
      <div>
        <input id="answer1" type="radio" name="answer" value="True" />
        <label for="answer1">True</label>
      </div>
      <div>
        <input id="answer2" type="radio" name="answer" value="False" />
        <label for="answer2">False</label>
      </div>
    </div>
    `;
  }

  renderFIQuestion(questionText) {
    return `
      <h2 id="question">${questionText}</h2>
      <div>
      <label for="answer1">Answer</label>
        <input id="answer1" type="text" name="answer" value="" />
      </div>
    </div>
    `;
  }

  renderMCQuestion(questionText, answers) {
    let result = `
      <h2 id="question">${questionText}</h2>
      `;

    answers.forEach(
      (ans) =>
        (result += `
           <div>
            <input id="answer1" type="checkbox" value />
            <label for="answer1">${ans}</label>
          </div>
        `),
    );
    return result;
  }

  addQuestion(question) {
    const questionEl = document.createElement("div");
    switch (question.type) {
      case "T/F": {
        questionEl.innerHTML = this.renderTFQuestion(question.question);
        break;
      }
      case "FI": {
        questionEl.innerHTML = this.renderFIQuestion(question.question);
        break;
      }
      case "MC": {
        questionEl.innerHTML = this.renderMCQuestion(
          question.question,
          question.answers,
        );
        break;
      }
      default: {
        throw new Error("Unknown question type.");
      }
    }

    this.quizEl.appendChild(questionEl);
  }

  start() {
    console.log("starting quiz....");

    this.questions.forEach((question) => {
      this.addQuestion(question);
    });

    const submit = document.createElement("div");
    submit.innerHTML = `
      <button id="submit" onclick="handleAnswer()">Submit</button>
      <div id="results"></div>
    `;
    this.quizEl.appendChild(submit);
  }

  getQuestion(index) {
    if (index < 0 || index >= this.questions.length) {
      throw new Error("Question not available");
    }
    return questions[index];
  }

  checkAnswer(answer) {
    console.log("Check Answer");
  }
}
