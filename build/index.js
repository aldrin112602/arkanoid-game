(() => {
    const cvs = document.getElementById("game-canvas");
    let game_height = 600, game_width = 350;
    cvs.height = game_height;
    cvs.width = game_width;
    const ctx = cvs.getContext("2d");
    ctx.fillStyle = "000";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    const [height, width] = [10, 50];
    const currentPosition = {
        x: game_width / 2 - width / 2,
        y: game_height - height * 2,
    };
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
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        update() {
            this.x = currentPosition.x;
            this.y = currentPosition.y;
        }
    }
    const { x, y } = currentPosition;
    const player = new Player(x, y, height, width, "");
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 37:
                // left arrow key
                if (currentPosition.x <= 0)
                    currentPosition.x = 0;
                else
                    currentPosition.x -= 20;
                break;
            case 39:
                // right arrow key
                if (currentPosition.x + width >= game_width)
                    currentPosition.x = game_width - width;
                else
                    currentPosition.x += 20;
                break;
        }
    }
    cvs.onmousemove = (e) => {
        const { x } = e;
        console.log(e);
        currentPosition.x = x - game_width + width * 2 - width / 2;
        if (currentPosition.x <= 0)
            currentPosition.x = 0;
        if (currentPosition.x + width >= game_width)
            currentPosition.x = game_width - width;
    };
    const play = () => {
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        player.draw();
        player.update();
        window.requestAnimationFrame(play);
    };
    play();
})();
