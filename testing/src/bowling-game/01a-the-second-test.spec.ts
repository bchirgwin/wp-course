import { describe, it, expect } from '@jest/globals';
import { BowlingGame } from './01a-bowling-game';

describe('BowlingGame', () => {
  it('handle gutter game', () => {
    const game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('handle all one pin rolls', () => {
    const game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });
});
