/**
 * @file ws 初始化
 * @author wangtianhua
 */
const Socket = require('./core/Socket');
const eventEmitter = require('./eventEmitter');

exports.init = function () {
  let socket = new Socket({
    interval: 1000,
    retryCount: 1,
    timeout: 50000,
    connectOnClose: true,
    native: window.WebSocket,
    onReceive: function (data) {
      let result = util.unSerializeData(data);
      $eventEmitter.trigger(
        eventEmitter.WEB_SOCKET_MESSAGE_RES,
        result
      );
    },
    onOpen: function () {
      console.log('open');
      $eventEmitter.trigger(
        eventEmitter.WEB_SOCKET_CONNECT_SUCCESS
      );
    },
    onClose: function () {
      console.log('onClose');
      $eventEmitter.trigger(
        eventEmitter.WEB_SOCKET_CONNECT_CLOSE
      );
    },
    onError: function () {
      console.log('onError');
      $eventEmitter.trigger(
        eventEmitter.WEB_SOCKET_CONNECT_ERROR
      );
    },
    onTimeout: function () {
      console.log('onTimeout');
      $eventEmitter.trigger(
        eventEmitter.WEB_SOCKET_CONNECT_TIMEOUT
      );
    }
  });

  window.$webSocket = socket;
}

