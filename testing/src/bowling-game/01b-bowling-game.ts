export class BowlingGame {
  _score = 0;

  roll(pins: number) {
    this._score += pins;
  }

  score() {
    return this._score;
  }
}
