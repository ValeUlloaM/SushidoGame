class Pista{

    constructor(pistaImagen){
        this.pistaImagen = pistaImagen;
    }

   pintar(){
       imageMode(CENTER);
       image(this.pistaImagen, 600, 350);
   }
}