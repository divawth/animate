/**
 * @file 工具方法
 * @author wangtianhua
 */

const config = require('./config');

/**
 * 序列化数据
 *
 * @param {Object} options
 * @property {Object} options.native
 *
 */
exports.serializeData = function (options) {
  let data = new $protoBuf.RequestMsg();
  data.command = 'transformPbBusiness/online';
  data.userId = '5b978a95bf67dc651ea3e41d';
  data.userName = '赵丹';
  data.zone = 'Asia/Shangha';
  data.code = 5;

  console.log('>>>>>>>>', data);
  data = data.encodeAB();
  let dataLength = data.byteLength;

  let request = new $protoBuf.MyProtocolBean();
  request.type = 1;
  request.flag = 1;
  request.length = dataLength;
  request.content = data;
  request = request.encodeAB();

  return request;
};

/**
 * 返序列化数据
 *
 * @param {Object} options
 * @property {Uint8Array} data 二进制数
 * @property {Function} callback 回调函数 返回 false 表示解析失败了
 *
 */
exports.unSerializeData = function (data, callback) {
  if (data instanceof Blob) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = function (event) {
      if (event.target.readyState !== FileReader.DONE) {
        callback(false);
        return;
      }
      let data = new Uint8Array(reader.result);
      data = $protoBuf.MyProtocolBean.decode(data);
      if (data.flag === config.FLAG_HEART_BEAT) {
        // TODO 这里接收到心跳包要做什么？
        return;
      }
      let result = {};
      switch (data.type) {

        case config.MESSAGE_TYPE_HOME:
          result = $protoBuf.HomeUserInfoMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_COUNT:
          result = $protoBuf.IntMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_SUCCESS:
          result = $protoBuf.BooleanMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_FACTORY_OTHER:
          result = $protoBuf.UserFactoryInfoMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_FACTORY_MY:
          result = $protoBuf.FactoryMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_FACTORY_ALL:
          result = $protoBuf.FactoryList.decode(data.content);
          break;

        case config.MESSAGE_TYPE_PACKBACK:
          result = $protoBuf.MyPackageMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_TOOL:
          result = $protoBuf.PropMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_TASK_LIST:
          result = $protoBuf.TaskPageMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_TASK:
          result = $protoBuf.Task.decode(data.content);
          break;

        case config.MESSAGE_TYPE_TASK_BUTTON:
          result = $protoBuf.TaskButtonMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_EXPLORE:
          result = $protoBuf.ExplorePageMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_TOOL_LIST:
          result = $protoBuf.PropListMsg.decode(data.content);
          break;
      };
      console.log('<<<<<<<<', result);
      callback(result);
    }
  }
};
