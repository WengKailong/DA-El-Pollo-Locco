class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgroundObjects = [
    new BackgroundObject("img/5.Fondo/Capas/5.cielo_1920-1080px.png", 0),
    new BackgroundObject("img/5.Fondo/Capas/3.Fondo3/1.png", 0),
    new BackgroundObject("img/5.Fondo/Capas/2.Fondo2/1.png", 0),
    new BackgroundObject("img/5.Fondo/Capas/1.suelo-fondo1/1.png", 0),
  ];
  ctx;
  canvas;
  keyboard;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.clouds);

    this.addObjectsToMap(this.enemies);

    this.addToMap(this.character);

    // draw() will be repeatly executed
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objs) {
    objs.forEach((obj) => {
      this.addToMap(obj);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
