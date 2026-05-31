
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Constants');
require('./assets/Scripts/Fruit');
require('./assets/Scripts/FruitGroup');
require('./assets/Scripts/FruitJuice');
require('./assets/Scripts/Game');
require('./assets/Scripts/JuiceGroup');
require('./assets/Scripts/Menu');
require('./assets/Scripts/ReturnMenu');
require('./assets/Scripts/utils');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJyZXF1aXJlIiwibGlmZUciLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJsaWZlQ29uc3VtZSIsIk5vZGUiLCJDb21wb25lbnQiLCJrbmlmZSIsInNjb3JlTGFiZWwiLCJMYWJlbCIsInR5cGUiLCJmcnVpdEdyb3VwIiwiZ2FtZU92ZXJNYXNrIiwiYmVzdFNjb3JlTGFiZWwiLCJidXR0b25DbGlwIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJwaHlzaWNzTWFuYWdlciIsImdldFBoeXNpY3NNYW5hZ2VyIiwia25pZmVNb3Rpb25TIiwiZ2V0Q29tcG9uZW50IiwiTW90aW9uU3RyZWFrIiwic3RhcnQiLCJrbmlmZU1vdmUiLCJpbml0IiwiZ2FtZU92ZXIiLCJzY29yZSIsImJlc3RTY29yZSIsIm1heCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdHJpbmciLCJsaWZlIiwiZm9yRWFjaCIsImEiLCJhY3RpdmUiLCJ1cERhdGVVaSIsImNyZWF0ZUZydWl0TGlzdCIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwic3RhcnRFdmVudCIsIlRPVUNIX01PVkUiLCJtb3ZlRXZlbnQiLCJUT1VDSF9FTkQiLCJlbmRFdmVudCIsImV2ZW50IiwicG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJWZWMyIiwiZ2V0TG9jYXRpb24iLCJzZXRQb3NpdGlvbiIsImdyb3VwIiwicmVzZXQiLCJ1cGRhdGVTY29yZSIsImlzSGl0IiwicGVuYWx0eSIsIlNDT1JFIiwiUEVOQUxUWV9NVUxUSVBMSUVSIiwibG9zZUxpZmUiLCJNQVhfTElWRVMiLCJnYW1lT3ZlckhhbmRsZSIsImkiLCJfdGhpcyIsInNldEl0ZW0iLCJzY2hlZHVsZU9uY2UiLCJzaG93VGhlR2FtZU92ZXJNYXNrIiwiVElNSU5HIiwiR0FNRV9PVkVSX0RFTEFZIiwicmV0dXJuTWVudSIsImF1ZGlvRW5naW5lIiwicGxheSIsImxvYWRTY2VuZSIsInJlc3RhcnRHYW1lIiwiYm9vbCIsIl90aGlzMiIsIm9wYWNpdHkiLCJzY2FsZSIsInR3ZWVuIiwidG8iLCJHQU1FX09WRVJfVFdFRU4iLCJGQURFX09VVF9UV0VFTiIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBRXRDLElBQUlDLEtBQUssR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDakJDLElBQUksRUFBRSxPQUFPO0VBQ2JDLFVBQVUsRUFBRTtJQUNSQyxXQUFXLEVBQUdKLEVBQUUsQ0FBQ0s7RUFDckI7QUFDSixDQUFDLENBQUM7QUFFRkwsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNNLFNBQVM7RUFDckJILFVBQVUsRUFBRTtJQUNSSSxLQUFLLEVBQUdQLEVBQUUsQ0FBQ0ssSUFBSTtJQUNmRyxVQUFVLEVBQUdSLEVBQUUsQ0FBQ1MsS0FBSztJQUNyQlYsS0FBSyxFQUFFO01BQ0gsV0FBUyxFQUFFO01BQ1hXLElBQUksRUFBRVg7SUFDVixDQUFDO0lBQ0RZLFVBQVUsRUFBR2IsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNsQ2MsWUFBWSxFQUFHWixFQUFFLENBQUNLLElBQUk7SUFDdEJRLGNBQWMsRUFBR2IsRUFBRSxDQUFDUyxLQUFLO0lBQ3pCSyxVQUFVLEVBQUdkLEVBQUUsQ0FBQ2U7RUFDcEIsQ0FBQztFQUNEQyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUlDLE9BQU8sR0FBR2pCLEVBQUUsQ0FBQ2tCLFFBQVEsQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDL0NGLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLElBQUk7SUFDdEIsSUFBSUMsY0FBYyxHQUFHckIsRUFBRSxDQUFDa0IsUUFBUSxDQUFD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QUM1QixZQUFZLENBQUNzRSxPQUFPLEdBQUcsQ0FBQztNQUM3QixJQUFJLENBQUN0RSxZQUFZLENBQUN1RSxLQUFLLEdBQUcsSUFBSTtNQUM5Qm5GLEVBQUUsQ0FBQ29GLEtBQUssQ0FBQyxJQUFJLENBQUN4RSxZQUFZLENBQUMsQ0FBQ3lFLEVBQUUsQ0FBQ3hGLFNBQVMsQ0FBQzRFLE1BQU0sQ0FBQ2EsZUFBZSxFQUFFO1FBQUVILEtBQUssRUFBRSxDQUFDO1FBQUVELE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQyxDQUFDeEQsS0FBSyxFQUFFO0lBQ3hHLENBQUMsTUFBTTtNQUNIMUIsRUFBRSxDQUFDb0YsS0FBSyxDQUFDLElBQUksQ0FBQ3hFLFlBQVksQ0FBQyxDQUFDeUUsRUFBRSxDQUFDeEYsU0FBUyxDQUFDNEUsTUFBTSxDQUFDYyxjQUFjLEVBQUU7UUFBRUwsT0FBTyxFQUFFO01BQUUsQ0FBQyxDQUFDLENBQUNNLElBQUksQ0FBQyxZQUFNO1FBQ3ZGUCxNQUFJLENBQUNyRSxZQUFZLENBQUM0QixNQUFNLEdBQUcsS0FBSztNQUNwQyxDQUFDLENBQUMsQ0FBQ2QsS0FBSyxFQUFFO0lBQ2Q7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnQ29uc3RhbnRzJyk7XG5cbmxldCBsaWZlRyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnbGlmZUcnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGlmZUNvbnN1bWUgOiBjYy5Ob2RlLFxuICAgIH1cbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAga25pZmUgOiBjYy5Ob2RlLFxuICAgICAgICBzY29yZUxhYmVsIDogY2MuTGFiZWwsXG4gICAgICAgIGxpZmVHOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGxpZmVHXG4gICAgICAgIH0sXG4gICAgICAgIGZydWl0R3JvdXAgOiByZXF1aXJlKCdGcnVpdEdyb3VwJyksXG4gICAgICAgIGdhbWVPdmVyTWFzayA6IGNjLk5vZGUsXG4gICAgICAgIGJlc3RTY29yZUxhYmVsIDogY2MuTGFiZWwsXG4gICAgICAgIGJ1dHRvbkNsaXAgOiBjYy5BdWRpb0NsaXAsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgcGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwaHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rbmlmZU1vdGlvblMgPSB0aGlzLmtuaWZlLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspO1xuICAgIH0sXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMua25pZmVNb3ZlKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSAwO1xuICAgICAgICBsZXQgbWF4ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQmVzdCBzY29yZVwiKTtcbiAgICAgICAgaWYgKG1heCkge1xuICAgICAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSBtYXg7XG4gICAgICAgICAgICB0aGlzLmJlc3RTY29yZUxhYmVsLnN0cmluZyA9IFwi5pyA5L2z5YiG5pWwIDogXCIgKyB0aGlzLmJlc3RTY29yZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpZmUgPSAwO1xuICAgICAgICB0aGlzLmxpZmVHLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGEubGlmZUNvbnN1bWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwRGF0ZVVpKCk7XG4gICAgICAgIHRoaXMuZnJ1aXRHcm91cC5jcmVhdGVGcnVpdExpc3QoKTtcbiAgICB9LFxuICAgIGtuaWZlTW92ZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5tb3ZlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVuZEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuICAgIHN0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuZXcgY2MuVmVjMihldmVudC5nZXRMb2NhdGlvbigpKSk7XG4gICAgICAgIHRoaXMua25pZmUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgdGhpcy5rbmlmZS5ncm91cCA9ICdrbmlmZSc7XG4gICAgICAgIHRoaXMua25pZmVNb3Rpb25TLnJlc2V0KCk7XG4gICAgfSxcbiAgICBtb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuZXcgY2MuVmVjMihldmVudC5nZXRMb2NhdGlvbigpKSk7XG4gICAgICAgIHRoaXMua25pZmUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9LFxuICAgIGVuZEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMua25pZmUuZ3JvdXAgPSAnZGVmYXVsdCc7XG4gICAgfSxcbiAgICB1cGRhdGVTY29yZShpc0hpdCwgc2NvcmUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgaWYgKGlzSGl0KSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHBlbmFsdHkgPSBzY29yZSAqIENvbnN0YW50cy5TQ09SRS5QRU5BTFRZX01VTFRJUExJRVI7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA8PSBwZW5hbHR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlIC09IHBlbmFsdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cERhdGVVaSgpO1xuICAgIH0sXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIHRoaXMubGlmZSsrO1xuICAgICAgICBpZiAodGhpcy5saWZlID49IENvbnN0YW50cy5TQ09SRS5NQVhfTElWRVMpIHRoaXMuZ2FtZU92ZXJIYW5kbGUoKTtcbiAgICB9LFxuICAgIHVwRGF0ZVVpKCkge1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gXCLliIbmlbAgOiBcIiArIHRoaXMuc2NvcmU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saWZlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGlmZUdbaV0ubGlmZUNvbnN1bWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2FtZU92ZXJIYW5kbGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmtuaWZlLmdyb3VwID0gJ2RlZmF1bHQnO1xuICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmJlc3RTY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgICAgICAgICB0aGlzLmJlc3RTY29yZUxhYmVsLnN0cmluZyA9ICfmnIDkvbPliIbmlbAgOiAnICsgdGhpcy5iZXN0U2NvcmU7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJCZXN0IHNjb3JlXCIsIHRoaXMuYmVzdFNjb3JlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaGVHYW1lT3Zlck1hc2sodHJ1ZSk7XG4gICAgICAgIH0sIENvbnN0YW50cy5USU1JTkcuR0FNRV9PVkVSX0RFTEFZKTtcbiAgICB9LFxuICAgIHJldHVybk1lbnUoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWVudScpO1xuICAgIH0sXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuc2hvd1RoZUdhbWVPdmVyTWFzayhmYWxzZSk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gICAgc2hvd1RoZUdhbWVPdmVyTWFzayhib29sKSB7XG4gICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyTWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlck1hc2sub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyTWFzay5zY2FsZSA9IDAuOTU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWVPdmVyTWFzaykudG8oQ29uc3RhbnRzLlRJTUlORy5HQU1FX09WRVJfVFdFRU4sIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lT3Zlck1hc2spLnRvKENvbnN0YW50cy5USU1JTkcuRkFERV9PVVRfVFdFRU4sIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyTWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Fruit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRnJ1aXQuanMiXSwibmFtZXMiOlsidXRpbHMiLCJyZXF1aXJlIiwiQ29uc3RhbnRzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb21GcnVpdCIsIk5vZGUiLCJzcGxpdEFuaSIsInR5cGUiLCJmb3JjZUhvcnpNaW4iLCJmb3JjZUhvcnpNYXgiLCJmb3JjZU1pbiIsImZvcmNlTWF4IiwiY29sb3JUeXBlIiwiY3V0RnJ1aXRBdWRpbyIsIkF1ZGlvQ2xpcCIsImN1dEJvbWJBdWRpbyIsIm9uTG9hZCIsInBvb2xOYW1lIiwiZ2FtZU5vZGUiLCJmaW5kIiwiTk9ERV9QQVRIIiwiR0FNRV9DT05UQUlORVIiLCJnYW1lT2JqIiwiZ2V0Q29tcG9uZW50IiwicGFyZW50Iiwibm9kZSIsImp1aWNlTm9kZSIsIkZSVUlUX0pVSUNFIiwiZnJ1aXRKdWljZUdyb3VwIiwiYW5pIiwiQW5pbWF0aW9uIiwiaW5pdCIsInNjb3JlIiwiaXNDdXQiLCJhY3RpdmUiLCJyZWNvdmVyeUFuaUZpcnN0RnBzIiwiZnJ1aXROb2RlUmlnaWRCb2R5IiwiUmlnaWRCb2R5IiwiZm9yY2VZIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZm9yY2VYIiwiYW5ndWxhclZlbG9jaXR5IiwiYXBwbHlGb3JjZVRvQ2VudGVyIiwidjIiLCJ4Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInRhZyIsIkNPTExJU0lPTl9UQUciLCJLTklGRSIsImNyZWF0ZUp1aWNlQmciLCJnZXRQb3NpdGlvbiIsInBsYXlTcGxpdEFuaSIsImF1ZGlvRW5naW5lIiwicGxheSIsInVwZGF0ZVNjb3JlIiwiY3V0Qm9tYlJlbW92ZUFsbENoaWxkcmVuIiwiRkxPT1IiLCJiYWNrVGhpc05vZGUiLCJjaGVja1JlbWFpbiIsImNsaXBzIiwiZ2V0Q2xpcHMiLCJsZW5ndGgiLCJ3YXJuIiwiYW5pTmFtZSIsIm5hbWUiLCJzdGF0ZSIsImdldEFuaW1hdGlvblN0YXRlIiwiY3VydmVzIiwiaW5mbyIsImdldFdyYXBwZWRJbmZvIiwiaSIsImxlbiIsImN1cnZlIiwic2FtcGxlIiwidGltZSIsInJhdGlvIiwiaXNCb21iQmFjayIsImJhY2tPYmpQb29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM5QixJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFFdENFLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBQ3JCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLLElBQUk7SUFDakJDLFFBQVEsRUFBRU4sRUFBRSxDQUFDSyxJQUFJO0lBQ2pCRSxJQUFJLEVBQUUsT0FBTztJQUNiQyxZQUFZLEVBQUUsQ0FBQztJQUNmQyxZQUFZLEVBQUUsSUFBSTtJQUNsQkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsU0FBUyxFQUFFLENBQUM7SUFDWkMsYUFBYSxFQUFFYixFQUFFLENBQUNjLFNBQVM7SUFDM0JDLFlBQVksRUFBRWYsRUFBRSxDQUFDYztFQUNyQixDQUFDO0VBQ0RFLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJQyxRQUFRLEdBQUdsQixFQUFFLENBQUNtQixJQUFJLENBQUNwQixTQUFTLENBQUNxQixTQUFTLENBQUNDLGNBQWMsQ0FBQztJQUMxRCxJQUFJLENBQUNDLE9BQU8sR0FBR0osUUFBUSxHQUFHQSxRQUFRLENBQUNLLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJO0lBQzlELElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDRCxNQUFNLENBQUNELFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDekQsSUFBSUcsU0FBUyxHQUFHMUIsRUFBRSxDQUFDbUIsSUFBSSxDQUFDcEIsU0FBUyxDQUFDcUIsU0FBUyxDQUFDTyxXQUFXLENBQUM7SUFDeEQsSUFBSSxDQUFDQyxlQUFlLEdBQUdGLFNBQVMsR0FBR0EsU0FBUyxDQUFDSCxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSTtJQUM5RSxJQUFJLElBQUksQ0FBQ2hCLElBQUksSUFBSSxPQUFPLEVBQUU7TUFDdEIsSUFBSSxDQUFDc0IsR0FBRyxHQUFHLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ2lCLFlBQVksQ0FBQ3ZCLEVBQUUsQ0FBQzhCLFNBQVMsQ0FBQztJQUN2RDtFQUNKLENBQUM7RUFDREMsSUFBSSxXQUFBQSxLQUFDZCxRQUFRLEVBQUVlLEtBQUssRUFBRTtJQUNsQixJQUFJLENBQUNmLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNlLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO0lBQ2xCLElBQUksSUFBSSxDQUFDMUIsSUFBSSxJQUFJLE9BQU8sRUFBRTtNQUN0QixJQUFJLENBQUNILFFBQVEsQ0FBQzhCLE1BQU0sR0FBRyxJQUFJO01BQzNCLElBQUksQ0FBQzVCLFFBQVEsQ0FBQzRCLE1BQU0sR0FBRyxLQUFLO01BQzVCLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDOUI7SUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxJQUFJLENBQUNYLElBQUksQ0FBQ0YsWUFBWSxDQUFDdkIsRUFBRSxDQUFDcUMsU0FBUyxDQUFDO0lBQzdELElBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMzQyxLQUFLLENBQUM0QyxNQUFNLENBQUMsSUFBSSxDQUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7TUFDL0QrQixNQUFNLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFDM0MsS0FBSyxDQUFDNEMsTUFBTSxDQUFDLElBQUksQ0FBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQzNFMkIsa0JBQWtCLENBQUNPLGVBQWUsR0FBRzlDLEtBQUssQ0FBQzRDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRztJQUN6RUwsa0JBQWtCLENBQUNRLGtCQUFrQixDQUFDNUMsRUFBRSxDQUFDNkMsRUFBRSxDQUFDLElBQUksQ0FBQ3BCLElBQUksQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQ0osTUFBTSxHQUFHQSxNQUFNLEVBQUVKLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNsRyxDQUFDO0VBQ0RTLGdCQUFnQixXQUFBQSxpQkFBQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUU7SUFDMUIsSUFBSUQsS0FBSyxDQUFDRSxHQUFHLElBQUluRCxTQUFTLENBQUNvRCxhQUFhLENBQUNDLEtBQUssRUFBRTtNQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDbkIsS0FBSyxFQUFFO1FBQ2IsSUFBSSxJQUFJLENBQUMxQixJQUFJLElBQUksT0FBTyxFQUFFO1VBQ3RCLElBQUksQ0FBQ3FCLGVBQWUsQ0FBQ3lCLGFBQWEsQ0FBQyxJQUFJLENBQUM1QixJQUFJLENBQUM2QixXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMxQyxTQUFTLENBQUM7VUFDM0UsSUFBSSxDQUFDMkMsWUFBWSxFQUFFO1VBQ25CdkQsRUFBRSxDQUFDd0QsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDNUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7VUFDakQsSUFBSSxDQUFDUyxPQUFPLENBQUNvQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzFCLEtBQUssQ0FBQztRQUM5QyxDQUFDLE1BQU07VUFDSCxJQUFJLENBQUNSLE1BQU0sQ0FBQ21DLHdCQUF3QixFQUFFO1VBQ3RDM0QsRUFBRSxDQUFDd0QsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDMUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEQ7TUFDSjtNQUNBLElBQUksQ0FBQ2tCLEtBQUssR0FBRyxJQUFJO0lBQ3JCO0lBQ0EsSUFBSWUsS0FBSyxDQUFDRSxHQUFHLElBQUluRCxTQUFTLENBQUNvRCxhQUFhLENBQUNTLEtBQUssRUFBRTtNQUM1QyxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUNuQixJQUFJLENBQUNyQyxNQUFNLENBQUNzQyxXQUFXLEVBQUU7SUFDN0I7RUFDSixDQUFDO0VBQ0RQLFlBQVksV0FBQUEsYUFBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDbkQsUUFBUSxDQUFDOEIsTUFBTSxHQUFHLEtBQUs7SUFDNUIsSUFBSSxDQUFDNUIsUUFBUSxDQUFDNEIsTUFBTSxHQUFHLElBQUk7SUFDM0IsSUFBSSxDQUFDTCxHQUFHLENBQUM0QixJQUFJLEVBQUU7RUFDbkIsQ0FBQztFQUNEO0VBQ0F0QixtQkFBbUIsV0FBQUEsb0JBQUEsRUFBRztJQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDTixHQUFHLEVBQUU7SUFDZixJQUFJa0MsS0FBSyxHQUFHLElBQUksQ0FBQ2xDLEdBQUcsQ0FBQ21DLFFBQVEsRUFBRTtJQUMvQixJQUFJLENBQUNELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzlCakUsRUFBRSxDQUFDa0UsSUFBSSxDQUFDLDZDQUE2QyxDQUFDO01BQ3REO0lBQ0o7SUFDQSxJQUFJQyxPQUFPLEdBQUdKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssSUFBSTtJQUMzQixJQUFJQyxLQUFLLEdBQUcsSUFBSSxDQUFDeEMsR0FBRyxDQUFDeUMsaUJBQWlCLENBQUNILE9BQU8sQ0FBQztJQUMvQyxJQUFJSSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBTTtJQUN6QixJQUFJQyxJQUFJLEdBQUdILEtBQUssQ0FBQ0ksY0FBYyxDQUFDLElBQUksQ0FBQztJQUNyQyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBR0osTUFBTSxDQUFDTixNQUFNLEVBQUVTLENBQUMsR0FBR0MsR0FBRyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUMvQyxJQUFJRSxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0csQ0FBQyxDQUFDO01BQ3JCRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJLEVBQUVOLElBQUksQ0FBQ08sS0FBSyxFQUFFLElBQUksQ0FBQztJQUM3QztFQUNKLENBQUM7RUFDRGxCLFlBQVksV0FBQUEsYUFBQ21CLFVBQVUsRUFBRTtJQUNyQixJQUFJLENBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUN6RSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDMEIsS0FBSyxFQUFFO01BQ3BELElBQUksQ0FBQ1gsT0FBTyxDQUFDb0MsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMxQixLQUFLLENBQUM7SUFDL0M7SUFDQW5DLEtBQUssQ0FBQ29GLFdBQVcsQ0FBQyxJQUFJLENBQUN6RCxNQUFNLEVBQUUsSUFBSSxDQUFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDUSxJQUFJLENBQUM7RUFDNUQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJ0NvbnN0YW50cycpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29tRnJ1aXQ6IGNjLk5vZGUsXG4gICAgICAgIHNwbGl0QW5pOiBjYy5Ob2RlLFxuICAgICAgICB0eXBlOiAnZnJ1aXQnLFxuICAgICAgICBmb3JjZUhvcnpNaW46IDAsXG4gICAgICAgIGZvcmNlSG9yek1heDogMTAwMCxcbiAgICAgICAgZm9yY2VNaW46IDMwMDAwLFxuICAgICAgICBmb3JjZU1heDogMzUwMDAsXG4gICAgICAgIGNvbG9yVHlwZTogMSxcbiAgICAgICAgY3V0RnJ1aXRBdWRpbzogY2MuQXVkaW9DbGlwLFxuICAgICAgICBjdXRCb21iQXVkaW86IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5wb29sTmFtZSA9ICcnO1xuICAgICAgICBsZXQgZ2FtZU5vZGUgPSBjYy5maW5kKENvbnN0YW50cy5OT0RFX1BBVEguR0FNRV9DT05UQUlORVIpO1xuICAgICAgICB0aGlzLmdhbWVPYmogPSBnYW1lTm9kZSA/IGdhbWVOb2RlLmdldENvbXBvbmVudChcIkdhbWVcIikgOiBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdGcnVpdEdyb3VwJyk7XG4gICAgICAgIGxldCBqdWljZU5vZGUgPSBjYy5maW5kKENvbnN0YW50cy5OT0RFX1BBVEguRlJVSVRfSlVJQ0UpO1xuICAgICAgICB0aGlzLmZydWl0SnVpY2VHcm91cCA9IGp1aWNlTm9kZSA/IGp1aWNlTm9kZS5nZXRDb21wb25lbnQoXCJKdWljZUdyb3VwXCIpIDogbnVsbDtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZnJ1aXQnKSB7XG4gICAgICAgICAgICB0aGlzLmFuaSA9IHRoaXMuc3BsaXRBbmkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQocG9vbE5hbWUsIHNjb3JlKSB7XG4gICAgICAgIHRoaXMucG9vbE5hbWUgPSBwb29sTmFtZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLmlzQ3V0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2ZydWl0Jykge1xuICAgICAgICAgICAgdGhpcy5jb21GcnVpdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zcGxpdEFuaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVjb3ZlcnlBbmlGaXJzdEZwcygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcnVpdE5vZGVSaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGxldCBmb3JjZVkgPSBNYXRoLmZsb29yKHV0aWxzLnJhbmRvbSh0aGlzLmZvcmNlTWluLCB0aGlzLmZvcmNlTWF4KSksXG4gICAgICAgICAgICBmb3JjZVggPSBNYXRoLmZsb29yKHV0aWxzLnJhbmRvbSh0aGlzLmZvcmNlSG9yek1pbiwgdGhpcy5mb3JjZUhvcnpNYXgpKTtcbiAgICAgICAgZnJ1aXROb2RlUmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IHV0aWxzLnJhbmRvbSgtMSwgMSkgPiAwID8gMTAwIDogLTEwMDtcbiAgICAgICAgZnJ1aXROb2RlUmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlcihjYy52Mih0aGlzLm5vZGUueCA+IDAgPyAtZm9yY2VYIDogZm9yY2VYLCBmb3JjZVkpLCB0cnVlKTtcbiAgICB9LFxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSBDb25zdGFudHMuQ09MTElTSU9OX1RBRy5LTklGRSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZnJ1aXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJ1aXRKdWljZUdyb3VwLmNyZWF0ZUp1aWNlQmcodGhpcy5ub2RlLmdldFBvc2l0aW9uKCksIHRoaXMuY29sb3JUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U3BsaXRBbmkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmN1dEZydWl0QXVkaW8sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT2JqLnVwZGF0ZVNjb3JlKHRydWUsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmN1dEJvbWJSZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY3V0Qm9tYkF1ZGlvLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0N1dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSBDb25zdGFudHMuQ09MTElTSU9OX1RBRy5GTE9PUikge1xuICAgICAgICAgICAgdGhpcy5iYWNrVGhpc05vZGUoKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmNoZWNrUmVtYWluKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlTcGxpdEFuaSgpIHtcbiAgICAgICAgdGhpcy5jb21GcnVpdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcGxpdEFuaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaS5wbGF5KCk7XG4gICAgfSxcbiAgICAvLyDmgaLlpI3liqjnlLvliLDnrKzkuIDluKfigJTigJTnm7TmjqXmk43kvZzlhoXpg6jmm7Lnur/vvIzlm6DkuLogQW5pbWF0aW9uLnN0b3AoKSDlnKggQ29jb3MgQ3JlYXRvciAyLngg5Lit5peg5rOV5q2j56Gu6YeN572u5Yiw56ys5LiA5bin44CC6L+Z5Zyo5byV5pOO54mI5pys6Ze05piv6ISG5byx55qE44CCXG4gICAgcmVjb3ZlcnlBbmlGaXJzdEZwcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFuaSkgcmV0dXJuO1xuICAgICAgICBsZXQgY2xpcHMgPSB0aGlzLmFuaS5nZXRDbGlwcygpO1xuICAgICAgICBpZiAoIWNsaXBzIHx8IGNsaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2Mud2FybignRnJ1aXQ6IE5vIGFuaW1hdGlvbiBjbGlwcyBmb3VuZCBvbiBzcGxpdEFuaScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbmlOYW1lID0gY2xpcHNbMF0ubmFtZTtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5hbmkuZ2V0QW5pbWF0aW9uU3RhdGUoYW5pTmFtZSk7XG4gICAgICAgIGxldCBjdXJ2ZXMgPSBzdGF0ZS5jdXJ2ZXM7XG4gICAgICAgIGxldCBpbmZvID0gc3RhdGUuZ2V0V3JhcHBlZEluZm8oMC4wMSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJ2ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJ2ZSA9IGN1cnZlc1tpXTtcbiAgICAgICAgICAgIGN1cnZlLnNhbXBsZShpbmZvLnRpbWUsIGluZm8ucmF0aW8sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiYWNrVGhpc05vZGUoaXNCb21iQmFjaykge1xuICAgICAgICBpZiAoIWlzQm9tYkJhY2sgJiYgdGhpcy50eXBlID09ICdmcnVpdCcgJiYgIXRoaXMuaXNDdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iai51cGRhdGVTY29yZShmYWxzZSwgdGhpcy5zY29yZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXRpbHMuYmFja09ialBvb2wodGhpcy5wYXJlbnQsIHRoaXMucG9vbE5hbWUsIHRoaXMubm9kZSk7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76bdfhm93ZOOb8AnKuDLDR9', 'utils');
// Scripts/utils.js

"use strict";

module.exports = {
  //批量初始化对象池
  batchInitObjPool: function batchInitObjPool(targetObj, objArray) {
    for (var i = 0; i < objArray.length; i++) {
      this.initObjPool(targetObj, objArray[i]);
    }
  },
  //初始化对象池
  initObjPool: function initObjPool(targetObj, objInfo) {
    if (!objInfo || !objInfo.prefab) {
      cc.warn('initObjPool: objInfo or objInfo.prefab is missing');
      return;
    }
    var poolName = objInfo.name + 'Pool';
    targetObj[poolName] = new cc.NodePool();
    var initPoolCount = objInfo.initPoolCount || 0;
    for (var i = 0; i < initPoolCount; ++i) {
      var nodeO = cc.instantiate(objInfo.prefab);
      targetObj[poolName].put(nodeO);
    }
  },
  //生成节点
  genNewNode: function genNewNode(pool, prefab, nodeParent) {
    var newNode = pool.size() > 0 ? pool.get() : null;
    if (!newNode) {
      if (!prefab) {
        cc.warn('genNewNode: pool is empty and no prefab provided');
        return null;
      }
      newNode = cc.instantiate(prefab);
    }
    nodeParent.addChild(newNode);
    return newNode;
  },
  //放回对象池
  backObjPool: function backObjPool(targetObj, poolName, nodeInfo) {
    if (targetObj[poolName]) {
      targetObj[poolName].put(nodeInfo);
    }
  },
  //获取随机数
  random: function random(min, max) {
    return Math.random() * (max - min) + min;
  }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImJhdGNoSW5pdE9ialBvb2wiLCJ0YXJnZXRPYmoiLCJvYmpBcnJheSIsImkiLCJsZW5ndGgiLCJpbml0T2JqUG9vbCIsIm9iakluZm8iLCJwcmVmYWIiLCJjYyIsIndhcm4iLCJwb29sTmFtZSIsIm5hbWUiLCJOb2RlUG9vbCIsImluaXRQb29sQ291bnQiLCJub2RlTyIsImluc3RhbnRpYXRlIiwicHV0IiwiZ2VuTmV3Tm9kZSIsInBvb2wiLCJub2RlUGFyZW50IiwibmV3Tm9kZSIsInNpemUiLCJnZXQiLCJhZGRDaGlsZCIsImJhY2tPYmpQb29sIiwibm9kZUluZm8iLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNiO0VBQ0FDLGdCQUFnQixXQUFBQSxpQkFBQ0MsU0FBUyxFQUFFQyxRQUFRLEVBQUU7SUFDbEMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJLENBQUNFLFdBQVcsQ0FBQ0osU0FBUyxFQUFFQyxRQUFRLENBQUNDLENBQUMsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQztFQUNEO0VBQ0FFLFdBQVcsV0FBQUEsWUFBQ0osU0FBUyxFQUFFSyxPQUFPLEVBQUU7SUFDNUIsSUFBSSxDQUFDQSxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxNQUFNLEVBQUU7TUFDN0JDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLG1EQUFtRCxDQUFDO01BQzVEO0lBQ0o7SUFDQSxJQUFJQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0ssSUFBSSxHQUFHLE1BQU07SUFDcENWLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLEdBQUcsSUFBSUYsRUFBRSxDQUFDSSxRQUFRLEVBQUU7SUFDdkMsSUFBSUMsYUFBYSxHQUFHUCxPQUFPLENBQUNPLGFBQWEsSUFBSSxDQUFDO0lBQzlDLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVSxhQUFhLEVBQUUsRUFBRVYsQ0FBQyxFQUFFO01BQ3BDLElBQUlXLEtBQUssR0FBR04sRUFBRSxDQUFDTyxXQUFXLENBQUNULE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO01BQzFDTixTQUFTLENBQUNTLFFBQVEsQ0FBQyxDQUFDTSxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUNsQztFQUNKLENBQUM7RUFDRDtFQUNBRyxVQUFVLFdBQUFBLFdBQUNDLElBQUksRUFBRVgsTUFBTSxFQUFFWSxVQUFVLEVBQUU7SUFDakMsSUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksRUFBRSxHQUFHLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQ2pELElBQUksQ0FBQ0YsT0FBTyxFQUFFO01BQ1YsSUFBSSxDQUFDYixNQUFNLEVBQUU7UUFDVEMsRUFBRSxDQUFDQyxJQUFJLENBQUMsa0RBQWtELENBQUM7UUFDM0QsT0FBTyxJQUFJO01BQ2Y7TUFDQVcsT0FBTyxHQUFHWixFQUFFLENBQUNPLFdBQVcsQ0FBQ1IsTUFBTSxDQUFDO0lBQ3BDO0lBQ0FZLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDSCxPQUFPLENBQUM7SUFDNUIsT0FBT0EsT0FBTztFQUNsQixDQUFDO0VBQ0Q7RUFDQUksV0FBVyxXQUFBQSxZQUFDdkIsU0FBUyxFQUFFUyxRQUFRLEVBQUVlLFFBQVEsRUFBRTtJQUN2QyxJQUFJeEIsU0FBUyxDQUFDUyxRQUFRLENBQUMsRUFBRTtNQUNyQlQsU0FBUyxDQUFDUyxRQUFRLENBQUMsQ0FBQ00sR0FBRyxDQUFDUyxRQUFRLENBQUM7SUFDckM7RUFDSixDQUFDO0VBQ0Q7RUFDQUMsTUFBTSxXQUFBQSxPQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNiLE9BQU9DLElBQUksQ0FBQ0gsTUFBTSxFQUFFLElBQUlFLEdBQUcsR0FBR0QsR0FBRyxDQUFDLEdBQUdBLEdBQUc7RUFDNUM7QUFDSixDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvL+aJuemHj+WIneWni+WMluWvueixoeaxoFxuICAgIGJhdGNoSW5pdE9ialBvb2wodGFyZ2V0T2JqLCBvYmpBcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRPYmpQb29sKHRhcmdldE9iaiwgb2JqQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+WIneWni+WMluWvueixoeaxoFxuICAgIGluaXRPYmpQb29sKHRhcmdldE9iaiwgb2JqSW5mbykge1xuICAgICAgICBpZiAoIW9iakluZm8gfHwgIW9iakluZm8ucHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKCdpbml0T2JqUG9vbDogb2JqSW5mbyBvciBvYmpJbmZvLnByZWZhYiBpcyBtaXNzaW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvb2xOYW1lID0gb2JqSW5mby5uYW1lICsgJ1Bvb2wnO1xuICAgICAgICB0YXJnZXRPYmpbcG9vbE5hbWVdID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIGxldCBpbml0UG9vbENvdW50ID0gb2JqSW5mby5pbml0UG9vbENvdW50IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdFBvb2xDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbm9kZU8gPSBjYy5pbnN0YW50aWF0ZShvYmpJbmZvLnByZWZhYik7XG4gICAgICAgICAgICB0YXJnZXRPYmpbcG9vbE5hbWVdLnB1dChub2RlTyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v55Sf5oiQ6IqC54K5XG4gICAgZ2VuTmV3Tm9kZShwb29sLCBwcmVmYWIsIG5vZGVQYXJlbnQpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBwb29sLnNpemUoKSA+IDAgPyBwb29sLmdldCgpIDogbnVsbDtcbiAgICAgICAgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgICAgICBpZiAoIXByZWZhYikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oJ2dlbk5ld05vZGU6IHBvb2wgaXMgZW1wdHkgYW5kIG5vIHByZWZhYiBwcm92aWRlZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZVBhcmVudC5hZGRDaGlsZChuZXdOb2RlKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfSxcbiAgICAvL+aUvuWbnuWvueixoeaxoFxuICAgIGJhY2tPYmpQb29sKHRhcmdldE9iaiwgcG9vbE5hbWUsIG5vZGVJbmZvKSB7XG4gICAgICAgIGlmICh0YXJnZXRPYmpbcG9vbE5hbWVdKSB7XG4gICAgICAgICAgICB0YXJnZXRPYmpbcG9vbE5hbWVdLnB1dChub2RlSW5mbyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v6I635Y+W6ZqP5py65pWwXG4gICAgcmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxufTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FruitGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRnJ1aXRHcm91cC5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJDb25zdGFudHMiLCJmcnVpdEciLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpbml0UG9vbENvdW50Iiwic2NvcmUiLCJ0eXBlIiwicHJlZmFiIiwiUHJlZmFiIiwiQ29tcG9uZW50IiwibWF4TGVuZ3RoIiwiZmxhc2hOb2RlIiwiTm9kZSIsInRocm93Qm9tYiIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdhbWVPYmoiLCJub2RlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50Iiwibm9Cb21iQXJyIiwiZmlsdGVyIiwiYSIsImJhdGNoSW5pdE9ialBvb2wiLCJfc2NoZWR1bGVkQ3JlYXRlIiwic2NoZWR1bGVDcmVhdGVXYXZlIiwiX3RoaXMiLCJzY2hlZHVsZU9uY2UiLCJjcmVhdGVGcnVpdExpc3QiLCJUSU1JTkciLCJXQVZFX0NSRUFURV9ERUxBWSIsInRvdGFsRnIiLCJyYW5kb21MZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpIiwicmFuIiwiZnJ1aXQiLCJwb29sTmFtZSIsImxlbmd0aCIsImZydWl0Tm9kZSIsImdlbk5ld05vZGUiLCJzZXRQb3NpdGlvbiIsInYyIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiY2hlY2tSZW1haW4iLCJnYW1lT3ZlciIsImNoaWxkcmVuIiwiY3V0Qm9tYlJlbW92ZUFsbENoaWxkcmVuIiwiZmxhc2hTY3JlZW4iLCJjaGlsZE9iakFyciIsIm1hcCIsImJhY2tUaGlzTm9kZSIsImxvc2VMaWZlIiwidXBEYXRlVWkiLCJfdGhpczIiLCJhY3RpdmUiLCJvcGFjaXR5IiwiQk9NQl9GTEFTSCIsIklOSVRJQUxfT1BBQ0lUWSIsInR3ZWVuIiwidG8iLCJGTEFTSF9EVVJBVElPTiIsImNhbGwiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDOUIsSUFBTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBRXRDLElBQUlFLE1BQU0sR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDbEJDLElBQUksRUFBRSxRQUFRO0VBQ2RDLFVBQVUsRUFBRTtJQUNSRCxJQUFJLEVBQUUsRUFBRTtJQUNSRSxhQUFhLEVBQUUsRUFBRTtJQUNqQkMsS0FBSyxFQUFFLENBQUM7SUFDUkMsSUFBSSxFQUFFLE9BQU87SUFDYkMsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0VBQ2Y7QUFDSixDQUFDLENBQUM7QUFFRlIsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNTLFNBQVM7RUFDckJOLFVBQVUsRUFBRTtJQUNSTyxTQUFTLEVBQUUsQ0FBQztJQUNaQyxTQUFTLEVBQUVYLEVBQUUsQ0FBQ1ksSUFBSTtJQUNsQmIsTUFBTSxFQUFFO01BQ0osV0FBUyxFQUFFO01BQ1hPLElBQUksRUFBRVA7SUFDVixDQUFDO0lBQ0RjLFNBQVMsRUFBRWIsRUFBRSxDQUFDYztFQUNsQixDQUFDO0VBQ0RDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNwRCxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNyQixNQUFNLENBQUNzQixNQUFNLENBQUMsVUFBQUMsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ2hCLElBQUksSUFBSSxPQUFPO0lBQUEsRUFBQztJQUMzRFYsS0FBSyxDQUFDMkIsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ3hCLE1BQU0sQ0FBQztJQUN6QyxJQUFJLENBQUN5QixnQkFBZ0IsR0FBRyxLQUFLO0VBQ2pDLENBQUM7RUFDREMsa0JBQWtCLFdBQUFBLG1CQUFBLEVBQUc7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCLElBQUksSUFBSSxDQUFDRixnQkFBZ0IsRUFBRTtJQUMzQixJQUFJLENBQUNBLGdCQUFnQixHQUFHLElBQUk7SUFDNUIsSUFBSSxDQUFDRyxZQUFZLENBQUMsWUFBTTtNQUNwQkQsS0FBSSxDQUFDRixnQkFBZ0IsR0FBRyxLQUFLO01BQzdCRSxLQUFJLENBQUNFLGVBQWUsRUFBRTtJQUMxQixDQUFDLEVBQUU5QixTQUFTLENBQUMrQixNQUFNLENBQUNDLGlCQUFpQixDQUFDO0VBQzFDLENBQUM7RUFDREYsZUFBZSxXQUFBQSxnQkFBQSxFQUFHO0lBQ2QsSUFBSUcsT0FBTyxHQUFHLElBQUksQ0FBQ2hDLE1BQU07SUFDekI7SUFDQSxJQUFJaUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ3RDLEtBQUssQ0FBQ3VDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDekIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLEtBQUssSUFBSTBCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0osWUFBWSxFQUFFSSxDQUFDLEVBQUUsRUFBRTtNQUNuQyxJQUFJQyxHQUFHO1FBQUVDLEtBQUs7UUFBRUMsUUFBUTtNQUN4QjtNQUNBRixHQUFHLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDdEMsS0FBSyxDQUFDdUMsTUFBTSxDQUFDLENBQUMsRUFBRUosT0FBTyxDQUFDUyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7TUFDdkRGLEtBQUssR0FBR1AsT0FBTyxDQUFDTSxHQUFHLENBQUM7TUFDcEJFLFFBQVEsR0FBR0QsS0FBSyxDQUFDcEMsSUFBSSxHQUFHLE1BQU07TUFDOUIsSUFBSXVDLFNBQVMsR0FBRzdDLEtBQUssQ0FBQzhDLFVBQVUsQ0FBQyxJQUFJLENBQUNILFFBQVEsQ0FBQyxFQUFFRCxLQUFLLENBQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDVSxJQUFJLENBQUM7TUFDekV3QixTQUFTLENBQUNFLFdBQVcsQ0FBQzNDLEVBQUUsQ0FBQzRDLEVBQUUsQ0FBQ2hELEtBQUssQ0FBQ3VDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQ2xCLElBQUksQ0FBQzRCLEtBQUssR0FBRyxDQUFDLEdBQ3pESixTQUFTLENBQUNJLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDNUIsSUFBSSxDQUFDNEIsS0FBSyxHQUFHLENBQUMsR0FBR0osU0FBUyxDQUFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQy9ELEVBQUUsSUFBSSxDQUFDNUIsSUFBSSxDQUFDNkIsTUFBTSxHQUFHLENBQUMsR0FBR0wsU0FBUyxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwREwsU0FBUyxDQUFDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDNEIsSUFBSSxDQUFDUixRQUFRLEVBQUVELEtBQUssQ0FBQ2pDLEtBQUssQ0FBQztNQUMzRCxJQUFJaUMsS0FBSyxDQUFDaEMsSUFBSSxJQUFJLE1BQU0sRUFBRTtRQUN0Qk4sRUFBRSxDQUFDZ0QsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDcEMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDN0NrQixPQUFPLEdBQUcsSUFBSSxDQUFDWCxTQUFTO01BQzVCO0lBQ0o7RUFDSixDQUFDO0VBQ0Q4QixXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWLElBQUksSUFBSSxDQUFDbEMsT0FBTyxDQUFDbUMsUUFBUSxFQUFFO0lBQzNCLElBQUksSUFBSSxDQUFDbEMsSUFBSSxDQUFDbUMsUUFBUSxDQUFDWixNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ2Ysa0JBQWtCLEVBQUU7SUFDN0I7RUFDSixDQUFDO0VBQ0Q0Qix3QkFBd0IsV0FBQUEseUJBQUEsRUFBRztJQUN2QixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJQyxXQUFXLEdBQUcsSUFBSSxDQUFDdEMsSUFBSSxDQUFDbUMsUUFBUSxDQUFDSSxHQUFHLENBQUMsVUFBQ2xDLENBQUMsRUFBSztNQUM1QyxPQUFPQSxDQUFDLENBQUNILFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxJQUFJaUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbUIsV0FBVyxDQUFDZixNQUFNLEVBQUVKLENBQUMsRUFBRSxFQUFFO01BQ3pDbUIsV0FBVyxDQUFDbkIsQ0FBQyxDQUFDLENBQUNxQixZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3JDO0lBQ0EsSUFBSSxDQUFDekMsT0FBTyxDQUFDMEMsUUFBUSxFQUFFO0lBQ3ZCLElBQUksQ0FBQzFDLE9BQU8sQ0FBQzJDLFFBQVEsRUFBRTtJQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDM0MsT0FBTyxDQUFDbUMsUUFBUSxFQUFFO01BQ3hCLElBQUksQ0FBQzFCLGtCQUFrQixFQUFFO0lBQzdCO0VBQ0osQ0FBQztFQUNENkIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBTSxNQUFBO0lBQ1YsSUFBSSxDQUFDakQsU0FBUyxDQUFDa0QsTUFBTSxHQUFHLElBQUk7SUFDNUIsSUFBSSxDQUFDbEQsU0FBUyxDQUFDbUQsT0FBTyxHQUFHaEUsU0FBUyxDQUFDaUUsVUFBVSxDQUFDQyxlQUFlO0lBQzdEaEUsRUFBRSxDQUFDaUUsS0FBSyxDQUFDLElBQUksQ0FBQ3RELFNBQVMsQ0FBQyxDQUFDdUQsRUFBRSxDQUFDcEUsU0FBUyxDQUFDK0IsTUFBTSxDQUFDc0MsY0FBYyxFQUFFO01BQUVMLE9BQU8sRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUFDTSxJQUFJLENBQUMsWUFBTTtNQUNwRlIsTUFBSSxDQUFDakQsU0FBUyxDQUFDa0QsTUFBTSxHQUFHLEtBQUs7SUFDakMsQ0FBQyxDQUFDLENBQUNRLEtBQUssRUFBRTtFQUNkO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlscyA9IHJlcXVpcmUoJ3V0aWxzJyk7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCdDb25zdGFudHMnKTtcblxubGV0IGZydWl0RyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnZnJ1aXRHJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbml0UG9vbENvdW50OiAxMCxcbiAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgIHR5cGU6ICdmcnVpdCcsXG4gICAgICAgIHByZWZhYjogY2MuUHJlZmFiLFxuICAgIH1cbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWF4TGVuZ3RoOiA1LFxuICAgICAgICBmbGFzaE5vZGU6IGNjLk5vZGUsXG4gICAgICAgIGZydWl0Rzoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBmcnVpdEcsXG4gICAgICAgIH0sXG4gICAgICAgIHRocm93Qm9tYjogY2MuQXVkaW9DbGlwLFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmdhbWVPYmogPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpO1xuICAgICAgICB0aGlzLm5vQm9tYkFyciA9IHRoaXMuZnJ1aXRHLmZpbHRlcihhID0+IGEudHlwZSA9PSAnZnJ1aXQnKTtcbiAgICAgICAgdXRpbHMuYmF0Y2hJbml0T2JqUG9vbCh0aGlzLCB0aGlzLmZydWl0Ryk7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlZENyZWF0ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2NoZWR1bGVDcmVhdGVXYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVkQ3JlYXRlKSByZXR1cm47XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlZENyZWF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlZENyZWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGcnVpdExpc3QoKTtcbiAgICAgICAgfSwgQ29uc3RhbnRzLlRJTUlORy5XQVZFX0NSRUFURV9ERUxBWSk7XG4gICAgfSxcbiAgICBjcmVhdGVGcnVpdExpc3QoKSB7XG4gICAgICAgIGxldCB0b3RhbEZyID0gdGhpcy5mcnVpdEc7XG4gICAgICAgIC8vICswLjQg5YGP5ZCR5L2/IE1hdGguZmxvb3Ig5pu06aKR57mB5Zyw5ZG95Lit5pyA5aSn5YC8XG4gICAgICAgIGxldCByYW5kb21MZW5ndGggPSBNYXRoLmZsb29yKHV0aWxzLnJhbmRvbSgxLCB0aGlzLm1heExlbmd0aCArIDAuNCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuLCBmcnVpdCwgcG9vbE5hbWU7XG4gICAgICAgICAgICAvLyAtMC4xIOmYsuatoumaj+acuuWAvOaBsOWlveetieS6jiBsZW5ndGjvvIzkv53or4HntKLlvJXmgLvmmK/mnInmlYjnmoRcbiAgICAgICAgICAgIHJhbiA9IE1hdGguZmxvb3IodXRpbHMucmFuZG9tKDAsIHRvdGFsRnIubGVuZ3RoIC0gMC4xKSk7XG4gICAgICAgICAgICBmcnVpdCA9IHRvdGFsRnJbcmFuXTtcbiAgICAgICAgICAgIHBvb2xOYW1lID0gZnJ1aXQubmFtZSArICdQb29sJztcbiAgICAgICAgICAgIGxldCBmcnVpdE5vZGUgPSB1dGlscy5nZW5OZXdOb2RlKHRoaXNbcG9vbE5hbWVdLCBmcnVpdC5wcmVmYWIsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICBmcnVpdE5vZGUuc2V0UG9zaXRpb24oY2MudjIodXRpbHMucmFuZG9tKC10aGlzLm5vZGUud2lkdGggLyAyICtcbiAgICAgICAgICAgICAgICBmcnVpdE5vZGUud2lkdGggLyAyLCB0aGlzLm5vZGUud2lkdGggLyAyIC0gZnJ1aXROb2RlLndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgLSh0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIGZydWl0Tm9kZS5oZWlnaHQgLyAyKSkpO1xuICAgICAgICAgICAgZnJ1aXROb2RlLmdldENvbXBvbmVudChcIkZydWl0XCIpLmluaXQocG9vbE5hbWUsIGZydWl0LnNjb3JlKTtcbiAgICAgICAgICAgIGlmIChmcnVpdC50eXBlID09ICdib21iJykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy50aHJvd0JvbWIsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB0b3RhbEZyID0gdGhpcy5ub0JvbWJBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrUmVtYWluKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lT2JqLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVDcmVhdGVXYXZlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1dEJvbWJSZW1vdmVBbGxDaGlsZHJlbigpIHtcbiAgICAgICAgdGhpcy5mbGFzaFNjcmVlbigpO1xuICAgICAgICBsZXQgY2hpbGRPYmpBcnIgPSB0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5nZXRDb21wb25lbnQoXCJGcnVpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRPYmpBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkT2JqQXJyW2ldLmJhY2tUaGlzTm9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVPYmoubG9zZUxpZmUoKTtcbiAgICAgICAgdGhpcy5nYW1lT2JqLnVwRGF0ZVVpKCk7XG4gICAgICAgIGlmICghdGhpcy5nYW1lT2JqLmdhbWVPdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlQ3JlYXRlV2F2ZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmbGFzaFNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5mbGFzaE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFzaE5vZGUub3BhY2l0eSA9IENvbnN0YW50cy5CT01CX0ZMQVNILklOSVRJQUxfT1BBQ0lUWTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5mbGFzaE5vZGUpLnRvKENvbnN0YW50cy5USU1JTkcuRkxBU0hfRFVSQVRJT04sIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWVudS5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJrbmlmZSIsIk5vZGUiLCJidG5CZWdpbkNpciIsImJ0blF1aXRDaXIiLCJidG5CZWdpbmZSIiwiYnRuUXVpdGZSIiwiYnV0dG9uQ2xpcCIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwia25pZmVNb3Rpb25TIiwiZ2V0Q29tcG9uZW50IiwiTW90aW9uU3RyZWFrIiwic3RhcnQiLCJrbmlmZU1vdmUiLCJjaXJjbGVSb3RhdGUiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInN0YXJ0RXZlbnQiLCJUT1VDSF9NT1ZFIiwibW92ZUV2ZW50IiwiVE9VQ0hfRU5EIiwiZW5kRXZlbnQiLCJlIiwicG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJWZWMyIiwiZ2V0TG9jYXRpb24iLCJzZXRQb3NpdGlvbiIsInJlc2V0IiwiY3JlYXRlUm90ZSIsImFuZ2xlIiwidHdlZW4iLCJieSIsIlRJTUlORyIsIlJPVEFURV9EVVJBVElPTiIsInJlcGVhdEZvcmV2ZXIiLCJ0aGVuIiwiYmFja0xpc3QiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJsb2FkU2NlbmUiLCJnYW1lU3RhcnQiLCJzdG9wQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUV0Q0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUdKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNmQyxXQUFXLEVBQUdOLEVBQUUsQ0FBQ0ssSUFBSTtJQUNyQkUsVUFBVSxFQUFHUCxFQUFFLENBQUNLLElBQUk7SUFD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LENBQUNQLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNuQixLQUFLLEVBQUU7SUFDeERsQixFQUFFLENBQUN1QyxLQUFLLENBQUMsSUFBSSxDQUFDOUIsU0FBUyxDQUFDLENBQUNtQyxJQUFJLENBQUNQLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNuQixLQUFLLEVBQUU7RUFDM0QsQ0FBQztFQUNEMkIsUUFBUSxXQUFBQSxTQUFBLEVBQUc7SUFDUDdDLEVBQUUsQ0FBQzhDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3JDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlDVixFQUFFLENBQUNhLFFBQVEsQ0FBQ21DLFNBQVMsQ0FBQyxRQUFRLENBQUM7RUFDbkMsQ0FBQztFQUNEQyxTQUFTLFdBQUFBLFVBQUEsRUFBRztJQUNSakQsRUFBRSxDQUFDOEMsV0FBVyxDQUFDSSxPQUFPLEVBQUU7SUFDeEJsRCxFQUFFLENBQUM4QyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNyQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5Q1YsRUFBRSxDQUFDYSxRQUFRLENBQUNtQyxTQUFTLENBQUMsTUFBTSxDQUFDO0VBQ2pDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCdDb25zdGFudHMnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGtuaWZlIDogY2MuTm9kZSxcbiAgICAgICAgYnRuQmVnaW5DaXIgOiBjYy5Ob2RlLFxuICAgICAgICBidG5RdWl0Q2lyIDogY2MuTm9kZSxcbiAgICAgICAgYnRuQmVnaW5mUiA6IGNjLk5vZGUsXG4gICAgICAgIGJ0blF1aXRmUiA6IGNjLk5vZGUsXG4gICAgICAgIGJ1dHRvbkNsaXAgOiBjYy5BdWRpb0NsaXAsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICB0aGlzLmtuaWZlTW90aW9uUyA9IHRoaXMua25pZmUuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgfSxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5rbmlmZU1vdmUoKTtcbiAgICAgICAgdGhpcy5jaXJjbGVSb3RhdGUoKTtcbiAgICB9LFxuICAgIGtuaWZlTW92ZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5tb3ZlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVuZEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuICAgIHN0YXJ0RXZlbnQoZSkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ldyBjYy5WZWMyKGUuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgICB0aGlzLmtuaWZlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIHRoaXMua25pZmVNb3Rpb25TLnJlc2V0KCk7XG4gICAgfSxcbiAgICBtb3ZlRXZlbnQoZSkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ldyBjYy5WZWMyKGUuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgICB0aGlzLmtuaWZlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfSxcbiAgICBlbmRFdmVudChlKSB7XG4gICAgICAgIHRoaXMua25pZmVNb3Rpb25TLnJlc2V0KCk7XG4gICAgfSxcbiAgICBjaXJjbGVSb3RhdGUoKSB7XG4gICAgICAgIGxldCBjcmVhdGVSb3RlID0gKGFuZ2xlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5ieShDb25zdGFudHMuVElNSU5HLlJPVEFURV9EVVJBVElPTiwgeyBhbmdsZTogYW5nbGUgfSkucmVwZWF0Rm9yZXZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuQmVnaW5DaXIpLnRoZW4oY3JlYXRlUm90ZSgzNjApKS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0blF1aXRDaXIpLnRoZW4oY3JlYXRlUm90ZSgzNjApKS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bkJlZ2luZlIpLnRoZW4oY3JlYXRlUm90ZSgtMzYwKSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5idG5RdWl0ZlIpLnRoZW4oY3JlYXRlUm90ZSgtMzYwKSkuc3RhcnQoKTtcbiAgICB9LFxuICAgIGJhY2tMaXN0KCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uQ2xpcCwgZmFsc2UsIDEpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0RldGFpbCcpO1xuICAgIH0sXG4gICAgZ2FtZVN0YXJ0KCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JuiceGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnVpY2VHcm91cC5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJDb25zdGFudHMiLCJqdWljZUNvbG9yIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiY29kZSIsImNvbG9yIiwiQ29sb3IiLCJvcGFjaXR5IiwiQ29tcG9uZW50IiwidHlwZSIsImp1aWNlUGZiIiwiUHJlZmFiIiwib25Mb2FkIiwiY3JlYXRlUG9vbE9iaiIsInByZWZhYiIsImluaXRQb29sQ291bnQiLCJQT09MIiwiRlJVSVRfSlVJQ0VfU0laRSIsInBvb2xOYW1lIiwiaW5pdE9ialBvb2wiLCJjcmVhdGVKdWljZUJnIiwicG9zIiwiY29sb3JUeXBlIiwiY3Vyckp1aWNlQ29sb3IiLCJmaW5kIiwiYSIsInJvdGF0aW9uIiwicmFuZG9tIiwianVpY2VOb2RlIiwiZ2VuTmV3Tm9kZSIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImluaXQiLCJiYWNrTm9kZSIsIm5vZGVJbmZvIiwiYmFja09ialBvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUV0QyxJQUFJRSxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCQyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRSxDQUFDO0lBQ1BDLEtBQUssRUFBRUwsRUFBRSxDQUFDTSxLQUFLO0lBQ2ZDLE9BQU8sRUFBRTtFQUNiO0FBQ0osQ0FBQyxDQUFDO0FBRUZQLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDUSxTQUFTO0VBQ3JCTCxVQUFVLEVBQUU7SUFDUkosVUFBVSxFQUFFO01BQ1IsV0FBUyxFQUFFO01BQ1hVLElBQUksRUFBRVY7SUFDVixDQUFDO0lBQ0RXLFFBQVEsRUFBRVYsRUFBRSxDQUFDVztFQUNqQixDQUFDO0VBQ0RDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBSUMsYUFBYSxHQUFHO01BQ2hCWCxJQUFJLEVBQUUsWUFBWTtNQUNsQlksTUFBTSxFQUFFLElBQUksQ0FBQ0osUUFBUTtNQUNyQkssYUFBYSxFQUFFakIsU0FBUyxDQUFDa0IsSUFBSSxDQUFDQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxDQUFDQyxRQUFRLEdBQUcsZ0JBQWdCO0lBQ2hDdEIsS0FBSyxDQUFDdUIsV0FBVyxDQUFDLElBQUksRUFBRU4sYUFBYSxDQUFDO0VBQzFDLENBQUM7RUFDRE8sYUFBYSxXQUFBQSxjQUFDQyxHQUFHLEVBQUVDLFNBQVMsRUFBRTtJQUMxQixJQUFJQyxjQUFjLEdBQUcsSUFBSSxDQUFDeEIsVUFBVSxDQUFDeUIsSUFBSSxDQUFDLFVBQUFDLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNyQixJQUFJLElBQUlrQixTQUFTO0lBQUEsRUFBQztJQUNuRSxJQUFJLENBQUNDLGNBQWMsRUFBRTtJQUNyQixJQUFJbEIsS0FBSyxHQUFHa0IsY0FBYyxDQUFDbEIsS0FBSztJQUNoQyxJQUFJcUIsUUFBUSxHQUFHOUIsS0FBSyxDQUFDK0IsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDbkMsSUFBSXBCLE9BQU8sR0FBR2dCLGNBQWMsQ0FBQ2hCLE9BQU87SUFDcEMsSUFBSXFCLFNBQVMsR0FBR2hDLEtBQUssQ0FBQ2lDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDWCxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUNSLFFBQVEsRUFBRSxJQUFJLENBQUNvQixJQUFJLENBQUM7SUFDL0UsSUFBSSxDQUFDRixTQUFTLEVBQUU7SUFDaEJBLFNBQVMsQ0FBQ0csV0FBVyxDQUFDVixHQUFHLENBQUM7SUFDMUJPLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDQyxJQUFJLENBQUNQLFFBQVEsRUFBRXJCLEtBQUssRUFBRUUsT0FBTyxDQUFDO0VBQ3ZFLENBQUM7RUFDRDJCLFFBQVEsV0FBQUEsU0FBQ0MsUUFBUSxFQUFFO0lBQ2Z2QyxLQUFLLENBQUN3QyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ2xCLFFBQVEsRUFBRWlCLFFBQVEsQ0FBQztFQUNwRDtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXRpbHMgPSByZXF1aXJlKCd1dGlscycpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnQ29uc3RhbnRzJyk7XG5cbmxldCBqdWljZUNvbG9yID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdqdWljZUNvbG9yJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIGNvbG9yOiBjYy5Db2xvcixcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgfVxufSk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBqdWljZUNvbG9yOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGp1aWNlQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAganVpY2VQZmI6IGNjLlByZWZhYixcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IGNyZWF0ZVBvb2xPYmogPSB7XG4gICAgICAgICAgICBuYW1lOiAnZnJ1aXRKdWljZScsXG4gICAgICAgICAgICBwcmVmYWI6IHRoaXMuanVpY2VQZmIsXG4gICAgICAgICAgICBpbml0UG9vbENvdW50OiBDb25zdGFudHMuUE9PTC5GUlVJVF9KVUlDRV9TSVpFXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucG9vbE5hbWUgPSAnZnJ1aXRKdWljZVBvb2wnO1xuICAgICAgICB1dGlscy5pbml0T2JqUG9vbCh0aGlzLCBjcmVhdGVQb29sT2JqKTtcbiAgICB9LFxuICAgIGNyZWF0ZUp1aWNlQmcocG9zLCBjb2xvclR5cGUpIHtcbiAgICAgICAgbGV0IGN1cnJKdWljZUNvbG9yID0gdGhpcy5qdWljZUNvbG9yLmZpbmQoYSA9PiBhLmNvZGUgPT0gY29sb3JUeXBlKTtcbiAgICAgICAgaWYgKCFjdXJySnVpY2VDb2xvcikgcmV0dXJuO1xuICAgICAgICBsZXQgY29sb3IgPSBjdXJySnVpY2VDb2xvci5jb2xvcjtcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gdXRpbHMucmFuZG9tKDAsIDM1OSk7XG4gICAgICAgIGxldCBvcGFjaXR5ID0gY3Vyckp1aWNlQ29sb3Iub3BhY2l0eTtcbiAgICAgICAgbGV0IGp1aWNlTm9kZSA9IHV0aWxzLmdlbk5ld05vZGUodGhpc1t0aGlzLnBvb2xOYW1lXSwgdGhpcy5qdWljZVBmYiwgdGhpcy5ub2RlKTtcbiAgICAgICAgaWYgKCFqdWljZU5vZGUpIHJldHVybjtcbiAgICAgICAganVpY2VOb2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIGp1aWNlTm9kZS5nZXRDb21wb25lbnQoXCJGcnVpdEp1aWNlXCIpLmluaXQocm90YXRpb24sIGNvbG9yLCBvcGFjaXR5KTtcbiAgICB9LFxuICAgIGJhY2tOb2RlKG5vZGVJbmZvKSB7XG4gICAgICAgIHV0aWxzLmJhY2tPYmpQb29sKHRoaXMsIHRoaXMucG9vbE5hbWUsIG5vZGVJbmZvKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FruitJuice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRnJ1aXRKdWljZS5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdWljZVNwcml0ZSIsIk5vZGUiLCJvbkxvYWQiLCJwYXJlbnRPYmoiLCJub2RlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsInJvdGF0aW9uIiwiY29sb3IiLCJvcGFjaXR5IiwiX3RoaXMiLCJhbmdsZSIsInR3ZWVuIiwidG8iLCJUSU1JTkciLCJKVUlDRV9GQURFX0RVUkFUSU9OIiwiY2FsbCIsImlzVmFsaWQiLCJiYWNrTm9kZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUV0Q0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxXQUFXLEVBQUVKLEVBQUUsQ0FBQ0s7RUFDcEIsQ0FBQztFQUVEQyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQyxZQUFZLENBQUM7RUFDaEUsQ0FBQztFQUNEQyxJQUFJLFdBQUFBLEtBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzNCLElBQUksQ0FBQ1AsSUFBSSxDQUFDUSxLQUFLLEdBQUdKLFFBQVE7SUFDMUIsSUFBSSxDQUFDUixXQUFXLENBQUNTLEtBQUssR0FBR0EsS0FBSztJQUM5QixJQUFJLENBQUNULFdBQVcsQ0FBQ1UsT0FBTyxHQUFHQSxPQUFPO0lBQ2xDZCxFQUFFLENBQUNpQixLQUFLLENBQUMsSUFBSSxDQUFDYixXQUFXLENBQUMsQ0FBQ2MsRUFBRSxDQUFDcEIsU0FBUyxDQUFDcUIsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtNQUFFTixPQUFPLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFlBQU07TUFDM0YsSUFBSU4sS0FBSSxDQUFDUixTQUFTLElBQUlRLEtBQUksQ0FBQ1AsSUFBSSxJQUFJTyxLQUFJLENBQUNQLElBQUksQ0FBQ2MsT0FBTyxFQUFFO1FBQ2xEUCxLQUFJLENBQUNSLFNBQVMsQ0FBQ2dCLFFBQVEsQ0FBQ1IsS0FBSSxDQUFDUCxJQUFJLENBQUM7TUFDdEM7SUFDSixDQUFDLENBQUMsQ0FBQ2dCLEtBQUssRUFBRTtFQUNkO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCdDb25zdGFudHMnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAganVpY2VTcHJpdGU6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmogPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnSnVpY2VHcm91cCcpO1xuICAgIH0sXG4gICAgaW5pdChyb3RhdGlvbiwgY29sb3IsIG9wYWNpdHkpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuanVpY2VTcHJpdGUuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5qdWljZVNwcml0ZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5qdWljZVNwcml0ZSkudG8oQ29uc3RhbnRzLlRJTUlORy5KVUlDRV9GQURFX0RVUkFUSU9OLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRPYmogJiYgdGhpcy5ub2RlICYmIHRoaXMubm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmouYmFja05vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ReturnMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6421f4gC35Mi6OPDYsXKEBq', 'ReturnMenu');
// Scripts/ReturnMenu.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    buttonClip: cc.AudioClip
  },
  returnMenu: function returnMenu() {
    if (this.buttonClip) {
      cc.audioEngine.play(this.buttonClip, false, 1);
    }
    cc.director.loadScene("Menu");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUmV0dXJuTWVudS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ1dHRvbkNsaXAiLCJBdWRpb0NsaXAiLCJyZXR1cm5NZW51IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLO0VBQ25CLENBQUM7RUFFREMsVUFBVSxXQUFBQSxXQUFBLEVBQUc7SUFDVCxJQUFJLElBQUksQ0FBQ0YsVUFBVSxFQUFFO01BQ2pCSixFQUFFLENBQUNPLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0osVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEQ7SUFDQUosRUFBRSxDQUFDUyxRQUFRLENBQUNDLFNBQVMsQ0FBQyxNQUFNLENBQUM7RUFDakM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvbkNsaXA6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuXG4gICAgcmV0dXJuTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpcCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvbkNsaXAsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNZW51XCIpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1b2cPU5fZ4kKvN7xI0VniQ', 'Constants');
// Scripts/Constants.js

"use strict";

module.exports = {
  // Collision tags
  COLLISION_TAG: {
    KNIFE: 50,
    FLOOR: 100
  },
  // Timing (seconds)
  TIMING: {
    WAVE_CREATE_DELAY: 0.5,
    JUICE_FADE_DURATION: 1.5,
    ROTATE_DURATION: 7,
    GAME_OVER_DELAY: 0.5,
    FLASH_DURATION: 0.8,
    GAME_OVER_TWEEN: 0.4,
    FADE_OUT_TWEEN: 0.3
  },
  // Scoring
  SCORE: {
    PENALTY_MULTIPLIER: 2,
    MAX_LIVES: 3
  },
  // Object pool
  POOL: {
    FRUIT_JUICE_SIZE: 20
  },
  // Bomb flash
  BOMB_FLASH: {
    INITIAL_OPACITY: 230
  },
  // Scene node paths
  NODE_PATH: {
    GAME_CONTAINER: '/Canvas/gameContainer',
    FRUIT_JUICE: '/Canvas/gameContainer/fruitJuice'
  }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJDT0xMSVNJT05fVEFHIiwiS05JRkUiLCJGTE9PUiIsIlRJTUlORyIsIldBVkVfQ1JFQVRFX0RFTEFZIiwiSlVJQ0VfRkFERV9EVVJBVElPTiIsIlJPVEFURV9EVVJBVElPTiIsIkdBTUVfT1ZFUl9ERUxBWSIsIkZMQVNIX0RVUkFUSU9OIiwiR0FNRV9PVkVSX1RXRUVOIiwiRkFERV9PVVRfVFdFRU4iLCJTQ09SRSIsIlBFTkFMVFlfTVVMVElQTElFUiIsIk1BWF9MSVZFUyIsIlBPT0wiLCJGUlVJVF9KVUlDRV9TSVpFIiwiQk9NQl9GTEFTSCIsIklOSVRJQUxfT1BBQ0lUWSIsIk5PREVfUEFUSCIsIkdBTUVfQ09OVEFJTkVSIiwiRlJVSVRfSlVJQ0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2I7RUFDQUMsYUFBYSxFQUFFO0lBQ1hDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLEtBQUssRUFBRTtFQUNYLENBQUM7RUFFRDtFQUNBQyxNQUFNLEVBQUU7SUFDSkMsaUJBQWlCLEVBQUUsR0FBRztJQUN0QkMsbUJBQW1CLEVBQUUsR0FBRztJQUN4QkMsZUFBZSxFQUFFLENBQUM7SUFDbEJDLGVBQWUsRUFBRSxHQUFHO0lBQ3BCQyxjQUFjLEVBQUUsR0FBRztJQUNuQkMsZUFBZSxFQUFFLEdBQUc7SUFDcEJDLGNBQWMsRUFBRTtFQUNwQixDQUFDO0VBRUQ7RUFDQUMsS0FBSyxFQUFFO0lBQ0hDLGtCQUFrQixFQUFFLENBQUM7SUFDckJDLFNBQVMsRUFBRTtFQUNmLENBQUM7RUFFRDtFQUNBQyxJQUFJLEVBQUU7SUFDRkMsZ0JBQWdCLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0FDLFVBQVUsRUFBRTtJQUNSQyxlQUFlLEVBQUU7RUFDckIsQ0FBQztFQUVEO0VBQ0FDLFNBQVMsRUFBRTtJQUNQQyxjQUFjLEVBQUUsdUJBQXVCO0lBQ3ZDQyxXQUFXLEVBQUU7RUFDakI7QUFDSixDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xsaXNpb24gdGFnc1xuICAgIENPTExJU0lPTl9UQUc6IHtcbiAgICAgICAgS05JRkU6IDUwLFxuICAgICAgICBGTE9PUjogMTAwXG4gICAgfSxcblxuICAgIC8vIFRpbWluZyAoc2Vjb25kcylcbiAgICBUSU1JTkc6IHtcbiAgICAgICAgV0FWRV9DUkVBVEVfREVMQVk6IDAuNSxcbiAgICAgICAgSlVJQ0VfRkFERV9EVVJBVElPTjogMS41LFxuICAgICAgICBST1RBVEVfRFVSQVRJT046IDcsXG4gICAgICAgIEdBTUVfT1ZFUl9ERUxBWTogMC41LFxuICAgICAgICBGTEFTSF9EVVJBVElPTjogMC44LFxuICAgICAgICBHQU1FX09WRVJfVFdFRU46IDAuNCxcbiAgICAgICAgRkFERV9PVVRfVFdFRU46IDAuM1xuICAgIH0sXG5cbiAgICAvLyBTY29yaW5nXG4gICAgU0NPUkU6IHtcbiAgICAgICAgUEVOQUxUWV9NVUxUSVBMSUVSOiAyLFxuICAgICAgICBNQVhfTElWRVM6IDNcbiAgICB9LFxuXG4gICAgLy8gT2JqZWN0IHBvb2xcbiAgICBQT09MOiB7XG4gICAgICAgIEZSVUlUX0pVSUNFX1NJWkU6IDIwXG4gICAgfSxcblxuICAgIC8vIEJvbWIgZmxhc2hcbiAgICBCT01CX0ZMQVNIOiB7XG4gICAgICAgIElOSVRJQUxfT1BBQ0lUWTogMjMwXG4gICAgfSxcblxuICAgIC8vIFNjZW5lIG5vZGUgcGF0aHNcbiAgICBOT0RFX1BBVEg6IHtcbiAgICAgICAgR0FNRV9DT05UQUlORVI6ICcvQ2FudmFzL2dhbWVDb250YWluZXInLFxuICAgICAgICBGUlVJVF9KVUlDRTogJy9DYW52YXMvZ2FtZUNvbnRhaW5lci9mcnVpdEp1aWNlJ1xuICAgIH1cbn07XG4iXX0=
//------QC-SOURCE-SPLIT------
