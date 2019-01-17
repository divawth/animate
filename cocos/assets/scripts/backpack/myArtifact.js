cc.Class({
  extends: cc.Component,

  properties: {
    countRichText: cc.RichText,
    artifactWrapper: cc.Node,
    myArtfactPrefab: cc.Prefab,
    pageView: cc.PageView,
    prevPage: cc.Node,
    nextPage: cc.Node
  },

  onLoad () {
    let data = $data.myArtfact;
    let me = this;
    me.countRichText.string = data.count;

    let gifts = data.gifts;

    for (var i = 0; i < gifts.length; ++i) {
      var myArtfactPrefab = cc.instantiate(this.myArtfactPrefab);
      var item = gifts[ i ];
      me.artifactWrapper.addChild(myArtfactPrefab);
      myArtfactPrefab.getComponent('ArtTemplate').init(item);
    }

    me.prevPage.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        let page = me.pageView.getCurrentPageIndex() - 1;
        if (page <= 0) {
          return;
        }
        me.pageView.scrollToPage(page);
      },
      this
    );
    this.nextPage.on(
      cc.Node.EventType.TOUCH_START,
      function () {
        let page = +me.pageView.getCurrentPageIndex() + 1;
        if (page >= me.pageView.getPages().length) {
          return;
        }
        me.pageView.scrollToPage(page);
      },
      this
    );
  }

});
