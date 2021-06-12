let plano;
let pantalla;
let contadorVida;
let inventario;

//Variables personaje
let personaje;
//Variables enemigo
let enemigosCuchillo = [];
let enemigosAlga = [];
let enemigosSoya = [];
let enemigosPalillos = [];
//Variables de premios de acuerdo a los niveles
let premiosArrozNivel1 = [];
let premiosSalmonNivel1 = [];
let premiosArrozNivel2 = [];
let premiosSalmonNivel2 = [];
let premiosArrozNivel3 = [];
let premiosSalmonNivel3 = [];
let premiosArrozNivel4 = [];
let premiosSalmonNivel4 = [];
//Variable de pergamino
let pergamino;
//Variable de pista
let pistaRevelada = false;
let pista;
//Variables acertijos
let acertijo1;
let acertijo2;
let acertijo3;

//Imagenes
//Fondos
let imgFondo1;
let imgFondo2;
let imgFondo3;
let imgFondo4;
let imgFondo5;
let imgFondo6;
//Personajes
let imgPersonajeFrontal;
let imgPersonajeTrasera;
let imgPersonajeLizquierda;
let imgPersonajeLderecha;
//Vidas del personaje
let imgCorazon;
//Enemigos
let imgEnemigoCuchillo;
let imgEnemigoSoya;
let imgEnemigoAlga;
let imgEnemigoPalillos;
// Premios
let imgPremioArroz;
let imgPremioSalmon;
let imgInventario;
//Balas
let imgBalaWasabi;
let imgBalaArroz;
//Pistas
let imgPista;
//Pergamino
let imgPergamino;
//Fondos acertijos
let imgFondoAcertijo1;
let imgFondoAcertijo2;
let imgFondoAcertijo3;
//Fondo Victoria
let imgVictoria;
//Fondo Game Over
let imgGameOver;

function preload() {
  //Imagenes de fondo
  imgFondo1 = loadImage("data/Fondo1.jpg");
  imgFondo2 = loadImage("data/Fondo2.jpg");
  imgFondo3 = loadImage("data/Fondo3.jpg");
  imgFondo4 = loadImage("data/Fondo4.jpg");
  imgFondo5 = loadImage("data/Fondo5.jpg");
  imgFondo6 = loadImage("data/Fondo6.jpg");
  //Imagenes personaje
  imgPersonajeFrontal = loadImage("data/PersonajeFrontal.png");
  imgPersonajeTrasera = loadImage("data/PersonajeTrasera.png");
  imgPersonajeLizquierda = loadImage("data/PersonajeLizquierda.png");
  imgPersonajeLderecha = loadImage("data/PersonajeLderecha.png");
  //Imagen vida (corazon)
  imgCorazon = loadImage("data/Corazon.png");
  //Imagenes Enemigos
  imgEnemigoCuchillo = loadImage("data/EnemigoCuchillo.png");
  imgEnemigoSoya = loadImage("data/EnemigoSoya.png");
  imgEnemigoAlga = loadImage("data/EnemigoAlga.png")
  imgEnemigoPalillos = loadImage("data/EnemigoPalillos.png");
  //Imagenes de los premios
  imgPremioArroz = loadImage("data/PremioArroz.png");
  imgPremioSalmon = loadImage("data/PremioSalmon.png");
  imgInventario = loadImage("data/Inventario.png");
  //Balas
  imgBalaWasabi = loadImage("data/BalaWasabi.png");
  imgBalaArroz = loadImage("data/BalaArroz.png");
  //Pistas
  imgPista = loadImage("data/Pista.png");
  //Pergamino
  imgPergamino = loadImage("data/Pergamino.png"); 
  //Acertijos
  imgFondoAcertijo1 = loadImage("data/FondoAcertijo1.png");
  imgFondoAcertijo2 = loadImage("data/FondoAcertijo2.png");
  imgFondoAcertijo3 = loadImage("data/FondoAcertijo3.png");
  //Fondo Victoria
  imgVictoria = loadImage("data/Victoria.png");
  //Fondo Game Over
  imgGameOver = loadImage("data/GameOver.png");
}
function setup() {
  createCanvas(1200, 700);
  pantalla = 0;
  //Plano
  plano = new Mapa();
  plano.crearCasillas();
  //Personajes
  personaje = new Personaje(4, 2, imgPersonajeFrontal, imgPersonajeTrasera, imgPersonajeLizquierda, imgPersonajeLderecha);
  inventario = new Inventario(imgInventario);
  contadorVida = 60;
  //Enemigos
  //Enemigos nivel 1
  enemigosCuchillo.push(new Enemigo(1, 10, imgEnemigoCuchillo, 0));
  enemigosCuchillo.push(new Enemigo(5, 9, imgEnemigoCuchillo, 0));
  //Enemigos nivel 2
  enemigosAlga.push(new Enemigo(0, 3, imgEnemigoAlga, 1));
  enemigosAlga.push(new Enemigo(2, 11, imgEnemigoAlga, 1));
  enemigosAlga.push(new Enemigo(4, 10, imgEnemigoAlga, 0));
  //Enemigos nivel 3
  enemigosSoya.push(new Enemigo(1, 2, imgEnemigoSoya, 3));
  enemigosSoya.push(new Enemigo(5, 4, imgEnemigoSoya, 2));
  enemigosSoya.push(new Enemigo(0, 6, imgEnemigoSoya, 3));
  enemigosSoya.push(new Enemigo(5, 8, imgEnemigoSoya, 2));
  enemigosSoya.push(new Enemigo(5, 11, imgEnemigoSoya, 2));
  //Enemigos nivel 4
  enemigosPalillos.push(new Enemigo(6, 2, imgEnemigoPalillos, 2));
  enemigosPalillos.push(new Enemigo(0, 5, imgEnemigoPalillos, 3));
  enemigosPalillos.push(new Enemigo(5, 8, imgEnemigoPalillos, 2));
  enemigosPalillos.push(new Enemigo(0, 11, imgEnemigoPalillos, 3));
  //Premios
  //Premios nivel 1
  premiosArrozNivel1.push(new Premio(5, 2, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel1.push(new Premio(1, 6, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel1.push(new Premio(3, 9, imgPremioArroz, 0)); //Arroz
  premiosSalmonNivel1.push(new Premio(2, 2, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel1.push(new Premio(1, 9, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel1.push(new Premio(5, 6, imgPremioSalmon, 1)); //Salmon
  //Premios nivel 2
  premiosArrozNivel2.push(new Premio(5, 2, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel2.push(new Premio(1, 6, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel2.push(new Premio(3, 9, imgPremioArroz, 0)); //Arroz
  premiosSalmonNivel2.push(new Premio(2, 2, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel2.push(new Premio(3, 5, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel2.push(new Premio(5, 6, imgPremioSalmon, 1)); //Salmon
  //Premios nivel 3 
  premiosArrozNivel3.push(new Premio(5, 2, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel3.push(new Premio(1, 6, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel3.push(new Premio(3, 9, imgPremioArroz, 0)); //Arroz
  premiosSalmonNivel3.push(new Premio(2, 2, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel3.push(new Premio(3, 4, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel3.push(new Premio(5, 6, imgPremioSalmon, 1)); //Salmon
  //Premios nivel 4 
  premiosArrozNivel4.push(new Premio(5, 2, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel4.push(new Premio(1, 6, imgPremioArroz, 0)); //Arroz
  premiosArrozNivel4.push(new Premio(3, 9, imgPremioArroz, 0)); //Arroz
  premiosSalmonNivel4.push(new Premio(2, 2, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel4.push(new Premio(3, 4, imgPremioSalmon, 1)); //Salmon
  premiosSalmonNivel4.push(new Premio(5, 6, imgPremioSalmon, 1)); //Salmon
  //Pergamino
  pergamino = new Pergamino(8, 2, imgPergamino);
  //Pista
  pista = new Pista(imgPista);
  //Acertijos
  acertijo1 = new Acertijo(261, 330, 71);
  acertijo2 = new Acertijo(906, 456, 58);
  acertijo3 = new Acertijo(337, 402, 58);

}

function draw() {
  background(220);
  plano.mostrar();

  if (contadorVida > 0) {
    contadorVida--;
  }

  switch (pantalla) {
    case 0: //Pantalla de inicio
      image(imgFondo1, 0, 0);

      break;

    case 1: //Pantalla de instrucciones
      image(imgFondo2, 0, 0);
      break;

    case 2: //Refrigerador
      imageMode(CORNER);
     image(imgFondo3, 0, 0);
      //Metodos del mapa
      plano.personalizarObstaculos(0);
      plano.personalizarSalidas(0);
      pasarAcertijo(0);
      //Metodos del personaje
      personaje.pintarVistas(imgBalaWasabi, imgBalaArroz);
      validarImpactoBala(enemigosCuchillo, personaje.getArma().getBalas());
      //Metodos de los enemigos
      for (let i = 0; i < enemigosCuchillo.length; i++) {
        enemigosCuchillo[i].pintar();
        enemigosCuchillo[i].mover(plano);
      }
      validarImpacto(enemigosCuchillo, personaje);
      //Metodos de premios
      for (let i = 0; i < premiosArrozNivel1.length; i++) {
        premiosArrozNivel1[i].pintar();
      }
      for (let i = 0; i < premiosSalmonNivel1.length; i++) {
        premiosSalmonNivel1[i].pintar();
      }

      //Personaje recoge premios
      recolectarPremios(premiosArrozNivel1, personaje);
      recolectarPremios(premiosSalmonNivel1, personaje);

      //Metodos pergaminos y pistas
      pergamino.pintar();
      validarContactoPergamino ();
      if(pistaRevelada === true){
        pista.pintar();
      }

      break;

    case 3: //Acertijo #1
   
    imageMode(CORNER);
    image(imgFondoAcertijo1, 0, 0);

    //Metodo Acertijo
    acertijo1.pintar();
    break;

    case 4: //Cocina
    imageMode(CORNER);
   image(imgFondo4, 0, 0);
    //Metodos del mapa
    plano.personalizarObstaculos(1);
    plano.personalizarSalidas(1);
    pasarAcertijo(1);
    //Metodos del personaje
    personaje.pintarVistas(imgBalaWasabi, imgBalaArroz);
    validarImpactoBala(enemigosAlga, personaje.getArma().getBalas());

    //Metodos de los enemigos
    for (let i = 0; i < enemigosAlga.length; i++) {
      enemigosAlga[i].pintar();
      enemigosAlga[i].mover(plano);
    }
    validarImpacto(enemigosAlga, personaje);

    //Metodos de premios
    for (let i = 0; i < premiosArrozNivel2.length; i++) {
      premiosArrozNivel2[i].pintar();
    }
    for (let i = 0; i < premiosSalmonNivel2.length; i++) {
      premiosSalmonNivel2[i].pintar();
    }

    //Personaje recoge premios
    recolectarPremios(premiosArrozNivel2, personaje);
    recolectarPremios(premiosSalmonNivel2, personaje);
    break;
    
    case 5: //Acertijo #2
    imageMode(CORNER);
    image(imgFondoAcertijo2, 0, 0);
    //Metodo Acertijo
    acertijo2.pintar();
      break;

    case 6: //Comedor
    imageMode(CORNER);
    image(imgFondo5, 0, 0)
    //Metodos del mapa
    plano.personalizarObstaculos(2);
    plano.personalizarSalidas(2);
    pasarAcertijo(2);
    //Metodos del personaje
    personaje.pintarVistas(imgBalaWasabi, imgBalaArroz);
    //Enemigos
    for (let i = 0; i < enemigosSoya.length; i++) {
      enemigosSoya[i].pintar();
      enemigosSoya[i].mover(plano);
    }
    validarImpacto(enemigosSoya, personaje);
    validarImpactoBala(enemigosSoya, personaje.getArma().getBalas());

    //Metodos de premios
    for (let i = 0; i < premiosArrozNivel3.length; i++) {
      premiosArrozNivel3[i].pintar();
    }
    for (let i = 0; i < premiosSalmonNivel3.length; i++) {
      premiosSalmonNivel3[i].pintar();
    }

    //Personaje recoge premios
    recolectarPremios(premiosArrozNivel3, personaje);
    recolectarPremios(premiosSalmonNivel3, personaje);
      

     break;

    case 7: //Acertijo #3
    imageMode(CORNER);
    image(imgFondoAcertijo3, 0, 0);

    //Metodo Acertijo
    acertijo3.pintar();
      break;

    case 8: //Barco
    imageMode(CORNER);
    image(imgFondo6, 0, 0)
    plano.personalizarObstaculos(3);
    plano.personalizarSalidas(3)
    //Metodos personajes
    personaje.pintarVistas(imgBalaWasabi, imgBalaArroz);
    validarImpactoBala(enemigosPalillos, personaje.getArma().getBalas());
    //Enemigos
    for (let i = 0; i < enemigosPalillos.length; i++) {
      enemigosPalillos[i].pintar();
      enemigosPalillos[i].mover(plano);
    }
    validarImpacto(enemigosPalillos, personaje);

    //Metodos de premios
    for (let i = 0; i < premiosArrozNivel4.length; i++) {
      premiosArrozNivel4[i].pintar();
    }
    for (let i = 0; i < premiosSalmonNivel4.length; i++) {
      premiosSalmonNivel4[i].pintar();
    }

    //Personaje recoge premios
    recolectarPremios(premiosArrozNivel4, personaje);
    recolectarPremios(premiosSalmonNivel4, personaje);

    //Acertijos
    pasarAcertijo(3);
      break;
    case 9: //Pantalla de trifundo
    imageMode(CORNER);
    image(imgVictoria, 0, 0)
      break;
    case 10://Pantalla de gameover
    imageMode(CORNER);
    image(imgGameOver, 0, 0)
      break;
    

  }
  visualizarVidasEnPantalla()
  visualizarInventario()
}

//Metodos del personaje

//Metodo para visualizar las vidas del personaje
function visualizarVidasEnPantalla() {
  if (pantalla === 2 || pantalla === 4 || pantalla === 6 || pantalla === 8 ) {
    personaje.mostrarVidas(imgCorazon);
  }
}

function visualizarInventario() {
  if (pantalla === 2 || pantalla === 4 || pantalla === 6 || pantalla === 8) {
    inventario.pintar();
  }
}

//Metodo de daño al personaje por parte del enemigo

function validarImpacto(arregloEnemigos, personaje) {

  for (let index = 0; index < arregloEnemigos.length; index++) {
    const element = arregloEnemigos[index];
    let enemigoX = element.getEposX();
    let enemigoY = element.getEposY();

    let personajeX = personaje.getXpos();
    let personajeY = personaje.getYpos();

    if ((dist(personajeX, personajeY, enemigoX, enemigoY) < 100) && contadorVida === 0) {
      personaje.setVida(personaje.getVida() - 1);
      contadorVida = 60;

      if (personaje.getVida() === 0) {
        pantalla = 10;
      }
    }
  }
}

//Metodo para atacar al enemigo con balas:
function validarImpactoBala(arregloEnemigos, arregloBalas) {

  for (let index = 0; index < arregloEnemigos.length; index++) {
    const enemigo = arregloEnemigos[index];
    let enemigoX = enemigo.getEposX();
    let enemigoY = enemigo.getEposY();

    for (let j = 0; j < arregloBalas.length; j++) {
      const bala = arregloBalas[j];
      let balaX = bala.getBalaX();
      let balaY = bala.getBalaY();

      if ((dist(balaX, balaY, enemigoX, enemigoY) < 100)) {
        enemigo.setVidaEnemigo(enemigo.getVidaEnemigo() - 1);
        arregloBalas.splice(j, 1);

        if (enemigo.getVidaEnemigo() === 0) {
          arregloEnemigos.splice(index, 1);

        }

      }

    }


  }
}

function validarContactoPergamino (){
  let personajeCol = personaje.getPcol();
    let personajeFil = personaje.getPfil();
    let pergaminoColumna = pergamino.getPergaminoCol();
    let pergaminoFila = pergamino.getPergaminoFil();
  if(pergaminoColumna === personajeCol && pergaminoFila === personajeFil){
    pistaRevelada = true;
  } else{
    pistaRevelada = false;
  }
}

//Metodo de recoleccion de premios y recuperacion de vidas:
function recolectarPremios(arregloPremios, personaje) {
  for (let index = 0; index < arregloPremios.length; index++) {
    const element = arregloPremios[index];
    let premiosCol = element.getPremioCol();
    let premiosFil = element.getPremioFil();

    let personajeCol = personaje.getPcol();
    let personajeFil = personaje.getPfil();

    if (premiosCol === personajeCol && premiosFil === personajeFil) {
      let premioEliminar = arregloPremios.splice(index, 1);
      if (premioEliminar[0].getTipoPremio() === 1) {
        inventario.recolectarPremioArroz(premioEliminar.pop());
      } else {
        inventario.recolectarPremioSalmon(premioEliminar.pop());
      }
    }
  }
}

//Metodo para pasar a los acertijos y salidas:

function pasarAcertijo(nivel) {

  switch (nivel) {

    case 0:
      if ((plano.getLocacion(personaje.getPfil(), personaje.getPcol()) === 2) && pantalla === 2) {
        pantalla = 3
      }
      break;
    case 1:
      if ((plano.getLocacion(personaje.getPfil(), personaje.getPcol()) === 2) && pantalla === 4)  {
        pantalla = 5

      }
    break;
    case 2:
      if ((plano.getLocacion(personaje.getPfil(), personaje.getPcol()) === 2) && pantalla === 6) {
        pantalla = 7
      }
    break;
    case 3:
      if ((plano.getLocacion(personaje.getPfil(), personaje.getPcol()) === 2) && pantalla === 8) {
        pantalla = 9
      }
  }
}

//Metodos de interaccion
function keyPressed() {

  //Movimiento del personaje
  switch (key) {

    case 'A':
    case 'a': //Izquierda
      if (personaje.getPcol() - 1 >= 0) {
        if (plano.getLocacion(personaje.getPfil(), personaje.getPcol() - 1) === 0 || plano.getLocacion(personaje.getPfil(), personaje.getPcol() - 1) === 2 ) {
          personaje.setPcol(personaje.getPcol() - 1);
          personaje.setOrientacion(0);
        }
      }
      break;

    case 'D':
    case 'd': //Derecha
      if (personaje.getPcol() + 1 < 12) {
        if (plano.getLocacion(personaje.getPfil(), personaje.getPcol() + 1) === 0 || plano.getLocacion(personaje.getPfil(), personaje.getPcol() + 1) === 2 ) {
          personaje.setPcol(personaje.getPcol() + 1);
          personaje.setOrientacion(2);
        }
      }
      break;

    case 'S':
    case 's': //Abajo
      if (personaje.getPfil() + 1 < 7) {
        if (plano.getLocacion(personaje.getPfil() + 1, personaje.getPcol()) === 0 || plano.getLocacion(personaje.getPfil() + 1, personaje.getPcol()) === 2 ) {
          personaje.setPfil(personaje.getPfil() + 1);
          personaje.setOrientacion(3);
        }
      }

      break;

    case 'W':
    case 'w': //Arriba
      if (personaje.getPfil() - 1 >= 0) {
        if (plano.getLocacion(personaje.getPfil() - 1, personaje.getPcol()) === 0 || plano.getLocacion(personaje.getPfil() - 1, personaje.getPcol()) === 2) {
          personaje.setPfil(personaje.getPfil() - 1);
          personaje.setOrientacion(1);
        }
      }

      break;

    case 'O':
    case 'o':
      personaje.disparar('o');

      break;

    case 'P':
    case 'p':
      personaje.disparar('p');
      break;
  }
}

function mousePressed(){
  
  //Botones de acertijos
  //Acertijo 1
  if(acertijo1.validarClic(mouseX, mouseY)){
    pantalla = 4;
    personaje.setPfil(0);
    personaje.setPcol(5);
  }

  if(pantalla === 4){
    acertijo1.setRevelar(false);
  }

  //Acertijo 2
  if(acertijo2.validarClic(mouseX, mouseY)){
    pantalla = 6;
    personaje.setPfil(3);
    personaje.setPcol(0);
  }

  if(pantalla === 6){
    acertijo2.setRevelar(false);
  }

  //Acertijo 3
  if(acertijo3.validarClic(mouseX, mouseY)){
    pantalla = 8;
    personaje.setPfil(3);
    personaje.setPcol(0);
  }

  if(pantalla === 8){
    acertijo3.setRevelar(false);
  }

//BOTONES

switch (pantalla) {
  case 0: //Pantalla de inicio
  
  //Botón de empezar juego
  if(mouseX > 493 && mouseX < 706 &&
    mouseY > 579 && mouseY < 639){
      pantalla = 1;
    }

  //Botón de instrucciones
  if(mouseX > 493 && mouseX < 706 &&
    mouseY > 511 && mouseY < 571){
      pantalla = 2;
    }
    break;

  case 1: //Pantalla de instrucciones
  
  //Botón de iniciar juego desde las instrucciones
  if(mouseX > 460 && mouseX < 739 &&
    mouseY > 544 && mouseY < 623){
      pantalla = 2;
    }
    break;

  case 9: //Pantalla de triunfo/victoria
  if(mouseX > 863 && mouseX < 1162 &&
    mouseY > 498 && mouseY < 582){
      location.reload();
    }
    break;

  case 10: //Pantalla de Game Over
  if(mouseX > 450 && mouseX < 739 &&
    mouseY > 498 && mouseY < 623){
    location.reload();
    }
    break;
  }
}

function mouseMoved(){

  //Acertijo 1

  if(acertijo1.validarClic(mouseX, mouseY)){
    acertijo1.validarClic(mouseX, mouseY);
  }else{
    acertijo1.setRevelar(false);
  }

  //Acertijo 2
  if(acertijo2.validarClic(mouseX, mouseY)){
    acertijo2.validarClic(mouseX, mouseY);
  }else{
    acertijo2.setRevelar(false);
  }

  //Acertijo 3

  if(acertijo3.validarClic(mouseX, mouseY)){
    acertijo3.validarClic(mouseX, mouseY);
  }else{
    acertijo3.setRevelar(false);
  }

}