// switch verbose

export class Game {
  endGame() {
    return 'endGame';
  }
  moveUp() {
    return 'moveUp';
  }
  moveLeft() {
    return 'moveLeft';
  }
  moveDown() {
    return 'moveDown';
  }
  moveRight() {
    return 'moveRight';
  }

  handleKeyDown({ key }: any) {
    const moves = {
      Escape: this.endGame,
      ArrowUp: this.moveUp,
      ArrowLeft: this.moveLeft,
      ArrowDown: this.moveDown,
      ArrowRight: this.moveRight,
    };

    if (moves[key]) {
      moves[key]();
    }
  }
}
