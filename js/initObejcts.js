// 初始化场景
function initMapObjects() {
	initGround();
	initWall();
	initPipes();
	initFlyOver();
}

// 墙体参数
var wallWidth = 50;
var wallHeight = 5000;
var wallDepth = 15000;

// 初始化地面网格
function initGround() {
	var texture = new THREE.TextureLoader().load('img/textures/ground.jpg', function(texture) {});
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(50, 50);

	var geometry = new THREE.PlaneGeometry(10000, wallDepth * 2);
	var material = new THREE.MeshBasicMaterial({
		map: texture
	});
	var ground = new THREE.Mesh(geometry, material);
	ground.rotation.x = -Math.PI / 2;
	scene.add(ground);
}

function initWall() {
	var roadWidth = objectInfo.map.roadWidth;
	// 左墙体
	var leftWall = createWall(-(roadWidth + wallWidth) / 2, wallHeight / 2, -wallDepth / 2 + 2500, wallWidth, wallHeight,
		wallDepth);
	object.wallArray.push(leftWall);
	// 右墙体
	var rightWall = createWall((roadWidth + wallWidth) / 2, wallHeight / 2, -wallDepth / 2 + 2500, wallWidth, wallHeight,
		wallDepth);
	object.wallArray.push(rightWall);
	// 顶部墙体
	var topWall = createWall(0, wallHeight + wallWidth / 2, -wallDepth / 2 + 2500, roadWidth + 2 * wallWidth, wallWidth,
		wallDepth);
	object.wallArray.push(topWall);
	// 添加到场景
	scene.add(leftWall);
	// scene.add(rightWall);
	scene.add(topWall);
}

// 初始化水管障碍物
function initPipes() {
	var pipe = objectInfo.pipe;
	// 在起点添加一个看不见的水管以保证pipeArray数组能够进行碰撞检测
	var emptyObject = addPipe(0, 0, 0, 0);
	emptyObject[0].visible = false;
	emptyObject[1].visible = false;
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
 * 生成一面墙
 * @param {int} x 墙体中心的X坐标
 * @param {int} y 墙体中心的Y坐标
 * @param {int} z 墙体中心的Z坐标
 * @param {int} dx 墙体在X方向的长度
 * @param {int} dy 墙体在Y方向的长度
 * @param {int} dz 墙体在Z方向的长度
 * @return {Object3D} 返回墙体对象
 */
function createWall(x, y, z, dx, dy, dz) {
	var roadWidth = objectInfo.map.roadWidth;
	var geometry = new THREE.BoxGeometry(dx, dy, dz);
	var material = new THREE.MeshBasicMaterial({
		color: 0xcccccc
	});

	var wall = new THREE.Mesh(geometry, material);
	setLocation(wall, x, y, z);
	wall.gameAttribute = "wall";
	return wall;
}

/**
 * 生成一个水管
 * @param {int} index 水管所在Z轴的下标，(index*两水管距离)为水管的固定位置
 * @param {int} offset 水管相对于固定位置的偏移量(可正负)
 * @param {int} height 水管底部的高度
 * @param {int} gap 上下水管的间隙
 * @return {Object3D} 返回水管对象
 */
function createPipe(index, offset, height, posY) {
	var roadWidth = objectInfo.map.roadWidth;
	var texture = new THREE.TextureLoader().load('img/textures/waterpipe.png', function(texture) {});
	// texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	var geometry = new THREE.CylinderGeometry(roadWidth / 2, roadWidth / 2, height, 16);
	var material = new THREE.MeshPhongMaterial({
		map: texture
	});
	pipe = new THREE.Mesh(geometry, material);
	setLocation(pipe, 0, posY, -index * objectInfo.pipe.distance + offset);
	return pipe;
}

// 添加水管及奖励物到场景中
function addPipe(index, offset, height, gap) {
	// 先移除该位置原来的水管
	removePipe(index);

	// 生成新的水管并添加到场景和全局数组中
	// 底部水管
	var bottomPipe = createPipe(index, offset, height, height / 2);
	object.pipeArray[index * 2] = bottomPipe;

	// 顶部水管
	var topPipeHeight = wallHeight - height - gap;
	var topPipe = createPipe(index, offset, topPipeHeight, wallHeight - topPipeHeight / 2);
	object.pipeArray[index * 2 + 1] = topPipe;

	// 奖励物
	if (randomNum(1, 10) <= objectInfo.reward.possibility) {
		//addReward(index, offset, height, gap);
	}


	// 添加至场景
	scene.add(bottomPipe);
	scene.add(topPipe);

	return [bottomPipe, topPipe];
}

// 移除下标index处的水管
function removePipe(index) {
	// 底部水管
	var bottomPipe = object.pipeArray[index * 2];
	scene.remove(bottomPipe);
	object.pipeArray[index * 2] = null;
	// 顶部水管
	var topPipe = object.pipeArray[index * 2 + 1];
	scene.remove(topPipe);
	object.pipeArray[index * 2 + 1] = null;
}



function createRewardCoverBox(index, offset, posY) {
	var reward = objectInfo.reward;
	var geometry = new THREE.CylinderGeometry(reward.radius, reward.radius, reward.height, 4);
	var material = new THREE.MeshBasicMaterial({
		color: 0xff0000
	});
	var box = new THREE.Mesh(geometry, material);
	setLocation(box, 0, posY, -index * objectInfo.pipe.distance + offset);
	return box;
}

function createReward() {
	
}

function addReward(index, offset, pipeHeight, pipeGap) {
	var reward = objectInfo.reward;
	// 先移除该位置原来的奖励物
	removeReward(index);
	
	var rewardCoverBox = createRewardCoverBox(index, offset, randomNum(pipeHeight+reward.height, pipeHeight+pipeGap-reward.height));
	object.rewardArray[index * 2 + 1] = rewardCoverBox;
	scene.add(rewardCoverBox);
}

// 移除下标index处的奖励物
function removeReward(index) {
	// 奖励物本体
	var reward = object.rewardArray[index * 2];
	scene.remove(reward);
	object.rewardArray[index * 2] = null;
	// 奖励物包围盒
	var rewardCoverBox = object.rewardArray[index * 2 + 1];
	scene.remove(rewardCoverBox);
	object.rewardArray[index * 2 + 1] = null;
}
