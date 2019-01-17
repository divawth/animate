/**
 * @file 配置文件
 * @author wangtianhua
 */

/**
 * ws 链接地址(pre)
 *
 * @type {number}
 */
exports.WEBSOCKET_URL_PRE = 'ws://api.pre.gotokeep.com/glue/ws';

/**
 * ws 链接地址(线上)
 *
 * @type {number}
 */
exports.WEBSOCKET_URL = 'ws://api.gotokeep.com:7001';

/**
 * ==============================================================
 * 返回消息标识配置
 * ==============================================================
 */

/**
 * 心跳包
 *
 * @type {number}
 */
exports.FLAG_HEART_BEAT = 0;

/**
 * 业务数据包
 *
 * @type {number}
 */
exports.FLAG_BUSSINESS = 1;

/**
 * ==============================================================
 * 返回消息类型配置
 * ==============================================================
 */

/**
 * 请求信息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_REQUEST = 1;

/**
 * 首页信息的返回结果
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_HOME = 2;

/**
 * 数量信息返回结果
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_COUNT = 3;

/**
 * 成败信息返回结果
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_SUCCESS = 4;

/**
 * 用户工厂信息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_FACTORY_OTHER = 5;

/**
 * 工厂信息表
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_FACTORY_MY = 6;

/**
 * 全部工厂信息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_FACTORY_ALL = 7;

/**
 * 我的背包
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_PACKBACK = 8;

/**
 * 道具信息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_TOOL = 9;

/**
 * 任务列表信息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_TASK_LIST = 10;

/**
 * 任务
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_TASK = 11;

/**
 * 任务按钮消息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_TASK_BUTTON = 12;

/**
 * 探索页面信息
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_EXPLORE_PAGE = 13;

/**
 * 道具列表
 *
 * @type {number}
 */
exports.MESSAGE_TYPE_TOOL_LIST = 14;

/**
 * ==============================================================
 * command 相关配置
 * ==============================================================
 */

/**
 * 上线
 *
 * @type {string}
 */
exports.COMMAND_ONLINE = 'transformPbBusiness/online';

/**
 * 下线
 *
 * @type {string}
 */
exports.COMMAND_OFFLINE = 'transformPbBusiness/offline';

/**
 * 首页信息查询
 *
 * @type {string}
 */
exports.COMMAND_QUERY_HOME_INFO = 'transformPbBusiness/queryHomeUserInfo';

/**
 * 收集能量
 *
 * @type {string}
 */
exports.COMMAND_COLLECT_CATOGORY = 'transformPbBusiness/collectCatogory';

/**
 * 我的工厂信息查询
 *
 * @type {string}
 */
exports.COMMAND_USER_FATORY_INFO = 'transformPbBusiness/userFactoryInfo';

/**
 * 所有工厂信息查询
 *
 * @type {string}
 */
exports.COMMAND_ALL_FATORY = 'transformPbBusiness/allFactory';

/**
 * 工厂充能
 *
 * @type {string}
 */
exports.COMMAND_CHARGE_FACTORY = 'transformPbBusiness/chargeFactory';

/**
 * 工厂升级
 *
 * @type {string}
 */
exports.COMMAND_UPGRADE_FACTORY = 'transformPbBusiness/upgradeFactory';

/**
 * 发起掠夺
 *
 * @type {string}
 */
exports.COMMAND_QUERY_ROB_USER = 'transformPbBusiness/queryRobUser';

/**
 * 掠夺能量球
 *
 * @type {string}
 */
exports.COMMAND_ROB = 'transformPbBusiness/rob';

/**
 * 兑换卡路里币
 *
 * @type {string}
 */
exports.COMMAND_EXCHANGE_CATOGORY_POINT = 'transformPbBusiness/exchangeCatogoryPoint';

/**
 * 我的背包页面查询
 *
 * @type {string}
 */
exports.COMMAND_MY_PACKAGE = 'transformPbBusiness/myPackage';

/**
 * 使用道具
 *
 * @type {string}
 */
exports.COMMAND_APPLY_PROP = 'transformPbBusiness/propApply';

/**
 * 探索
 *
 * @type {string}
 */
exports.COMMAND_EXPLORE = 'transformPbBusiness/explore';

/**
 * 探索页面
 *
 * @type {string}
 */
exports.COMMAND_EXPLORE_PAGE = 'transformPbBusiness/explorePage';

/**
 * 我的任务列表页面
 *
 * @type {string}
 */
exports.COMMAND_TASK_PAGE = 'transformPbBusiness/taskPage';

/**
 * 分享成功后前端调用
 *
 * @type {string}
 */
exports.COMMAND_TASK_SHARED = 'transformPbBusiness/taskShared';

/**
 * 领取任务奖励
 *
 * @type {string}
 */
exports.COMMAND_TASK_DRAW = 'transformPbBusiness/taskDraw';

/**
 * 每日随机获得 3 件消耗品
 *
 * @type {string}
 */
exports.COMMAND_CONSUMABLES_GET = 'transformPbBusiness/getThreeConsumables';

/**
 * 没有探索到神器
 *
 * @type {string}
 */
exports.PROP_TYPE_NOTHING = 0;

/**
 * 探索到消耗品
 *
 * @type {string}
 */
exports.PROP_TYPE_CONSUMABLES = 1;

/**
 * 探索到神器
 *
 * @type {string}
 */
exports.PROP_TYPE_ARTIFACT = 2;

/**
 * 神器对应的 code
 *
 * @type {string}
 */
exports.PROP_CODE_MAP = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
};

/**
 * 能量值边界
 *
 * @type {string}
 */
exports.ENERGY_VALUE_BOUNDARY_MORE = 200;

exports.ENERGY_VALUE_BOUNDARY_NORMAL = 100;

exports.ENERGY_VALUE_BOUNDARY_LESS = 80;
