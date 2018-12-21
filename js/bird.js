<<<<<<< HEAD
// 新建鸟对象

=======
var bird = global.objectInfo.birdCoverBox;

// 初始化鸟对象
>>>>>>> fda726f845fbc6a1b7429953b3ac697b74c2e906
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
<<<<<<< HEAD
	bird.position.y = 50;	
	global.bird.birdObject[0]= bird;
    global.bird.birdObject[1] = loadBirdModel();
	scene.add(bird);
	bird.visible = false;
=======
	bird.position.y = 1000;
	return bird;
>>>>>>> fda726f845fbc6a1b7429953b3ac697b74c2e906
}

// 创建包围盒对象
function createCoverBox() {
	var geometry = new THREE.CylinderGeometry(50, 50, 100, 32);
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
        object.positon = 0, 0, 0;
        object.scale.set(3, 3, 3);
        global.bird.birdObject[1] = object;
        rotateAroundVector(global.bird.birdObject[1], new THREE.Vector3(0, 1, 0), Math.PI);

        scene.add(global.bird.birdObject[1]);
    
    });

}

// 根据新坐标（形态）装载对应模型（可能）
function refreshBrid() {

}
