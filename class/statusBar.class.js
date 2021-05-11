class StatusBar extends DrawableObject {
  x;
  y;
  height = 60;
  width = 200;
  belongTo;
  IMAGES_PERCENTAGE;
  percentage = 100;
  imgCache = {};

  constructor(x, y, startPercentage, IMAGES) {
    super();
    this.x = x;
    this.y = y;
    this.IMAGES_PERCENTAGE = IMAGES;
    this.loadImages(IMAGES);

    this.setPercentage(startPercentage);
  }

  // set percentage for animation of status bar
  setPercentage(percentage) {
    this.percentage = percentage;
    let path;

    path = this.IMAGES_PERCENTAGE[this.getImageIndex()];

    this.img = this.imgCache[path];
  }

  getImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
