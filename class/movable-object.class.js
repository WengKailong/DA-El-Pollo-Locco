class MovableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;

    imgCache = {};
    currImage = 0;

    speed = 0.15;

    otherDirection = false;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

/**
 * 
 * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
 */

    loadImages(arr){

        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });

    }

    moveRight(params) {
       console.log('moving right'); 
    }

    moveLeft(){
            setInterval(() => { this.x -= this.speed; }, 1000/60);
    }

    playWalkAnimaton(WALKING_IMAGES){
        let mod = this.currImage % WALKING_IMAGES.length;
        let path = WALKING_IMAGES[mod];
        this.img = this.imgCache[path];
        this.currImage++;
    }

}