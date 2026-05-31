"use strict";
cc._RF.push(module, '85e0bx3wFxCTIjVuUOkg08n', 'FruitGroup');
// Scripts/FruitGroup.js

"use strict";

var utils = require('utils');
var Constants = require('Constants');
var fruitG = cc.Class({
  name: 'fruitG',
  properties: {
    name: '',
    initPoolCount: 10,
    score: 0,
    type: 'fruit',
    prefab: cc.Prefab
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    maxLength: 5,
    flashNode: cc.Node,
    fruitG: {
      "default": [],
      type: fruitG
    },
    throwBomb: cc.AudioClip
  },
  onLoad: function onLoad() {
    this.gameObj = this.node.parent.getComponent('Game');
    this.noBombArr = this.fruitG.filter(function (a) {
      return a.type == 'fruit';
    });
    utils.batchInitObjPool(this, this.fruitG);
    this._scheduledCreate = false;
  },
  scheduleCreateWave: function scheduleCreateWave() {
    var _this = this;
    if (this._scheduledCreate) return;
    this._scheduledCreate = true;
    this.scheduleOnce(function () {
      _this._scheduledCreate = false;
      _this.createFruitList();
    }, Constants.TIMING.WAVE_CREATE_DELAY);
  },
  createFruitList: function createFruitList() {
    var totalFr = this.fruitG;
    // +0.4 偏向使 Math.floor 更频繁地命中最大值
    var randomLength = Math.floor(utils.random(1, this.maxLength + 0.4));
    for (var i = 0; i < randomLength; i++) {
      var ran = void 0,
        fruit = void 0,
        poolName = void 0;
      // -0.1 防止随机值恰好等于 length，保证索引总是有效的
      ran = Math.floor(utils.random(0, totalFr.length - 0.1));
      fruit = totalFr[ran];
      poolName = fruit.name + 'Pool';
      var fruitNode = utils.genNewNode(this[poolName], fruit.prefab, this.node);
      fruitNode.setPosition(cc.v2(utils.random(-this.node.width / 2 + fruitNode.width / 2, this.node.width / 2 - fruitNode.width / 2), -(this.node.height / 2 - fruitNode.height / 2)));
      fruitNode.getComponent("Fruit").init(poolName, fruit.score);
      if (fruit.type == 'bomb') {
        cc.audioEngine.play(this.throwBomb, false, 1);
        totalFr = this.noBombArr;
      }
    }
  },
  checkRemain: function checkRemain() {
    if (this.gameObj.gameOver) return;
    if (this.node.children.length == 0) {
      this.scheduleCreateWave();
    }
  },
  cutBombRemoveAllChildren: function cutBombRemoveAllChildren() {
    this.flashScreen();
    var childObjArr = this.node.children.map(function (a) {
      return a.getComponent("Fruit");
    });
    for (var i = 0; i < childObjArr.length; i++) {
      childObjArr[i].backThisNode(true);
    }
    this.gameObj.loseLife();
    this.gameObj.upDateUi();
    if (!this.gameObj.gameOver) {
      this.scheduleCreateWave();
    }
  },
  flashScreen: function flashScreen() {
    var _this2 = this;
    this.flashNode.active = true;
    this.flashNode.opacity = Constants.BOMB_FLASH.INITIAL_OPACITY;
    cc.tween(this.flashNode).to(Constants.TIMING.FLASH_DURATION, {
      opacity: 0
    }).call(function () {
      _this2.flashNode.active = false;
    }).start();
  }
});

cc._RF.pop();