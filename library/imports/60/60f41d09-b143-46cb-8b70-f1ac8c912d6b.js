"use strict";
cc._RF.push(module, '60f410JsUNGy4tw8ayMkS1r', 'JuiceGroup');
// Scripts/JuiceGroup.js

"use strict";

var utils = require('utils');
var Constants = require('Constants');
var juiceColor = cc.Class({
  name: 'juiceColor',
  properties: {
    code: 0,
    color: cc.Color,
    opacity: 255
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    juiceColor: {
      "default": [],
      type: juiceColor
    },
    juicePfb: cc.Prefab
  },
  onLoad: function onLoad() {
    var createPoolObj = {
      name: 'fruitJuice',
      prefab: this.juicePfb,
      initPoolCount: Constants.POOL.FRUIT_JUICE_SIZE
    };
    this.poolName = 'fruitJuicePool';
    utils.initObjPool(this, createPoolObj);
  },
  createJuiceBg: function createJuiceBg(pos, colorType) {
    var currJuiceColor = this.juiceColor.find(function (a) {
      return a.code == colorType;
    });
    if (!currJuiceColor) return;
    var color = currJuiceColor.color;
    var rotation = utils.random(0, 359);
    var opacity = currJuiceColor.opacity;
    var juiceNode = utils.genNewNode(this[this.poolName], this.juicePfb, this.node);
    if (!juiceNode) return;
    juiceNode.setPosition(pos);
    juiceNode.getComponent("FruitJuice").init(rotation, color, opacity);
  },
  backNode: function backNode(nodeInfo) {
    utils.backObjPool(this, this.poolName, nodeInfo);
  }
});

cc._RF.pop();