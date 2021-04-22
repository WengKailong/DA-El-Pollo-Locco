class MovableObject {
    x = 120;
    y = 250;
    height = 100;
    width = 100;
    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(params) {
       console.log('moving right'); 
    }

    moveLeft(){

    }

}