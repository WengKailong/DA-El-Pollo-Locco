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

  constructor() {
    super().loadImage(
      "img/2.Secuencias_Personaje-Pepe-correcci/2.Secuencia_caminata/W-21.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        let mod = this.currImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[mod];
        this.img = this.imgCache[path];
        this.currImage++;
      }
    }, 100);
  }

  jump() {}
}
