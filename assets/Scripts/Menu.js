const Constants = require('Constants');

cc.Class({
    extends: cc.Component,
    properties: {
        knife : cc.Node,
        btnBeginCir : cc.Node,
        btnQuitCir : cc.Node,
        btnBeginfR : cc.Node,
        btnQuitfR : cc.Node,
        buttonClip : cc.AudioClip,
    },
    onLoad() {
        cc.director.preloadScene('Game');
        this.knifeMotionS = this.knife.getComponent(cc.MotionStreak);
    },
    start() {
        this.knifeMove();
        this.circleRotate();
    },
    knifeMove() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.endEvent, this);
    },
    startEvent(e) {
        let pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
        this.knife.setPosition(pos);
        this.knifeMotionS.reset();
    },
    moveEvent(e) {
        let pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
        this.knife.setPosition(pos);
    },
    endEvent(e) {
        this.knifeMotionS.reset();
    },
    circleRotate() {
        let createRote = (angle) => {
            return cc.tween().by(Constants.TIMING.ROTATE_DURATION, { angle: angle }).repeatForever();
        }
        cc.tween(this.btnBeginCir).then(createRote(360)).start();
        cc.tween(this.btnQuitCir).then(createRote(360)).start();
        cc.tween(this.btnBeginfR).then(createRote(-360)).start();
        cc.tween(this.btnQuitfR).then(createRote(-360)).start();
    },
    backList() {
        cc.audioEngine.play(this.buttonClip, false, 1);
        cc.director.loadScene('Detail');
    },
    gameStart() {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(this.buttonClip, false, 1);
        cc.director.loadScene('Game');
    }
});
