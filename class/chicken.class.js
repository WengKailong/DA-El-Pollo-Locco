class Chicken extends MovableObject{
   
    constructor(){
        super().loadImage('img/3.Secuencias_Enemy_boico/Versi_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 200 + Math.random() * 500;
    }


}