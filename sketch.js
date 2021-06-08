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

}

function setup() {
  createCanvas(1200, 700);
  pantalla = 3;
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

}

function draw() {
  background(220);
  plano.mostrar();

  if (contadorVida > 0) {
    contadorVida--;
  }

  switch (pantalla) {
    case 0:
      image(imgFondo1, 0, 0);

      break;

    case 1:
      image(imgFondo2, 0, 0);
      break;

    case 2: //Refrigerador
      imageMode(CORNER);
      image(imgFondo3, 0, 0);
      //Metodos del mapa
      plano.personalizarObstaculos(0);
      plano.personalizarSalidas(0);
      //Metodos del personaje
      personaje.pintarVistas();
      validarImpactoBala(enemigosCuchillo,personaje.getArma().getBalas());
      

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


      break;

    case 3: //Cocina
      imageMode(CORNER);
      image(imgFondo4, 0, 0);
      //Metodos del mapa
      plano.personalizarObstaculos(1);
      plano.personalizarSalidas(1)
      //Metodos del personaje
      personaje.pintarVistas();
      validarImpactoBala(enemigosAlga,personaje.getArma().getBalas());
      
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

    case 4: //Comedor
      imageMode(CORNER);
      image(imgFondo5, 0, 0)
      //Metodos del mapa
      plano.personalizarObstaculos(2);
      plano.personalizarSalidas(2)
      //Metodos del personaje
      personaje.pintarVistas();
      //Enemigos
      for (let i = 0; i < enemigosSoya.length; i++) {
        enemigosSoya[i].pintar();
        enemigosSoya[i].mover(plano);
      }
      validarImpacto(enemigosSoya, personaje);
      validarImpactoBala(enemigosSoya,personaje.getArma().getBalas());

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

    case 5: //Barco
      imageMode(CORNER);
      image(imgFondo6, 0, 0)
      plano.personalizarObstaculos(3);
      plano.personalizarSalidas(3)
      //Metodos personajes
      personaje.pintarVistas();
      validarImpactoBala(enemigosPalillos,personaje.getArma().getBalas());
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

      break;
    case 6:
      background(255, 0, 255);
      break;

  }
  visualizarVidasEnPantalla()
  visualizarInventario()
}

//Metodos del personaje

//Metodo para visualizar las vidas del personaje
function visualizarVidasEnPantalla() {
  if (pantalla > 1 && pantalla < 6) {
    personaje.mostrarVidas(imgCorazon);
  }
}

function visualizarInventario() {
  if (pantalla > 1 && pantalla < 6) {
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
        pantalla = 6;
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
       if(premioEliminar[0].getTipoPremio() === 1){
      inventario.recolectarPremioArroz(premioEliminar.pop());
    }else {
      inventario.recolectarPremioSalmon(premioEliminar.pop());
    }
    }
  }
}

//Metodos de interaccion
function keyPressed() {

  //Movimiento del personaje
  switch (key) {
    case 'a': //Izquierda
      if (personaje.getPcol() - 1 >= 0) {
        if (plano.getLocacion(personaje.getPfil(), personaje.getPcol() - 1) === 0) {
          personaje.setPcol(personaje.getPcol() - 1);
          personaje.setOrientacion(0);
        }
      }
      break;
    case 'd': //Derecha
      if (personaje.getPcol() + 1 < 12) {
        if (plano.getLocacion(personaje.getPfil(), personaje.getPcol() + 1) === 0) {
          personaje.setPcol(personaje.getPcol() + 1);
          personaje.setOrientacion(2);
        }
      }
      break;
    case 's': //Abajo
      if (personaje.getPfil() + 1 < 7) {
        if (plano.getLocacion(personaje.getPfil() + 1, personaje.getPcol()) === 0) {
          personaje.setPfil(personaje.getPfil() + 1);
          personaje.setOrientacion(3);
        }
      }

      break;
    case 'w': //Arriba
      if (personaje.getPfil() - 1 >= 0) {
        if (plano.getLocacion(personaje.getPfil() - 1, personaje.getPcol()) === 0) {
          personaje.setPfil(personaje.getPfil() - 1);
          personaje.setOrientacion(1);

        }
      }

      break;
    
      case 'o':
        personaje.disparar('o');


      break;
      case 'p':
        personaje.disparar('p');
        break;


  }

}