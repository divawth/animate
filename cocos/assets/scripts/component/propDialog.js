cc.Class({
  extends: cc.Component,

  properties: {
    headerImage: cc.Sprite,
    countLabel: cc.Label,
    countWrapper: cc.Node,
    title: cc.Label,
    content: cc.RichText,
    buttonLabel: cc.Label,
    button: cc.Node,
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

  /**
   *
   * @param {Object} options
   * @property {?string} options.icon 图标 尺寸 220 * 220
   * @property {?string} options.title 标题 默认为【温馨提示】
   * @property {?string} options.content 内容
   * @property {?string} options.buttonText 按钮文字默认为【去使用】
   * @property {?string} options.iconCount 头图数量
   * @property {?cc.SpriteFrame} options.background 背景图默认一个
   * @property {?Function} options.handlerButton 点击按钮的事件
   * @property {?Function} options.handlerClose 点击关闭的事件
   */
  init (options) {
    let me = this;
    me.title.string = options.title || '温馨提示';
    me.content.string = options.content;
    me.buttonLabel.string = options.buttonLabel || '去使用';
    if (!options.iconCount) {
      me.countWrapper.opacity = 0;
    }
    else {
      me.countLabel.string = options.iconCount;
    }
    // 设置背景图
    if (options.background) {
      me.node.spriteFrame = options.background;
    }

    // TODO 设置头图
    // cc.loader.load({
    //   url: options.headerImage,
    //   type: 'png'
    // }, function(err, img) {
    //   me.headerImage.spriteFrame = new cc.SpriteFrame(img);
    // });

    me.show();

    me.closeButton.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        let result = options.handlerClose(options);
        if (result !== false) {
          me.hide();
        }
      },
      this
    );

    me.button.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        let result = options.handlerButton(options);
        if (result !== false) {
          me.hide();
        }
      },
      this
    );
  }
});
