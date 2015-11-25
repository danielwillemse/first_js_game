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
    if ([34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      Game.keysDown[e.keyCode] = true;
    }
  }, false);

  addEventListener("keyup", function (e) {
    e.preventDefault();
    delete Game.keysDown[e.keyCode];
  }, false);
}

