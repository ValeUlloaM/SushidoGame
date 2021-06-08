class Bala {
    constructor(orientacionBala, balaX, balaY, tipoBala) {
        this.balaX = balaX;
        this.balaY = balaY;
        this.orientacionBala = orientacionBala;
        this.tipoBala = tipoBala;
        this.velocidadBala1 = 5;
        this.velocidadBala2 = 2;
        this.alcanceBala1 = 500;
        this.alcanceBala2 = 200;
        this.sobreElLimite = false;
        this.balaXinicial = balaX;
        this.balaYinicial = balaY;
        this.limite;
        console.log(this.balaX, this.balaXinicial, this.balaX + this.alcanceBala1);

    }

    mostrar() {

        switch (this.orientacionBala) {

            case 0:
                if (this.tipoBala === 1) {
                    this.balaX -= this.velocidadBala1;
                    fill(0);
                    ellipse(this.balaX, this.balaY, 30, 30);

                    this.limite = this.balaXinicial - this.alcanceBala1;
                    if(this.balaX <= this.limite){
                        this.sobreElLimite = true;

                    }

                    //console.log(this.limite, this.balaX);
                } else {
                    this.balaX -= this.velocidadBala2;
                    fill(255, 0, 255);
                    ellipse(this.balaX, this.balaY, 35, 35);

                    this.limite = this.balaXinicial - this.alcanceBala2;
                    if(this.balaX <= this.limite){
                        this.sobreElLimite = true;

                    }

                   // console.log(this.limite, this.balaX);
                }
                break;
            case 1:
                if (this.tipoBala === 1) {
                    this.balaY -= this.velocidadBala1;
                    fill(0);
                    ellipse(this.balaX, this.balaY, 30, 30);

                    this.limite = this.balaYinicial - this.alcanceBala1;
                    if(this.balaY <= this.limite){
                        this.sobreElLimite = true;

                    }
                } else {
                    this.balaY -= this.velocidadBala2;
                    fill(255, 0, 255);
                    ellipse(this.balaX, this.balaY, 35, 35);

                    this.limite = this.balaYinicial - this.alcanceBala2;
                    if( this.balaY <= this.limite ){
                        this.sobreElLimite = true;

                    }
                }
                
                break;
            case 2:
                if (this.tipoBala === 1) {
                    this.balaX += this.velocidadBala1;
                    fill(0);
                    ellipse(this.balaX, this.balaY, 30, 30);

                    this.limite= this.balaXinicial + this.alcanceBala1;
                    if(this.balaX >= this.limite){
                        this.sobreElLimite = true;
                        

                    }

                    console.log(this.limite, this.balaX);
                } else {
                    this.balaX += this.velocidadBala2;
                    fill(255, 0, 255);
                    ellipse(this.balaX, this.balaY, 35, 35);

                    this.limite = this.balaXinicial + this.alcanceBala2;
                    if(this.balaX >= this.limite){
                        this.sobreElLimite = true;

                    }
                    //console.log(this.limite, this.balaX);
                }
                
                break;
            case 3:
                if (this.tipoBala === 1) {
                    this.balaY += this.velocidadBala1;
                    fill(0);
                    ellipse(this.balaX, this.balaY, 30, 30);

                    this.limite = this.balaYinicial + this.alcanceBala1;
                    if(this.balaY >= this.limite){
                        this.sobreElLimite = true;
                        console.log("sali")

                    }
                } else {
                    this.balaY += this.velocidadBala2;
                    fill(255, 0, 255);
                    ellipse(this.balaX, this.balaY, 35, 35);

                    this.limite = this.balaYinicial + this.alcanceBala2;
                    if(this.balaY >= this.limite){
                        this.sobreElLimite = true;

                    }
                }

        }
    }

    getBalaX(){
        return this.balaX;
    }

    getBalaY(){
        return this.balaY;
    }

    getTipoBala(){
        return this.tipoBala;
    }

    getSobreElLimite(){
        return this.sobreElLimite;
    }
}