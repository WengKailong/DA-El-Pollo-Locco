class Level {

    collectableItems;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 4000;

    constructor(collectableItems, enemies, clouds, backgroundObjects){
        this.collectableItems = collectableItems;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }


}