/**
 * @file 事件处理
 * @author wangtianhua
 */

const Emitter = require('./core/Emitter');

exports.init = function () {
  window.$eventEmitter = new Emitter();
}

/**
 * webSocket 链接成功
 *
 * @type {string}
 */
exports.WEB_SOCKET_CONNECT_SUCCESS = 'web_socket_connect_success';

/**
 * webSocket 链接失败
 *
 * @type {string}
 */
exports.WEB_SOCKET_CONNECT_ERROR = 'web_socket_connect_error';

/**
 * webSocket 链接超时
 *
 * @type {string}
 */
exports.WEB_SOCKET_CONNECT_TIMEOUT = 'web_socket_connect_timeout';

/**
 * webSocket 链接关闭
 *
 * @type {string}
 */
exports.WEB_SOCKET_CONNECT_CLOSE = 'web_socket_connect_close';

/**
 * webSocket 发起请求
 *
 * @type {string}
 */
exports.WEB_SOCKET_MESSAGE_REQ = 'web_socket_message_req';

/**
 * webSocket 收到消息
 *
 * @type {string}
 */
exports.WEB_SOCKET_MESSAGE_RES = 'web_socket_message_res';

/**
 * 首页信息查询
 *
 * @type {string}
 */
exports.REQUEST_HOME_MESSAGE_REQ = 'request_home_message_req';

/**
 * 首页信息查询
 *
 * @type {string}
 */
exports.REQUEST_HOME_MESSAGE_RES = 'request_home_message_res';

/**
 * 请求任务列表
 *
 * @type {string}
 */
exports.REQUEST_TASK_LIST_REQ = 'request_task_list_req';

/**
 * 请求任务列表(返回)
 *
 * @type {string}
 */
exports.REQUEST_TASK_LIST_RES = 'request_task_list_res';

/**
 * 领取任务奖励
 *
 * @type {string}
 */
exports.RECEIVE_TASK_REWARD_REQ = 'receive_task_reward_req';

/**
 * 领取任务奖励
 *
 * @type {string}
 */
exports.RECEIVE_TASK_REWARD_RES = 'receive_task_reward_res';

/**
 * 请求探索页面信息
 *
 * @type {string}
 */
exports.REQUEST_SEARCH_PAGE_REQ = 'request_search_page_req';

/**
 * 请求任务列表(返回)
 *
 * @type {string}
 */
exports.REQUEST_SEARCH_PAGE_RES = 'request_search_page_res';

/**
 * 点击探索按钮
 *
 * @type {string}
 */
exports.REQUEST_SEARCH_CLICK = 'request_search_click';

/**
 * 使用神器
 *
 * @type {string}
 */
exports.APPLY_PROP_REQ = 'apply_prop_req';

/**
 * 使用神器
 *
 * @type {string}
 */
exports.APPLY_PROP_RES = 'apply_prop_res';

/**
 * 我的背包页面信息
 *
 * @type {string}
 */
exports.MY_PACHAGE_PAGE_REQ = 'my_pachage_page_req';

/**
 * 我的背包页面信息
 *
 * @type {string}
 */
exports.MY_PACHAGE_PAGE_RES = 'my_pachage_page_res';

/**
 * 发起掠夺
 *
 * @type {string}
 */
exports.PLUNDER_REQ = 'plunder_req';

/**
 * 发起掠夺
 *
 * @type {string}
 */
exports.PLUNDER_RES = 'plunder_res';

/**
 * 查询工厂信息
 *
 * @type {string}
 */
exports.SEARCH_MYFACTORY_PAGE_REQ = 'search_myfactory_page_req';

/**
 * 查询工厂信息
 *
 * @type {string}
 */
exports.SEARCH_MYFACTORY_PAGE_RES = 'search_myfactory_page_res';

/**
 * 升级工厂
 *
 * @type {string}
 */
exports.UPGRADE_FACTORY_REQ = 'upgrade_factory_req';

/**
 * 升级工厂
 *
 * @type {string}
 */
exports.UPGRADE_FACTORY_RES = 'upgrade_factory_res';

/**
 * 熔铸卡路里币
 *
 * @type {string}
 */
exports.MOLTEN_CALORIE_COINS_REQ = 'molten_calorie_coin_req';

/**
 * 熔铸卡路里币
 *
 * @type {string}
 */
exports.MOLTEN_CALORIE_COINS_RES = 'molten_calorie_coin_res';
