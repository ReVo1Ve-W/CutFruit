
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