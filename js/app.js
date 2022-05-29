const main = () => {
  /**
   * Creamos una ESCENA
   */
  const scene = new THREE.Scene();
  /**
   * Creamos la camara
   */
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.y = 10;
  camera.lookAt(scene.position);

   const spotLight = new THREE.SpotLight( 0xffffff );
   spotLight.position.set( 19, 19, 19 );
   scene.add( spotLight );

  /**
   * Objeto encargado de pintar en la ESCENA
   */
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enable = true;
  document.body.appendChild(renderer.domElement);

  /**
   * Objeto encargfado de mover la camara
   */
  const controls = new THREE.FirstPersonControls(camera, renderer.domElement);
  controls.lookSpeed = 0.05;
  controls.movementSpeed = 50;
  controls.lookVertical = true;
  controls.mouseDragOn = true;
  controls.heightMin = 4;
  controls.heightMax = 5;
  /**
   * Cargamos las peredes.
   *
   */
  LoadWalls(scene,renderer);

  /**
   * Piso
   
  const floor = new THREE.GridHelper(100, 100);
  scene.add(floor);
  */
  /**
   * Piso
   */
  const geometry = new THREE.PlaneGeometry(100, 100, 10);
  const material1 = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const floor2 = new THREE.Mesh(geometry, material1);
  floor2.receiveShadow = true;
  floor2.castShadow = true;
  floor2.rotation.x = -Math.PI / 2;
  scene.add(floor2);

  const floor1 = new THREE.BoxGeometry(17, 0.2, 18);
  const texture = new THREE.TextureLoader().load("img/roca-ama.jpg");
  let material = new THREE.MeshLambertMaterial({ map: texture });
  const cube = new THREE.Mesh(floor1, material);
  cube.receiveShadow = true
  cube.position.x = 17/2;
  cube.position.z = 18/2;
  cube.position.y = 0.1;
  scene.add(cube);
//luz de ambiente
scene.add(new THREE.AmbientLight(0xffffff,0.2));

  scene.background = new THREE.Color(0xffffff);

  //Luces
  const directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
  directionalLight.position.x +=60
  directionalLight.position.y +=5
  directionalLight.position.z +=30
  directionalLight.castShadow =true;
  scene.add(directionalLight);

  directionalLight.shadow.mapSize.width = 4096;
  directionalLight.shadow.mapSize.height = 4096;

  directionalLight.shadow.camera.top += 25
  directionalLight.shadow.camera.botton -= 25
  directionalLight.shadow.camera.left -= 25
  directionalLight.shadow.camera.right += 25
  
  //Camara de la luz
  scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

/**
   * Ejes
   */
 const axisHelper = new THREE.AxesHelper(100);
 scene.add(axisHelper);

  const animate = () => {
    
    controls.update(0.01);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
};
document.addEventListener("DOMContentLoaded", main);
