class CollectableItem extends MovableObject {
  height = 100;
  speed = 0;
  type;
  motionStatus = "normal";
  sound_collect;
  bottle_collect = new Audio("audio/bottle_collect.mp3");
  coin_collect = new Audio("audio/coin_collect.mp3");

  IMAGE_BOTTLE = [
    "img/6.botella/2.Botella_enterrada1.png",
    "img/6.botella/2.Botella_enterrada2.png",
  ];

  IMAGE_COIN = ["img/8.Coin/Moneda1.png", "img/8.Coin/Moneda2.png"];

  constructor(type) {
    super().loadImage("img/6.botella/2.Botella_enterrada1.png");
    this.x = 720 + Math.random() * 2500;
    if (type == "bottle") {
      this.type = "bottle";
      this.loadImages(this.IMAGE_BOTTLE);
      this.sound_collect = this.bottle_collect;
      this.y = 330;
    } else if (type == "coin") {
      this.type = "coin";
      this.loadImages(this.IMAGE_COIN);
      this.sound_collect = this.coin_collect;
      this.y = 60;
    }
    this.animate();
  }

  animate() {
    var motion_CollectableItems = setInterval(() => {
      if (this.type == "bottle") {
        this.playAnimaton(this.IMAGE_BOTTLE);
      }

      if (this.type == "coin") {
        this.playAnimaton(this.IMAGE_COIN);
      }

      if (this.motionStatus == "collected") {
        clearInterval(motion_CollectableItems);
      }
    }, 300);

    setTimeout(() => {
      this.checkCollection();
    }, 200);
  }

  checkCollection() {
    var checkCollisions_CollectableItems = setInterval(() => {
      this.checkCollisions([this.world.character]);
      if (this.collision) {
        this.world.character.collect(this.type);
        this.sound_collect.play();
        this.motionStatus = "collected";
        this.afterCollect();
      }

      if (this.motionStatus == "collected") {
        clearInterval(checkCollisions_CollectableItems);
      }
    }, 100);
  }

  afterCollect() {
    for (let i = 0; i < this.world.level.collectableItems.length; i++) {
      let item = this.world.level.collectableItems[i];
      if (item.motionStatus == "collected") {
        this.world.level.collectableItems.splice(i, 1);
        console.log(`item Nr.${i} is collected`);
      }
    }
  }
}
