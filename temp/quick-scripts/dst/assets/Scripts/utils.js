
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkdEIiwiYmF0Y2hJbml0T2JqUG9vbCIsInB0TyIsIm9iakFycmF5IiwiaSIsImxlbmd0aCIsIm9iakluZm8iLCJpbml0T2JqUG9vbCIsIm5hbWUiLCJwb29sTmFtZSIsImNjIiwiTm9kZVBvb2wiLCJpbml0UG9vbENvdW50Iiwibm9kZU8iLCJpbnN0YW50aWF0ZSIsInByZWZhYiIsInB1dCIsImdlbk5ld05vZGUiLCJwb29sIiwibm9kZVBhcmVudCIsIm5ld05vZGUiLCJzaXplIiwiZ2V0IiwiYWRkQ2hpbGQiLCJiYWNrT2JqUG9vbCIsIm5vZGVJbmZvIiwicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDYkMsRUFBRSxFQUFFLElBQUk7RUFBRTtFQUNWO0VBQ0FDLGdCQUFnQixXQUFBQSxpQkFBQ0MsR0FBRyxFQUFFQyxRQUFRLEVBQUU7SUFDNUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDO01BQ3pCLElBQUksQ0FBQ0csV0FBVyxDQUFDTCxHQUFHLEVBQUVJLE9BQU8sQ0FBQztJQUNsQztFQUNKLENBQUM7RUFDRDtFQUNBQyxXQUFXLFdBQUFBLFlBQUNMLEdBQUcsRUFBRUksT0FBTyxFQUFFO0lBQ3RCLElBQUlFLElBQUksR0FBR0YsT0FBTyxDQUFDRSxJQUFJO01BQ25CQyxRQUFRLEdBQUdELElBQUksR0FBRyxNQUFNO0lBQzVCTixHQUFHLENBQUNPLFFBQVEsQ0FBQyxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFO0lBQ2pDLElBQUlDLGFBQWEsR0FBR04sT0FBTyxDQUFDTSxhQUFhO0lBQ3pDLEtBQUssSUFBSVIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUSxhQUFhLEVBQUUsRUFBRVIsQ0FBQyxFQUFFO01BQ3BDLElBQUlTLEtBQUssR0FBR0gsRUFBRSxDQUFDSSxXQUFXLENBQUNSLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDO01BQzFDYixHQUFHLENBQUNPLFFBQVEsQ0FBQyxDQUFDTyxHQUFHLENBQUNILEtBQUssQ0FBQztJQUM1QjtFQUNKLENBQUM7RUFDRDtFQUNBSSxVQUFVLFdBQUFBLFdBQUNDLElBQUksRUFBRUgsTUFBTSxFQUFFSSxVQUFVLEVBQUU7SUFDakMsSUFBSUMsT0FBTyxHQUFHLElBQUk7SUFDbEI7SUFDQSxJQUFJRixJQUFJLENBQUNHLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtNQUNqQkQsT0FBTyxHQUFHRixJQUFJLENBQUNJLEdBQUcsRUFBRTtJQUN4QixDQUFDLE1BQ0k7TUFDRDtNQUNBRixPQUFPLEdBQUdWLEVBQUUsQ0FBQ0ksV0FBVyxDQUFDQyxNQUFNLENBQUM7SUFDcEM7SUFBQztJQUNESSxVQUFVLENBQUNJLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDO0lBQzVCLE9BQU9BLE9BQU87RUFDbEIsQ0FBQztFQUNEO0VBQ0FJLFdBQVcsV0FBQUEsWUFBQ3RCLEdBQUcsRUFBRU8sUUFBUSxFQUFFZ0IsUUFBUSxFQUFFO0lBQ2pDdkIsR0FBRyxDQUFDTyxRQUFRLENBQUMsQ0FBQ08sR0FBRyxDQUFDUyxRQUFRLENBQUM7RUFDL0IsQ0FBQztFQUNEO0VBQ0FDLE1BQU0sV0FBQUEsT0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDYixPQUFPQyxJQUFJLENBQUNILE1BQU0sRUFBRSxJQUFJRSxHQUFHLEdBQUdELEdBQUcsQ0FBQyxHQUFHQSxHQUFHO0VBQzVDO0FBQ0osQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR0Q6IG51bGwsIC8vIHJlcSB1c2VyIG9ialxuICAgIC8v5om56YeP5Yid5aeL5YyW5a+56LGh5rGgIFxuICAgIGJhdGNoSW5pdE9ialBvb2wocHRPLCBvYmpBcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqSW5mbyA9IG9iakFycmF5W2ldO1xuICAgICAgICAgICAgdGhpcy5pbml0T2JqUG9vbChwdE8sIG9iakluZm8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+WIneWni+WMluWvueixoeaxoFxuICAgIGluaXRPYmpQb29sKHB0Tywgb2JqSW5mbykge1xuICAgICAgICBsZXQgbmFtZSA9IG9iakluZm8ubmFtZSxcbiAgICAgICAgICAgIHBvb2xOYW1lID0gbmFtZSArICdQb29sJztcbiAgICAgICAgcHRPW3Bvb2xOYW1lXSA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICBsZXQgaW5pdFBvb2xDb3VudCA9IG9iakluZm8uaW5pdFBvb2xDb3VudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0UG9vbENvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGxldCBub2RlTyA9IGNjLmluc3RhbnRpYXRlKG9iakluZm8ucHJlZmFiKTtcbiAgICAgICAgICAgIHB0T1twb29sTmFtZV0ucHV0KG5vZGVPKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/nlJ/miJDoioLngrlcbiAgICBnZW5OZXdOb2RlKHBvb2wsIHByZWZhYiwgbm9kZVBhcmVudCkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IG51bGw7XG4gICAgICAgIC8v5Yik5pat5a+56LGh5rGg5Lit5piv5ZCm6L+Y5pyJXG4gICAgICAgIGlmIChwb29sLnNpemUoKSA+IDApIHtcbiAgICAgICAgICAgIG5ld05vZGUgPSBwb29sLmdldCgpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5bCx55Sf5oiQ44CCXG4gICAgICAgICAgICBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgfTtcbiAgICAgICAgbm9kZVBhcmVudC5hZGRDaGlsZChuZXdOb2RlKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfSxcbiAgICAvL+aUvuWbnuWvueixoeaxoFxuICAgIGJhY2tPYmpQb29sKHB0TywgcG9vbE5hbWUsIG5vZGVJbmZvKSB7XG4gICAgICAgIHB0T1twb29sTmFtZV0ucHV0KG5vZGVJbmZvKTtcbiAgICB9LFxuICAgIC8v6I635Y+W6ZqP5py65pWwXG4gICAgcmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxufTsiXX0=