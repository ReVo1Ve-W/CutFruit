const Constants = require('Constants');

cc.Class({
    extends: cc.Component,

    properties: {
        juiceSprite: cc.Node,
    },

    onLoad() {
        this.parentObj = this.node.parent.getComponent('JuiceGroup');
    },
    init(rotation, color, opacity) {
        this.node.angle = rotation;
        this.juiceSprite.color = color;
        this.juiceSprite.opacity = opacity;
        cc.tween(this.juiceSprite).to(Constants.TIMING.JUICE_FADE_DURATION, { opacity: 0 }).call(() => {
            if (this.parentObj && this.node && this.node.isValid) {
                this.parentObj.backNode(this.node);
            }
        }).start();
    }
});
