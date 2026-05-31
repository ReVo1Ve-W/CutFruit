"use strict";
cc._RF.push(module, 'fc73aaZdOpM2YMrzlo6Gi5Y', 'Game');
// Scripts/Game.js

"use strict";

var Constants = require('Constants');
var lifeG = cc.Class({
  name: 'lifeG',
  properties: {
    lifeConsume: cc.Node
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    knife: cc.Node,
    scoreLabel: cc.Label,
    lifeG: {
      "default": [],
      type: lifeG
    },
    fruitGroup: require('FruitGroup'),
    gameOverMask: cc.Node,
    bestScoreLabel: cc.Label,
    buttonClip: cc.AudioClip
  },
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    var physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
    this.knifeMotionS = this.knife.getComponent(cc.MotionStreak);
  },
  start: function start() {
    this.knifeMove();
    this.init();
  },
  init: function init() {
    this.gameOver = false;
    this.score = 0;
    this.bestScore = 0;
    var max = cc.sys.localStorage.getItem("Best score");
    if (max) {
      this.bestScore = max;
      this.bestScoreLabel.string = "最佳分数 : " + this.bestScore;
    }
    this.life = 0;
    this.lifeG.forEach(function (a) {
      a.lifeConsume.active = false;
    });
    this.upDateUi();
    this.fruitGroup.createFruitList();
  },
  knifeMove: function knifeMove() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.startEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.endEvent, this);
  },
  startEvent: function startEvent(event) {
    var pos = this.node.convertToNodeSpaceAR(new cc.Vec2(event.getLocation()));
    this.knife.setPosition(pos);
    this.knife.group = 'knife';
    this.knifeMotionS.reset();
  },
  moveEvent: function moveEvent(event) {
    var pos = this.node.convertToNodeSpaceAR(new cc.Vec2(event.getLocation()));
    this.knife.setPosition(pos);
  },
  endEvent: function endEvent(event) {
    this.knife.group = 'default';
  },
  updateScore: function updateScore(isHit, score) {
    if (this.gameOver) return;
    if (isHit) {
      this.score += score;
    } else {
      var penalty = score * Constants.SCORE.PENALTY_MULTIPLIER;
      if (this.score <= penalty) {
        this.loseLife();
        this.score = 0;
      } else {
        this.score -= penalty;
      }
    }
    this.upDateUi();
  },
  loseLife: function loseLife() {
    this.life++;
    if (this.life >= Constants.SCORE.MAX_LIVES) this.gameOverHandle();
  },
  upDateUi: function upDateUi() {
    this.scoreLabel.string = "分数 : " + this.score;
    for (var i = 0; i < this.life; i++) {
      this.lifeG[i].lifeConsume.active = true;
    }
  },
  gameOverHandle: function gameOverHandle() {
    var _this = this;
    this.gameOver = true;
    this.knife.group = 'default';
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      this.bestScoreLabel.string = '最佳分数 : ' + this.bestScore;
      cc.sys.localStorage.setItem("Best score", this.bestScore);
    }
    this.scheduleOnce(function () {
      _this.showTheGameOverMask(true);
    }, Constants.TIMING.GAME_OVER_DELAY);
  },
  returnMenu: function returnMenu() {
    cc.audioEngine.play(this.buttonClip, false, 1);
    cc.director.loadScene('Menu');
  },
  restartGame: function restartGame() {
    cc.audioEngine.play(this.buttonClip, false, 1);
    this.showTheGameOverMask(false);
    this.init();
  },
  showTheGameOverMask: function showTheGameOverMask(bool) {
    var _this2 = this;
    if (bool) {
      this.gameOverMask.active = true;
      this.gameOverMask.opacity = 1;
      this.gameOverMask.scale = 0.95;
      cc.tween(this.gameOverMask).to(Constants.TIMING.GAME_OVER_TWEEN, {
        scale: 1,
        opacity: 255
      }).start();
    } else {
      cc.tween(this.gameOverMask).to(Constants.TIMING.FADE_OUT_TWEEN, {
        opacity: 0
      }).call(function () {
        _this2.gameOverMask.active = false;
      }).start();
    }
  }
});

cc._RF.pop();