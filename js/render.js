
// 帧循环、游戏循环
function animation() {
	if (global.system.pause) {
		// 系统时间
		global.system.time++;
		
		// 修改鸟的形态（可见性）
		if (global.system.time % 6 == 0) {
			modifyBirdModelvisibility();
		}

		rotateReward();

		// 小鸟对象
		var bird = global.bird.birdObject;
		// 移动事件
		moveEvent(bird);

		// 碰撞检测
		checkCollision(bird);

		// 更新并显示当前得分
		updateCurrScore();

		// 绘制新的障碍物和奖励物
		drawNewMapObjects(bird);

		// 渲染当前帧并请求下一次渲染动作
		if (!GAME_OVER) {
			renderer.render(scene, camera);

		} else {
			gameOver();
		}

	}
	requestAnimationFrame(animation);
	stats.update();
}

// 碰撞检测
function checkCollision(bird) {
	if (global.system.time < 10) {
		// 奇怪的bug：游戏一开始，小鸟会默认和一个远处的物体碰撞
		return;
	}
	
	// 水管碰撞检测
	var pipe = collision(bird.coverBox, object.pipeArray);
	if (pipe) {
		GAME_OVER = true;
	}

	var not_null_coverbox = [];
	global.object.reward.coverBoxArray.forEach(coverbox => {
		if (coverbox!=null){
			not_null_coverbox.push(coverbox);
		}
	});


	// 奖励物碰撞检测
	var reward = collision(bird.coverBox, not_null_coverbox);
	if (reward) {
		eatReward(reward.score);
		if (reward.index == global.objectInfo.map.renderNum + 1)
			removeReward(0);
		removeReward(reward.index);
	}
}
//判定奖励物是否生成
function probabilityReward(){
	
	var probability = 0; 
	var result = false;
	//
	if(level<5){
		global.objectInfo.reward.possibility = 0.6;
		probability =  Math.random() + 0.1 *  (score/500); 
	}
	if(level>5&&level<10){
		
		probability = 0.2 * Math.log10(score);
	}
	if(level>10) {probability = Math.random()}
	if(probability < global.objectInfo.reward.possibility){
		result = false;
	}
	else{
		result = true;
	}

	return result;
}

// 绘制新的障碍物和奖励物并处理循环逻辑
// 当遇到最后`globalInfo.mapObject.renderNum`个障碍物时额外渲染
// 通过最后一个障碍物后将场景拉回 循环位置（假设为新关卡（可能））
function drawNewMapObjects(bird) {
	var pipe = objectInfo.pipe;
	var reward = objectInfo.reward;
	// 最多能看到的水管个数
	var renderNum = objectInfo.map.renderNum;
	// 小鸟当前位置
	var pos = -bird.coverBox.position.z;
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
		// 奖励物的随机位置
		var posY = randomNum(height + reward.height / 2, height +
			gap - reward.height / 2);
		// 生成水管到下标index+num处
		addPipe(index + renderNum, offset, height, gap);
		// 同时生成下标index+num处的奖励物
		if(probabilityReward()) { addReward(index + renderNum, offset, posY) };
		// 标注小鸟已经飞过index处的水管
		flyOver[index] = true;
		// 小鸟上一个飞过的水管标注为[未飞过]状态
		index == 1 ? flyOver[renderNum + 1] = false : flyOver[index - 1] = false;
		// 重新生成小鸟身后的水管
		addPipe(index - 1, offset, height, gap);
		// 同时重新生成小鸟身后水管的奖励物
		if(probabilityReward()) {addReward(index - 1, offset, posY)};

		if (index == renderNum + 1) {
			// 回到起点

			backToStartPoint(bird);
		}
	}
}

function rotateReward(){
	var reward = global.object.reward;
	reward.coverBoxArray.forEach(coverBox => {
		if (coverBox !=null)
			coverBox.rotation.y += Math.PI/300;
	});
	
	reward.trueRewardArray.forEach(trueReward => {
		if (trueReward !=null)
			trueReward.rotation.z += Math.PI/300;
	});
}