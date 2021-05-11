class ThrowableObject extends MovableObject {
  speedX;
  speedY = -20;
  height = 60;
  width = 50;
  groundLevel = 370;
  bottleHit = false;
  

  IMAGES_BOTTLE_THROW = [
    "img/6.botella/Rotaci/Mesa de trabajo 1 copia 3.png",
    "img/6.botella/Rotaci/Mesa de trabajo 1 copia 4.png",
    "img/6.botella/Rotaci/Mesa de trabajo 1 copia 5.png",
    "img/6.botella/Rotaci/Mesa de trabajo 1 copia 6.png",
  ];

  IMAGES_BOTTLE_SPLASH = [
    "img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 7.png",
    "img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 8.png",
    "img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 9.png",
    "img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 10.png",
    "img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 11.png",
    "img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 12.png",
  ];

  flying_sound = new Audio('audio/bottle_throw.mp3');
  smash_sound = new Audio('audio/smash.mp3');

  constructor(x, y, otherDirection, world) {
    super().loadImage("img/7.Marcadores/Icono/Botella.png");
    this.loadImages(this.IMAGES_BOTTLE_THROW);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.otherDirection = otherDirection;

    if (this.otherDirection) {
      this.x = x;
      this.speedX = -5;
    } else {
      this.x = x + 100;
      this.speedX = 5;
    }

    this.y = y + 100;

    this.world = world;

    this.throw();
  }

  throw() {
    this.flying_sound.play();
    var applyGravity = setInterval(() => {
      this.applyGravity(this.speedX, this.speedY);
      if (this.bottleHit){
        clearInterval(applyGravity);
      }
    }, 50);

    

    var bottleHitObject = setInterval(() => {
      this.checkCollisions(this.world.level.enemies);
      if(this.collision){
        
        this.width = 90;
        this.height = 100;

        
      }
      
      if (this.isAboveGround() && !this.collision) {
        this.playAnimaton(this.IMAGES_BOTTLE_THROW); //animation for bottles flying
      } else {
        this.playAnimaton(this.IMAGES_BOTTLE_SPLASH); //animation for bottles hitting ground
        this.bottleHit = true;
        this.hit();
        clearInterval(bottleHitObject);
      }
    }, 10);
  }

  hit() {
    this.smash_sound.play();
    for (let i = 0; i < this.world.throwableObjects.length; i++) {
      let bottle = this.world.throwableObjects[i];
      if (bottle.bottleHit) {
        setTimeout(() => {
          this.world.throwableObjects.splice(i, 1);
        }, 500);
      }
    }
  }
}
