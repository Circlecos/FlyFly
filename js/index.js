
var up = false;
var down = false;
var left = false;
var right = false;
var jump = false;

var speedX = 25;
var rotateX = 0.1;

var renderer;
var stats;

function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha:true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById('canvas-frame').appendChild(stats.domElement);
}

var camera;
var controls;

function initCamera() {
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 5000);
    // camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1e10 );
    camera.position.x = 0;
    camera.position.y = 250;
    camera.position.z = 600;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });

}

var scene;

function initScene() {
    scene = new THREE.Scene();
}

var light;



// 界面逻辑“开始游戏”调用这个函数
function threeStart() {
    initGUI();
    
    initThree();
    initCamera();
    initScene();
    initLight();

    initMapObjects();
    initBird();

    animation();

}
