
(() => {
  const cvs = document.getElementById("game-canvas") as HTMLCanvasElement;
  let game_height: number = 600, game_width: number = 1200;
  cvs.height = game_height;
  cvs.width = game_width;
  const ctx = cvs.getContext("2d");
  

})();