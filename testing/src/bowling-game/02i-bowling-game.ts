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
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        // spare
        score += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        score += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }
    return score;
  }
}
