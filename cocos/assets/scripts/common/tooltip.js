/**
 * @file Tooltip
 * @author wangtianhua
 */

function Tooltip(options) {
  this.init(options);
}

Tooltip.prototype = {

  constructor: Tooltip,

  type: 'Tooltip',

  /**
   * 初始化
   */
  init: function (options) {
    this.container = options.container;
    this.element = options.element;
    this.animation = options.animation;
    this.content = options.content;
  },

  /**
   * 显示提示浮层
   */
  show: function (content) {
    let me = this;
    me.instance = cc.instantiate(me.tooltip);
    me.content.string = content;
    me.element.addChild(me.instance);
    me.animation.play('tooltip_in');
  },

  /**
   * 销毁对象
   */
  dispose: function () {
    let me = this;
    me
    = me.container
    = me.element
    = me.instance
    = me.animation
    = me.content
    = null
  }
};

export default Tooltip;
