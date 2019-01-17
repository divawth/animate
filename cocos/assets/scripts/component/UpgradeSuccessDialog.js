
cc.Class({
  extends: cc.Component,

  properties: {
    levelLabel: cc.Label,
    capacityLabel: cc.Label,
    engeyLable: cc.Label,
    rateLabel: cc.Label,
    closeButton: cc.Node,
    dialog: cc.Node
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
    me.capacityLabel.string = options.capacity;
    me.engeyLable.string = options.engey;
    me.rateLabel.string = options.rate;
    me.levelLabel.string = `Lv.${options.level}`;

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
