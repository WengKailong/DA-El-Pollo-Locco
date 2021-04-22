class Cloud extends MovableObject {
  width = 500;
  height = 150;
  constructor() {
    super().loadImage("img/5.Fondo/Capas/4.nubes/1.png");
    this.x = 200 + Math.random() * 500;
    this.y = 100;
  }
}
