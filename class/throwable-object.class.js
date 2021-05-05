class ThrowableObject extends MovableObject{

    speedX;
    speedY;
    height = 60;
    width = 50;

    IMAGES_BOTTLE_THROW = [
        'img/6.botella/Rotaci/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaci/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaci/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaci/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_BOTTLE_SPLASH = [
        'img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotaci/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    constructor(x, y){
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_BOTTLE_THROW);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x + 100;
        this.y = y + 100;
        this.throw();
    }

    throw(){
        
        this.speedY = -30;
        this.speedX = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += this.speedX;
        }, 25);
        this.playAnimaton(this.IMAGES_BOTTLE_THROW);
    }

    splash(){
        this.playAnimaton(this.IMAGES_BOTTLE_SPLASH);
    }
}