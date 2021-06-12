class Acertijo{

    constructor(acertijoX, acertijoY, tam){
        this.acertijoX = acertijoX; 
        this.acertijoY = acertijoY; 
        this.tam = tam;
        this.revelar = false;
    }

   pintar(){
       if(this.revelar === true){
       noFill();
       stroke(35, 255, 23);
       strokeWeight(8);
       ellipse(this.acertijoX, this.acertijoY, this.tam, this.tam);
       }
   }

   validarClic(mx, my){
    if ((dist(mx, my, this.acertijoX, this.acertijoY)) < this.tam / 2) {
        this.revelar = true;
        return true;
        
    }
  
    return false;
}

getAcertijoX(){
    return this.acertijoX;
}

getAcertijoY(){
    return this.acertijoY;
}

setRevelar(nuevoRevelar){
    this.revelar = nuevoRevelar;

}



}