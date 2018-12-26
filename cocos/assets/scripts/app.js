// const WebSocket = require('common/websocket');

window.global = window;

cc.Class({
  extends: cc.Component,

  initProtoBufData () {
    let protobuf = require("protobufjs");
    let builder = protobuf.newBuilder();
    protobuf.Util.IS_NODE = cc.sys.isNative;
    protobuf.protoFromFile(
      cc.url.raw('resources/proto') + '/message.proto', 
      builder
    );
    let PB = builder.build('kStar.message'); 
    window.global.keep_pb = PB;
    // let requestMsg = new PB.BooleanMsg();
    // requestMsg.command = '21';
    // requestMsg.msg = '21';
    // requestMsg.result = true;

    // let data = requestMsg.toArrayBuffer();
    // let decodeStr = PB.BooleanMsg.decode(data);
    // console.log(decodeStr, data)
  },
  init () {
    this.initProtoBufData();
  },
  onLoad () {
    this.init();
    // let socket = new WebSocket({
    //   interval: 1000,
    //   retryCount: 1,
    //   timeout: 50000,
    //   native: window.WebSocket,
    //   onSend: function (data) {
    //     console.log('onSend', data)
    //   },
    //   onReceive: function (data) {
    //     console.log('onReceive', data)
    //   },
    //   onOpen: function (data) {
    //     console.log('onOpen', data)
    //   },
    //   onClose: function () {
    //     console.log('onClose', data)
    //   },
    //   onError: function () {
    //     console.log('onError', data)
    //   },
    //   onTimeout: function () {
    //     console.log('onTimeout', data)
    //   }
    // });
    // socket.connect('ws://10.2.22.22/ws');
  }
});
