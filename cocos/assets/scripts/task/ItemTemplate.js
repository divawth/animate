cc.Class({
  extends: cc.Component,

  properties: {
    title: cc.RichText,
    reward: cc.Label,
    buttonText: cc.Label,
    button: cc.Node,
    mask: cc.Node
  },

  gotoSchema (url) {
    window.location.href = url;
  },

  init (data) {
    this.title.string = data.title;
    this.reward.string = data.reward;
    this.buttonText.string = data.buttonText;
    this.schema = data.schema;
    if (!data.canClick) {
      this.button.color = cc.Color.BLACK.fromHEX("#7876CF");
      this.mask.opacity = 255;
    }
    this.button.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        // 调通用分享组件
        if (this.schema) {
          this.gotoSchema(this.schema);
        }
        else {
          $eventEmitter.trigger(
            eventEmitter.RECEIVE_TASK_REWARD_REQ
          );
          let url = encodeURI(`${location.href}`);
          let name = `K 星物语`;
          this.gotoSchema(
            `keep://shareimg?url=${url}&type=event&title=${name}&style=l&channel=wechat_moment_qq_qzone`
          );
        }
      },
      this
    );
  }
});
