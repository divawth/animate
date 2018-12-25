
cc.Class({
    extends: cc.Component,

    properties: {
        slotPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    onLoad () {
        // let dialog = cc.instantiate(this.slotPrefab);
        // this.node.addChild(dialog)
        // let mask = this.node.getChildByName('mask');
        // mask.opacity = 255
    }
});
