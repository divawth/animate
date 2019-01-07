/**
 * @file WebSocket 封装
 * @author wangtianhua
 */

const STATUS_NONE = 0;
const STATUS_OPEN = 1;
const STATUS_ERROR = 2;
const STATUS_CLOSE = 3;
const STATUS_TIMEOUT = 4;
const STATUS_CONNECTING = 5;

export default class WebSocket {

  /**
   *
   * @param {Object} options
   * @property {Object} options.native WebSocket 的底层实现类，不同环境会有不同的实现，比如小程序
   * @property {?number} options.interval 尝试连接服务器时的间隔
   * @property {?number} options.timeout 连接单个服务器的超时时间
   * @property {?number} options.retryCount 当连接不成功时，尝试重连的最大次数
   * @property {?boolean} options.connectOnClose 连接中断时，是否自动重连
   * @property {?Function} options.onOpen 成功建立连接
   * @property {?Function} options.onClose 连接被关闭
   * @property {?Function} options.onSend 发出消息
   * @property {?Function} options.onReceive 收到消息
   * @property {?Function} options.onError 连接发生错误
   * @property {?Function} options.onTimeout 连接超时
   */
  constructor (options) {
    Object.assign(this, options);
    this.status = STATUS_NONE;
    if (options.retryCount > 0) {
      this.retryIndex = 0;
    }
  }

  /*
  * 状态查询
  */
  isOpen () {
    return this.status === STATUS_OPEN;
  }

  /*
  * 状态查询
  */
  isConnecting () {
    return this.status === STATUS_CONNECTING;
  }

  connect (url) {
    let me = this;
    if (me.status === STATUS_OPEN
      || me.status === STATUS_CONNECTING
    ) {
      return;
    }

    let connectServer = function (url, callback) {
      var socket = new me.native(url);
      var timer;
      var connectComplete = function (status) {
        if (timer) {
          clearTimeout(timer);
        }
        socket.onopen =
        socket.onerror = null;
        callback(socket, url, status);
      };

      socket.onopen = function () {
        connectComplete(STATUS_OPEN);
      };

      socket.onerror = function () {
        connectComplete(STATUS_ERROR);
      };

      if (me.timeout > 0) {
        timer = setTimeout(
          function () {
            timer = null;
            connectComplete(STATUS_TIMEOUT);
          },
          me.timeout
        );
      }
    };
    me.status = STATUS_CONNECTING;

    let nextConnect = function (url) {
      if (me.interval > 0) {
        setTimeout(connectServer, me.interval);
      }
      else {
        connectServer();
      }
    };
    connectServer(url, function (socket, url, status) {
      if (me.status !== STATUS_CONNECTING) {
        return;
      }

      if (status === STATUS_OPEN) {
        me.url = url;
        me.socket = socket;
        me.status = STATUS_OPEN;

        socket.onmessage = function (event) {
          if (me.status === STATUS_OPEN) {
            me.onReceive(
              event.data
            );
          }

        };
        socket.onclose = function (event) {
          if (me.status === STATUS_OPEN) {
            if (me.connectOnClose) {
              me.status = STATUS_NONE;
              me.connect(url);
            }
            else if (me.onClose) {
              me.onClose(event);
            }
          }
        };
        if (me.retryCount > 0) {
          me.retryIndex = 0;
        }
        if (me.onOpen) {
          me.onOpen({
            url: url
          });
        }
      }
      else {
        if (me.retryCount > 0
          && me.retryIndex++ < me.retryCount
        ) {
          nextConnect(url);
          return;
        }
        switch (me.status = status) {
          case STATUS_ERROR:
            if (me.onError) {
              me.onError();
            }
            break;
          case STATUS_TIMEOUT:
            if (me.onTimeout) {
              me.onTimeout();
            }
            break;
          default:
            nextConnect(url);
        }
      }
    });

  }

  send (data) {

    let socket = this.socket;

    if (socket) {
      socket.send(
        data
      );
    }

  }

  close () {
    let socket = this.socket;
    this.socket = null;
    this.status = STATUS_CLOSE;
    if (socket) {
      socket.onmessage =
      socket.onclose = null;
      socket.close();
    }
  }
}
