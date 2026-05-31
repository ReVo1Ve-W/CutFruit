cc.Class({
    extends: cc.Component,

    properties: {
        buttonClip: cc.AudioClip,
    },

    returnMenu() {
        if (this.buttonClip) {
            cc.audioEngine.play(this.buttonClip, false, 1);
        }
        cc.director.loadScene("Menu");
    }
});
