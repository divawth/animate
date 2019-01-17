exports.list = [
  {
    requirement: `完成 30 分钟运动`, // 任务要求
    award: `探索机会 +1`, // 奖励文案
    taskButton: {
      text: '已完成',
      schema: null
    },
    canClick: false // 是否可以点击 button
  },
  {
    requirement: `完成任一课程`, // 任务要求
    award: `探索机会 +1`, // 奖励文案
    taskButton: {
      text: '去完成',
      schema: 'keep://recommend_courses/'
    },
    canClick: true // 是否可以点击 button
  },
  {
    requirement: `跑步、骑行或行走累计满 2 公里`, // 任务要求
    award: `探索机会 +1`, // 奖励文案
    taskButton: {
      text: '领取奖励',
      schema: 'keep://running/'
    },
    canClick: true // 是否可以点击 button
  },
  {
    requirement: `去社区为 5 条动态加油	`, // 任务要求
    award: `探索机会 +1`, // 奖励文案
    taskButton: {
      text: '领取奖励',
      schema: 'keep://feed/hot?title=xxx'
    },
    canClick: true // 是否可以点击 button
  },
  {
    requirement: `邀请好友加入「K 星物语」`, // 任务要求
    award: `探索机会 +1`, // 奖励文案
    taskButton: {
      text: '去完成',
      schema: null
    },
    canClick: false // 是否可以点击 button
  }
];


