var render = function() {
  renderWorld();
  renderHero();
}

var renderWorld = function() {
  ctx = window.game.ctx;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,600,600);
}

var renderHero = function() {
  ctx = window.game.ctx;
  hero = window.game.hero;

  ctx.fillStyle = "#000000";
  ctx.fillRect(hero.x,hero.y,15,15);
}
