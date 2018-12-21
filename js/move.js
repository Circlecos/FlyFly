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
	}
}