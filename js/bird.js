
// var bird = global.objectInfo.birdCoverBox;

function initBird() {
	var bird = createBird();
	var coverBox = createCoverBox();
    global.bird.birdObject[0]= bird;
	global.bird.birdObject[1] = coverBox;
    loadBirdModel();
	scene.add(bird);
	scene.add(coverBox);
	bird.visible=false;
	coverBox.visible=false;
}

// 创建小鸟对象
function createBird() {
	var geometry = new THREE.CylinderGeometry(150, 150, 200, 32);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});

	var bird = new THREE.Mesh(geometry, material);
	bird.position.y = 1000;
	scene.add(bird);
	bird.visible = false;

	return bird;
}

// 创建包围盒对象
function createCoverBox() {
	var geometry = new THREE.CylinderGeometry(150, 150, 200, 32);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});

	var box = new THREE.Mesh(geometry, material);
	box.position.y = 1000;
	return box;
}

// 装载鸟的模型
function loadBirdModel() {
    var objLoader = new THREE.OBJLoader();
    objLoader.load(global.bird.birdModelFilePath + global.bird.birdModelFileName, function(object){
        object.position.set(0, 900, -38);
        object.scale.set(15, 15, 15);
        global.bird.birdObject[2] = object;
        rotateAroundVector(global.bird.birdObject[2], new THREE.Vector3(0, 1, 0), Math.PI);

        scene.add(global.bird.birdObject[2]);
        animation();
    });

}

// 根据新坐标（形态）装载对应模型（可能）
function refreshBrid() {

}
