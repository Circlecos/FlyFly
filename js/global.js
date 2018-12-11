var globalInfo = {
	bird: {
		birdObject: null, // 鸟的对象
		birdTextureFile: null, // 鸟的纹理文件
	},

	system: {
		time: null, // 游戏已进行时间
		score: null, // 当前得分
		pause: null, // 暂停按钮
		historyTopScore: null, // 历史最高得分
	},

	config: {
		ground: [10000, 100], // [0]地图尺寸  [1]网格大小
		roadWidth: 500, // 路宽
		pipeMinHeight: 1000, // 底部水管最低高度
		pipeMaxHeight: 2000, // 底部水管最高高度
		pipeMinGap: 350, // 中间可通过的最小间隙
		pipeMaxGap: 1000, // 中间可通过的最大间隙
		pipeDistance: 1500, // 水管之间的默认距离
		pipeMaxOffset: 350, // 水管相对固定位置的最大偏移量
		renderNum: 4, // 最多能看到的水管个数
	},

	moving: {
		camera: {
			eye: [],
			at: [-0.5, 0, 0.5],
			up: [0, 1, 0],
		},
		moveForwardSpeed: null, // 前进/后退速度
		moveSideSpeed: null, // 向左右移动速度
	},

	object: {
		pipeArray: [], // 存储水管对象的数组
		rewardArray: [], // 存储奖励物对象的数组
		wallArray: [], // 存储两侧墙体对象的数组
		flyOver: [], // 记录小鸟最近飞过的水管
	},

	lights: {
		lightObjects: [], // 存储光线相关（可能使用）
	}
};
