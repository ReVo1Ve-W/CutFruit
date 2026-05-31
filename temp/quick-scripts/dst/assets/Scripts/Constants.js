
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1b2cPU5fZ4kKvN7xI0VniQ', 'Constants');
// Scripts/Constants.js

"use strict";

module.exports = {
  // Collision tags
  COLLISION_TAG: {
    KNIFE: 50,
    FLOOR: 100
  },
  // Timing (seconds)
  TIMING: {
    WAVE_CREATE_DELAY: 0.5,
    JUICE_FADE_DURATION: 1.5,
    ROTATE_DURATION: 7,
    GAME_OVER_DELAY: 0.5,
    FLASH_DURATION: 0.8,
    GAME_OVER_TWEEN: 0.4,
    FADE_OUT_TWEEN: 0.3
  },
  // Scoring
  SCORE: {
    PENALTY_MULTIPLIER: 2,
    MAX_LIVES: 3
  },
  // Object pool
  POOL: {
    FRUIT_JUICE_SIZE: 20
  },
  // Bomb flash
  BOMB_FLASH: {
    INITIAL_OPACITY: 230
  },
  // Scene node paths
  NODE_PATH: {
    GAME_CONTAINER: '/Canvas/gameContainer',
    FRUIT_JUICE: '/Canvas/gameContainer/fruitJuice'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJDT0xMSVNJT05fVEFHIiwiS05JRkUiLCJGTE9PUiIsIlRJTUlORyIsIldBVkVfQ1JFQVRFX0RFTEFZIiwiSlVJQ0VfRkFERV9EVVJBVElPTiIsIlJPVEFURV9EVVJBVElPTiIsIkdBTUVfT1ZFUl9ERUxBWSIsIkZMQVNIX0RVUkFUSU9OIiwiR0FNRV9PVkVSX1RXRUVOIiwiRkFERV9PVVRfVFdFRU4iLCJTQ09SRSIsIlBFTkFMVFlfTVVMVElQTElFUiIsIk1BWF9MSVZFUyIsIlBPT0wiLCJGUlVJVF9KVUlDRV9TSVpFIiwiQk9NQl9GTEFTSCIsIklOSVRJQUxfT1BBQ0lUWSIsIk5PREVfUEFUSCIsIkdBTUVfQ09OVEFJTkVSIiwiRlJVSVRfSlVJQ0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2I7RUFDQUMsYUFBYSxFQUFFO0lBQ1hDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLEtBQUssRUFBRTtFQUNYLENBQUM7RUFFRDtFQUNBQyxNQUFNLEVBQUU7SUFDSkMsaUJBQWlCLEVBQUUsR0FBRztJQUN0QkMsbUJBQW1CLEVBQUUsR0FBRztJQUN4QkMsZUFBZSxFQUFFLENBQUM7SUFDbEJDLGVBQWUsRUFBRSxHQUFHO0lBQ3BCQyxjQUFjLEVBQUUsR0FBRztJQUNuQkMsZUFBZSxFQUFFLEdBQUc7SUFDcEJDLGNBQWMsRUFBRTtFQUNwQixDQUFDO0VBRUQ7RUFDQUMsS0FBSyxFQUFFO0lBQ0hDLGtCQUFrQixFQUFFLENBQUM7SUFDckJDLFNBQVMsRUFBRTtFQUNmLENBQUM7RUFFRDtFQUNBQyxJQUFJLEVBQUU7SUFDRkMsZ0JBQWdCLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0FDLFVBQVUsRUFBRTtJQUNSQyxlQUFlLEVBQUU7RUFDckIsQ0FBQztFQUVEO0VBQ0FDLFNBQVMsRUFBRTtJQUNQQyxjQUFjLEVBQUUsdUJBQXVCO0lBQ3ZDQyxXQUFXLEVBQUU7RUFDakI7QUFDSixDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xsaXNpb24gdGFnc1xuICAgIENPTExJU0lPTl9UQUc6IHtcbiAgICAgICAgS05JRkU6IDUwLFxuICAgICAgICBGTE9PUjogMTAwXG4gICAgfSxcblxuICAgIC8vIFRpbWluZyAoc2Vjb25kcylcbiAgICBUSU1JTkc6IHtcbiAgICAgICAgV0FWRV9DUkVBVEVfREVMQVk6IDAuNSxcbiAgICAgICAgSlVJQ0VfRkFERV9EVVJBVElPTjogMS41LFxuICAgICAgICBST1RBVEVfRFVSQVRJT046IDcsXG4gICAgICAgIEdBTUVfT1ZFUl9ERUxBWTogMC41LFxuICAgICAgICBGTEFTSF9EVVJBVElPTjogMC44LFxuICAgICAgICBHQU1FX09WRVJfVFdFRU46IDAuNCxcbiAgICAgICAgRkFERV9PVVRfVFdFRU46IDAuM1xuICAgIH0sXG5cbiAgICAvLyBTY29yaW5nXG4gICAgU0NPUkU6IHtcbiAgICAgICAgUEVOQUxUWV9NVUxUSVBMSUVSOiAyLFxuICAgICAgICBNQVhfTElWRVM6IDNcbiAgICB9LFxuXG4gICAgLy8gT2JqZWN0IHBvb2xcbiAgICBQT09MOiB7XG4gICAgICAgIEZSVUlUX0pVSUNFX1NJWkU6IDIwXG4gICAgfSxcblxuICAgIC8vIEJvbWIgZmxhc2hcbiAgICBCT01CX0ZMQVNIOiB7XG4gICAgICAgIElOSVRJQUxfT1BBQ0lUWTogMjMwXG4gICAgfSxcblxuICAgIC8vIFNjZW5lIG5vZGUgcGF0aHNcbiAgICBOT0RFX1BBVEg6IHtcbiAgICAgICAgR0FNRV9DT05UQUlORVI6ICcvQ2FudmFzL2dhbWVDb250YWluZXInLFxuICAgICAgICBGUlVJVF9KVUlDRTogJy9DYW52YXMvZ2FtZUNvbnRhaW5lci9mcnVpdEp1aWNlJ1xuICAgIH1cbn07XG4iXX0=