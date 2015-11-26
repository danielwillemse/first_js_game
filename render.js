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

  var x_offset = {
    'down' : 0,
    'left' : 30,
    'up' : 60,
    'right' : 90
  }[Game.hero.direction] || 0;
  var y_offset = 0;

  if (32 in Game.keysDown && Game.hero.equipped == 'sword' ) { // Spacebar
    console.log('spacebar!!');
    y_offset = 85;
    x_offset -= 5;
  }

  Game.ctx.drawImage(
    heroImage,
    x_offset, y_offset, 20, 20,
    Game.hero.x,
    Game.hero.y,
    20, 20
  );
}
