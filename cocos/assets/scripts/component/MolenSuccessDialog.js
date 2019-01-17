
cc.Class({
  extends: cc.Component,

  properties: {
    dialog: cc.Node,
    priceLabel: cc.Label,
    coinLabel: cc.Label,
    closeButton: cc.Node
  },

  show () {
    this.dialog.runAction(cc.scaleTo(0.2, 1));
  },

  hide () {
    let me = this;
    me.dialog.runAction(cc.scaleTo(0.2, 0));
    me.node.runAction(cc.fadeOut(0.2));
  },

  init (options) {
    let me = this;
    me.priceLabel.string = `相当于 ${options.count / 12} 元`;
    me.coinLabel.string = `${options.count} 卡路里币`;
    me.show();

    me.closeButton.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        let result = options.handlerClose(options);
        if (result !== false) {
          me.hide();
        }
      },
      me
    );
  },
});
