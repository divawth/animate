
const eventEmitter = require('../common/eventEmitter');

cc.Class({
  extends: cc.Component,

  properties: {
    itemPrefab: cc.Prefab
  },

  dealData () {
    let list = $mock.task.list;
    for (var i = 0; i < list.length; ++i) {
      var itemPrefab = cc.instantiate(this.itemPrefab);
      var item = list[ i ];
      this.node.addChild(itemPrefab);
      itemPrefab.getComponent('ItemTemplate').init({
        title: item.requirement,
        reward: item.award,
        buttonText: item.taskButton.text,
        schema: item.taskButton.schema,
        canClick: item.canClick
      });
    }
  },

  onLoad () {
    $eventEmitter.trigger(
      eventEmitter.REQUEST_TASK_LIST_REQ
    );

    $eventEmitter.on(
      eventEmitter.REQUEST_TASK_LIST_RES,
      function (event, data) {
        // TODO 处理返回数据
      }
    );

    this.dealData();
  }
});
