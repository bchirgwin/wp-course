export class BowlingGame {
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
