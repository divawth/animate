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
    $webSocket.connect(config.WEBSOCKET_URL_PRE);

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

  getUserInfo () {
    util.get('https://kapi.sre.gotokeep.com/mock/293/user/queryUser')
    .then(function (response) {
      if (response.exist) {
        // TODO 用户存在
      }
      else {
        // TODO 用户不存在
      }
    })
  },

  init () {
    this.getUserInfo();
    this.initProtoBufData();
    this.connectWs();
  },
  onLoad () {
    this.init();
  }
});
