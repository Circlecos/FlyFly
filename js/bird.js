// 新建鸟对象
function initBird() {
	var geometry = new THREE.BoxGeometry(50, 50, 50);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});
	var bird = new THREE.Mesh(geometry, material);
	bird.position.y = 50;	
	globalInfo.bird.birdObject = bird;
	rotateAroundVector(bird, new THREE.Vector3(1, 0, 0), -rotateX);
	scene.add(bird);
}


// 装载鸟的模型
function loadBirdModel(file) {

}

// 根据新坐标（形态）装载对应模型（可能）
function refreshBrid() {

}
