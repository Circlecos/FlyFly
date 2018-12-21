// 帧循环、游戏循环
function animation() {
	global.system.time++;
	// 小鸟对象
	var bird = global.bird.birdObject[0];
	// 其他对象
	var object = global.object;
	// 当前游戏全局设置
	var objectInfo = global.objectInfo;

	// 移动事件
	moveEvent(bird);

	// 碰撞检测
	checkCollision(bird, object);

	// 绘制新的障碍物和奖励物
	drawNewMapObjects(bird, object, objectInfo);

	// 渲染当前帧并请求下一次渲染动作
	renderer.render(scene, camera);
	requestAnimationFrame(animation);
}

// 碰撞检测
function checkCollision(bird, object) {
	if (global.system.time < 10){
		// 奇怪的bug：游戏一开始，小鸟会默认和一个远处的物体碰撞
		return;
	}
	var pipeArray = object.pipeArray;
	var ret = collision(bird[1], pipeArray);
	if (ret) {
		alert("GAME OVER!");
	}
}

// 绘制新的障碍物和奖励物并处理循环逻辑
// 当遇到最后`globalInfo.mapObject.renderNum`个障碍物时额外渲染
// 通过最后一个障碍物后将场景拉回 循环位置（假设为新关卡（可能））
function drawNewMapObjects(bird, object, objectInfo) {
	var pipe = objectInfo.pipe;
	// 最多能看到的水管个数
	var renderNum = objectInfo.map.renderNum;
	// 小鸟当前位置
	var pos = -bird[1].position.z;
	// 水管之间的默认距离
	var dist = pipe.distance;
	// 小鸟当前飞过第index个水管
	var index = Math.floor(pos / dist);
	// 记录小鸟是否飞过某个水管
	var flyOver = object.flyOver;

	if (index >= 1 && !flyOver[index]) {
		// 水管的随机参数
		var offset = randomNum(-pipe.maxOffset, pipe.maxOffset);
		var height = randomNum(pipe.minHeight, pipe.maxHeight);
		var gap = randomNum(pipe.minGap, pipe.maxGap);
		// 生成水管到下标index+num处
		addPipe(index + renderNum, offset, height, gap);
		// 标注小鸟已经飞过index处的水管
		flyOver[index] = true;
		// 小鸟上一个飞过的水管标注为[未飞过]状态
		index == 1 ? flyOver[renderNum + 1] = false : flyOver[index - 1] = false;
		// 重新生成小鸟身后的水管
		addPipe(index - 1, offset, height, gap);

		console.log("birdPos",bird.position.z);
		console.log("birdTruePos",global.bird.birdObject[1].position.z);
		if (index == renderNum + 1) {
			// 回到起点
<<<<<<< HEAD
			bird.position.z = 0;
			global.bird.birdObject[1].position.z = 0;
			camera.position.z = global.moving.camera.initZ;
=======
			backToStartPoint(bird); // move.js
>>>>>>> fda726f845fbc6a1b7429953b3ac697b74c2e906
		}
	}
}
