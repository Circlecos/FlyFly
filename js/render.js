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
	var index = Math.floor(pos / dist);
	// 记录小鸟是否飞过某个水管
	var flyOver = object.flyOver;

	if (index >= 1 && !flyOver[index]) {
		// 水管的随机参数
		var offset = randomNum(-config.pipeMaxOffset, config.pipeMaxOffset);
		var height = randomNum(config.pipeMinHeight, config.pipeMaxHeight);
		var gap = randomNum(config.pipeMinGap, config.pipeMaxGap);
		// 生成水管到下标index+num处
		addPipe(index + num, offset, height, gap);
		// 标注小鸟已经飞过index处的水管
		flyOver[index] = true;
		// 小鸟上一个飞过的水管标注为[未飞过]状态
		index == 1 ? flyOver[num + 1] = false : flyOver[index - 1] = false;
		// 重新生成小鸟身后的水管
		addPipe(index - 1, offset, height, gap);

		if (index == num + 1) {
			// 回到起点
			bird.position.z = 0;
			camera.position.z = globalInfo.moving.camera.initZ;
		}
	}
}
