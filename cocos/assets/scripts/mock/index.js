var task = require('./task');

export default {
  task,
  search: {
    command: '11',
    exploreNumRemain: 3, //剩余探索次数
    noTaskTodo: false
  },
  explore: {
    command: 1,
    name: '小瓶能量补剂',    //道具名
    code: 3,     //道具代码
    type: 1,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
    desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
    icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
    count: 7    //道具数量
  },
  backpack: {
    data: {
      command: '',
      count: 100,
      current: 30,
      gifts: [
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 3,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 1,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 4,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 2,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        }
      ],         //我的神器
      consumables: [
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 3,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 3,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '大瓶能量补剂',    //道具名
          code: 4,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 3    //道具数量
        },
        {
          command: 1,
          name: '大瓶能量补剂',    //道具名
          code: 4,     //道具代码
          type: 0,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 3    //道具数量
        }
      ]   //我的消耗品
    }
  },

  plunder: {
    data: {
      command: 1,
      id: 2,            //主键
      userId: 3,       //用户Id
      factoryLevel: 4,     //工厂等级
      factoryCatogory: 5,  //当前工厂级别下的充能能量
      catogoryPool: 6,     //当前能量槽能量
      protectTime: 7,      //保护罩结束时间
      producePromotion: 8, //产能加成
      promotionEndTime: 9, //产能加成结束时间
      robNumRemain: 10,    //剩余掠夺次数
      exploreNumRemain: 11,//剩余探索次数
      myGift: 12,         //我的神器Id set
      catogoryBall: 13,    //能量球
      catogoryPoolCapacity: 14,//能量槽容量
      userName: 15,
    }
  },

  myFactory: {
    command: '',
    catogoryPool: 1280,         //当前能量槽能量
    catogoryPoolCapacity: 2000, //能量槽容量
    factoryCatogory: 4,      //当前工厂级别下的充能能量
    factory: {
      command: '',
      exchangeRate: '12:1', //兑换率
      level: 4,        //工厂等级
      production: 40,   //工厂产能
      capacity: 3600,     //工厂储量
      upgradeNeedCatogory: 4000,  //升级所需能量
      needArtifact: true,
      myProps: [
        {
          command: 1,
          name: '小瓶能量补剂',    //道具名
          code: 3,     //道具代码
          type: 1,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        }
      ],
      props: [
        {
          command: 1,
          name: '原石 2 号',    //道具名
          code: 3,     //道具代码
          type: 1,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '原石 1 号',    //道具名
          code: 6,     //道具代码
          type: 1,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '原石 2 号',    //道具名
          code: 3,     //道具代码
          type: 1,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
        {
          command: 1,
          name: '原石 2 号',    //道具名
          code: 3,     //道具代码
          type: 1,     //道具类型{ 0 无奖, 1 普通消耗品, 2 神器}
          desc: '可以展开致密的能量护罩。使用后工厂 24 小时免受掠夺	',    //道具描述
          icon: 'https://kapi.sre.gotokeep.com/api/user/avatar?uid=421',    //道具图标
          count: 7    //道具数量
        },
      ],
    }       //当前工厂信息
  }

}
