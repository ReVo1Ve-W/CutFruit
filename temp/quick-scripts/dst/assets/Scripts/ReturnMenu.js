
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