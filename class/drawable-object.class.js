class DrawableObject {
  x = 120;
  y = 280;
  height = 150;
  width = 100;

  img;

  imgCache = {};
  currImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
   */

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    let frameColor;
    if (this.collision) {
      frameColor = "red";
    } else {
      frameColor = "blue";
    }

    if (this instanceof Character || this instanceof Chicken) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = frameColor;
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
