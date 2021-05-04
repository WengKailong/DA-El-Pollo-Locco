class Character extends MovableObject {
  y = 180;
  height = 250;
  IMAGES_WALKING = [
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-21.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-22.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-23.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-24.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-25.png",
    "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-26.png",
  ];

  world;

  speed = 10;

  walking_sound = new Audio('./audio/running.mp3');

  constructor() {
    super().loadImage(
      "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-21.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x) {
        this.x += this.speed;
        this.walking_sound.play();
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {

        this.x -= this.speed;
        this.walking_sound.play();
        this.otherDirection = true;

      }

      this.world.camera_x = -this.x + 100;

    }, 1000/50);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        // Walk animation
        this.playWalkAnimaton(this.IMAGES_WALKING);
      }
    }, 50);
  }

  jump() {}
}
