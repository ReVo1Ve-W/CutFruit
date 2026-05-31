"use strict";
cc._RF.push(module, '76bdfhm93ZOOb8AnKuDLDR9', 'utils');
// Scripts/utils.js

"use strict";

module.exports = {
  //批量初始化对象池
  batchInitObjPool: function batchInitObjPool(targetObj, objArray) {
    for (var i = 0; i < objArray.length; i++) {
      this.initObjPool(targetObj, objArray[i]);
    }
  },
  //初始化对象池
  initObjPool: function initObjPool(targetObj, objInfo) {
    if (!objInfo || !objInfo.prefab) {
      cc.warn('initObjPool: objInfo or objInfo.prefab is missing');
      return;
    }
    var poolName = objInfo.name + 'Pool';
    targetObj[poolName] = new cc.NodePool();
    var initPoolCount = objInfo.initPoolCount || 0;
    for (var i = 0; i < initPoolCount; ++i) {
      var nodeO = cc.instantiate(objInfo.prefab);
      targetObj[poolName].put(nodeO);
    }
  },
  //生成节点
  genNewNode: function genNewNode(pool, prefab, nodeParent) {
    var newNode = pool.size() > 0 ? pool.get() : null;
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
  backObjPool: function backObjPool(targetObj, poolName, nodeInfo) {
    if (targetObj[poolName]) {
      targetObj[poolName].put(nodeInfo);
    }
  },
  //获取随机数
  random: function random(min, max) {
    return Math.random() * (max - min) + min;
  }
};

cc._RF.pop();