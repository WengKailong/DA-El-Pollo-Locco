class World {
  character = new Character();
  level = Level1;
  statusBar = new StatusBar();
  ctx;
  canvas;
  keyboard;
  camera_x = 0;

  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);

    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);

    this.addToMap(this.character);

    // space for unmovable objects
    this.ctx.translate(-this.camera_x, 0); // translate canvas for unmovable status bar
    this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);

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
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = -mo.x;
  }

  flipImageBack(mo) {
    mo.x = -mo.x;
    this.ctx.restore();
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects(){
    if(this.keyboard.THROW){
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log(this.character.energy);
      }
    });
  }
}
