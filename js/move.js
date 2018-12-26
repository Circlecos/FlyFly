var forward = true;
var left = false;
var right = false;
var jump = false;

var t = 0.1; // 时间
var v = 0; // 上方向速度
var g = -80; // 重力加速度加速度
var a = 0; // 跳跃加速度

// 移动事件
function moveEvent(bird) {
	var forwardSpeed = global.moving.moveForwardSpeed;
	var sideSpeed = global.moving.moveSideSpeed;
	var jumpSpeed = global.moving.jumpSpeed;
	var fallSpeed = global.moving.fallSpeed;
	var headRiseSpeed = global.moving.headRiseSpeed;

	if (forward) {
		moveForward(bird, forwardSpeed);
	}
	if (left) {
		moveLeft(bird, sideSpeed);
	}
	if (right) {
		moveRight(bird, sideSpeed);
	}
	if (jump) {
		jumpUp(bird, jumpSpeed, headRiseSpeed);
	}
	if (!jump) {
		lowerHead(bird, headRiseSpeed);
	}
	fallDown(bird);
}

// 前进
function moveForward(bird, speed) {
	bird.coverBox.position.z -= speed;
	for (var i= 0; i<(bird.trueBird).length;i++)
		bird.trueBird[i].position.z -= speed;
	camera.position.z -= speed;
	controls.target = new THREE.Vector3(bird.coverBox.position.x
		,bird.coverBox.position.y
		,bird.coverBox.position.z);
}

// 左偏
function moveLeft(bird, speed) {
	bird.coverBox.position.x -= speed;
	for (var i= 0; i<(bird.trueBird).length;i++)
		bird.trueBird[i].position.x -= speed;
	camera.position.x -= speed;
	controls.target = new THREE.Vector3(bird.coverBox.position.x
		,bird.coverBox.position.y
		,bird.coverBox.position.z);
}

// 右偏
function moveRight(bird, speed) {
	bird.coverBox.position.x += speed;
	for (var i= 0; i<(bird.trueBird).length;i++)
		bird.trueBird[i].position.x += speed;;
	camera.position.x += speed;
	controls.target = new THREE.Vector3(bird.coverBox.position.x
		,bird.coverBox.position.y
		,bird.coverBox.position.z);
}

// 跳跃
function jumpUp(bird, speed, headRiseSpeed) {
	bird.coverBox.position.y += speed;
	bird.coverBox.rotation.x += headRiseSpeed;
	for (var i= 0; i<(bird.trueBird).length;i++) {
		bird.trueBird[i].position.y += speed;
		bird.trueBird[i].rotation.x += headRiseSpeed;
	}	
	camera.position.y += speed;
	controls.target = new THREE.Vector3(bird.coverBox.position.x
		,bird.coverBox.position.y
		,bird.coverBox.position.z);
}

// 低头
function lowerHead(bird, headRiseSpeed) {
	if (bird.coverBox.rotation.x > 0) {
		bird.coverBox.rotation.x -= headRiseSpeed;
		for (var i= 0; i<(bird.trueBird).length;i++) {
			bird.trueBird[i].rotation.x -= headRiseSpeed;
		}
	}
}

// 下降
function fallDown(bird) {
	var h = v * t + g * t * t / 2;
	v = v + g * t;
	if (bird.coverBox.position.y > -h) {		
		for (var i= 0; i<(bird.trueBird).length;i++)
			bird.trueBird[i].position.y += h;
		bird.coverBox.position.y += h;
        camera.position.y += h;
	}
	controls.target = new THREE.Vector3(bird.coverBox.position.x
		,bird.coverBox.position.y
		,bird.coverBox.position.z);
}

// 回到起点
function backToStartPoint(bird) {
	camera.position.z -= bird.coverBox.position.z;
	bird.coverBox.position.z = 0;
	for (var i= 0; i<(bird.trueBird).length;i++)
			bird.trueBird[i].position.z = 0;
	controls.target = new THREE.Vector3(bird.coverBox.position.x
		,bird.coverBox.position.y
		,bird.coverBox.position.z);
}
