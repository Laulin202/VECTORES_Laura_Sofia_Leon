/* Author: Laura Sofía Leon ALban
    Date of creation: 24/8/23
    Last modification 24/8/23
*/

// var: int, string, etc
// let: Declarar variables
// const: Constantes

// Variables

var 
//scene = null,
//  camera = null,
//  renderer = null,
    controls = null,
    posiciony = 0.5,
 //   cube = null,
    posicionx = 0;
    light = null;


const size = 10;
divisions = 10;

function createThreeJs() {
  
    var escena = new THREE.Scene();
    var camara = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
    var renderizador = new THREE.WebGLRenderer();

    renderizador.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderizador.domElement);
    camara.position.z= 5;

    var cubo = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({ color: 0x00ff00}));
    escena.add(cubo);

    camara.position.z = 5;

    renderizador.render(escena, camara);

}


    








