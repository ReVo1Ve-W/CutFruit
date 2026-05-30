"use strict";
cc._RF.push(module, '76bdfhm93ZOOb8AnKuDLDR9', 'utils');
// Scripts/utils.js

"use strict";

module.exports = {
  GD: null,
  // req user obj
  //批量初始化对象池 
  batchInitObjPool: function batchInitObjPool(ptO, objArray) {
    for (var i = 0; i < objArray.length; i++) {
      var objInfo = objArray[i];
      this.initObjPool(ptO, objInfo);
    }
  },
  //初始化对象池
  initObjPool: function initObjPool(ptO, objInfo) {
    var name = objInfo.name,
      poolName = name + 'Pool';
    ptO[poolName] = new cc.NodePool();
    var initPoolCount = objInfo.initPoolCount;
    for (var i = 0; i < initPoolCount; ++i) {
      var nodeO = cc.instantiate(objInfo.prefab);
      ptO[poolName].put(nodeO);
    }
  },
  //生成节点
  genNewNode: function genNewNode(pool, prefab, nodeParent) {
    var newNode = null;
    //判断对象池中是否还有
    if (pool.size() > 0) {
      newNode = pool.get();
    } else {
      //没有就生成。
      newNode = cc.instantiate(prefab);
    }
    ;
    nodeParent.addChild(newNode);
    return newNode;
  },
  //放回对象池
  backObjPool: function backObjPool(ptO, poolName, nodeInfo) {
    ptO[poolName].put(nodeInfo);
  },
  //获取随机数
  random: function random(min, max) {
    return Math.random() * (max - min) + min;
  }
};

cc._RF.pop();