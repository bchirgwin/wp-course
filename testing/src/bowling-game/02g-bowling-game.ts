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
      // the following isn't going to work because i might not refer to the
      // first ball of the frame.
      // Design is still wrong
      // Need to walk through array of two balls (one frame) at a time
      // Comment out spare test

      // if (this.rolls[i] + this.rolls[i+1] == 10) // spare
      //     score += ...
      score += this.rolls[i];
    }
    return score;
  }
}
