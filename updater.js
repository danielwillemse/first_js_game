var update = function () {
  updateHero();
}

var updateHero = function() {
  var modifier = 15;
  var hero = window.game.hero;
  var x_mod = 0;
  var y_mod = 0;

  if (38 in keysDown) { // Up
    y_mod = modifier * -1;
  }
  if (40 in keysDown) { // Down
    y_mod = modifier;
  }
  if (37 in keysDown) { // Left
    x_mod = modifier * -1;
  }
  if (39 in keysDown) { // Right
    x_mod = modifier;
  }

  if (validHeroMove(hero.x + x_mod, hero.y + y_mod)) {
    hero.x += x_mod;
    hero.y += y_mod;
  }

}

var validHeroMove = function(new_x, new_y) {
  return (
    (new_x >= 0 && new_x <= (600 - 15)) &&
    (new_y >= 0 && new_y <= (600 - 15)) &&
    notWallCollision(new_x, new_y)
  );
}

var notWallCollision = function(new_x, new_y) {
  var level = window.game.level;

  for (index in level.grid) {
    var node = level.grid[index];

    if (new_x == node.x && new_y == node.y) {
      return false;
    }
  }

  return true;
}
