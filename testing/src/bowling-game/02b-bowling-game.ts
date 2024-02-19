// tempted to use flag to remember prior score in roll, this requires state
// there must be a better design

// roll calculates score, but the name doesn't imply that
// score does not calculate score but name implies that it does

// responsibilities are misplaced

export class BowlingGame {
  _score = 0;

  roll(pins: number) {
    this._score += pins;
  }

  score() {
    return this._score;
  }
}
