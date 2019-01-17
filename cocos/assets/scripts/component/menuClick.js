cc.Class({
    extends: cc.Component,

    properties: {
      animation: cc.Animation,
      currentPanel: {
        default: ' ',
        type: cc.String
      }
    },

    toSearch () {
      if (this.currentPanel != 'search') {
        // var search = cc.instantiate(this.search);
        // this.node.addChild(search);
        // search.getComponent().init();
        this.animation.play('page_in');
      }
    },

    toTask () {
      if (this.currentPanel != 'task') {
        this.animation.play('page_in');
      }
    },

    toBackPack () {
      if (this.currentPanel != 'backPack') {
        this.animation.play('page_in');
      }
    },

    toMyArtifact () {
      if (this.currentPanel != 'myArtifact') {
        this.animation.play('page_in');
      }
    },

    toPlunder () {
      if (this.currentPanel != 'plunder') {
        this.animation.play('page_in');
      }
    },

    toHome () {
      if (this.currentPanel != 'home') {
        this.animation.play('page_out');
      }
    },

    toMyFactory () {
      if (this.currentPanel != 'myFactory') {
        this.animation.play('page_in');
      }
    }

});
