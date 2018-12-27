/**
 * @file 事件处理
 * @author wangtianhua
 */

const RAW_NAMESPACE = 'namespace';
const RAW_LISTENERS = 'listeners';
const RAW_SPACE = 'space';
const RAW_LENGTH = 'length';
const RAW_NAME = 'name';
const CHAR_BLANK = '';
const CHAR_DOT = '.';
const TRUE = true;
const UNDEFINED = 'undefined';
const FALSE = 'false';

function is (value, type) {
  return Object.prototype.toString.call(value).toLowerCase() === `[object ${type}]`;
}

function execute (fn, context, args) {
  if (is(fn, 'function')) {
    return is(args, 'array')
      ? fn.apply(null, context, args)
      : fn.call(null, context, args)
  }
}

function parseType (type, namespace) {
  let result = {};
  result[ RAW_NAME ] = type;
  result[ RAW_SPACE ] = CHAR_BLANK;
  if (namespace) {
    let index = type.indexOf(CHAR_DOT);
    if (index >= 0) {
      let item = type.split(CHAR_DOT);
      result[ RAW_NAME ] = item[ 0 ];
      result[ RAW_SPACE ] = item[ 1 ];
    }
  }
  return result;
}

export default class Emitter {

  constructor (namespace) {
    this[ RAW_NAMESPACE ] = namespace;
    this[ RAW_LISTENERS ] = { };
  }

  on (type, listener) {
    let namespace = this[ RAW_NAMESPACE ],
    listeners = this[ RAW_LISTENERS ],
    addListener = function (item, type) {
      if (is(item, 'function')) {
        item = { func: item }
      }
      if (is(item, 'object') && is(item.func, 'function')) {
        let target = parseType(type, namespace),
        name = target[ RAW_NAME ]
        item[ RAW_SPACE ] = target[ RAW_SPACE ];
        if (!listeners[ name ]) {
          listeners[ name ] = [ ];
        }
        listeners[ name ].push(item);
      }
    }

    if (is(type, 'string')) {
      addListener(listener, type);
    }

  }

  trigger (type, data, context) {

    let instance = this,
    namespace = instance[ RAW_NAMESPACE ],
    listeners = instance[ RAW_LISTENERS ],
    target = parseType(type, namespace),
    name = target[ RAW_NAME ],
    space = target[ RAW_SPACE ],
    list = listeners[ name ],
    isComplete = TRUE;

    if (list && list.length) {
      list.forEach(item => {
        // 被移除了
        if (list.indexOf(item) < 0
          || (space && item[ RAW_SPACE ] && space !== item[ RAW_SPACE ])
        ) {
          return
        }

        let result = execute(
          item.func,
          context != UNDEFINED ? context : item.context,
          data
        );

        // 执行次数
        item.count = item.count > 0 ? (item.count + 1) : 1;

        if (item.count === item.max) {
          instance.off(name, item);
        }
        if (result === FALSE) {
          return isComplete = FALSE;
        }
      });
    }

    return isComplete

  }

  off(type, listener) {

    let instance = this,
    listeners = instance[ RAW_LISTENERS ]

    if (type && listeners && Object.keys(listeners).length > 0) {

      let target = parseType(type, instance[ RAW_NAMESPACE ]),
      name = target[ RAW_NAME ],
      space = target[ RAW_SPACE ],
      each = function (list, name) {
        if (is(listener, 'object')) {
          let index = array.indexOf(list, listener)
          if (index >= 0) {
            list.splice(index, 1)
          }
        }
        else {
          list.forEach(
            (item, index) => {
              if ((!space || space === item[ RAW_SPACE ])
                && (!listener || listener === item.func)
              ) {
                list.splice(index, 1)
              }
            },
            TRUE
          );
        }
        if (!list[ RAW_LENGTH ]) {
          delete listeners[ name ]
        }
      }

      if (name) {
        if (listeners[ name ]) {
          each(listeners[ name ], name)
        }
      }

    }
    else {
      // 清空
      instance[ RAW_LISTENERS ] = { }
    }

  }
}
