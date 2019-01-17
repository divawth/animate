
const eventEmitter = require('../common/eventEmitter');

cc.Class({
  extends: cc.Component,

  properties: {
    countRichText: cc.RichText,
    myArtfactWrapper: cc.Node,
    myArtfactPrefab: cc.Prefab,
    consumeItemWrapper: cc.Node,
    consumeItemPrefab: cc.Prefab,
    dialog: cc.Prefab,
    artifactDetailButton: cc.Node
  },

  dealData () {
    let data = $mock.backpack.data;
    let me = this;
    let countRichText = `<color=#71C7AC>${data.current}</color>\/${data.count}`;
    me.countRichText.string = countRichText;
    // 神器
    var myArtfactPrefab = cc.instantiate(this.myArtfactPrefab);
    me.myArtfactWrapper.addChild(myArtfactPrefab);
    myArtfactPrefab.getComponent('ArtifactTemplate').init(
      data.gifts
    );
    window.$data.myArtfact = {
      count: countRichText,
      gifts: data.gifts
    };

    // 消耗品
    let consumables = data.consumables;
    for (var i = 0; i < consumables.length; ++i) {
      var consumeItemPrefab = cc.instantiate(this.consumeItemPrefab);
      var item = consumables[ i ];
      me.consumeItemWrapper.addChild(consumeItemPrefab);
      consumeItemPrefab.getComponent('ConsumeTemplate').init({
        name: item.name,
        count: item.count,
        icon: item.icon,
        desc: item.desc,
        code: item.code,
        handlerClick: function (item) {
          if (me.dialogInstance) {
            return;
          }
          me.dialogInstance = cc.instantiate(me.dialog);
          me.dialogInstance.getComponent('PropDialog').init({
            title: item.name,
            content: `<color=#71C7AC>${item.desc}</color>`,
            headerImage: item.icon,
            iconCount: item.count,
            handlerClose: function (item) {
              me.dialogInstance = null;
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
          me.node.addChild(me.dialogInstance);
        }
      });
    }
  },

  onLoad () {
    let me = this;
    $eventEmitter.trigger(
      eventEmitter.MY_PACHAGE_PAGE_REQ
    );

    $eventEmitter.on(
      eventEmitter.MY_PACHAGE_PAGE_RES,
      function (event, data) {
        // TODO 处理返回数据
      }
    );
    me.dealData();

    $eventEmitter.on(
      eventEmitter.APPLY_PROP_RES,
      function (event, data) {
        // TODO 根据成败显示 toast 提示
        $tip.show(`已使用${data.name}`);
        me.dialogInstance.hide();
        me.dialogInstance = null;
      }
    );
  }
});
