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
	camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 6500);
	camera.position.x = globalInfo.moving.camera.initX;
	camera.position.y = globalInfo.moving.camera.initY;
	camera.position.z = globalInfo.moving.camera.initZ;
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

// 帧循环、游戏循环
function animation() {
	// 小鸟对象
	var bird = globalInfo.bird.birdObject;
	// 其他对象
	var object = globalInfo.object;
	// 当前游戏全局设置
	var config = globalInfo.config;

	// 移动事件
	initMoveEvent();

	// var ret = collision();

	makeSomethingWithRet();

	// 绘制新的障碍物和奖励物
	drawNewMapObjects(bird, object, config);

	renderer.render(scene, camera);
	requestAnimationFrame(animation);
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
