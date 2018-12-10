var globalInfo = {
  bird:{
    birdObject: null,// 鸟的对象
    birdTextureFile: null,// 鸟的纹理文件
  },
  system: {
    time: null,// 游戏已进行时间
    score: null, // 当前得分
    pause: null, // 暂停按钮
    historyTopScore:null,  // 历史最高得分
  },
  moving:{
    camera:{ 
        eye: [],
        at: [-0.5, 0, 0.5],
        up: [0, 1, 0],
    },
    moveForwardSpeed:null, // 前进/后退速度
    moveSideSpeed:null,    // 向左右移动速度
  },
  mapObject:{
    obstaclesArray:[], // 存储障碍物对象的数组
    rewardArray:[],    // 存储奖励物对象的数组
    wallArray:[],      // 存储两侧墙体对象的数组
    groundSize: [null,null], // 地面大小
    renderNum: 4,      // 同时渲染的障碍物个数
  },

  lights:{
    lightObjects:[],   // 存储光线相关（可能使用）
  }

};