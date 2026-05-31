"use strict";
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