/* Author: Laura Sofía Leon ALban
    Date of creation: 21/09/23
    Last modification 21/09/23
*/

function loadObject(path, nameMTL, nameOBJ) {
    //1. Load MTL (Texture)
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setResourcePath(path);
    mtlLoader.setPath(path);
    mtlLoader.load(nameMTL, function (material){
        material.preload();

        // 2. Load OBJ (Mesh)
        var objLoader = new THREE.OBJLoader();
        objLoader.setPath(path);
        objLoader.setMaterials(material);
        objLoader.load(nameOBJ, function (object){
            scene.add(object)
        });

    });
}


loadObject("../models/OBJ_MTL/personajes/", "Rupertobj.mtl", "Rupertobj.obj");
