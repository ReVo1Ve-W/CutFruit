
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