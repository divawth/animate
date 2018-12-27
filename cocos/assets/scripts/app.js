const util = require('common/util');
const eventEmitter = require('common/eventEmitter');
const config = require('common/config');

cc.Class({
  extends: cc.Component,

  initProtoBufData () {
    require('common/factory')();
  },

  connectWs () {
    let me = this;
    $webSocket.connect(config.WEBSOCKET_URL);

    $eventEmitter.on(
      eventEmitter.WEB_SOCKET_CONNECT_SUCCESS,
      function () {
        me.getMainData();
      }
    );
  },

  getMainData () {
    $webSocket.send(util.serializeData());
  },

  init () {
    this.initProtoBufData();
    this.connectWs();
  },
  onLoad () {
    this.init();
  }
});
