/* Author: Laura Sofía Leon ALban
    Date of creation: 24/8/23
    Last modification 24/8/23
*/

// var: int, string, etc
// let: Declarar variables
// const: Constantes

// Variables

var 
    scene = null,
    camera = null,
    renderer = null,
    controls = null,
    posiciony = 0.5,
    cube = null,
    posicionx = 0;
    light = null;
    //stats = null;


const size = 50;
divisions = 50;

function createThreeJs() {
  
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    camera = new THREE.PerspectiveCamera(75, //campo visual (arriba o abajo)
        window.innerWidth / window.innerHeight,
        0.1, //Near (minimo)
        1000); //Far (maximo)

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("app") });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(6.2, 4.6, 0.1);
    //camera.position.z = 5;
    controls.update();

    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);


    //Primero creo la geometria

    createLights("AmbientLight");
    //createLights("AmbientLight");
    animate(); //Luego animo lo que cree con la geometria
    

    
    loadObject("../models/OBJ_MTL/personajes/", "Rupertobj.mtl", "Rupertobj.obj");
    loadGLTF();
    createCollectibles();
    gameStates();
    //loadEscenary("../models/OBJ_MTL/escenario/", "EscenarioLab.mtl", "EscenarioLab.obj");
    
}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera); //Esto permite que los cubos se muestren

    //console.log(camera.position);
    // cube.rotation.x = 0.00;
    // cube.rotation.y += 0.10;
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function createCubeGeometry(posiciony, posicionx) {

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true,
    //                                                wireframe: false, wireframeLinewidth: 6});


    const texture = new THREE.TextureLoader().load('../imgs/Animales/face1.jpg');
    const texture1 = loadTextures();

    var materialCube = [new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../imgs/Animales/face1.jpg') }),
                        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../imgs/Animales/face2.png') }),
                        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../imgs/Animales/face3.jpg') }),
                        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../imgs/Animales/face4.jpg') }),
                        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../imgs/Animales/face5.png') }),
                        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../imgs/Animales/face6.jpg') })];

     const material = new THREE.MeshStandardMaterial({ color: 0xff0000, 
                                                         map: texture,
                                                        //  side: THREE.DoubleSide,
                                                        roughness: 0.5, 
                                                        metalness: 1});    
    // const material = MeshBasicMaterial();
    // material.map = loadTextures();

    cube = new THREE.Mesh(geometry, material); //primero tengo que crear los dos parametros necesarios para crear el cubo
    cube.position.y = posiciony;
    cube.position.x = posicionx;
    camera.position.z = 5;
    scene.add(cube);
    //no puedo usar las propiedades del cubo como contador,
    // porque al momento de crear un nuevo bloque, toda información dentro del cubo se reinicia
}

function crearEdificios() {
    //Obtenemos el valor del input de la barra de busqueda
    
    let floorNumber = document.getElementById("floors").value;
    alert(floorNumber);

    for (let i = 0; i < floorNumber; i++) {
        // Se ejecuta n veces, con valores del paso 0 al numero de pisos ingresado
        createCubeGeometry(posiciony, posicionx);
        posiciony +=1;
    }

    posicionx += 1.5; //actualizo la posicion en x (para que el nuevo bloque de cubos se mueva)
    posiciony = 0.5; //reinicio las posiciones de y hacia 0.5 (para que vuelva a comenzar en la base)
 
}


//Funcion para crear LUCES
function createLights(lightType) {

    //Pointlight, spotlight, AmbientLight
    switch (lightType) {

        case "PointLight": //PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
            light = new THREE.PointLight(0xffffff, 1, 100);
            light.position.set(0, 5, 0);
            scene.add(light); //No olvides añadir la luz a la escena
            const sphereSize = 1;
            const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
            scene.add(pointLightHelper);
            break;

        case "AmbientLight":
            //AmbientLight( color : Integer, intensity : Float )
            light = new THREE.AmbientLight(0xffffff, 0.8); // soft white light
            scene.add(light);
            break;

        case "SpotLight":
            //SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )
            light = new THREE.SpotLight(0xffffff);
            spotLight.position.set(0, 10, 0);
            scene.add(light);
            break;
        default:
        // code block
    }
}

function loadTextures() {
    const loader = new THREE.TextureLoader();
    loader.load('../imgs/Animales/face1.jpg');
    return loader

}



    








