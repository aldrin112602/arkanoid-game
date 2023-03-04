(() => {
    const cvs = document.getElementById("game-canvas");
    let game_height = 600, game_width = 1200;
    cvs.height = game_height;
    cvs.width = game_width;
    const ctx = cvs.getContext("2d");
})();
