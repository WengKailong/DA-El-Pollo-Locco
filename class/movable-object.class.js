class MovableObject extends DrawableObject {
  speedX = 0;
  speed = 0.15;
  speedY = 0;
  acceleration = 1.5;
  currImage = 0;
  groundLevel = 180;
  otherDirection = false;

  collision = false;
  energy = 100;

  lastHit = 0;
  world;

  applyGravity(speedX, speedY) {
    if (this.isAboveGround() || speedY < 0) {
      this.y += speedY;
      this.speedY += this.acceleration;
      this.x += speedX;
    }
    if (!this.isAboveGround()) {
      this.speedY = 0;
    }
  }

  isAboveGround() {
    return this.y < this.groundLevel;
  }

  // moveRight(params) {
  //   console.log("moving right");
  // }

  playAnimaton(ANIMATION_IMAGES) {
    let mod = this.currImage % ANIMATION_IMAGES.length;
    let path = ANIMATION_IMAGES[mod];
    this.img = this.imgCache[path];
    this.currImage += 1;
  }

  moveLeft() {
    if(!this.isAboveGround()){
      this.x -= this.speed;
    }
    
  }

  moveRight() {
    if(!this.isAboveGround()){
      this.x += this.speed;
    }
    
  }

  jump() {
    if (!this.isAboveGround()) {
      this.speedY = -25;
      
      this.jumping_sound.play();
      var applyGravity = setInterval(() => {
        this.applyGravity(this.speedX, this.speedY);
        console.log(this.speedX, this.speedY);
        if (!this.isAboveGround() && this.speedY == 0) {
          clearInterval(applyGravity);
          
        }
        this.motionStatus = "JUMPING";
        this.idleStart = new Date().getTime();
      }, 100);
    }
  }

  isDead() {
    return this.energy <= 0;
  }

  // to check whether character is colliding with chicken.

  isColliding(mo) {
    // if (
    //   (this.x + this.width > mo.x &&
    //   this.y + this.height > mo.y &&
    //   this.x < mo.x &&
    //   this.y < mo.y + mo.height) ||
    //   (

    //   )
    // ) {
    //   return true;
    // }
    // return false;

    var rect1 = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
    var rect2 = { x: mo.x, y: mo.y, width: mo.width, height: mo.height };

    if (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    ) {
      return true;
      // collision detected!
    }
    return false;
  }

  checkCollisions(objects) {
    this.collision = false;

    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      //console.log(i, enemy);
      if (this.isColliding(object)) {
        this.collision = true;
      }
      //return this.isColliding(enemy);
    }
  }
}
