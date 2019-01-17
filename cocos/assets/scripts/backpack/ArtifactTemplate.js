
const eventEmitter = require('../common/eventEmitter');

var ArtifactItem = cc.Class({
  name: 'artifactItem',
  properties: {
    item: cc.Sprite,
    itemIcon: cc.Sprite
  }
});

cc.Class({
  extends: cc.Component,

  properties: {
    items: {
      default: [],
      type: ArtifactItem
    },
    itemBg: cc.SpriteFrame
  },

  init (data) {
    let me = this;
    let list = this.items;

    list.forEach((node, index) => {
      if (data[ index ]) {
        node.itemIcon.node.opacity = 0;
        node.item.spriteFrame = me.itemBg;
        // TODO 下载图片之后处理
        // node.itemIcon.spriteFrame = data[ index ].icon;
      }
      else {
        node.itemIcon.node.opacity = 0;
      }
    });
  }
});
