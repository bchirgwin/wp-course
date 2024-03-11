type QuestionTF = {
  type: 'T/F';
  question: string;
  correctAnswer: boolean;
};

type QuestionMC = {
  type: 'MC';
  question: string;
  answer: string[];
  correctAnswer: number[];
};

type QuestionFI = {
  type: 'FI';
  question: string;
  correctAnswer: string;
};

type Question = QuestionTF | QuestionMC | QuestionFI;

export const questions: Question[] = [
  {
    type: 'T/F',
    question: '2 + 2 = 4',
    correctAnswer: true,
  },
  {
    type: 'MC',
    question: '2 + 2 = ?',
    answer: ['4', '1', '5', '3'],
    correctAnswer: [0],
  },
  {
    type: 'FI',
    question: 'What is 2 + 2?',
    correctAnswer: '4',
  },
];
