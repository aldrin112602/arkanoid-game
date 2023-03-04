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
        }
    }
    cvs.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    cvs.addEventListener("touchmove", (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    });
    const player = new Player(0, 0, 100, 300, "");
    const play = () => {
        window.requestAnimationFrame(play);
    };
})();
