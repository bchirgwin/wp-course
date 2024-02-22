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
    switch (key) {
      case 'Escape':
        this.endGame();
        break;
      case 'ArrowUp':
        this.moveUp();
        break;
      case 'ArrowLeft':
        this.moveLeft();
        break;
      case 'ArrowDown':
        this.moveDown();
        break;
      case 'ArrowRight':
        this.moveRight();
        break;
    }
  }
}
