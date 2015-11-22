var loadGame = function() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 600;
  var world = document.getElementById('world');
  world.appendChild(canvas);

  return {
    ctx: ctx,
    hero: getHero()
  }
}

var getHero = function() {
  return {
    x: 0,
    y: 0
  }
}
