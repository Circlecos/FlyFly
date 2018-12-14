var forward = true;
var left = false;
var right = false;
var jump = false;

// 移动事件
function moveEvent(bird) {
	var forwardSpeed = global.moving.moveForwardSpeed;
	var sideSpeed = global.moving.moveSideSpeed;
	var jumpSpeed = global.moving.jumpSpeed;
	var fallSpeed = global.moving.fallSpeed;
	// todo: 1.修复moveEvent 2.添加鼠标实现的环视逻辑（可能）
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
		jumpUp(bird, jumpSpeed);
	}
	if (!jump) {
		fallDown(bird, fallSpeed);
	}
}

// 前进
function moveForward(bird, speed) {
	bird[0].position.z -= speed;
	bird[1].position.z -= speed;
	camera.position.z -= speed;
}

// 左偏
function moveLeft(bird, speed) {
	bird[0].position.x -= speed;
	bird[1].position.x -= speed;
	camera.position.x -= speed;
}

// 右偏
function moveRight(bird, speed) {
	bird[0].position.x += speed;
	bird[1].position.x += speed;
	camera.position.x += speed;
}

// 跳跃
function jumpUp(bird, speed) {
	bird[0].position.y += speed;
	bird[1].position.y += speed;
	camera.position.y += speed;
}

// 下降
function fallDown(bird, speed) {
	if (bird[1].position.y > 50){
		bird[0].position.y -= speed;
		bird[1].position.y -= speed;
		camera.position.y -= speed;
	}
}

// 回到起点
function backToStartPoint(bird) {
	bird[0].position.z = 0;
	bird[1].position.z = 0;
	camera.position.z = global.moving.camera.initZ;
}