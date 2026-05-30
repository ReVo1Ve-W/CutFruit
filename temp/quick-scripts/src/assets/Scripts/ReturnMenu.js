"use strict";
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