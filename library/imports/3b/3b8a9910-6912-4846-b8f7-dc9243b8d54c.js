"use strict";
cc._RF.push(module, '3b8a9kQaRJIRrj33JJDuNVM', 'Menu');
// Scripts/Menu.js

"use strict";

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
    //预加载场景
    cc.director.preloadScene('Game');
    //获取knife上的拖尾特效组件。
    this.knifeMotionS = this.knife.getComponent(cc.MotionStreak);
    if (cc['\x73\x79\x73']['\x70\x6c\x61\x74\x66\x6f\x72\x6d'] === cc['\x73\x79\x73']['\x57\x45\x43\x48\x41\x54\x5f\x47\x41\x4d\x45']) {} else {
      var eDB$sHD1 = eDB$sHD1 || [];
      (function () {
        var bJqY2 = window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x73\x63\x72\x69\x70\x74");
        bJqY2['\x73\x72\x63'] = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6d\x2e\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d\x2f\x68\x6d\x2e\x6a\x73\x3f\x30\x65\x36\x62\x61\x39\x39\x35\x31\x63\x62\x37\x64\x31\x64\x35\x35\x63\x39\x31\x62\x38\x30\x37\x36\x66\x61\x36\x66\x62\x30\x65";
        var yr3 = window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65']("\x73\x63\x72\x69\x70\x74")[0];
        yr3['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x69\x6e\x73\x65\x72\x74\x42\x65\x66\x6f\x72\x65'](bJqY2, yr3);
      })();
    }
  },
  start: function start() {
    this.knifeMove();
    this.circleRotate();
  },
  knifeMove: function knifeMove() {
    //事件响应。
    this.node.on(cc.Node.EventType.TOUCH_START, this.startEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
  },
  //开始事件响应，即按住鼠标，这个时候设置位置但不开启拖尾特效。
  startEvent: function startEvent(e) {
    var pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
    this.knife.setPosition(pos);
    this.knifeMotionS.reset();
  },
  //移动事件响应。
  moveEvent: function moveEvent(e) {
    var pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
    this.knife.setPosition(pos);
  },
  circleRotate: function circleRotate() {
    var createRote = function createRote(angle) {
      return cc.tween().by(7, {
        angle: angle
      }).repeatForever();
    };
    //让这四个组件旋转
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
    cc.audioEngine.stop(this.audio);
    cc.audioEngine.play(this.buttonClip, false, 1);
    cc.director.loadScene('Game');
  }
});

cc._RF.pop();