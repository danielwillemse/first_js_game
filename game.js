window.onload = function() {
  loadGame();
  addKeyListeners();
  main();
}

var main = function () {
  update();
  render();

  requestAnimationFrame(main);
};

addKeyListeners = function() {
  Game.keysDown = {};

  addEventListener("keydown", function (e) {
    Game.keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete Game.keysDown[e.keyCode];
  }, false);
}

