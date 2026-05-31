
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