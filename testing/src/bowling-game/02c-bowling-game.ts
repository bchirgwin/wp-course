// refactor to better design
//   state for rolls and currentRoll
//   track state of rolls & currentRoll
//   method score should do scoring

export class BowlingGame {
  _score = 0;
  rolls = Array(21);
  currentRoll = 0;
  roll(pins: number) {
    this._score += pins;
    this.rolls[this.currentRoll++] = pins;
  }

  score() {
    return this._score;
  }
}
