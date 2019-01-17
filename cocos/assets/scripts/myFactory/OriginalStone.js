cc.Class({
  extends: cc.Component,

  properties: {
    icon: cc.Sprite,
    nameLabel: cc.Label
  },
  init (data) {
    this.nameLabel.string = data.name;
  }
});
