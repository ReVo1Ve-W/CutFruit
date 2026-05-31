module.exports = {
    //批量初始化对象池
    batchInitObjPool(targetObj, objArray) {
        for (let i = 0; i < objArray.length; i++) {
            this.initObjPool(targetObj, objArray[i]);
        }
    },
    //初始化对象池
    initObjPool(targetObj, objInfo) {
        if (!objInfo || !objInfo.prefab) {
            cc.warn('initObjPool: objInfo or objInfo.prefab is missing');
            return;
        }
        let poolName = objInfo.name + 'Pool';
        targetObj[poolName] = new cc.NodePool();
        let initPoolCount = objInfo.initPoolCount || 0;
        for (let i = 0; i < initPoolCount; ++i) {
            let nodeO = cc.instantiate(objInfo.prefab);
            targetObj[poolName].put(nodeO);
        }
    },
    //生成节点
    genNewNode(pool, prefab, nodeParent) {
        let newNode = pool.size() > 0 ? pool.get() : null;
        if (!newNode) {
            if (!prefab) {
                cc.warn('genNewNode: pool is empty and no prefab provided');
                return null;
            }
            newNode = cc.instantiate(prefab);
        }
        nodeParent.addChild(newNode);
        return newNode;
    },
    //放回对象池
    backObjPool(targetObj, poolName, nodeInfo) {
        if (targetObj[poolName]) {
            targetObj[poolName].put(nodeInfo);
        }
    },
    //获取随机数
    random(min, max) {
        return Math.random() * (max - min) + min;
    }
};
