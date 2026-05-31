const utils = require('utils');
const Constants = require('Constants');

let juiceColor = cc.Class({
    name: 'juiceColor',
    properties: {
        code: 0,
        color: cc.Color,
        opacity: 255
    }
});

cc.Class({
    extends: cc.Component,
    properties: {
        juiceColor: {
            default: [],
            type: juiceColor
        },
        juicePfb: cc.Prefab,
    },
    onLoad() {
        let createPoolObj = {
            name: 'fruitJuice',
            prefab: this.juicePfb,
            initPoolCount: Constants.POOL.FRUIT_JUICE_SIZE
        };
        this.poolName = 'fruitJuicePool';
        utils.initObjPool(this, createPoolObj);
    },
    createJuiceBg(pos, colorType) {
        let currJuiceColor = this.juiceColor.find(a => a.code == colorType);
        if (!currJuiceColor) return;
        let color = currJuiceColor.color;
        let rotation = utils.random(0, 359);
        let opacity = currJuiceColor.opacity;
        let juiceNode = utils.genNewNode(this[this.poolName], this.juicePfb, this.node);
        if (!juiceNode) return;
        juiceNode.setPosition(pos);
        juiceNode.getComponent("FruitJuice").init(rotation, color, opacity);
    },
    backNode(nodeInfo) {
        utils.backObjPool(this, this.poolName, nodeInfo);
    }
});
