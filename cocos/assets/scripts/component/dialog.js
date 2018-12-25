cc.Class({
    extends: cc.Component,

    properties: {
        headerImage: {
            default: null,
            type: cc.Sprite
        },
        headerImageDesc: {
            default: null,
            type: cc.Node
        },
        title: {
            default: '',
            type: cc.String
        },
        content: {
            default: '',
            type: cc.String
        },
        okButton: {
            default: null,
            type: cc.Node
        },
        cancelButton: {
            default: null,
            type: cc.Node
        }
    },
    onLoad () {
        // let me = this;
        // let node = me.node;
        // node.setScale(2);
        // node.opacity = 0;
        
        // let actionFadeOut = cc.spawn(
        //     cc.fadeTo(0.3, 0), 
        //     cc.scaleTo(0.3, 2.0)
        // );
        
        // let finished = cc.callFunc(() => {
        //     me.node.removeFromParent(false);
        // }, this);
        // this.fadeOutFinish = cc.sequence(actionFadeOut, finished);
        // this.okButton.on('click', this.handlerOkClick, this);
        // this.cancelButton.on('click', this.handlerCancelClick, this);
    },
    // handlerOkClick () {
    //     this.node.runAction(this.fadeOutFinish);
    // },
    // handlerCancelClick () {
    //     this.node.runAction(this.fadeOutFinish);
    // },

    show (text, callback, needCancel) {
        console.log(text)
        let scene = cc.director.getScene();
        this.node.parent = scene;
        let actionFadeIn =cc.spawn(
            cc.fadeTo(0.3, 255), 
            cc.scaleTo(0.3, 1.0)
        );
        this.node.runAction(actionFadeIn);
    }
});
