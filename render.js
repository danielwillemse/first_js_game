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

  var x = (Math.round(Game.hero.x / Game.world.node_width)) + 1;
  var y = (Math.round(Game.hero.y / Game.world.node_height)) + 1;
  var multi = (x * y);
  var odd = (x * y) % 2;

  var key = Game.hero.direction;
  if (Game.hero.sword == 'active') {
    key += '-sword';
  } else if (odd) {
    key += '-odd';
  } else {
    key += '-even';
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
    'down-even'  : { sx:  0, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'up-even'    : { sx: 60, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'left-even'  : { sx: 30, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'right-even' : { sx: 90, sy: 0, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'down-odd'  : { sx:  0, sy: 30, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'up-odd'    : { sx: 60, sy: 30, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'left-odd'  : { sx: 30, sy: 30, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'right-odd' : { sx: 90, sy: 30, sw: 15, sh: 20, w: 23, h: 30, xo: 3, yo: 3 },
    'down-sword' : { sx: 0, sy: 83, sw: 16, sh: 30, w: 24, h: 45, xo: 3, yo: 3 },
    'up-sword' : { sx: 60, sy: 83, sw: 15, sh: 30, w: 23, h: 45, xo: 3, yo: -15 },
    'left-sword' : { sx: 22, sy: 90, sw: 30, sh: 20, w: 45, h: 30, xo: -16, yo: 3 },
    'right-sword' : { sx: 83, sy: 90, sw: 30, sh: 20, w: 45, h: 30, xo: 3, yo: 3 }
  }[key];
}
