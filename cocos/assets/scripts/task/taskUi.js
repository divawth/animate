cc.Class({
    extends: cc.Component,

    properties: {
        slotPrefab: {
            default: null,
            type: cc.Prefab
        },
        scrollView: {
            default: null,
            type: cc.ScrollView
        },
        totalCount: 0
    },

    
    onLoad: function onLoad(home) {
        this.heroSlots = [];
        this.home = home;
        for (var i = 0; i < this.totalCount; ++i) {
            var heroSlot = this.addHeroSlot();
            this.heroSlots.push(heroSlot);
        }
    },

    addHeroSlot: function addHeroSlot() {
        var heroSlot = cc.instantiate(this.slotPrefab);
        this.scrollView.content.addChild(heroSlot);
        return heroSlot;
    },
    
    show: function show() {
        this.node.active = true;
        this.node.emit('fade-in');
        this.home.toggleHomeBtns(false);
    },

    hide: function hide() {
        this.node.emit('fade-out');
        this.home.toggleHomeBtns(true);
    }
});
