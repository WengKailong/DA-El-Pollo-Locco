class Chicken extends MovableObject {
  width = 70;
  height = 55;
  y = 360;
  imgCache = {};
  currImage = 0;

  IMAGE_START =
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png";

  IMAGES_WALKING = [
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png",
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png",
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png",
  ];

  IMAGES_DEAD = [
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png",
  ];

  constructor() {
    super().loadImage(this.IMAGE_START);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 720 + Math.random() * 3500;
    this.speed = 0.15 + Math.random() * 0.5;
    let that = this;
    setTimeout(function () {
      that.animate();
    }, 200);
  }

  animate() {
    this.startMotion();
    this.checkCllision();
    this.animateMotion(); 
  }

  startMotion(){
    var move_chicken = setInterval(() => {
      if (this.isDead()) {
        let that = this;
        setTimeout(() => {
          that.die();
        },500);
        
        clearInterval(move_chicken);
      } else {
        this.moveLeft();
      }
    }, 1000 / 60);
  }

  checkCllision(){
    var collision_chicken = setInterval(() => {
      if (this.isDead()) {
        clearInterval(collision_chicken);
      } else {
        
  
        this.checkCollisions(this.world.throwableObjects);
        if (this.collision) {
          this.hit(100);
        }

        this.checkCollisions([this.world.character]);
        //console.log(this.world.character.x, this.world.character.y);
        if (this.collision) {
          
          this.hit(20);
        }
      }
    }, 400);
  }

  animateMotion(){
    var animate_chicken = setInterval(() => {
      if (this.isDead()) {
        this.playAnimaton(this.IMAGES_DEAD);
        console.log('gottacha!');
        setTimeout(() => {clearInterval(animate_chicken);}, 100);
      } else {
        this.playAnimaton(this.IMAGES_WALKING);
      }
    }, 100);
  }

  hit(damage) {
    if (this.energy > 0) {
      this.energy -= damage;
      
    }
  }

  die() {
    for (let i = 0; i < this.world.level.enemies.length; i++) {
      let enemy = this.world.level.enemies[i];
      if (enemy.isDead()) {
          this.world.level.enemies.splice(i, 1);
          console.log(`enemy Nr.${i} is dead`);
      }
    }
  }
}
