import { describe, it, expect } from '@jest/globals';
import { BowlingGame } from './00e-bowling-game';

describe('BowlingGame', () => {
  it('handle gutter game', () => {
    const game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });
});
