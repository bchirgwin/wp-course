import { jest, describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Game } from './03a-switch-alternative';

describe('handleKeyDown', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('escape should endGame', () => {
    let endGame = jest.spyOn(game, 'endGame');
    game.handleKeyDown({ key: 'Escape' });
    expect(endGame).toBeCalled();
  });

  it('ArrowUp should moveUp', () => {
    let moveUp = jest.spyOn(game, 'moveUp');
    game.handleKeyDown({ key: 'ArrowUp' });
    expect(moveUp).toBeCalled();
  });

  it('ArrowLeft should moveLeft', () => {
    let moveLeft = jest.spyOn(game, 'moveLeft');
    game.handleKeyDown({ key: 'ArrowLeft' });
    expect(moveLeft).toBeCalled();
  });

  it('ArrowDown should moveDown', () => {
    let moveDown = jest.spyOn(game, 'moveDown');
    game.handleKeyDown({ key: 'ArrowDown' });
    expect(moveDown).toBeCalled();
  });

  it('ArrowRight should moveRight', () => {
    let moveRight = jest.spyOn(game, 'moveRight');
    game.handleKeyDown({ key: 'ArrowRight' });
    expect(moveRight).toBeCalled();
  });
});
