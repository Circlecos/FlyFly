function initBird() {
	var coverBox = createCoverBox();
	global.bird.birdObject.coverBox = coverBox;
	scene.add(coverBox);

	loadBirdModel(0);
}

// 创建包围盒对象
function createCoverBox() {
	var geometry = new THREE.CylinderGeometry(150, 0, 200, 4);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});

	var box = new THREE.Mesh(geometry, material);
	box.position.y = 1000;
	box.visible = false;
	controls.target = new THREE.Vector3(box.position.x
		,box.position.y
		,box.position.z);
	controls.update();
	return box;
}

// 装载鸟的模型
function loadBirdModel(index) {
	var birdTrueModelCount = (global.bird.birdObjFileName).length;
	
	// var mtlLoader = new THREE.MTLLoader();

	// mtlLoader.setPath('model/White_Eagle/lower/');
	// mtlLoader.load('WhiteEagle_lower.mtl', function (materials){
	// 	materials.preload();
		
	var objLoader = new THREE.OBJLoader();
	// objLoader.setMaterials(materials);
	var object = objLoader.load(
		global.bird.birdModelFilePath[index] +
		global.bird.birdObjFileName[index],
		function(object) {
			console.log("The model path: "+ global.bird.birdModelFilePath[index] 
			+ global.bird.birdObjFileName[index]);
			
			object.position.set(0, 900, -38);
			object.scale.set(15, 15, 15);
			global.bird.birdObject.trueBird.push(object);
			rotateAroundVector(global.bird.birdObject.trueBird[index], new THREE.Vector3(0, 1, 0), Math.PI);
			rotateAroundVector(global.bird.birdObject.trueBird[index], new THREE.Vector3(1, 0, 0), -Math.PI / 10);
			global.bird.minAngleByAxisX = global.bird.birdObject.trueBird[index].rotation.x;

			scene.add(global.bird.birdObject.trueBird[index]);
			global.bird.birdObject.trueBird[index].visible = false;
			if (index != birdTrueModelCount - 1) {
				loadBirdModel(index + 1);
			} else {
				global.bird.birdObject.trueBird[0].visible = true;
				document.getElementById('modelLoadStatus').value ++;
				document.getElementById('modelLoadStatus').onchange();
			}
		});
	
	// });

	
}


var directionInc = false;
// 根据游戏时间改变鸟的形态模型（可见性）
function modifyBirdModelvisibility() {


	if ((global.bird.shapeModelIndex == global.bird.birdObjFileName.length - 1) ||
		(global.bird.shapeModelIndex == 0)) {
		directionInc = !directionInc;
	}
	if (directionInc == true) {
		global.bird.shapeModelIndex++;
	} else {
		global.bird.shapeModelIndex--;
	}

	for (var i = 0; i < global.bird.birdObjFileName.length; i++) {
		if (i == global.bird.shapeModelIndex) {
			global.bird.birdObject.trueBird[i].visible = true;
		} else {
			global.bird.birdObject.trueBird[i].visible = false;
		}
	}
}
