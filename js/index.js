var renderer;
var camera;
var scene;

// 初始化渲染器
function initThree() {
	width = document.getElementById('canvas-frame').clientWidth;
	height = document.getElementById('canvas-frame').clientHeight;
	renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
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

// 初始化照相机
function initCamera() {
	camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 7500);
	camera.position.x = global.moving.camera.initX;
	camera.position.y = global.moving.camera.initY;
	camera.position.z = global.moving.camera.initZ;
	camera.up.x = 0;
	camera.up.y = 1;
	camera.up.z = 0;
	camera.lookAt({
		x: 0,
		y: 0,
		z: 0
	});
}

// 初始化场景
function initScene() {
	scene = new THREE.Scene();
}

// 游戏入口主函数
function gameStart() {
	initThree();
	initCamera();
	initScene();
	initLight();
	initGUI();
	initMapObjects();
	initBird();
	animation();
}
