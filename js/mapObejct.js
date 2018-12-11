var config = globalInfo.config;
var object = globalInfo.object;

function initMapObjects() {
	initGrid();
	initPipes();
	initFlyOver();
}

function initGrid() {
	var grid = new THREE.GridHelper(config.ground[0], config.ground[1], 0x0000ff, 0x808080);
	scene.add(grid);
}

function initPipes() {
	for (var index = 0; index < config.renderNum; index++) {
		var pipe = generatePipe(index, randomNum(-config.pipeMaxOffset, config.pipeMaxOffset));
		object.pipeArray[index] = pipe;
		scene.add(pipe);
	}
}

function initFlyOver() {
	for (var index = 0; index < config.renderNum * 2 + 1; index++) {
		object.flyOver.push(false);
	}
}

function initObject() {
	//墙
	var geometry = new THREE.BoxGeometry(100, 100000, 1000);
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000,
		opacity: 0.01
	});
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	cube.position.x = 550;
	// 圆柱
	var geometry = new THREE.CylinderGeometry(mapInfo.roadWidth / 2, mapInfo.roadWidth / 2, 2000, 320);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
	});
	cylinder = new THREE.Mesh(geometry, material);
	cylinder.position = new THREE.Vector3(0, 0, 0);
	scene.add(cylinder);

	var geometry = new THREE.CylinderGeometry(500, 500, 3000, 320);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
	});
	cylinder2 = new THREE.Mesh(geometry, material);
	cylinder2.position = new THREE.Vector3(0, 0, 0);
	scene.add(cylinder2);

	var geometry = new THREE.BoxGeometry(100, 100, 100);

	for (var i = 0; i < geometry.faces.length; i += 2) {

		var hex = Math.random() * 0xffffff;
		geometry.faces[i].color.setHex(hex);
		geometry.faces[i + 1].color.setHex(hex);

	}

	cylinder.position.z = -1500;
	cylinder2.position.z = -3500;

	var material = new THREE.MeshBasicMaterial({
		vertexColors: THREE.FaceColors
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position = new THREE.Vector3(110, 110, 110);
	scene.add(mesh);
	console.log(mesh.id);
	console.log(cylinder.id);
}

// 添加水管到下标index处、左右最大偏移量为randomOffset的地方
function addPipe(index, randomOffset) {
	var object = globalInfo.object;
	// 先移除该位置原来的水管
	removePipe(index);
	// 生成新的水管并添加到场景和全局数组中
	var pipe = generatePipe(index, randomOffset);
	object.pipeArray[index] = pipe;
	scene.add(pipe);
}

function generatePipe(index, randomOffset) {
	var config = globalInfo.config;

	var geometry = new THREE.CylinderGeometry(config.roadWidth / 2, config.roadWidth / 2, 1000, 12);
	var material = new THREE.MeshPhongMaterial({
		color: 0x00FF00
	});
	pipe = new THREE.Mesh(geometry, material);
	pipe.position.x = 0;
	pipe.position.y = 500;
	pipe.position.z = -(index + 1) * config.pipeDistance + randomOffset;
	return pipe;
}

function removePipe(index) {
	var object = globalInfo.object;

	var pipe = object.pipeArray[index];
	scene.remove(pipe);
	object.pipeArray[index] = null;
}

function generateRewards() {

}
