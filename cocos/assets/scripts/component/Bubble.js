const sizeMap = [ 226, 180, 136 ];
const fontSizeMap = [ 42, 34, 24 ];
const config = require('../common/config');

cc.Class({
  extends: cc.Component,

  properties: {
    animation: cc.Animation,
    bubbleSprite: cc.Node,
    bubbleLable: cc.Label,
    bubbleLableSprite: cc.Node,
    button: cc.Node
  },

  onLoad () {
    var animationState = this.animation.play('bubble');
    animationState.repeatCount = Infinity;

    this.init({
      number: 220
    });
  },

  init (data) {
    let me = this;
    let size = sizeMap[ 0 ];
    let fontSize = fontSizeMap[ 0 ];
    if (data.number < config.ENERGY_VALUE_BOUNDARY_LESS) {
      size = sizeMap[ 2 ];
      fontSize = fontSizeMap[ 2 ];
    }
    else if (data.number < config.ENERGY_VALUE_BOUNDARY_NORMAL && data.number > config.ENERGY_VALUE_BOUNDARY_LESS) {
      size = sizeMap[ 1 ];
      fontSize = fontSizeMap[ 1 ];
    }
    me.bubbleSprite.width = size;
    me.bubbleSprite.height = size;
    me.bubbleLable.string = data.number;
    me.bubbleLable.fontSize = fontSize;
    me.bubbleLableSprite.height = fontSize;
    me.bubbleLableSprite.width = fontSize / 1.4;
    me.button.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        me.animation.play('bubble_out');
        // 解绑
      },
      me
    );
  }
});
