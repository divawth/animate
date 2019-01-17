const eventEmitter = require('../common/eventEmitter');
const config = require('../common/config');

cc.Class({
  extends: cc.Component,

  properties: {
    levelLabel: cc.Label,
    catogoryPoolLabel: cc.Label,
    proportionLabel: cc.Label,
    artifactWrapper: cc.Node,
    originalStonePrefab: cc.Prefab,
    upgradeButton: cc.Node,
    exchangeRateLabel: cc.Label,

    makingNode: cc.Node,
    makingButton: cc.Node,
    capacityLabel: cc.Label,
    coinLabel: cc.Label,

    dialog: cc.Prefab,
    molenDialog: cc.Prefab
  },

  dealData () {
    let data = $mock.myFactory;
    let me = this;
    let factory = data.factory;
    me.levelLabel.string = `Lv.${factory.level}`;
    me.catogoryPoolLabel.string = `${data.catogoryPool}/${data.catogoryPoolCapacity}`;
    me.proportionLabel.string = `${factory.capacity}/${factory.upgradeNeedCatogory}`;

    if (factory.needArtifact) {
      me.artifactWrapper.opacity = 255;
      let needProps = factory.props;
      let myProps = factory.myProps;
      for (var i = 0; i < needProps.length; ++i) {
        var originalStonePrefab = cc.instantiate(this.originalStonePrefab);
        me.artifactWrapper.addChild(originalStonePrefab);
        // TODO 设置我的神器 icon
        originalStonePrefab.getComponent('OriginalStone').init({
          name: needProps[ i ].name,
          icon: myProps[ i ] && myProps[ i ].icon
        });
      }
    }
    else {
      me.artifactWrapper.height = 0;
      me.artifactWrapper.opacity = 0;
    }

    let canUpgrade = data.catogoryPool >= (factory.upgradeNeedCatogory - factory.capacity);
    if (!canUpgrade) {
      me.upgradeButton.opacity = 255 * 0.5;
    }

    me.upgradeButton.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        $eventEmitter.trigger(
          eventEmitter.UPGRADE_FACTORY_REQ
        );

        // TODO 删除下面的
        me.dialogInstance = cc.instantiate(this.dialog);
        me.dialogInstance.getComponent('UpgradeSuccessDialog').init({
          capacity: '2',
          engey: '21',
          rate: '21',
          level: '2',
          handlerClose: function () {
            me.dialogInstance = null;
            // TODO 关闭之后从新请求工厂数据
          }
        });
        this.node.addChild(me.dialogInstance);
      },
      this
    );

    if (factory.level > 3) {
      me.makingNode.opacity = 255;
      me.makingNode.height = 580;

      me.exchangeRateLabel.string = `兑换率 ${factory.exchangeRate}`;
      me.capacityLabel.string = `${factory.capacity}`;
      let exchangeRate = factory.exchangeRate.split(':');
      let rate =  exchangeRate[ 1 ] / exchangeRate[ 0 ];
      let coinNumber = Math.floor(factory.capacity * rate);
      me.coinLabel.string = coinNumber;

      if (coinNumber <= 0) {
        me.makingButton.opacity = 255 * 0.5;
      }
      else {
        me.makingButton.on(
          cc.Node.EventType.TOUCH_START,
          function () {
            $eventEmitter.trigger(
              eventEmitter.MOLTEN_CALORIE_COINS_RES
            );
            // TODO 删除下面的
            me.molenDialogInstance = cc.instantiate(this.molenDialog);
            me.molenDialogInstance.getComponent('MolenSuccessDialog').init({
              count: 300,
              handlerClose: function () {
                me.molenDialogInstance = null;
                // TODO 关闭之后从新请求工厂数据
              }
            });
            this.node.addChild(me.molenDialogInstance);
          },
          this
        );
      }
    }
  },

  onLoad () {
    $eventEmitter.trigger(
      eventEmitter.SEARCH_MYFACTORY_PAGE_REQ
    );
    $eventEmitter.on(
      eventEmitter.SEARCH_MYFACTORY_PAGE_RES,
      function (event, data) {
        this.dealData(data);
      }
    );
    this.dealData();

    $eventEmitter.on(
      eventEmitter.UPGRADE_FACTORY_RES,
      function (event, data) {
        me.dialogInstance = cc.instantiate(me.dialog);
        // TODO 这里的 data 数据从哪儿取
        // me.dialogInstance.getComponent('UpgradeSuccessDialog').init({
        //   capacity: data.capacity,
        //   engey: data.engey,
        //   rate: data.rate,
        //   level: data.level,
        //   handlerClose: function () {
        //     me.dialogInstance = null;
        //     $eventEmitter.trigger(
        //       eventEmitter.SEARCH_MYFACTORY_PAGE_REQ
        //     );
        //   }
        // });
        // this.node.addChild(me.dialogInstance);
      }
    );

    $eventEmitter.on(
      eventEmitter.MOLTEN_CALORIE_COINS_RES,
      function () {
        // TODO 熔铸成功
      }
    );
  }

});
