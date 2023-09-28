/* Author: Laura Sofía Leon ALban
    Date of creation: 21/09/23
    Last modification 21/09/23
*/
var

    posicionx = 0,
    posiciony = 0.5,
    posicionz = 0;

function loadObject(path, nameMTL, nameOBJ) {
    //1. Load MTL (Texture)
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setResourcePath(path);
    mtlLoader.setPath(path);
    mtlLoader.load(nameMTL, function (material) {
        material.preload();

        // 2. Load OBJ (Mesh)
        var objLoader = new THREE.OBJLoader();
        objLoader.setPath(path);
        objLoader.setMaterials(material);
        objLoader.load(nameOBJ, function (object) {
            scene.add(object)
        });

    });
}

function loadEscenary(path, nameMTL, nameOBJ) {
    //1 Load MTL (texture)
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setResourcePath(path);
    mtlLoader.setPath(path);
    mtlLoader.load(nameMTL, function (material) {
        material.preload();

        //2. Load OBJ (MESH)
        var objLoader = new THREE.OBJLoader();
        objLoader.setPath(path);
        objLoader.setMaterials(material);
        objLoader.load(nameOBJ, function (object) {
            scene.add(object)
        })
    })

}

function loadGLTF() {

    //Instantiate a Loader
    const loader = new THREE.GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('../models/GLTF/');
    loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
        // resource URL
        '../models/GLTF/Duck.gltf',
        // called when the resource is loaded
        function (gltf) {

            scene.add(gltf.scene);

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

            //Ajustar posición
            gltf.scene.position.set(0, 0, 2);

        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );
}

function createCollectibles() {

    var min = -15;
    var max = 15;


    let nCollectibles = 10;

    for (let i = 0; i < nCollectibles; i++) {
        // Se ejecuta n veces, con valores del paso 0 al numero de pisos ingresado
        posicionx = Math.random() * (max - min + 1) + min;
        posicionz = Math.random() * (max - min + 1) + min;
        createCollectible(posicionx, posicionz);
    }

}

function createCollectible(posicionx, posicionz) {

    var texture = new THREE.TextureLoader().load("../imgs/textureBox.jpg")
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texture });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = posicionx;
    cube.position.z = posicionz;
    cube.position.y = posiciony;

    scene.add(cube);

}

function gameStatess(caseSituation) {
    //game, win, lose

    switch (caseSituation) {
        case "game":
            // code block
            break;
        case "win":
            // code block
            break;
        case "lose":
            // code block
            break;
        default:
        // code block
    }

}



