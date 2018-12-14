var bird = global.objectInfo.birdCoverBox;

// 初始化鸟对象
function initBird() {
	var bird = createBird();
	var coverBox = createCoverBox();
	global.bird.birdObject[0] = bird;
	global.bird.birdObject[1] = coverBox;
	scene.add(bird);
	scene.add(coverBox);
}

// 创建小鸟对象
function createBird() {
	var geometry = new THREE.CylinderGeometry(50, 50, 100, 32);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});

	var bird = new THREE.Mesh(geometry, material);
	bird.position.y = 50;
	return bird;
}

// 创建包围盒对象
function createCoverBox() {
	var geometry = new THREE.CylinderGeometry(50, 50, 100, 32);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});

	var box = new THREE.Mesh(geometry, material);
	box.position.y = 50;
	return box;
}

// 装载鸟的模型
function loadBirdModel(file) {

}

// 根据新坐标（形态）装载对应模型（可能）
function refreshBrid() {

}
