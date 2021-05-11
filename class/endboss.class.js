class Endboss extends Chicken {
  height = 350;
  width = 250;
  y = 100;
  x = 3700;
  imgCache = {};
  currImage = 0;
  energy = 1000;
  lastEngage;
  speed = 20;
  groundLevel = 100;

  motionStatus = "IDLE"; //IDLE, HURT, ALERT, ATTACK, TURN, DEAD

  IMAGE_START = "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G1.png";
  IMAGES_WALKING = [
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G1.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G2.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G3.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G4.png",
  ];

  IMAGES_HURT = [
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/3.Herida/G21.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/3.Herida/G22.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/3.Herida/G23.png",
  ];

  IMAGES_ALERT = [
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G5.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G6.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G7.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G8.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G9.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G10.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G11.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/1.Alerta/G12.png",
  ];

  IMAGES_ATTACK = [
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G13.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G14.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G15.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G16.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G17.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G18.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G19.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/2.Atecion-ataque/2.Ataque/G20.png",
  ];

  IMAGES_DEAD = [
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/4.Muerte/G24.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/4.Muerte/G25.png",
    "img/4.Secuencias_Enemy_gigant-Do_Gallinota-/4.Muerte/G26.png",
  ];

  constructor() {
    super().loadImage(this.IMAGE_START);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
  }

  startMotion() {
    var motion_endboss = setInterval(() => {
      if (this.isHurt()) {
        this.motionStatus = "HURT";
      } else {
        this.checkEngage();
      }

      if (this.isDead()) {
        this.motionStatus = "DEAD";
        clearInterval(motion_endboss);
      }
      //console.log('endboss status', this.motionStatus);
    }, 100);
  }

  checkEngage() {
    if (this.engageCharacter()) {
      this.motionStatus = "ALERT";
      this.lastEngage = new Date().getTime();

      setTimeout(() => {
        this.attack();
      }, 1000);
    } else {
      let timePassed = new Date().getTime() - this.lastEngage;
      if (timePassed > 3000) {
        this.motionStatus = "IDLE";
        console.log("IDLE");
      }
    }
  }

  attack() {
    if (this.motionStatus == "ALERT") {
      this.motionStatus = "ATTACK";
      console.log("ATTACK!!!");
      if (this.checkCharacterPosition() == "left") {
        this.otherDirection = false;
        this.moveLeft();
      }

      if (this.checkCharacterPosition() == "right") {
        this.otherDirection = true;
        this.moveRight();
      }
    }
  }

  checkCharacterPosition() {
    if (this.x > this.world.character.x) {
      return "left";
    } else {
      return "right";
    }
  }

  animateMotion() {
    var animate_endboss = setInterval(() => {
      if (this.motionStatus == "IDLE") {
        this.playAnimaton(this.IMAGES_WALKING);
      } else if (this.motionStatus == "HURT") {
        this.playAnimaton(this.IMAGES_HURT);
      } else if (this.motionStatus == "ALERT") {
        this.playAnimaton(this.IMAGES_ALERT);
      } else if (this.motionStatus == "ATTACK") {
        this.playAnimaton(this.IMAGES_ATTACK);
      } else if (this.motionStatus == "DEAD") {
        this.playAnimaton(this.IMAGES_DEAD);
      }
    }, 200);
  }

  hit(damage) {
    if (this.energy > 0) {
      this.energy -= damage;
      console.log("energy of boss", this.energy);
    }
    this.world.statusBar[3].setPercentage((this.energy * 100) / 1000);
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

  engageCharacter() {
    let xCharacter = this.world.character.x;
    return this.x - xCharacter < 450;
  }
}
