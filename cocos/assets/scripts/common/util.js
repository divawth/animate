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

  // let data = new $protoBuf.RequestMsg();
  // data.command = options.command;
  // data.userId = '5b978a95bf67dc651ea3e41d';
  // data.userName = '赵丹';
  // data.zone = 'Asia/Shangha';
  // data.code = 5;

  // data = data.encodeAB();
  // let dataLength = data.byteLength;

  // let request = new $protoBuf.MyProtocolBean();
  // request.type = 1;
  // request.flag = 1;
  // request.length = dataLength;
  // request.content = data;
  // request = request.encodeAB();

  // return request;
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
          if (result.command === config.COMMAND_QUERY_ROB_USER) {
            $eventEmitter.trigger(
              eventEmitter.PLUNDER_RES,
              {
                data: result
              }
            );
          }
          else if (result.command === config.COMMAND_QUERY_HOME_INFO) {
            $eventEmitter.trigger(
              eventEmitter.REQUEST_HOME_MESSAGE_RES,
              {
                data: result
              }
            );
          }
          break;

        case config.MESSAGE_TYPE_COUNT:
          result = $protoBuf.IntMsg.decode(data.content);
          if (result.command === config.COMMAND_EXCHANGE_CATOGORY_POINT) {
            $eventEmitter.trigger(
              eventEmitter.MOLTEN_CALORIE_COINS_RES,
              {
                data: result
              }
            );
          }
          break;

        case config.MESSAGE_TYPE_SUCCESS:
          result = $protoBuf.BooleanMsg.decode(data.content);
          if (result.command === config.COMMAND_APPLY_PROP) {
            $eventEmitter.trigger(
              eventEmitter.APPLY_PROP_RES,
              {
                data: result
              }
            );
          }
          else if (result.command === config.COMMAND_UPGRADE_FACTORY) {
            $eventEmitter.trigger(
              eventEmitter.APPLY_PROP_RES,
              {
                data: result
              }
            );
          }
          else if (result.command === config.COMMAND_TASK_DRAW) {
            $eventEmitter.trigger(
              eventEmitter.RECEIVE_TASK_REWARD_RES,
              {
                data: result
              }
            );
          }
          break;
        case config.MESSAGE_TYPE_FACTORY_OTHER:
          result = $protoBuf.UserFactoryInfoMsg.decode(data.content);
          $eventEmitter.trigger(
            eventEmitter.SEARCH_MYFACTORY_PAGE_RES,
            {
              data: result
            }
          );
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
          $eventEmitter.trigger(
            eventEmitter.MESSAGE_TYPE_EXPLORE_RES,
            {
              data: result
            }
          );
          break;

        case config.MESSAGE_TYPE_TASK_LIST:
          result = $protoBuf.TaskPageMsg.decode(data.content);
          $eventEmitter.trigger(
            eventEmitter.REQUEST_TASK_LIST_RES,
            {
              data: result
            }
          );
          break;

        case config.MESSAGE_TYPE_TASK:
          result = $protoBuf.Task.decode(data.content);
          break;

        case config.MESSAGE_TYPE_TASK_BUTTON:
          result = $protoBuf.TaskButtonMsg.decode(data.content);
          break;

        case config.MESSAGE_TYPE_EXPLORE_PAGE:
          result = $protoBuf.ExplorePageMsg.decode(data.content);
          $eventEmitter.trigger(
            eventEmitter.REQUEST_SEARCH_PAGE_RES,
            {
              data: result
            }
          );
          break;

        case config.MESSAGE_TYPE_TOOL_LIST:
          result = $protoBuf.PropListMsg.decode(data.content);
          break;
      };
      callback(result);
    }
  }
};

/**
 * 是否是 pre 坏境
 *
 * @param {Object} options
 *
 */
exports.isDev = function () {
  let origin = location.origin;
  return /pre/.test(origin) || /localhost/.test(origin);
};

/**
 * 发送请求
 *
 * @param {Object} options
 * @property {String} method 请求类型
 * @property {String} url 请求链接
 * @property {Object} data 请求数据
 *
 */
exports.request = function (method, url, data) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
        var response = xhr.responseText;
        try {
          response = JSON.parse(response);
          if (response.ok) {
            resolve(response.data)
          }
        }
        catch (e) {
          reject(e, response)
        }
      }
    };
    xhr.open(method, url, true);
    xhr.send();
  });
};

/**
 * 发送 get 请求
 *
 * @param {Object} options
 * @property {String} method 请求类型
 * @property {String} url 请求链接
 * @property {Object} data 请求数据
 *
 */
exports.get = function (url, data) {
  if (data && Object.keys(data).length > 0) {
    url += /\?/.test(url) ? '?' : '&';
    for (let key in data) {
      url += key + '=' + data[ key ];
    }
  }
  return exports.request('GET', url);
};


/**
 * 发送 post 请求
 *
 * @param {Object} options
 * @property {String} method 请求类型
 * @property {String} url 请求链接
 * @property {Object} data 请求数据
 *
 */
exports.post = function (url, data) {
  return exports.request('POST', url, data);
};

