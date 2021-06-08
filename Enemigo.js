class Enemigo {

    constructor(eFil, eCol, imgE, movimiento) {
        this.ePosX = (eCol * 100) + 50;
        this.ePosY = (eFil * 100) + 100;
        this.eCol = eCol;
        this.eFil = eFil;
        this.imgE = imgE;
        this.movimiento = movimiento;
        this.vidaEnemigo = 6;
    }

    pintar() {

        imageMode(CENTER);
        this.ePosX = (this.eCol * 100) + 50; 
        this.ePosY = (this.eFil * 100) + 100;
        image(this.imgE, this.ePosX, this.ePosY);

    }

    mover(refMapa) {
        
        if (frameCount %60 === 0 ){
        switch (this.movimiento) {
            case 0: // Izquierda
            console.log("izquierda");
                if (this.eCol - 1 >= 0) {
                    if (refMapa.getLocacion(this.eFil, this.eCol - 1) === 0 || refMapa.getLocacion(this.eFil, this.eCol - 1) === 2 ) {
                        this.eCol -= 1;
                        this.ePosX = (this.eCol * 100) + 50; 
                        this.ePosY = (this.eFil * 100) + 100;  
                    }
                    else {
                        this.movimiento = 1;

                    }

                }
                else {
                    this.movimiento = 1;

                }
                break;
            case 1: // Derecha
            console.log("derecha");
                if (this.eCol + 1 < 12) {
                    if (refMapa.getLocacion(this.eFil, this.eCol + 1) === 0 || refMapa.getLocacion(this.eFil, this.eCol + 1) === 2 ) {
                        this.eCol += 1;
                        this.ePosX = (this.eCol * 100) + 50; 
                        this.ePosY = (this.eFil * 100) + 100;
                    }else {
                        this.movimiento = 0;
                    }
                    
                }
                else {
                    this.movimiento = 0;
                }
                
                
                break;
            case 2: // Arriba
            console.log("arriba");
                if (this.eFil - 1 >= 0) {
                    if (refMapa.getLocacion(this.eFil - 1, this.eCol) === 0 || refMapa.getLocacion(this.eFil - 1, this.eCol) === 2 ) {
                        this.eFil -= 1;
                        this.ePosX = (this.eCol * 100) + 50; 
                        this.ePosY = (this.eFil * 100) + 100;   
                    }
                    else {
                        this.movimiento = 3;
                    }
                }

                else {
                    this.movimiento = 3;
                }
                break;
            case 3: // Abajo
            console.log("abajo");
                if (this.eFil + 1 < 7) {
                    if (refMapa.getLocacion(this.eFil + 1, this.eCol) === 0 || refMapa.getLocacion(this.eFil + 1, this.eCol) === 2 ) {
                        this.eFil += 1;
                        this.ePosX = (this.eCol * 100) + 50; 
                        this.ePosY = (this.eFil * 100) + 100;  
                    }
                    else {
                        this.movimiento = 2;
                    }
                }
                else {
                    this.movimiento = 2;
                }
                break;
            }
        }
       
    }

    getEposX(){
        return this.ePosX;
    }

    getEposY(){
        return this.ePosY;
    }
    
    
    getEcol(){
        return this.eCol;
    }

    getEfil(){
        return this.eFil;
    }

    setMovimiento(nuevoMovimiento){

        this.movimiento = nuevoMovimiento

    }

    getVidaEnemigo(){
        return this.vidaEnemigo;
    }

    setVidaEnemigo(nuevoVidaEnemigo){
        this.vidaEnemigo = nuevoVidaEnemigo;
    }
}