var up = false;
var down = false;
var left = false;
var right = false;
var jump = false;

var speedX = 15;
var rotateX = 0.1;

// 移动事件
function moveEvent(bird, object) {
	// todo: 1.修复moveEvent 2.添加鼠标实现的环视逻辑（可能）
	var bird = globalInfo.bird.birdObject;
	if (up) {
		// rotateAroundVector(bird, new THREE.Vector3(1, 0, 0), -rotateX);
		bird.position.z -= speedX;
		camera.position.z -= speedX;
	}
	if (down) {
		rotateAroundVector(bird, new THREE.Vector3(1, 0, 0), rotateX);
		bird.position.z += speedX;
		camera.position.z += speedX;
	}
	if (left) {
		rotateAroundVector(bird, new THREE.Vector3(0, 0, 1), rotateX);
		bird.position.x -= speedX;
		camera.position.x -= speedX;
	}
	if (right) {
		rotateAroundVector(bird, new THREE.Vector3(0, 0, 1), -rotateX);
		bird.position.x += speedX;
		camera.position.x += speedX;
	}
	if (jump) {
		bird.position.y += 30;
		camera.position.y += 30;
	}
	if (!jump) {
		if (bird.position.y > 50) {
			bird.position.y -= 10;
			camera.position.y -= 10;
		}
	}
}