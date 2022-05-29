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
  LoadWalls(scene);

  /**
   * Piso
   */
  //const floor = new THREE.GridHelper(100, 100);
  //scene.add(floor);

  const floor = new THREE.BoxGeometry(17, 0.2, 18);
  const texture = new THREE.TextureLoader().load("img/roca-ama.jpg");
  let material2 = new THREE.MeshPhongMaterial({ map: texture });
  const cube = new THREE.Mesh(floor, material2);
  cube.receiveShadow = true;
  cube.position.x = 17 / 2;
  cube.position.z = 18 / 2;
  cube.position.y = 0.1;
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);
  /**
   * Piso
   */
  const geometry = new THREE.PlaneGeometry(100, 100, 10);
  const material = new THREE.MeshPhongMaterial({ color: 0x666666 });
  const floor2 = new THREE.Mesh(geometry, material);
  floor2.receiveShadow = true;
  floor2.castShadow = true;
  floor2.rotation.x = -Math.PI / 2;
  scene.add(floor2);

  scene.background = new THREE.Color(0xffffff);

  /**
   * Ejes
   */
  const axisHelper = new THREE.AxesHelper(100);
  scene.add(axisHelper);

  //Luces
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  directionalLight.position.x += 20;
  directionalLight.position.y += 20;
  directionalLight.position.z += 20;
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  const animate = () => {
    controls.update(0.01);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
};
document.addEventListener("DOMContentLoaded", main);
