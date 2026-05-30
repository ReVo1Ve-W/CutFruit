"use strict";
cc._RF.push(module, '60f410JsUNGy4tw8ayMkS1r', 'JuiceGroup');
// Scripts/JuiceGroup.js

"use strict";

var utils = require('utils');
var INITPOOLCOUNT = 20;
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
    //创建对象池。
    var createPoolObj = {
      name: 'fruitJuice',
      prefab: this.juicePfb,
      initPoolCount: INITPOOLCOUNT
    };
    this.poolName = 'fruitJuicePool';
    utils.initObjPool(this, createPoolObj);
  },
  //创建果汁特效背景
  createJuiceBg: function createJuiceBg(pos, colorType) {
    var currJuiceColor = this.juiceColor.filter(function (a) {
      return a.code == colorType;
    })[0];
    var color = currJuiceColor.color;
    var rotation = utils.random(0, 359);
    var opacity = currJuiceColor.opacity;
    var juiceNode = utils.genNewNode(this[this.poolName], this.juicePfb, this.node);
    juiceNode.setPosition(pos);
    juiceNode.getComponent("FruitJuice").init(rotation, color, opacity);
  },
  //放回对象池。
  backNode: function backNode(nodeInfo) {
    utils.backObjPool(this, this.poolName, nodeInfo);
  }
});

cc._RF.pop();