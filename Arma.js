class Arma {

    constructor() {
        this.balas = [];
    }

    mostrar() {

        this.validarAlcanceBala();
        for (let index = 0; index < this.balas.length; index++) {
            const bala = this.balas[index];
            bala.mostrar();
        }
    }

    disparar(refPersonajeOrientacion, personajeX, personajeY, tipoBala) {

        if (tipoBala) {
            this.balas.push(new Bala(refPersonajeOrientacion, personajeX, personajeY, tipoBala));
        } else {
            this.balas.push(new Bala(refPersonajeOrientacion, personajeX, personajeY, tipoBala));
        }

    }

    getBalas(){
        return this.balas;
    }

    validarAlcanceBala(){

        if(this.balas.length > 0 ){
        for (let index1 = 0; index1 < this.balas.length; index1++) {
            const proyectil = this.balas[index1];

            if(proyectil.getSobreElLimite()){
               this.balas.splice(index1, 1);
           }

        }
    }
    }
}