(() => {
    const cvs = document.getElementById("game-canvas");
    let game_height = 600, game_width = 1200;
    cvs.height = game_height;
    cvs.width = game_width;
    const ctx = cvs.getContext("2d");
    class Player {
        constructor(x, y) {
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
