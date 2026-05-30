
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