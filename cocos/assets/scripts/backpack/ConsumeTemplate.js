
const eventEmitter = require('../common/eventEmitter');

cc.Class({
  extends: cc.Component,

  properties: {
    title: cc.Label,
    number: cc.Label,
    itemIcon: cc.Sprite
  },

  /**
   *
   * @param {Object} options
   * @property {?string} options.name 名称
   * @property {?string} options.count 数量
   * @property {?string} options.icon 图标
   * @property {?Function} options.handlerClick 点击事件
   *
   */
  init (options) {
    let me = this;
    me.title.string = options.name;
    me.number.string = options.count > 99 ? '99+' : options.count;
    // TODO 设置 icon
    // me.itemIcon.spriteFrame = options.icon;

    me.node.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        options.handlerClick(options);
      },
      this
    );
  }
});

