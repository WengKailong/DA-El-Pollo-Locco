class Character extends MovableObject {
  y = 180;
  height = 250;
  motionStatus = "IDLE"; //WALKING, JUMPING, HURT, IDLE, IDEL_LONG, DEAD
  IMAGES_WALKING = [
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-21.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-22.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-23.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-24.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-25.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-26.png",
  ];

  IMAGES_JUMPING = [
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-31.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-32.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-33.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-34.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-35.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-36.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-37.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-38.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-39.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/3.Secuencia_salto/J-40.png",
  ];

  IMAGES_DEAD = [
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-51.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-52.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-53.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-54.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-55.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-56.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/5.Muerte/D-57.png",
  ];

  IMAGES_HURT = [
    "img/2.Secuencias_Personaje-Pepe-correcci/4.Herido/H-41.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/4.Herido/H-42.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/4.Herido/H-43.png",
  ];

  IMAGES_IDLE = [
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-1.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-2.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-3.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-4.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-5.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-6.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-7.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-8.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-9.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/IDLE/I-10.png",
  ];

  IMAGES_IDLE_LONG = [
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-11.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-12.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-13.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-14.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-15.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-16.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-17.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-18.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-19.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/1.IDLE/LONG_IDLE/I-20.png",
  ];

  speed = 7;

  walking_sound = new Audio("./audio/running.mp3");
  jumping_sound = new Audio("./audio/jumping.mp3");

  groundLevel = 180;
  bottles = 10;
  coins = 0;

  idleStart = new Date().getTime();
  lastThrow = new Date().getTime();

  constructor() {
    super().loadImage(
      "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-21.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_IDLE_LONG);
    this.animate();
  }

  animate() {
    this.startMotion();
    this.checkCollision();
    this.animateMotion();
    this.checkCollection();
  }

  startMotion() {
    var motion_character = setInterval(() => {
      if (this.isDead()) {
        this.motionStatus = "DEAD";
        clearInterval(motion_character);
      }

      if (
        this.world.keyboard.RIGHT &&
        this.inWalkableArea() &&
        !this.isAboveGround()
      ) {
        this.motionStatus = "WALKING";
        this.speedX = 10;
        this.moveRight();
        this.otherDirection = false;
        this.idleStart = new Date().getTime();
      }

      if (
        this.world.keyboard.LEFT &&
        this.inWalkableArea() &&
        !this.isAboveGround()
      ) {
        this.motionStatus = "WALKING";
        this.speedX = -10;
        this.moveLeft();
        this.otherDirection = true;
        this.idleStart = new Date().getTime();
      }

      if (this.checkJump()) {
        this.jump();
      }

      if (this.isHurt()) {
        this.motionStatus = "HURT";
        this.idleStart = new Date().getTime();
      }

      if (this.checkThrowObjects()) {
        this.throwObject();
        this.idleStart = new Date().getTime();
      }

      let timePassed = new Date().getTime() - this.idleStart;

      if (timePassed > 200 && timePassed < 5000) {
        this.speedX = 0;
        this.motionStatus = "IDLE";
      } else if (timePassed >= 5000) {
        this.motionStatus = "IDLE_LONG";
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 50);
  }

  checkCollision() {
    var collision_character = setInterval(() => {
      if (this.isDead()) {
        clearInterval(collision_character);
      }

      this.checkCollisions(this.world.level.enemies);
      if (this.collision) {
        this.hit();
      }

      this.checkCollisions(this.world.level.collectableItems);
    }, 100);
  }

  animateMotion() {
    var animate_character = setInterval(() => {
      //console.log(this.motionStatus);
      this.walking_sound.pause();
      if (this.isDead()) {
        this.playAnimaton(this.IMAGES_DEAD);

        setTimeout(() => {
          clearInterval(animate_character);
        }, 200);
      } else if (this.motionStatus == "HURT") {
        this.playAnimaton(this.IMAGES_HURT);
      } else if (this.motionStatus == "JUMPING") {
        this.playAnimaton(this.IMAGES_JUMPING);
      } else if (this.motionStatus == "WALKING") {
        this.walking_sound.play();
        this.playAnimaton(this.IMAGES_WALKING);
      } else if (this.motionStatus == "IDLE") {
        this.playAnimaton(this.IMAGES_IDLE);
      } else if (this.motionStatus == "IDLE_LONG") {
        this.playAnimaton(this.IMAGES_IDLE_LONG);
      }
    }, 100);
  }

  checkCollection(){
    var collection_character = setInterval(() => {
      this.world.statusBar[0].setPercentage(this.energy);
      this.world.statusBar[1].setPercentage((this.bottles * 100) / 20);
      this.world.statusBar[2].setPercentage((this.coins * 100) / 5);
      if (this.isDead()) {
        clearInterval(collection_character);
      }
      
    }, 100);
  }

  checkJump() {
    return this.world.keyboard.UP && !this.isAboveGround();
  }

  checkThrowObjects() {
    let timePassed = new Date().getTime() - this.lastThrow;
    if (this.world.keyboard.THROW && this.bottles > 0 && timePassed > 500) {
      this.lastThrow = new Date().getTime();
      return true;
    } else {
      return false;
    }
  }

  throwObject() {
    let bottle = new ThrowableObject(
      this.x,
      this.y,
      this.otherDirection,
      this.world
    );
    this.world.throwableObjects.push(bottle);
    this.bottles -= 1;
  }

  hit() {
    if (this.energy > 0) {
      this.energy -= 5;
    }
    
    console.log("energy of character", this.energy);
    this.lastHit = new Date().getTime();
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    if (timePassed > 500) {
      return false;
    } else {
      return true;
    }
  }

  inWalkableArea() {
    if (this.x < world.level.level_end_x && this.x > 0) {
      return true;
    } else {
      return false;
    }
  }

  collect(type) {
    if (type == "bottle") {
      this.bottles++;
      console.log(this.bottles);
    } else if (type == "coin") {
      this.coins++;
      console.log(this.coins);
    }
  }
}
