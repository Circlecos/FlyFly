var global = {
	system: {
		time: 0, // 游戏已进行时间
		score: 0, // 当前得分
		pause: false, // 暂停按钮
		historyTopScore: 0, // 历史最高得分
	},

	bird: {
		birdObject: [null, null], // 鸟的对象 [0]本体对象 [1]包围盒对象
		birdTextureFile: null, // 鸟的纹理文件
	},

	// 游戏对象数组
	object: {
		pipeArray: [], // 存储水管对象的数组
		rewardArray: [], // 存储奖励物对象的数组
		wallArray: [], // 存储两侧墙体对象的数组
		flyOver: [], // 记录小鸟最近飞过的水管
	},

	// 游戏对象参数
	objectInfo: {
		// 地图
		map: {
			ground: [10000, 100], // [0]地图尺寸 [1]网格大小
			roadWidth: 500, // 路宽
			renderNum: 4, // 最多能看到的水管个数
		},
		// 水管
		pipe: {
			minHeight: 500, // 底部水管最低高度
			maxHeight: 2500, // 底部水管最高高度
			minGap: 450, // 中间可通过的最小间隙
			maxGap: 1000, // 中间可通过的最大间隙
			distance: 1750, // 水管之间的默认距离
			maxOffset: 350, // 水管相对固定位置的最大偏移量
		},
		// 小鸟的包围盒（暂定圆柱）
		birdCoverBox: {
			radius: 25, // 圆柱半径
			height: 50, // 圆柱高度
		}
	},

	// 移动事件参数
	moving: {
		camera: {
			initX: 2500, // 相机初始X坐标
			initY: 1000, // 相机初始Y坐标
			initZ: 0, // 相机初始Z坐标
		},
		moveForwardSpeed: 15, // 前进速度
		moveSideSpeed: 15, // 向左右移动速度
		jumpSpeed: 30, // 跳跃速度
		fallSpeed: 15, // 下降速度
	},

	lights: {
		lightObjects: [], // 存储光线相关（可能使用）
	}
};
