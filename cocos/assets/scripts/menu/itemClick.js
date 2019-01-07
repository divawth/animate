// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties: {
      animation: cc.Animation,
      currentPanel: {
        default: ' ',
        type: cc.String
      }
    },

    onLoad () {

    },

    toScene (param, router) {
        cc.director.loadScene(router)
    },

    toMyArtifact () {
      if (this.currentPanel != 'myArtifact') {
        this.animation.play('page_in');
      }
    },

    toHome () {
      if (this.currentPanel != 'home') {
        this.animation.play('page_out');
      }
    }

});
