(() => {
    const cvs = document.getElementById("game-canvas");
    let game_height = 600, game_width = 1200;
    cvs.height = game_height;
    cvs.width = game_width;
    const ctx = cvs.getContext("2d");
    ctx.fillStyle = "000";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    const mouse = { x: undefined, y: undefined };
    class Player {
        constructor(x, y, height, width, src) {
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
            this.src = src;
        }
        draw() {
            // drawing code here
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    const [height, width] = [20, 100];
    const currentPosition = {
        x: game_width / 2 - (width / 2),
        y: game_height - height * 2
    };
    const { x, y } = currentPosition;
    const player = new Player(x, y, height, width, "");
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case '37':
                // left arrow key
                player.x--;
                break;
            case '39':
                // right arrow key
                player.y++;
                break;
        }
    }
    const play = () => {
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        player.draw();
        window.requestAnimationFrame(play);
    };
    play();
})();
