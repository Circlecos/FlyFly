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
	// todo: 1.修复moveEvent 2.添加鼠标实现的环视逻辑（可能）
<<<<<<< HEAD
	var bird = global.bird.birdObject[0];
	var birdTrueObj = global.bird.birdObject[1];
	if (up) {
		bird.position.z -= speedX;
		birdTrueObj.position.z -= speedX;
		camera.position.z -= speedX;
	}
	if (down) {
		bird.position.z += speedX;
		birdTrueObj.position.z += speedX;
		camera.position.z += speedX;
	}
	if (left) {
		// rotateAroundVector(birdTrueObj, new THREE.Vector3(0, 0, 1), Math.PI/300.0);
		bird.position.x -= speedX;
		birdTrueObj.position.x -= speedX;
		camera.position.x -= speedX;
	}
	if (right) {
        // rotateAroundVector(birdTrueObj, new THREE.Vector3(0, 0, 1), -Math.PI/300.0);
		bird.position.x += speedX;
		birdTrueObj.position.x += speedX;
		camera.position.x += speedX;
	}
	if (jump) {
        // rotateAroundVector(birdTrueObj, new THREE.Vector3(1, 0, 0), Math.PI/300.0);
		bird.position.y += 30;
		birdTrueObj.position.y += 30;
		camera.position.y += 30;
	}
	if (!jump) {
		if (bird.position.y > 50) {
            // rotateAroundVector(birdTrueObj, new THREE.Vector3(1, 0, 0), -Math.PI/300.0);
			bird.position.y -= 10;
			birdTrueObj.position.y -= 10;
			camera.position.y -= 10;
		}
=======
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
function fallDown(bird) {
	var h = v * t + g * t * t / 2;
	v = v + g * t;
	if (bird[1].position.y > -h) {
		bird[0].position.y += h;
		bird[1].position.y += h;
		camera.position.y += h;
>>>>>>> fda726f845fbc6a1b7429953b3ac697b74c2e906
	}
}

// 回到起点
function backToStartPoint(bird) {
	bird[0].position.z = 0;
	bird[1].position.z = 0;
	camera.position.z = global.moving.camera.initZ;
}
