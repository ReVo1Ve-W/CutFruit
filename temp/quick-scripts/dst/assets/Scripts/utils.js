
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImJhdGNoSW5pdE9ialBvb2wiLCJ0YXJnZXRPYmoiLCJvYmpBcnJheSIsImkiLCJsZW5ndGgiLCJpbml0T2JqUG9vbCIsIm9iakluZm8iLCJwcmVmYWIiLCJjYyIsIndhcm4iLCJwb29sTmFtZSIsIm5hbWUiLCJOb2RlUG9vbCIsImluaXRQb29sQ291bnQiLCJub2RlTyIsImluc3RhbnRpYXRlIiwicHV0IiwiZ2VuTmV3Tm9kZSIsInBvb2wiLCJub2RlUGFyZW50IiwibmV3Tm9kZSIsInNpemUiLCJnZXQiLCJhZGRDaGlsZCIsImJhY2tPYmpQb29sIiwibm9kZUluZm8iLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNiO0VBQ0FDLGdCQUFnQixXQUFBQSxpQkFBQ0MsU0FBUyxFQUFFQyxRQUFRLEVBQUU7SUFDbEMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJLENBQUNFLFdBQVcsQ0FBQ0osU0FBUyxFQUFFQyxRQUFRLENBQUNDLENBQUMsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQztFQUNEO0VBQ0FFLFdBQVcsV0FBQUEsWUFBQ0osU0FBUyxFQUFFSyxPQUFPLEVBQUU7SUFDNUIsSUFBSSxDQUFDQSxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxNQUFNLEVBQUU7TUFDN0JDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLG1EQUFtRCxDQUFDO01BQzVEO0lBQ0o7SUFDQSxJQUFJQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0ssSUFBSSxHQUFHLE1BQU07SUFDcENWLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLEdBQUcsSUFBSUYsRUFBRSxDQUFDSSxRQUFRLEVBQUU7SUFDdkMsSUFBSUMsYUFBYSxHQUFHUCxPQUFPLENBQUNPLGFBQWEsSUFBSSxDQUFDO0lBQzlDLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVSxhQUFhLEVBQUUsRUFBRVYsQ0FBQyxFQUFFO01BQ3BDLElBQUlXLEtBQUssR0FBR04sRUFBRSxDQUFDTyxXQUFXLENBQUNULE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO01BQzFDTixTQUFTLENBQUNTLFFBQVEsQ0FBQyxDQUFDTSxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUNsQztFQUNKLENBQUM7RUFDRDtFQUNBRyxVQUFVLFdBQUFBLFdBQUNDLElBQUksRUFBRVgsTUFBTSxFQUFFWSxVQUFVLEVBQUU7SUFDakMsSUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksRUFBRSxHQUFHLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQ2pELElBQUksQ0FBQ0YsT0FBTyxFQUFFO01BQ1YsSUFBSSxDQUFDYixNQUFNLEVBQUU7UUFDVEMsRUFBRSxDQUFDQyxJQUFJLENBQUMsa0RBQWtELENBQUM7UUFDM0QsT0FBTyxJQUFJO01BQ2Y7TUFDQVcsT0FBTyxHQUFHWixFQUFFLENBQUNPLFdBQVcsQ0FBQ1IsTUFBTSxDQUFDO0lBQ3BDO0lBQ0FZLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDSCxPQUFPLENBQUM7SUFDNUIsT0FBT0EsT0FBTztFQUNsQixDQUFDO0VBQ0Q7RUFDQUksV0FBVyxXQUFBQSxZQUFDdkIsU0FBUyxFQUFFUyxRQUFRLEVBQUVlLFFBQVEsRUFBRTtJQUN2QyxJQUFJeEIsU0FBUyxDQUFDUyxRQUFRLENBQUMsRUFBRTtNQUNyQlQsU0FBUyxDQUFDUyxRQUFRLENBQUMsQ0FBQ00sR0FBRyxDQUFDUyxRQUFRLENBQUM7SUFDckM7RUFDSixDQUFDO0VBQ0Q7RUFDQUMsTUFBTSxXQUFBQSxPQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNiLE9BQU9DLElBQUksQ0FBQ0gsTUFBTSxFQUFFLElBQUlFLEdBQUcsR0FBR0QsR0FBRyxDQUFDLEdBQUdBLEdBQUc7RUFDNUM7QUFDSixDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvL+aJuemHj+WIneWni+WMluWvueixoeaxoFxuICAgIGJhdGNoSW5pdE9ialBvb2wodGFyZ2V0T2JqLCBvYmpBcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRPYmpQb29sKHRhcmdldE9iaiwgb2JqQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+WIneWni+WMluWvueixoeaxoFxuICAgIGluaXRPYmpQb29sKHRhcmdldE9iaiwgb2JqSW5mbykge1xuICAgICAgICBpZiAoIW9iakluZm8gfHwgIW9iakluZm8ucHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKCdpbml0T2JqUG9vbDogb2JqSW5mbyBvciBvYmpJbmZvLnByZWZhYiBpcyBtaXNzaW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvb2xOYW1lID0gb2JqSW5mby5uYW1lICsgJ1Bvb2wnO1xuICAgICAgICB0YXJnZXRPYmpbcG9vbE5hbWVdID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIGxldCBpbml0UG9vbENvdW50ID0gb2JqSW5mby5pbml0UG9vbENvdW50IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdFBvb2xDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbm9kZU8gPSBjYy5pbnN0YW50aWF0ZShvYmpJbmZvLnByZWZhYik7XG4gICAgICAgICAgICB0YXJnZXRPYmpbcG9vbE5hbWVdLnB1dChub2RlTyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v55Sf5oiQ6IqC54K5XG4gICAgZ2VuTmV3Tm9kZShwb29sLCBwcmVmYWIsIG5vZGVQYXJlbnQpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBwb29sLnNpemUoKSA+IDAgPyBwb29sLmdldCgpIDogbnVsbDtcbiAgICAgICAgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgICAgICBpZiAoIXByZWZhYikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oJ2dlbk5ld05vZGU6IHBvb2wgaXMgZW1wdHkgYW5kIG5vIHByZWZhYiBwcm92aWRlZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZVBhcmVudC5hZGRDaGlsZChuZXdOb2RlKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfSxcbiAgICAvL+aUvuWbnuWvueixoeaxoFxuICAgIGJhY2tPYmpQb29sKHRhcmdldE9iaiwgcG9vbE5hbWUsIG5vZGVJbmZvKSB7XG4gICAgICAgIGlmICh0YXJnZXRPYmpbcG9vbE5hbWVdKSB7XG4gICAgICAgICAgICB0YXJnZXRPYmpbcG9vbE5hbWVdLnB1dChub2RlSW5mbyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v6I635Y+W6ZqP5py65pWwXG4gICAgcmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxufTtcbiJdfQ==