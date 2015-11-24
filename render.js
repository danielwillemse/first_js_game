var render = function() {
  renderWorld();
  renderLevel();
  renderHero();
}

var renderWorld = function() {
  Game.ctx.fillStyle = "#ffffff";
  Game.ctx.fillRect(0,0,Game.world.width,Game.world.height);
}

var renderLevel = function() {
  for (index in Game.level.grid) {
    var node = Game.level.grid[index];
    Game.ctx.fillStyle = "#ff6600";
    Game.ctx.fillRect(node.x,node.y,Game.world.node_width,Game.world.node_height);
  }
}

var renderHero = function() {
  Game.ctx.fillStyle = "#000000";
  Game.ctx.fillRect(Game.hero.x,Game.hero.y,Game.world.node_width,Game.world.node_width);
}
