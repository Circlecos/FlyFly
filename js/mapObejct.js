var objectInfo = global.objectInfo;
var object = global.object;

// 初始化场景
function initMapObjects() {
	initGrid();
	initWall();
	initPipes();
	initFlyOver();
}

// 初始化地面网格
function initGrid() {
	var ground = objectInfo.map.ground;
	var grid = new THREE.GridHelper(ground[0], ground[1], 0x0000ff, 0x808080);
	scene.add(grid);
}

// 初始化墙体
var wallWidth = 50;
var wallHeight = 5000;
var wallDepth = 15000;

function initWall() {
	var roadWidth = objectInfo.map.roadWidth;
	var geometry = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
	var material = new THREE.MeshBasicMaterial({
		color: 0xcccccc
	});
	// 左墙体
	var leftWall = new THREE.Mesh(geometry, material);
	setLocation(leftWall, -(roadWidth + wallWidth) / 2, wallHeight / 2, -wallDepth / 2 + 2500);
	leftWall.type = "墙";
	object.wallArray.push(leftWall);
	// 右墙体
	var rightWall = new THREE.Mesh(geometry, material);
	setLocation(rightWall, (roadWidth + wallWidth) / 2, wallHeight / 2, -wallDepth / 2 + 2500);
	rightWall.type = "墙";
	object.wallArray.push(rightWall);
	// 添加到场景
	scene.add(leftWall);
	scene.add(rightWall);
}

// 初始化水管障碍物
function initPipes() {
	var pipe = objectInfo.pipe;
	// 在起点添加一个看不见的水管以保证pipeArray数组能够进行碰撞检测
	var emptyObject = addPipe(0, 0, 0, 0);
	emptyObject.visible = false;
	for (var index = 1; index <= objectInfo.map.renderNum; index++) {
		var offset = randomNum(-pipe.maxOffset, pipe.maxOffset);
		var height = randomNum(pipe.minHeight, pipe.maxHeight);
		var gap = randomNum(pipe.minGap, pipe.maxGap);
		addPipe(index, offset, height, gap);
	}
}

// 初始化小鸟飞过的水管
function initFlyOver() {
	for (var index = 0; index < objectInfo.map.renderNum + 1; index++) {
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
	var roadWidth = objectInfo.map.roadWidth;

	var geometry = new THREE.CylinderGeometry(roadWidth / 2, roadWidth / 2, height, 16);
	var material = new THREE.MeshPhongMaterial({
		color: 0x00FF00
	});
	pipe = new THREE.Mesh(geometry, material);
	pipe.position.x = 0;
	pipe.position.y = geometry.parameters.height / 2;
	pipe.position.z = -index * objectInfo.pipe.distance + offset;
	return pipe;
}

// 添加水管到场景中
function addPipe(index, offset, height, gap) {
	var object = global.object;
	// 先移除该位置原来的水管
	removePipe(index);
	// 生成新的水管并添加到场景和全局数组中
	var pipe = generatePipe(index, offset, height, gap);
	object.pipeArray[index] = pipe;
	scene.add(pipe);
	return pipe;
}

// 移除下标index处的水管
function removePipe(index) {
	var object = global.object;

	var pipe = object.pipeArray[index];
	scene.remove(pipe);
	object.pipeArray[index] = null;
}

function generateRewards() {

}
