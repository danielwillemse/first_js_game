var loadGame = function() {
  Game = {};
  Game.ctx = loadCanvas();
  Game.world = getWorld();
  Game.level = getLevel();
  Game.hero = getHero();

  window.Game = Game
  return Game;
}

var getHero = function() {
  return {
    x: 0,
    y: 0,
    direction: 'down',
    equipped: 'sword',
    sword: 'inactive'
  }
}

var getWorld = function() {
  return {
    width: 800,
    height: 800,
    node_width: 20,
    node_height: 20
  }
}

var getLevel = function() {
  var nodes = [
    {x: 1, y:   20, type: 'not_blocked', fill: 'grass'},
    {x: 3, y:   20, type: 'not_blocked', fill: 'grass'},
    {x: 4, y:   20, type: 'not_blocked', fill: 'grass'},
    {x: 2, y:   19, type: 'not_blocked', fill: 'grass'},
    {x: 4, y:   19, type: 'not_blocked', fill: 'grass'},
    {x: 8, y:   7,  type: 'blocked', fill: 'wall'},
    {x: 9, y:   7,  type: 'blocked', fill: 'wall'},
    {x: 10, y:  7,  type: 'blocked', fill: 'wall'},
    {x: 10, y:  8,  type: 'blocked', fill: 'wall'},
    {x: 10, y:  9,  type: 'blocked', fill: 'wall'},
    {x: 10, y: 10,  type: 'blocked', fill: 'wall'},
    {x: 10, y: 11,  type: 'blocked', fill: 'wall'},
    {x: 10, y: 12,  type: 'blocked', fill: 'wall'},
    {x: 10, y: 13,  type: 'blocked', fill: 'wall'},
    {x: 11, y: 13,  type: 'secret',  fill: 'wall'},
    {x: 12, y: 13,  type: 'blocked', fill: 'wall'},
    {x: 13, y: 13,  type: 'blocked', fill: 'wall'},
    {x: 14, y: 13,  type: 'blocked', fill: 'wall'},
    {x: 15, y: 13,  type: 'blocked', fill: 'wall'},
    {x: 16, y: 13,  type: 'blocked', fill: 'wall'},
    {x: 17, y: 13,  type: 'blocked', fill: 'wall'}
  ];

  var grid_nodes = [];
  for (index in nodes) {
    var node = nodes[index];
    var obj = {}
    grid_nodes.push();
    grid_nodes.push({
      x: node.x * Game.world.node_width,
      y: node.y * Game.world.node_height,
      type: node.type,
      fill: node.fill
    });
  }

  return {
    grid: grid_nodes
  };
}

var loadCanvas = function() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 800;
  var world = document.getElementById('world');
  world.appendChild(canvas);
  return ctx;
}
