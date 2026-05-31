"use strict";
cc._RF.push(module, 'b27f0f8tplBLJU9TzXaiOUK', 'Fruit');
// Scripts/Fruit.js

"use strict";

var utils = require('utils');
var Constants = require('Constants');
cc.Class({
  "extends": cc.Component,
  properties: {
    comFruit: cc.Node,
    splitAni: cc.Node,
    type: 'fruit',
    forceHorzMin: 0,
    forceHorzMax: 1000,
    forceMin: 30000,
    forceMax: 35000,
    colorType: 1,
    cutFruitAudio: cc.AudioClip,
    cutBombAudio: cc.AudioClip
  },
  onLoad: function onLoad() {
    this.poolName = '';
    var gameNode = cc.find(Constants.NODE_PATH.GAME_CONTAINER);
    this.gameObj = gameNode ? gameNode.getComponent("Game") : null;
    this.parent = this.node.parent.getComponent('FruitGroup');
    var juiceNode = cc.find(Constants.NODE_PATH.FRUIT_JUICE);
    this.fruitJuiceGroup = juiceNode ? juiceNode.getComponent("JuiceGroup") : null;
    if (this.type == 'fruit') {
      this.ani = this.splitAni.getComponent(cc.Animation);
    }
  },
  init: function init(poolName, score) {
    this.poolName = poolName;
    this.score = score;
    this.isCut = false;
    if (this.type == 'fruit') {
      this.comFruit.active = true;
      this.splitAni.active = false;
      this.recoveryAniFirstFps();
    }
    var fruitNodeRigidBody = this.node.getComponent(cc.RigidBody);
    var forceY = Math.floor(utils.random(this.forceMin, this.forceMax)),
      forceX = Math.floor(utils.random(this.forceHorzMin, this.forceHorzMax));
    fruitNodeRigidBody.angularVelocity = utils.random(-1, 1) > 0 ? 100 : -100;
    fruitNodeRigidBody.applyForceToCenter(cc.v2(this.node.x > 0 ? -forceX : forceX, forceY), true);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == Constants.COLLISION_TAG.KNIFE) {
      if (!this.isCut) {
        if (this.type == 'fruit') {
          this.fruitJuiceGroup.createJuiceBg(this.node.getPosition(), this.colorType);
          this.playSplitAni();
          cc.audioEngine.play(this.cutFruitAudio, false, 1);
          this.gameObj.updateScore(true, this.score);
        } else {
          this.parent.cutBombRemoveAllChildren();
          cc.audioEngine.play(this.cutBombAudio, false, 1);
        }
      }
      this.isCut = true;
    }
    if (other.tag == Constants.COLLISION_TAG.FLOOR) {
      this.backThisNode();
      this.parent.checkRemain();
    }
  },
  playSplitAni: function playSplitAni() {
    this.comFruit.active = false;
    this.splitAni.active = true;
    this.ani.play();
  },
  // 恢复动画到第一帧——直接操作内部曲线，因为 Animation.stop() 在 Cocos Creator 2.x 中无法正确重置到第一帧。这在引擎版本间是脆弱的。
  recoveryAniFirstFps: function recoveryAniFirstFps() {
    if (!this.ani) return;
    var clips = this.ani.getClips();
    if (!clips || clips.length === 0) {
      cc.warn('Fruit: No animation clips found on splitAni');
      return;
    }
    var aniName = clips[0].name;
    var state = this.ani.getAnimationState(aniName);
    var curves = state.curves;
    var info = state.getWrappedInfo(0.01);
    for (var i = 0, len = curves.length; i < len; i++) {
      var curve = curves[i];
      curve.sample(info.time, info.ratio, this);
    }
  },
  backThisNode: function backThisNode(isBombBack) {
    if (!isBombBack && this.type == 'fruit' && !this.isCut) {
      this.gameObj.updateScore(false, this.score);
    }
    utils.backObjPool(this.parent, this.poolName, this.node);
  }
});

cc._RF.pop();