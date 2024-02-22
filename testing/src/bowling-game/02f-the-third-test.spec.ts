import { describe, it, expect, beforeEach } from '@jest/globals';

// ugly comment
// uncomment out spare test to redesign responsibilities

import { BowlingGame } from './02f-bowling-game';

describe('BowlingGame', () => {
  let game: BowlingGame;
  BowlingGame;
  beforeEach(() => {
    game = new BowlingGame();
  });

  const rollMany = (rolls: number, pins: number) => {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it('handle gutter game', () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it('handle all ones', () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it('handle one spare', () => {
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);
    rollMany(17, 0);

    expect(game.score()).toBe(16);
  });
});
