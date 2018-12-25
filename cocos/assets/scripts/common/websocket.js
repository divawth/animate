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

cc.Class({
  extends: cc.Component,
  ctor (options) {
    Object.assign(this, options);
    this.status = STATUS_NONE;
    if (options.retryCount > 0) {
      this.retryIndex = 0;
    }
  },

  isOpen () {
    return this.status === STATUS_OPEN;
  },

  isConnecting () {
    return this.status === STATUS_CONNECTING;
  },

  connect (url) {
    let me = this;

    if (me.status === STATUS_OPEN
      || me.status === STATUS_CONNECTING
    ) {
      return;
    }

    let socket = new me.native(url);
    let timer;

    let connectComplete = function (status) {
      if (timer) {
        clearTimeout(timer);
      }
      socket.onopen =
      socket.onerror = null;
      callback(socket, server, status);
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
    
    me.status = STATUS_CONNECTING;
  },

  send (data) {

    let socket = this.socket;
    if (socket) {
      socket.send(
        typeof data === 'string'
        ? data
        : JSON.stringify(data)
      );
      if (this.onSend) {
        this.onSend(data);
      }
    }

  },

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
});
