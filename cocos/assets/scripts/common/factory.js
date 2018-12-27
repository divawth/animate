/**
 * @file 初始化
 * @author wangtianhua
 */

const eventEmitter = require('./eventEmitter');
const config = require('./config');
const Protobuf = require("protobufjs");
const keepJsBridge = require ('keep-jsbridge/dist/keepjsbridge.common.js');
const webSocket = require('./webSocket');

module.exports = function () {

  /**
   * 初始化用户信息
   */

  /**
   * 初始化 PB 消息
   */
  let builder = Protobuf.newBuilder();
  Protobuf.protoFromFile(
    cc.url.raw('resources/proto') + '/message.proto',
    builder
  );
  window.$protoBuf = builder.build('kStar.message');

  /**
   * 初始化 eventEmitter
   */
  eventEmitter.init();

  /**
   * 初始化全局配置 config
   */
  window.$config = config;

  /**
   * 初始化 js bridge
   */
  window.$bridge = keepJsBridge;

  /**
   * 初始化 websocket (全局只初始化这一个)
   */
  webSocket.init();

}
