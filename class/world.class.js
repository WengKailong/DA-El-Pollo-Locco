class World {
  character = new Character();
  level = Level1;
  statusBar = StatusBars;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  gameStatus = 'start';

  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.keyboard = keyboard;
    this.run();
    this.gameResult();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
    this.level.enemies.forEach((enemy) => {
      enemy.world = this;
    });

    this.level.collectableItems.forEach((item) => {
      item.world = this;
    });

    console.log(this.level.enemies[0].world);
  }

  run() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.gameStatus == "start") {
      console.log("wait game to start");
      this.addToMap(this.level.screens[0]);
    }else if (this.gameStatus == "lost") {
     
      this.addToMap(this.level.screens[1]);
    }else if (this.gameStatus == "won") {
      
      this.addToMap(this.level.screens[2]);
    }
    else if (this.gameStatus == "run") {
      this.ctx.translate(this.camera_x, 0);

      this.addObjectsToMap(this.level.backgroundObjects);
      this.addObjectsToMap(this.level.clouds);
      this.addObjectsToMap(this.level.collectableItems);
      this.addObjectsToMap(this.level.enemies);
      this.addObjectsToMap(this.throwableObjects);

      this.addToMap(this.character);

      // space for unmovable objects
      this.ctx.translate(-this.camera_x, 0); // translate canvas for unmovable status bar
      this.addObjectsToMap(this.statusBar);
      this.ctx.translate(this.camera_x, 0);

      this.ctx.translate(-this.camera_x, 0);
    }

    // draw() will be repeatly executed
    let self = this;
    requestAnimationFrame(function () {
      self.run();
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

  gameResult(){
    let idx = this.level.enemies.length;
    let endboss = this.level.enemies[idx-1];
    var checkResult = setInterval(() => {
      if(this.character.isDead() && !endboss.isDead()){
        this.gameStatus = 'lost';
      }else if(!this.character.isDead() && endboss.isDead()){
        this.gameStatus = 'won';
      }
    }, 500);
  }
}
