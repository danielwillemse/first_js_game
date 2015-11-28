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

  var key = Game.hero.direction;
  if (Game.hero.sword == 'active') {
    key += '-sword';
  }

  var img = getHeroImage(key);

  Game.ctx.drawImage(
    heroImage,
    img.sx, img.sy,
    img.sw, img.sh,
    Game.hero.x + img.xo, Game.hero.y + img.yo,
    img.w, img.h
  );
}

var getHeroImage = function(key) {
  return {
    'down'  : { sx:  0, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 0, yo: 0 },
    'up'    : { sx: 60, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 0, yo: 0 },
    'left'  : { sx: 30, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 0, yo: 0 },
    'right' : { sx: 90, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 0, yo: 0 },
    'down-sword' : { sx: 0, sy: 83, sw: 16, sh: 30, w: 24, h: 45, xo: 0, yo: 0 },
    'up-sword' : { sx: 60, sy: 83, sw: 15, sh: 30, w: 23, h: 45, xo: 0, yo: -15 },
    'left-sword' : { sx: 22, sy: 90, sw: 30, sh: 20, w: 45, h: 30, xo: -18, yo: 0 },
    'right-sword' : { sx: 83, sy: 90, sw: 30, sh: 20, w: 45, h: 30, xo: 0, yo: 0 }
  }[key];
}
