const startGame = (() => {
  const cvs = document.getElementById("game-canvas") as HTMLCanvasElement;
  let game_height: number = 600,
    game_width: number = 350;
  cvs.height = game_height;
  cvs.width = game_width;
  const ctx = cvs.getContext("2d");

  ctx.fillStyle = "000";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  const [height, width] = [10, 50];
  const currentPosition: { x: number; y: number } = {
    x: game_width / 2 - width / 2,
    y: game_height - height * 2,
  };

  /**
   * Player Object Constructor
   */
  class Player {
    x: number;
    y: number;
    height: number;
    width: number;
    src?: string;

    constructor(
      x: number,
      y: number,
      height: number,
      width: number,
      src: string
    ) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.src = src;
    }

    draw() {
      // drawing code here
      const img = new Image();
      img.src = this.src;
      ctx.drawImage(img, this.x, this.y, this.width, this.height);

    }
    update() {
      this.x = currentPosition.x;
      this.y = currentPosition.y;
    }
  }

  /**
   * Ball Object Constructor
   */
  class Ball {
    x: number;
    y: number;
    height: number;
    width: number;
    src: string;
    speedX: number;
    speedY: number;
    turnLeft: boolean;
    turnUp: boolean;

    constructor(
      x: number,
      y: number,
      width: number,
      height: number,
      src?: string
    ) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.src = src;
      this.speedX = 5;
      this.speedY = 5;
      this.turnLeft = Math.floor(Math.random() * 2) == 1;
      this.turnUp = false;
    }

    draw() {
      ctx.fillStyle = "white";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
      if (this.x + this.width >= game_width) this.turnLeft = true;
      if (this.x + this.width <= 0) this.turnLeft = false;
      if (this.turnLeft) this.x -= this.speedX;
      else this.x += this.speedX;

      if (this.y + this.height >= game_height) this.turnUp = true;
      if (this.y + this.height <= 0) this.turnUp = false;

      if (this.turnUp) this.y -= this.speedY;
      else this.y += this.speedY;
    }
  }

  const { x, y } = currentPosition;
  const player = new Player(x, y, height, width, "./assets/player.png");

  const ball = (() => {
    const { width, height } = { width: 10, height: 10 };
    return new Ball(game_width / 2 - width / 2, game_height / 2, width, height);
  })();

  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        // left arrow key
        if (currentPosition.x <= 0) currentPosition.x = 0;
        else currentPosition.x -= 20;
        break;
      case 39:
        // right arrow key
        if (currentPosition.x + width >= game_width)
          currentPosition.x = game_width - width;
        else currentPosition.x += 20;
        break;
    }
  }

  const checkCollision = (obj1, obj2) => {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.height + obj1.y > obj2.y
    );
  };


  cvs.onmousemove = (e) => {
    const { clientX } = e;
    const { x } = cvs.getBoundingClientRect();
    currentPosition.x = clientX - (x + width / 2);
    if (currentPosition.x <= 0) currentPosition.x = 0;
    if (currentPosition.x + width >= game_width)
      currentPosition.x = game_width - width;
  };
  let game_started = false;
  const play = () => {
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    player.draw();
    player.update();
    ball.draw();
    if(checkCollision(player, ball)) {
      ball.turnUp = true
    }
    if (game_started) ball.update();
    window.requestAnimationFrame(play);
  };

  play();

  return () => {
    document.querySelector("button").style.display = "none";
    game_started = true;
    console.log("Game started!");
  };
})();
