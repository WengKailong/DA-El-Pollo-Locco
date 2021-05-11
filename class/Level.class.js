class Level {

    collectableItems;
    enemies;
    clouds;
    backgroundObjects;
    screens;
    level_end_x = 4000;

    constructor(collectableItems, enemies, clouds, backgroundObjects, screens){
        this.collectableItems = collectableItems;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.screens = screens;
    }


}