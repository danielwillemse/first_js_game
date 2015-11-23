var loadGame = function() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 600;
  var world = document.getElementById('world');
  world.appendChild(canvas);

  return {
    ctx: ctx,
    hero: getHero(),
    level: getLevel()
  }
}

var getHero = function() {
  return {
    x: 0,
    y: 0
  }
}

var getLevel = function() {
  return {
    grid: [
      {x: 105, y: 105, type: 'wall'},
      {x: 120, y: 105, type: 'wall'},
      {x: 135, y: 105, type: 'wall'},
      {x: 150, y: 105, type: 'wall'},
      {x: 150, y: 120, type: 'wall'},
      {x: 150, y: 135, type: 'wall'},
      {x: 150, y: 150, type: 'wall'},
      {x: 150, y: 165, type: 'wall'},
      {x: 150, y: 180, type: 'wall'},
      {x: 150, y: 195, type: 'wall'},
      {x: 165, y: 195, type: 'secret'},
      {x: 180, y: 195, type: 'wall'},
      {x: 195, y: 195, type: 'wall'},
      {x: 210, y: 195, type: 'wall'},
      {x: 225, y: 195, type: 'wall'},
      {x: 240, y: 195, type: 'wall'},
      {x: 255, y: 195, type: 'wall'},
    ]
  }
}
