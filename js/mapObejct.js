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
var wallHeight = 5000;
var wallDepth = 15000;

function initWall() {
	var geometry = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
	var material = new THREE.MeshBasicMaterial({
		color: 0xcccccc
	});
	// 左墙体
	var leftWall = new THREE.Mesh(geometry, material);
	leftWall.position.x = -(config.roadWidth + wallWidth) / 2;
	leftWall.position.y = wallHeight / 2;
	leftWall.position.z = -wallDepth / 2 + 2500;
	leftWall.type = "墙";
	object.wallArray.push(leftWall);
	// 右墙体
	var rightWall = new THREE.Mesh(geometry, material);
	rightWall.position.x = (config.roadWidth + wallWidth) / 2;
	rightWall.position.y = wallHeight / 2;
	rightWall.position.z = -wallDepth / 2 + 2500;
	rightWall.type = "墙";
	object.wallArray.push(rightWall);
	// 添加到场景
	scene.add(leftWall);
	scene.add(rightWall);
}

// 初始化水管障碍物
function initPipes() {
	for (var index = 0; index <= config.renderNum; index++) {
		var offset = randomNum(-config.pipeMaxOffset, config.pipeMaxOffset);
		var height = randomNum(config.pipeMinHeight, config.pipeMaxHeight);
		var gap = randomNum(config.pipeMinGap, config.pipeMaxGap);

		addPipe(index, offset, height, gap);
	}
}

// 初始化小鸟飞过的水管
function initFlyOver() {
	for (var index = 0; index < config.renderNum + 1; index++) {
		object.flyOver.push(false);
	}
}

/**
 * 生成一个水管
 * @param {int} index 水管所在Z轴的下标，(index*两水管距离)为水管的固定位置
 * @param {int} offset 水管相对于固定位置的偏移量(可正负)
 * @param {int} height 水管底部的高度
 * @param {int} gap 上下水管的间隙
 * @return {Object3D} 返回水管对象
 */
function generatePipe(index, offset, height, gap) {
	var config = globalInfo.config;

	var geometry = new THREE.CylinderGeometry(config.roadWidth / 2, config.roadWidth / 2, height, 320);
	var material = new THREE.MeshPhongMaterial({
		color: 0x00FF00
	});
	pipe = new THREE.Mesh(geometry, material);
	pipe.position.x = 0;
	pipe.position.y = geometry.parameters.height / 2;
	pipe.position.z = -index * config.pipeDistance + offset;
	return pipe;
}

// 添加水管到场景中
function addPipe(index, offset, height, gap) {
	var object = globalInfo.object;
	// 先移除该位置原来的水管
	removePipe(index);
	// 生成新的水管并添加到场景和全局数组中
	var pipe = generatePipe(index, offset, height, gap);
	object.pipeArray[index] = pipe;
	scene.add(pipe);
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
