
(() => {
  const cvs = document.getElementById("game-canvas") as HTMLCanvasElement;
  let game_height: number = 600, game_width: number = 1200;
  cvs.height = game_height;
  cvs.width = game_width;
  const ctx = cvs.getContext("2d");
  

  class Player {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    draw() {
      // drawing code here
    }
  }


  const player = new Player(0, 0);
  player.draw();

})();