/**
 * Funcion para poder cargar las paredes de las casas.
 * 
 */
const LoadWalls = (scene) =>{
    /**
     * Recorremos el arreglo de muros
     */
     for (let row = 0; row < WALLS.length; row++) {
        for (let column = 0; column < WALLS[row].length; column++) {
          /**
           *Para saber si es una puerta,venta, pared o la nada.
           */
          const tipo = WALLS[row][column];
          switch (tipo) {
            case 1:
              //Pared
              /**
               * Necesitamos saber si es una pared es horizontal o vertical
               */
              if (column >= 0 && column != WALLS[row].length - 1) {
                //Horizontales
                if (WALLS[row][column + 1] != 0 || (column == 6 && row == 8)) {
                  let width = 1;
                  let height = 5;
                  let prof = 0.2;
                  let x = column == 0 ? width / 2 : column - width / 2;
                  let z = row - prof / 2;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = setTexture(row, column, 1, "H");
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 2.5;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
                }
              }
              if (row > 0 && row != WALLS[row].length) {
                //Verticales
                if (WALLS[row - 1][column] != 0) {
                  let width = 0.2;
                  let height = 5;
                  let prof = 1;
                  let x = column == 0 ? width / 2 : column - prof;
                  let z = row - prof / 2;
    
                  const material = setTexture(row, column, 1, "V");
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 2.5;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
                }
              }
              break;
            case 2:
              //ventana
              /**
               * Necesitamos saber si es una ventana en  vertical o horizontal
               */
              if (column >= 0 && column != WALLS[row].length - 1) {
                //Horizontales
                if (WALLS[row][column + 1] != 0 || (column == 6 && row == 8)) {
                  // seccion de la ventana de arriba
                  let width = 1;
                  let height = 1;
                  let prof = 0.2;
                  let x = column == 0 ? width / 2 : column - width / 2;
                  let z = row - prof / 2;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = setTexture(row, column, 1, "H");
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 5 - height / 2;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
    
                  //seccion de la ventana de abajo
                  const geometryBottom = new THREE.BoxGeometry(width, height, prof);
                  const materialBottom = setTexture(row, column, 1, "H");
                  const cubeBottom = new THREE.Mesh(geometryBottom, materialBottom);
                  cubeBottom.position.x = x;
                  cubeBottom.position.z = z;
                  cubeBottom.position.y = height / 2;
                  cubeBottom.castShadow = true;
                  cubeBottom.receiveShadow = true;
                  scene.add(cubeBottom);
    
                  //Cristal
                  const geometryCristal = new THREE.BoxGeometry(width, height*3, prof);
                  const materialCristal = new THREE.MeshPhongMaterial({
                    color: 0x3498DB
                  });
                  materialCristal.transparent = true
                  materialCristal.opacity = 0.5
                  const cubeCristal = new THREE.Mesh(geometryCristal, materialCristal);
                  cubeCristal.position.x = x;
                  cubeCristal.position.z = z;
                  cubeCristal.position.y = 2.5;
                  cubeCristal.castShadow = true;
                  cubeCristal.receiveShadow = true;
                  scene.add(cubeCristal);
    
                }
              }
              if (row > 0 && row != WALLS[row].length) {
                //Verticales
                if (WALLS[row - 1][column] != 0) {
                  // seccion de la ventana de arriba
                  let width = 0.2;
                  let height = 1;
                  let prof = 1;
                  let x = column == 0 ? width / 2 : column - prof;
                  let z = row - prof / 2;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = new THREE.MeshPhongMaterial({
                    color: 0xffffff,
                  });
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 5 - height / 2;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
    
                  //seccion de la ventana de abajo
                  const geometryBottom = new THREE.BoxGeometry(width, height, prof);
                  const materialBottom = new THREE.MeshPhongMaterial({
                    color: 0xffffff,
                  });
                  const cubeBottom = new THREE.Mesh(geometryBottom, materialBottom);
                  cubeBottom.position.x = x;
                  cubeBottom.position.z = z;
                  cubeBottom.position.y = height / 2;
                  cubeBottom.castShadow = true;
                  cubeBottom.receiveShadow = true;
                  scene.add(cubeBottom);
    
    
                  //Cristal
                  const geometryCristal = new THREE.BoxGeometry(width, height*3, prof);
                  const materialCristal = new THREE.MeshPhongMaterial({
                    color: 0x3498DB
                  });
                  materialCristal.transparent = true
                  materialCristal.opacity = 0.5
                  const cubeCristal = new THREE.Mesh(geometryCristal, materialCristal);
                  cubeCristal.position.x = x;
                  cubeCristal.position.z = z;
                  cubeCristal.position.y = 2.5;
                  cubeCristal.castShadow = true;
                  cubeCristal.receiveShadow = true;
                  scene.add(cubeCristal);
                }
              }
    
              break;
            case 3:
              //puerta
              /**
               * Necesitamos saber si es una puerta en  vertical o horizontal
               */
              if (column >= 0 && column != WALLS[row].length - 1) {
                //Horizontales
                if (WALLS[row][column + 1] != 0 || (column == 6 && row == 8)) {
                  // seccion de la puerta de arriba
                  let width = 1;
                  let height = 1;
                  let prof = 0.2;
                  let x = column == 0 ? width / 2 : column - width / 2;
                  let z = row - prof / 2;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = setTexture(row, column, 1, "H");
                  //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 5 - height / 2;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
                }
              }
              if (row > 0 && row != WALLS[row].length) {
                //Verticales
                if (WALLS[row - 1][column] != 0) {
                  // seccion de la puerta de arriba
                  let width = 0.2;
                  let height = 1;
                  let prof = 1;
                  let x = column == 0 ? width / 2 : column - prof;
                  let z = row - prof / 2;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = setTexture(row, column, 1, "V");
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 5 - height / 2;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
                }
              }
    
              break;
    
            default:
              //Espacio vacio
              break;
          }
        }
      }



      /**
       * 
       *Creamos las paredes de relleno 
       */
      for (let row = 0; row < WALLS_EXTER.length; row++) {
        for (let column = 0; column < WALLS_EXTER[row].length; column++) {
          switch (WALLS_EXTER[row][column]) {
            case 1:
              //Paredes Verticales.
              //Pared
              /**
               * Necesitamos saber si es una pared es horizontal o vertical
               */
               if (column >= 0 && column != WALLS_EXTER[row].length - 1) {
                //Horizontales
                if (WALLS_EXTER[row][column + 1] != 0 || (column == 6 && row == 8)) {
                  let width = 1;
                  let height = 5;
                  let prof = 0.2;
                  let x = column == 0 ? width / 2 : column - width / 2;
                  let z = row - prof * 1.5;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 2.5;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
                }
              }
              if (row > 0 && row != WALLS_EXTER[row].length) {
                //Verticales
                if (WALLS_EXTER[row - 1][column] != 0) {
                  let width = 0.2;
                  let height = 5;
                  let prof = 1;
                  let x = column == 0 ? -width/2: column - prof;
                  let z = row - prof / 2;
    
                  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 2.5;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
                }
              }
              break;
              case 2:
                //ventana
              /**
               * Necesitamos saber si es una ventana en  vertical o horizontal
               */
              if (column >= 0 && column != WALLS_EXTER[row].length - 1) {
                //Horizontales
                if (WALLS_EXTER[row][column + 1] != 0 || (column == 6 && row == 8)) {
                  // seccion de la ventana de arriba
                  let width = 1;
                  let height = 1;
                  let prof = 0.2;
                  let x = column == 0 ? width / 2 : column - width / 2;
                  let z = row - prof*1.5;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 5 - height / 2;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
    
                  //seccion de la ventana de abajo
                  const geometryBottom = new THREE.BoxGeometry(width, height, prof);
                  const materialBottom = new THREE.MeshPhongMaterial({ color: 0xffffff });
                  const cubeBottom = new THREE.Mesh(geometryBottom, materialBottom);
                  cubeBottom.position.x = x;
                  cubeBottom.position.z = z;
                  cubeBottom.position.y = height / 2;
                  cubeBottom.castShadow = true;
                  cubeBottom.receiveShadow = true;
                  scene.add(cubeBottom);
    
                }
              }
              if (row > 0 && row != WALLS_EXTER[row].length) {
                //Verticales
                if (WALLS_EXTER[row - 1][column] != 0) {
                  // seccion de la ventana de arriba
                  let width = 0.2;
                  let height = 1;
                  let prof = 1;
                  let x = column == 0 ? -width / 2 : column - prof;
                  let z = row - prof / 2;
    
                  const geometry = new THREE.BoxGeometry(width, height, prof);
                  const material = new THREE.MeshPhongMaterial({
                    color: 0xffffff,
                  });
                  const cube = new THREE.Mesh(geometry, material);
                  cube.position.x = x;
                  cube.position.z = z;
                  cube.position.y = 5 - height / 2;
                  cube.castShadow = true;
                  cube.receiveShadow = true;
                  scene.add(cube);
    
                  //seccion de la ventana de abajo
                  const geometryBottom = new THREE.BoxGeometry(width, height, prof);
                  const materialBottom = new THREE.MeshPhongMaterial({
                    color: 0xffffff,
                  });
                  const cubeBottom = new THREE.Mesh(geometryBottom, materialBottom);
                  cubeBottom.position.x = x;
                  cubeBottom.position.z = z;
                  cubeBottom.position.y = height / 2;
                  cubeBottom.castShadow = true;
                  cubeBottom.receiveShadow = true;
                  scene.add(cubeBottom);
    
                }
              }
                break;
          
            default:
              break;
          }
        }
      }
}