var global = {
	bird: {
		birdObject: [null,null], // 鸟的对象
		birdModelFilePath: 'model/White_Eagle/', //鸟的模型路径
		birdModelFileName: 'Eagle02_sale.obj', // 鸟的模型文件名
		rotateAngle:[0,0,0] // 鸟的旋转角 x轴、y轴、z轴
	},

	system: {
		time: 0, // 游戏已进行时间
		score: 0, // 当前得分
		pause: false, // 暂停按钮
		historyTopScore: 0, // 历史最高得分
	},

	// 游戏设置（可变参数）
	config: {
		
	},
	
	// 游戏对象参数
	objectInfo:{
		// 地图
		map:{
			ground: [10000, 100], // [0]地图尺寸  [1]网格大小
			roadWidth: 500, // 路宽
			renderNum: 4, // 最多能看到的水管个数
		},
		// 水管
		pipe:{
			minHeight: 1000, // 底部水管最低高度
			maxHeight: 2000, // 底部水管最高高度
			minGap: 350, // 中间可通过的最小间隙
			maxGap: 1000, // 中间可通过的最大间隙
			distance: 1500, // 水管之间的默认距离
			maxOffset: 350, // 水管相对固定位置的最大偏移量
		},
		// 小鸟包围盒
		birdCoverBox:{
			radius:50,//
			
		}
	},

	moving: {
		camera: {
			initX: 0, // 相机初始X坐标
			initY: 0, // 相机初始Y坐标
			initZ: 450, // 相机初始Z坐标
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
