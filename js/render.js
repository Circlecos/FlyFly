// 帧循环、游戏循环
function animation() {
	// 小鸟对象
	var bird = globalInfo.bird.birdObject;
	// 其他对象
	var object = globalInfo.object;
	// 当前游戏全局设置
	var config = globalInfo.config;

	// 移动事件
	initMoveEvent();

	// var ret = collision();

	makeSomethingWithRet();

	//绘制新的障碍物和奖励物
	drawNewMapObjects(bird, object, config);


	renderer.render(scene, camera);
	requestAnimationFrame(animation);
}

// 处理碰撞检测返回的结果（是否中止）
function makeSomethingWithRet() {

}

// 绘制新的障碍物和奖励物并处理循环逻辑
// 当遇到最后`globalInfo.mapObject.renderNum`个障碍物时额外渲染
// 通过最后一个障碍物后将场景拉回 循环位置（假设为新关卡（可能））
function drawNewMapObjects(bird, object, config) {
	// 最多能看到的水管个数
	var num = config.renderNum;
	// 小鸟当前位置
	var pos = -bird.position.z;
	// 水管之间的默认距离
	var dist = config.pipeDistance;
	// 小鸟当前飞过第index个水管
	var index = Math.floor(pos / dist) - 1;
	// 记录小鸟是否飞过某个水管
	var flyOver = object.flyOver;

	if (index >= 0 && !flyOver[index]) {
		var randomOffset = randomNum(-config.pipeMaxOffset, config.pipeMaxOffset);
		addPipe(index + num, randomOffset);
		flyOver[index] = true;
		flyOver[(index + num) % (num + 1)] = false;

		if (index >= 1) {
			addPipe(index - 1, randomOffset);
		}

		if (index == num) {
			bird.position.z = 0;
			camera.position.z = 600;
		}
	}
}
