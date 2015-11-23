var render = function() {
  renderWorld();
  renderLevel();
  renderHero();
}

var renderWorld = function() {
  var ctx = window.game.ctx;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,600,600);
}

var renderLevel = function() {
  var ctx = window.game.ctx;
  var level = window.game.level;

  for (index in level.grid) {
    var node = level.grid[index];
    ctx.fillStyle = "#ff6600";
    ctx.fillRect(node.x,node.y,15,15);
  }
}

var renderHero = function() {
  var ctx = window.game.ctx;
  var hero = window.game.hero;

  ctx.fillStyle = "#000000";
  ctx.fillRect(hero.x,hero.y,15,15);
}
