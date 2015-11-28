var render = function() {
  renderWorld();
  renderLevel();
  renderHero();
}

var renderWorld = function() {
  Game.ctx.fillStyle = "#ffff99";
  Game.ctx.fillRect(0,0,Game.world.width,Game.world.height);
}

var renderLevel = function() {
  for (index in Game.level.grid) {
    var node = Game.level.grid[index];
    var fillStyle = {
      'wall' : '#333333',
      'grass' : '#33ff33',
      'water' : '#3333ff'
    }[node.fill] || '#000000';

    Game.ctx.fillStyle = fillStyle;
    Game.ctx.fillRect(node.x,node.y,Game.world.node_width,Game.world.node_height);
  }
}

var heroImage = new Image();
heroImage.src = "assets/zelda-sprites-link.png";

var renderHero = function() {
  //drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

  var img = getHeroImage(Game.hero.direction);

  Game.ctx.drawImage(
    heroImage,
    img.sx, img.sy,
    img.sw, img.sh,
    Game.hero.x, Game.hero.y,
    img.w, img.h
  );
}

var getHeroImage = function(key) {
  return {
    'down'  : { sx:  0, sy: 0, sw: 15, sh: 20, w: 30, h: 40 },
    'left'  : { sx: 30, sy: 0, sw: 15, sh: 20, w: 30, h: 40 },
    'up'    : { sx: 60, sy: 0, sw: 15, sh: 20, w: 30, h: 40 },
    'right' : { sx: 90, sy: 0, sw: 15, sh: 20, w: 30, h: 40 }
  }[key];
}
