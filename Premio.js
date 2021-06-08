class Premio {

    constructor(premioFil, premioCol, imgPremio, tipoPremio){
        this.premioX = (premioCol * 100) + 50;
        this.premioY = (premioFil * 100) + 50;
        this.premioCol = premioCol;
        this.premioFil = premioFil;
        this.imgPremio = imgPremio;
        this.tipoPremio = tipoPremio;
 
    }

    pintar() {
        imageMode(CENTER);
        this.premioX = (this.premioCol * 100) + 50; 
        this.premioY = (this.premioFil * 100) + 50;
        image(this.imgPremio, this.premioX, this.premioY);
    }

    getPremioCol(){
        return this.premioCol;
    }

    getPremioFil(){
        return this.premioFil;
    }

    getTipoPremio(){
        return this.tipoPremio;
    }
}