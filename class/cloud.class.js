class Cloud extends MovableObject {
  width = 500;
  height = 300;
  

  constructor() {
    super().loadImage("img/5.Fondo/Capas/4.nubes/1.png");
    this.x = Math.random() * 500;
    this.y = 30;
    this.animate();
  }

  animate(){
    this.moveLeft();
  }
  
}
