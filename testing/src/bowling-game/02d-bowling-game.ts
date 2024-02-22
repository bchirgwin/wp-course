// refactor to better design
//   state for rolls and currentRoll
//   track state of rolls & currentRoll
//   method score should do scoring

export class BowlingGame {
  _score = 0;
  rolls: number[];
  currentRoll = 0;

  constructor() {
    this.rolls = new Array(21).fill(0);
  }

  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  score() {
    let score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i];
    }
    return score;
  }
}
