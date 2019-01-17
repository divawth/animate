const util = require('common/util');
const eventEmitter = require('common/eventEmitter');
const config = require('common/config');
const Tooltip = require('common/tooltip');
const mock = require('mock/index');


cc.Class({
  extends: cc.Component,

  properties: {
    tooltip: cc.Node,
    tooltipAnimation: cc.Animation,
    tooltipContent: cc.Label
  },

  initProtoBufData () {
    require('common/factory')();
  },

  connectWs () {
    let me = this;
    $webSocket.connect(config.WEBSOCKET_URL_PRE);

    $eventEmitter.on(
      eventEmitter.WEB_SOCKET_CONNECT_SUCCESS,
      function () {
        me.getMainData();
      }
    );
  },

  getMainData () {
    $webSocket.send(util.serializeData());
  },

  getUserInfo () {
    util.get('https://kapi.sre.gotokeep.com/mock/293/user/queryUser')
    .then(function (response) {
      if (response.exist) {
        // TODO 用户存在
      }
      else {
        // TODO 用户不存在
      }
    })
  },

  init () {
    this.getUserInfo();
    this.initProtoBufData();
    this.connectWs();

    this.userInfo = {
      level: 2,
      energy: 1280,
      restEnergy: 2000,
      predator: 6,
      protection: 6
    };
    window.$data = {};
    window.$mock = mock;
  },

  initUI () {
    window.$tip = new Tooltip({
      container: this.node,
      element: this.tooltip,
      animation: this.tooltipAnimation,
      content: this.tooltipContent
    });
  },

  onLoad () {
    this.init();
    this.initUI();

    $eventEmitter.trigger(
      eventEmitter.REQUEST_HOME_MESSAGE_REQ
    );

    /**
     * 我的任务列表页面
     */
    $eventEmitter.on(
      eventEmitter.REQUEST_TASK_LIST_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_TASK_PAGE
        }));
      }
    );

    /**
     * 领取任务奖励
     */
    $eventEmitter.on(
      eventEmitter.RECEIVE_TASK_REWARD_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_TASK_DRAW
        }));
      }
    );

    /**
     * 探索页面
     */
    $eventEmitter.on(
      eventEmitter.REQUEST_SEARCH_PAGE_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_EXPLORE_PAGE
        }));
      }
    );

    /**
     * 探索
     */
    $eventEmitter.on(
      eventEmitter.REQUEST_SEARCH_CLICK,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_EXPLORE
        }));
      }
    );

    /**
     * 使用道具
     */
    $eventEmitter.on(
      eventEmitter.APPLY_PROP_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_APPLY_PROP
        }));
      }
    );
    /**
     * 我的背包页面查询
     */
    $eventEmitter.on(
      eventEmitter.MY_PACHAGE_PAGE_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_MY_PACKAGE
        }));
      }
    );

    /**
     * 掠夺
     */
    $eventEmitter.on(
      eventEmitter.PLUNDER_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_QUERY_ROB_USER
        }));
      }
    );

    /**
     * 我的工厂信息查询
     */
    $eventEmitter.on(
      eventEmitter.SEARCH_MYFACTORY_PAGE_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_USER_FATORY_INFO
        }));
      }
    );

    /**
     * 升级工厂
     */
    $eventEmitter.on(
      eventEmitter.UPGRADE_FACTORY_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.UPGRADE_FACTORY_RES
        }));
      }
    );

    /**
     * 熔铸卡路里币
     */
    $eventEmitter.on(
      eventEmitter.MOLTEN_CALORIE_COINS_REQ,
      function () {
        $webSocket.send(util.serializeData({
          command: config.COMMAND_EXCHANGE_CATOGORY_POINT
        }));
      }
    );
  }
});
