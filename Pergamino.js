class Pergamino{

    constructor(pergaminoCol, pergaminoFil, pergaminoImagen){
        this.pergaminoX = (pergaminoCol * 100) + 50;
        this.pergaminoY = (pergaminoFil * 100) + 50;
        this.pergaminoCol = pergaminoCol;
        this.pergaminoFil = pergaminoFil;
        this.pergaminoImagen = pergaminoImagen;
    }

        pintar(){
            imageMode(CENTER);
            this.pergaminoX = (this.pergaminoCol * 100) + 50; 
            this.pergaminoY = (this.pergaminoFil * 100) + 50;
            image(this.pergaminoImagen, this.pergaminoX, this.pergaminoY);
            //fill(255,0,0);
            //console.log(this.pergaminoX, this.pergaminoY);
            //ellipse(this.pergaminoX, this.pergaminoY);
        }

        getPergaminoCol(){
            return this.pergaminoCol;
        }

        getPergaminoFil(){
            return this.pergaminoFil;
        }
}