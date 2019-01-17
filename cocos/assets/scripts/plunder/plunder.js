const eventEmitter = require('../common/eventEmitter');
const config = require('../common/config');

cc.Class({
  extends: cc.Component,

  properties: {

  },

  dealData (data) {
    let data = $mock.plunder.data;
    let me = this;
    if (!data.robNumRemain) {
      $tips.show(`今日没有掠夺的机会了`);
    }
    else {
      // TODO 展示下一个按钮 绑定事件
      me.plunderButton.on(
        cc.Node.EventType.TOUCH_START,
        function () {
          $eventEmitter.trigger(
            eventEmitter.PLUNDER_REQ
          );
        },
        this
      );
    }
  },

  onLoad () {
    $eventEmitter.trigger(
      eventEmitter.PLUNDER_REQ
    );
    $eventEmitter.on(
      eventEmitter.PLUNDER_RES,
      function (event, data) {
        // TODO 处理返回数据
      }
    );
    this.dealData();
  }

});
