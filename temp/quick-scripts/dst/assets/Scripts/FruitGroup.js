
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