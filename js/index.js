var renderer;
var camera;
var scene;
var controls;

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
	camera.lookAt(-1, 1000, 0);
}


function initOrbitControls(){
	// controls
	controls = new THREE.OrbitControls( camera, renderer.domElement );

	//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
	
	controls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.25;

	controls.enableZoom = true;

	controls.enableRotate = true;
	controls.rotateSpeed = 0.05;


	controls.screenSpacePanning = false;

	controls.minDistance = 2000;
	controls.maxDistance = 3000;

	controls.maxPolarAngle = Math.PI / 2;
}


// 初始化场景
function initScene() {
	scene = new THREE.Scene();
}

// 游戏入口主函数
function gameStart() {
	initThree();
	initCamera();
	initOrbitControls();
	initScene();
	initLight();
	initGUI();
	initFirstRewardModelObject();
	initSystemSound();
	initBird();
}

function loadStatusChange(){
	console.log(document.getElementById('modelLoadStatus').value);
	if (document.getElementById('modelLoadStatus').value == 3){
		initMapObjects();
		renderer.render(scene, camera);

		animation();
	}
}