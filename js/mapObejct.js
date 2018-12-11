var config = globalInfo.config;
var object = globalInfo.object;

// 初始化场景
function initMapObjects() {
	initGrid();
	initWall();
	initPipes();
	initFlyOver();
}

// 初始化地面网格
function initGrid() {
	var grid = new THREE.GridHelper(config.ground[0], config.ground[1], 0x0000ff, 0x808080);
	scene.add(grid);
}

// 初始化左右墙体
var wallWidth = 50;
var wallDepth = 12000;

function initWall() {
	var geometry = new THREE.BoxGeometry(wallWidth, wallDepth, 10000);
	var material = new THREE.MeshBasicMaterial({
		color: 0xcccccc
	});
	var leftWall = new THREE.Mesh(geometry, material);
	leftWall.position.x = -(config.roadWidth + wallWidth) / 2;
	leftWall.position.z = -wallDepth / 2 + 2000;
	leftWall.type = "墙";
	object.wallArray.push(leftWall);
	scene.add(leftWall);
}

// 初始化水管障碍物
function initPipes() {
	for (var index = 0; index < config.renderNum; index++) {
		var offset = randomNum(-config.pipeMaxOffset, config.pipeMaxOffset);
		var height = randomNum(config.pipeMinHeight, config.pipeMaxHeight);
		
		var pipe = generatePipe(index, offset, height);
		object.pipeArray[index] = pipe;
		scene.add(pipe);
	}
}

// 初始化小鸟飞过的水管
function initFlyOver() {
	for (var index = 0; index < config.renderNum * 2 + 1; index++) {
		object.flyOver.push(false);
	}
}

// 添加一个底部高度为水管到相对下标index处偏移量为offset的地方
function addPipe(index, offset, height) {
	var object = globalInfo.object;
	// 先移除该位置原来的水管
	removePipe(index);
	// 生成新的水管并添加到场景和全局数组中
	var pipe = generatePipe(index, offset, height);
	object.pipeArray[index] = pipe;
	scene.add(pipe);
}

// 生成一个位置处于下标index处、左右最大偏移量为randomOffset的水管
function generatePipe(index, offset, height) {
	var config = globalInfo.config;

	var geometry = new THREE.CylinderGeometry(config.roadWidth / 2, config.roadWidth / 2, height, 12);
	var material = new THREE.MeshPhongMaterial({
		color: 0x00FF00
	});
	pipe = new THREE.Mesh(geometry, material);
	pipe.position.x = 0;
	pipe.position.y = geometry.parameters.height / 2;
	pipe.position.z = -(index + 1) * config.pipeDistance + offset;
	return pipe;
}

// 移除下标index处的水管
function removePipe(index) {
	var object = globalInfo.object;

	var pipe = object.pipeArray[index];
	scene.remove(pipe);
	object.pipeArray[index] = null;
}

function generateRewards() {

}
