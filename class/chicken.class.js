class Chicken extends MovableObject {
  width = 70;
  height = 55;
  y = 360;

  IMAGES_WALKING = [
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png",
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png",
    "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png",
  ];

 



  constructor() {
    super().loadImage(
      "img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png"
    );
    this.x = 200 + Math.random() * 500;
    this.loadImages(this.IMAGES_WALKING);
    this.speed = 0.15 + Math.random() *0.5;
    this.animate();
    
  }

  animate() {

    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
        this.playAnimaton(this.IMAGES_WALKING);
    },100);
  }


}
