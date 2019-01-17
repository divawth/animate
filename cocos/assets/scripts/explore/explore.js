const eventEmitter = require('../common/eventEmitter');
const config = require('../common/config');

cc.Class({
  extends: cc.Component,

  properties: {
    number: cc.Label,
    explore: cc.Node,
    dialog: cc.Prefab,
    nothingLable: cc.Node,
    animation: cc.Animation
  },

  getProps (item) {
    let me = this;
    if (item.type === config.PROP_TYPE_NOTHING) {
      this.nothingLable.opacity = 255
    }
    else {
      me.dialogInstance = cc.instantiate(this.dialog);
      me.dialogInstance.getComponent('PropDialog').init({
        title: item.name,
        content: `<color=#71C7AC>${item.desc}</color>`,
        headerImage: item.icon,
        iconCount: item.count,
        code: item.code,
        desc: item.desc,
        handlerClose: function () {
          me.dialogInstance = null;
          // TODO 关闭之后从新请求探索页面的数据
        },
        handlerButton: function (item) {
          $eventEmitter.trigger(
            eventEmitter.APPLY_PROP_REQ,
            {
              code: item.code
            }
          );
          me.dialogInstance = null;
        }
      });
      this.node.addChild(me.dialogInstance);
    }
  },

  dealData () {
    let data = $mock.search;
    let me = this;
    me.number.string = data.exploreNumRemain;
    if (data.noTaskTodo) {
      // TODO 置灰按钮
    }
    // TODO 引导用户转至任务板
    me.explore.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        if (me.dialogInstance) {
          return;
        }
        $eventEmitter.trigger(
          eventEmitter.REQUEST_SEARCH_CLICK_REQ
        );
        // TODO 删除下面这段
        this.getProps($mock.explore);
      },
      this
    );
  },

  onLoad () {
    $eventEmitter.trigger(
      eventEmitter.REQUEST_SEARCH_PAGE_REQ
    );

    $eventEmitter.on(
      eventEmitter.REQUEST_SEARCH_PAGE_RES,
      function (event, data) {
        // TODO 处理返回数据
      }
    );

    $eventEmitter.on(
      eventEmitter.MESSAGE_TYPE_EXPLORE_RES,
      function (event, data) {
        // TODO 获得了道具
        // this.getProps(data)
      }
    );

    $eventEmitter.on(
      eventEmitter.APPLY_PROP_RES,
      function (event, data) {
        // TODO 根据成败显示 toast 提示
        me.dialogInstance.hide();
        me.dialogInstance = null;
      }
    );
    this.dealData();
  }

});
