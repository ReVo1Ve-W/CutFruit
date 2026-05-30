"use strict";
cc._RF.push(module, 'c8b30gJzGlLoJWZBCOCpXKG', 'FruitJuice');
// Scripts/FruitJuice.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    juiceSprite: cc.Node
  },
  onLoad: function onLoad() {
    this.parentObj = this.node.parent.getComponent('JuiceGroup');
  },
  init: function init(rotation, color, opacity) {
    var _this = this;
    this.node.angle = rotation;
    this.juiceSprite.color = color;
    this.juiceSprite.opacity = opacity;
    //渐隐显示动画，并将其对象回收。
    cc.tween(this.juiceSprite).to(1.5, {
      opacity: 0
    }).call(function () {
      _this.parentObj.backNode(_this.node, _this.colorType);
    }).start();
  }
});

cc._RF.pop();