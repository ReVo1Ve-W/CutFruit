
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