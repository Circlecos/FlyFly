var global = {
	bird: {
		birdObject: {
			trueBird: [], // 鸟的对象
			coverBox: null, // 鸟的包围盒
		},
		birdModelFilePath: [ //鸟的模型路径
			'model/White_Eagle/lower/',
			'model/White_Eagle/normal/',
			'model/White_Eagle/upper/',
			'model/White_Eagle/more_upper/'
		],
		birdObjFileName: [ // 鸟的obj文件名
			'WhiteEagle_lower.obj',
			'WhiteEagle_normal.obj',
			"WhiteEagle_upper.obj",
			"WhiteEagle_moreUpper.obj",
		],
		rotateAngle: [0, 0, 0], // 鸟的旋转角 x轴、y轴、z轴
		shapeModelIndex: 0,
	},

	system: {
		time: 0, // 游戏已进行时间
		score: 0, // 当前得分
		pause: false, // 暂停按钮
		historyTopScore: 0, // 历史最高得分
	},


	// 游戏对象数组
	object: {
		pipeArray: [], // 存储水管对象的数组
		reward: {
			trueRewardArray: [], // 存储奖励物对象的数组
			coverBoxArray: [], // 存储奖励物包围盒的数组
		},
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
			minGap: 500, // 中间可通过的最小间隙
			maxGap: 1000, // 中间可通过的最大间隙
			distance: 1900, // 水管之间的默认距离
			maxOffset: 350, // 水管相对固定位置的最大偏移量
		},
		// 奖励物
		reward: {
			possibility: 4, // 奖励物生成的可能性（possibility/10）
			radius: 55, // 奖励物包围盒的半径（暂定圆柱）
			height: 85, // 奖励物包围盒的高度（暂定圆柱）
			rewardModelFilePath: "", // 奖励物模型文件路径
			rewardModelFileName: "", // 奖励物模型文件名
		}
	},

	// 移动事件参数
	moving: {
		camera: {
			initX: 2500, // 相机初始X坐标
			initY: 1650, // 相机初始Y坐标
			initZ: 0, // 相机初始Z坐标
		},
		moveForwardSpeed: 15, // 前进速度
		moveSideSpeed: 15, // 向左右移动速度
		jumpSpeed: 30, // 跳跃速度
		fallSpeed: 15, // 下降速度
		headRiseSpeed: Math.PI / 720, // 抬头速度（度/帧）
	},

	lights: {
		lightObjects: [], // 存储光线相关（可能使用）
	}
};

// 场景对象参数信息
var objectInfo = global.objectInfo;
// 场景对象数组
var object = global.object;
