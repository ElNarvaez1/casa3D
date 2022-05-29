/**
 * Constantes de ubicacion
 */
const _ROCK = 0;
const _ROCK_YELLOW = 1;
const _WALL_GREEN = 2;
/**
 * Constantes de texturas
 */
const WALLS_TEXTURE = [
  new THREE.TextureLoader().load("img/roca.jpg"),
  new THREE.TextureLoader().load("img/roca-ama-2.jpg"),
  new THREE.TextureLoader().load("img/pared-verde.jpg"),
];
/**
 * Funcion para poder proporcionar las texturas a cada uno de las paredes que las necesiten.
 * 
 * @param row Fila
 * @param column Columna
 * @param type Para saber si es una pared, venta o puerta
 * @param orientation La orientacion horizontal o vertical
 */
 const setTexture = (row, column, type, orientation) => {
    let texture;
    let material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    //Colocamos la textura de la piedra gris
    if ((row == 5 || row == 8) && orientation == "H") {
      texture = new THREE.TextureLoader().load("img/roca.jpg");
      material = new THREE.MeshPhongMaterial({ map: texture });
    }
    //Colocamos la textura de la roca amarilla
    if(row == 8 && column>=0 && column<=4 && orientation == "H"){
      texture = new THREE.TextureLoader().load("img/roca-ama-2.jpg");
      material = new THREE.MeshPhongMaterial({ map: texture });
    }
  
    //Pared moradas
    if (column > 0 && column <= 4 && row == 0 && orientation == "H") {
      material = new THREE.MeshPhongMaterial({ color: 0x6c3483 });
    }
  
    //Los cuartos con la pared amarilla.
    if (row == 0 && column >= 11 && column <= 17 && orientation == "H") {
      material = new THREE.MeshPhongMaterial({ color: 0xf1c40f });
    }
    //Los cuartos con la pared amarilla.
    if (row == 0 && column >= 5 && column <= 10 && orientation == "H") {
      texture = new THREE.TextureLoader().load("img/pared-verde.jpg");
      material = new THREE.MeshPhongMaterial({ map: texture });
    }
  
    //Las paredes rojas.
    if ((column == 11 || column == 13) && orientation == "V") {
      if (row == 8 || (row > 5 && column != 18)) {
        material = new THREE.MeshPhongMaterial({ color: 0xa93226 });
      }
      if (column == 18 && row > 8 && row < 12) {
        material = new THREE.MeshPhongMaterial({ color: 0xa93226 });
      }
    }
  
    return material;
  };
  