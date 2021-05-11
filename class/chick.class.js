class Chick extends Chicken {
  width = 70;
  height = 55;
  y = 360;
  imgCache = {};
  currImage = 0;

  energy = 50;
  groundLevel = 180;

  IMAGE_START = "img/3.Secuencias_Enemy_boico/Versi_pollito/1.Paso_derecho.png";

  IMAGES_WALKING = [
    "img/3.Secuencias_Enemy_boico/Versi_pollito/1.Paso_derecho.png",
    "img/3.Secuencias_Enemy_boico/Versi_pollito/2.Centro.png",
    "img/3.Secuencias_Enemy_boico/Versi_pollito/3.Paso_izquierdo.png"
  ];

    IMAGES_DEAD = [
      "img/3.Secuencias_Enemy_boico/Versi_pollito/4.Muerte.png",
    ];

    constructor() {
        super().loadImage(this.IMAGE_START);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 720 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.5;
        
      }
}
