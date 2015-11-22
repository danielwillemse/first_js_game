window.onload = function() {
  window.game = loadGame();
  var then = Date.now();
  main(then);
}

var main = function (then) {
  var now = Date.now();
  var delta = now - then;

  update();
  render();

  then = now;

  requestAnimationFrame(main);
};

var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);
