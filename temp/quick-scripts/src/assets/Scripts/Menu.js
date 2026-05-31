"use strict";
cc._RF.push(module, '3b8a9kQaRJIRrj33JJDuNVM', 'Menu');
// Scripts/Menu.js

"use strict";

var Constants = require('Constants');
cc.Class({
  "extends": cc.Component,
  properties: {
    knife: cc.Node,
    btnBeginCir: cc.Node,
    btnQuitCir: cc.Node,
    btnBeginfR: cc.Node,
    btnQuitfR: cc.Node,
    buttonClip: cc.AudioClip
  },
  onLoad: function onLoad() {
    cc.director.preloadScene('Game');
    this.knifeMotionS = this.knife.getComponent(cc.MotionStreak);
  },
  start: function start() {
    this.knifeMove();
    this.circleRotate();
  },
  knifeMove: function knifeMove() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.startEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.endEvent, this);
  },
  startEvent: function startEvent(e) {
    var pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
    this.knife.setPosition(pos);
    this.knifeMotionS.reset();
  },
  moveEvent: function moveEvent(e) {
    var pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
    this.knife.setPosition(pos);
  },
  endEvent: function endEvent(e) {
    this.knifeMotionS.reset();
  },
  circleRotate: function circleRotate() {
    var createRote = function createRote(angle) {
      return cc.tween().by(Constants.TIMING.ROTATE_DURATION, {
        angle: angle
      }).repeatForever();
    };
    cc.tween(this.btnBeginCir).then(createRote(360)).start();
    cc.tween(this.btnQuitCir).then(createRote(360)).start();
    cc.tween(this.btnBeginfR).then(createRote(-360)).start();
    cc.tween(this.btnQuitfR).then(createRote(-360)).start();
  },
  backList: function backList() {
    cc.audioEngine.play(this.buttonClip, false, 1);
    cc.director.loadScene('Detail');
  },
  gameStart: function gameStart() {
    cc.audioEngine.stopAll();
    cc.audioEngine.play(this.buttonClip, false, 1);
    cc.director.loadScene('Game');
  }
});

cc._RF.pop();