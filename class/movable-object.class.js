class MovableObject extends DrawableObject {
  speed = 0.15;
  speedY = 0;
  acceleration = 2.5;

  otherDirection = false;

  collision = false;
  energy = 100;

  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY < 0) {
        this.y += this.speedY;
        this.speedY += this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if(this instanceof ThrowableObject){
      return true;
    }else{
      return this.y < 180;
    }
  }

  moveRight(params) {
    console.log("moving right");
  }

  playAnimaton(ANIMATION_IMAGES) {
    let mod = this.currImage % ANIMATION_IMAGES.length;
    let path = ANIMATION_IMAGES[mod];
    this.img = this.imgCache[path];
    this.currImage++;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  jump() {
    this.speedY = -30;
    this.jumping_sound.play();
  }

  

  // to check wheter character is colliding with chicken.

  isColliding(mo) {
    if (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    ) {
      return true;
    }
    return false;
  }

  hit() {
    if (this.energy > 0) {
      this.energy -= 5;
    }

    this.lastHit = new Date().getTime();
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    if (timePassed > 1000) {
      return false;
    } else {
      return true;
    }
  }
}
