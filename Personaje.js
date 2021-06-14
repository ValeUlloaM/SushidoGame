class Personaje {

    constructor(pFil, pCol, imgF, imgT, imgLi, imgLd) {
        //Ubicacion en matriz de pixeles
        this.xPos = (pCol * 100) + 50;
        this.yPos = (pFil * 100) + 50;
        //Ubicacion en el mapa
        this.pCol = pCol;
        this.pFil = pFil;
        //Orientacion del personaje
        this.orientacion = 3;
        //Imagenes de vistas del personaje
        this.imgF = imgF;
        this.imgT = imgT;
        this.imgLi = imgLi;
        this.imgLd = imgLd;
        //Vidas
        this.vida = 6;
        this.arma = new Arma();

    }

    pintarVistas(imgBalaWasabi, imgBalaArroz) {
        imageMode(CENTER);
        this.arma.mostrar(imgBalaWasabi, imgBalaArroz);
        
        switch (this.orientacion) {
            
            case 0: //Lateral izquierda
                this.xPos = (this.pCol * 100) + 50; //
                this.yPos = (this.pFil * 100) + 50;
                image(this.imgLi, this.xPos, this.yPos);

                break;
            case 1: // Trasera
                this.xPos = (this.pCol * 100) + 50; //
                this.yPos = (this.pFil * 100) + 50;
                image(this.imgT, this.xPos, this.yPos);
                break;
            case 2: //Lateral derecha
                this.xPos = (this.pCol * 100) + 50; //
                this.yPos = (this.pFil * 100) + 50;
                image(this.imgLd, this.xPos, this.yPos);
                break;
            case 3://Frontal
                this.xPos = (this.pCol * 100) + 50; //
                this.yPos = (this.pFil * 100) + 50;
                image(this.imgF, this.xPos, this.yPos);
                break;


        }
    }

    mostrarVidas(imgCora){
        for (let i = 0; i < this.vida; i++) {
            image(imgCora, 99+(i*32), 50);
        }
    }

    disparar(teclaBala){

        if(teclaBala === 'o'){
        this.arma.disparar(this.orientacion, this.xPos, this.yPos, 1);
        }else {
            this.arma.disparar(this.orientacion, this.xPos, this.yPos, 2); 
        }
    }

    getPcol() {
        return this.pCol;
    }

    getPfil() {
        return this.pFil;
    }

    getXpos() {
        return this.xPos;
    }

    getYpos() {
        return this.yPos;
    }

    setPcol(nuevoPcol) {
        this.pCol = nuevoPcol;
    }

    setPfil(nuevoPfil) {
        this.pFil = nuevoPfil;
    }

    setXpos(nuevoXpos) {
        this.xPos = nuevoXpos;
    }

    setYpos(nuevoYpos) {
        this.yPos = nuevoYpos;
    }

    setOrientacion(nuevoOrientacion) {
        this.orientacion = nuevoOrientacion;
    }

    getVida(){
        return this.vida;
    }

    setVida(nuevoVida){
        this.vida = nuevoVida;
    }

    getArma(){
        return this.arma;
    }
}
 