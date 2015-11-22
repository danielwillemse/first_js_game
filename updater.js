var update = function () {
  updateHero();
}

var updateHero = function() {
  var modifier = 15;
  var hero = window.game.hero;

  if (38 in keysDown) { // Player holding up
    hero.y -= modifier;
  }
  if (40 in keysDown) { // Player holding down
    hero.y += modifier;
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= modifier;
  }
  if (39 in keysDown) { // Player holding right
    hero.x += modifier;
  }

  if (hero.x < 0) {
    hero.x = 0;
  }

  if (hero.y < 0) {
    hero.y = 0;
  }

  if (hero.x + 15 > 600) {
    hero.x = 600 - 15;
  }

  if (hero.y + 15 > 600) {
    hero.y = 600 - 15;
  }
}
