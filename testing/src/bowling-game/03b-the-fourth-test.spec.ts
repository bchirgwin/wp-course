import { describe, it, expect, beforeEach } from '@jest/globals';
import { BowlingGame } from './03b-bowling-game';

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

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
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
    rollSpare();
    game.roll(3);
    rollMany(17, 0);

    expect(game.score()).toBe(16);
  });

  it('should handle one strike', () => {
    game.roll(10); // strike
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });
});
