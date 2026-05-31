"use strict";
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