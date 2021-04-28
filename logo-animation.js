import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/MTLLoader.js';
let PoE;
const animPOE = new MTLLoader().loadAsync('./anim-data/Poe.mtl').then((mtl) => {
    const objLoader = new OBJLoader();
    objLoader.setMaterials(mtl);
    return objLoader.loadAsync('./anim-data/Poe.obj').then((root) => {
        return PoE = root;
    });
});
let scene;
function init() {
    scene = new THREE.Scene();

    //start lights_____________________________________________________________
    // light one
    const spotLight = createSpotLight(1);
    spotLight.position.set(0, 20, 150);
    spotLight.position.y = 20;
    spotLight.intensity = 2;

    // light two
    const spotLight2 = createSpotLight(1);
    spotLight2.position.set(7, 7, 7);


    //end lights_______________________________________________________________
    //Start Camera ____________________________________________________________
    const camera = new THREE.PerspectiveCamera(65, 1000 / 1000, 1, 3000);
    // var camera = new THREE.OrthographicCamera(-15, 15, 15, -15, 1, 1000);
    camera.position.x = 0;
    camera.position.y = 29;
    camera.position.z = 150;
    camera.lookAt(new THREE.Vector3(1, 1, 1));

    //End   Camera ___________________________________________________________

    // Add items to the scene
    // scene.add(Metal.object);
    // scene.add(PoE);
    // console.log(animPOE);
    animPOE.then((poe) => scene.add(poe));
    // scene.add(plane);
    scene.add(spotLight);
    scene.add(spotLight2);


    // renderer here
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(500, 500);
    renderer.setClearColor('rgb(0,0,128)');
    document.getElementById('webgl').appendChild(renderer.domElement);
    // document.getElementById("webgl").width = "10";
    const controls = new OrbitControls(camera, renderer.domElement);

    update(renderer, scene, camera, controls, PoE);

    return scene;
};

function update(renderer, scene, camera, controls, Machine, Metal, moveObjectfw) {
    renderer.render(scene, camera);


    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls, Machine, Metal);
    });

};
// functions
// spotLight
function createSpotLight(intensity) {
    const spotLight = new THREE.SpotLight(0xffffff, intensity);
    spotLight.castShadow = true;

    spotLight.shadow.bias = 0.001;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;

    return spotLight;
}

init();