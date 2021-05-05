let canvas;
let ctx;
let keyboard = new Keyboard();

let world;

function init() {
  canvas = document.getElementById("canvas");

  world = new World(canvas, keyboard);

  console.log("my character is ", world.character);
  console.log("my enemies are ", world.enemies);
}

window.addEventListener("keydown", (event) => {
  console.log(event);
  switch (event.keyCode) {
    case 38:
      keyboard.UP = true;
      break;
    case 40:
      keyboard.DOWN = true;
      break;
    case 37:
      keyboard.LEFT = true;
      break;
    case 39:
      keyboard.RIGHT = true;
      break;
    case 32:
      keyboard.SPACE = true;
      break;
    case 68:
      keyboard.THROW = true;
      break;
    default:
    // code block
  }
  console.log(keyboard);
});

window.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 38:
      keyboard.UP = false;
      break;
    case 40:
      keyboard.DOWN = false;
      break;
    case 37:
      keyboard.LEFT = false;
      break;
    case 39:
      keyboard.RIGHT = false;
      break;
    case 32:
      keyboard.SPACE = false;
      break;
    case 68:
      keyboard.THROW = false;
      break;
    default:
    // code block
  }
});
