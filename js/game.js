let canvas;
let ctx;


let world;

function init() {
  
  canvas = document.getElementById("canvas");

  world = new World(canvas);

  console.log("my character is ", world.character);
  console.log("my enemies are ", world.enemies);
}
