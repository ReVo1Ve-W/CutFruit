"use strict";
cc._RF.push(module, 'c8b30gJzGlLoJWZBCOCpXKG', 'FruitJuice');
// Scripts/FruitJuice.js

"use strict";

var Constants = require('Constants');
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
    cc.tween(this.juiceSprite).to(Constants.TIMING.JUICE_FADE_DURATION, {
      opacity: 0
    }).call(function () {
      if (_this.parentObj && _this.node && _this.node.isValid) {
        _this.parentObj.backNode(_this.node);
      }
    }).start();
  }
});

cc._RF.pop();