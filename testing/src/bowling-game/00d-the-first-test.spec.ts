import { describe, it } from '@jest/globals';
import { BowlingGame } from './00d-bowling-game';

describe('BowlingGame', () => {
  it('handle gutter game', () => {
    const game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
  });
});
