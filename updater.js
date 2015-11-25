var update = function () {
  updateHero();
}

var updateHero = function() {
  var modifier = 15;
  var hero = Game.hero;
  var x_mod = 0;
  var y_mod = 0;

  if (38 in Game.keysDown) { // Up
    y_mod = modifier * -1;
    hero.direction = 'up';
  }
  if (40 in Game.keysDown) { // Down
    y_mod = modifier;
    hero.direction = 'down';
  }
  if (37 in Game.keysDown) { // Left
    x_mod = modifier * -1;
    hero.direction = 'left';
  }
  if (39 in Game.keysDown) { // Right
    x_mod = modifier;
    hero.direction = 'right';
  }

  if (validHeroMove(hero.x + x_mod, hero.y)) {
    hero.x += x_mod;
  }

  if (validHeroMove(hero.x, hero.y + y_mod)) {
    hero.y += y_mod;
  }

}

var validHeroMove = function(new_x, new_y) {
  var world = Game.world;

  return (
    (new_x >= 0 && new_x <= (world.width - world.node_width)) &&
    (new_y >= 0 && new_y <= (world.height - world.node_height)) &&
    notWallCollision(new_x, new_y)
  );
}

var notWallCollision = function(new_x, new_y) {
  var level = Game.level;

  for (index in level.grid) {
    var node = level.grid[index];

    if (node.type == 'wall' && new_x == node.x && new_y == node.y) {
      return false;
    }
  }

  return true;
}
