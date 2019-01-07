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
 * @type {number}
 */
exports.WEB_SOCKET_CONNECT_SUCCESS = 'web_socket_connect_success';

/**
 * webSocket 链接失败
 *
 * @type {number}
 */
exports.WEB_SOCKET_CONNECT_ERROR = 'web_socket_connect_error';

/**
 * webSocket 链接超时
 *
 * @type {number}
 */
exports.WEB_SOCKET_CONNECT_TIMEOUT = 'web_socket_connect_timeout';

/**
 * webSocket 链接关闭
 *
 * @type {number}
 */
exports.WEB_SOCKET_CONNECT_CLOSE = 'web_socket_connect_close';

/**
 * webSocket 发起请求
 *
 * @type {number}
 */
exports.WEB_SOCKET_MESSAGE_REQ = 'web_socket_message_req';

/**
 * webSocket 收到消息
 *
 * @type {number}
 */
exports.WEB_SOCKET_MESSAGE_RES = 'web_socket_message_res';

