var forward = true;
var left = false;
var right = false;
var jump = false;

var t = 0.025; // 时间
var v = 0; // 上方向速度
var g = -80; // 重力加速度加速度
var a = 0; // 跳跃加速度

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
	fallDown(bird);
}

// 前进
function moveForward(bird, speed) {
	bird[0].position.z -= speed;
	bird[1].position.z -= speed;
    bird[2].position.z -= speed;
    camera.position.z -= speed;
}

// 左偏
function moveLeft(bird, speed) {
	bird[0].position.x -= speed;
	bird[1].position.x -= speed;
    bird[2].position.x -= speed;

    camera.position.x -= speed;
}

// 右偏
function moveRight(bird, speed) {
	bird[0].position.x += speed;
	bird[1].position.x += speed;
    bird[2].position.x += speed;

    camera.position.x += speed;
}

// 跳跃
function jumpUp(bird, speed) {
	bird[0].position.y += speed;
	bird[1].position.y += speed;
    bird[2].position.y += speed;

    camera.position.y += speed;
}

// 下降
function fallDown(bird) {
	var h = v * t + g * t * t / 2;
	v = v + g * t;
	if (bird[1].position.y > -h) {
		bird[0].position.y += h;
		bird[1].position.y += h;
        bird[2].position.y += h;

        camera.position.y += h;
	}
}

// 回到起点
function backToStartPoint(bird) {
	bird[0].position.z = 0;
	bird[1].position.z = 0;
    bird[2].position.z = 0;

    camera.position.z = global.moving.camera.initZ;
}
