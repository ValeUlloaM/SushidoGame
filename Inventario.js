class Inventario {
    
    constructor(imgRefInventario){
        this.inventarioX = 1004;
        this.inventarioY = 50;
        this.imgRefInventario = imgRefInventario;
        this.arrozAtrapados = [];
        this.salmonAtrapados = [];
    }

    pintar(){
       imageMode(CENTER);
       image(this.imgRefInventario, this.inventarioX, this.inventarioY);

        //Numeros de cada premio recolectado
		fill(26, 26, 36);
		textSize(20);
        textAlign(CENTER);
		text(" " + this.arrozAtrapados.length, 980, 57);
		text(" " + this.salmonAtrapados.length, 1081, 57);
    }

    recolectarPremioArroz(refPremioArroz) {
        this.arrozAtrapados.push(refPremioArroz);
    }

    recolectarPremioSalmon(refPremioSalmon) {
        this.salmonAtrapados.push(refPremioSalmon);
    }
}