const config = require('../common/config');

cc.Class({
  extends: cc.Component,

  properties: {
    icon: cc.Sprite,
    props: {
      default: [],
      type: cc.SpriteFrame
    }
  },

  init (data) {
    let code = data.code;
    this.icon.spriteFrame = this.props[ config.PROP_CODE_MAP[ code ] ];
  }
});
