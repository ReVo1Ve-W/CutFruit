const Constants = require('Constants');

let lifeG = cc.Class({
    name: 'lifeG',
    properties: {
        lifeConsume : cc.Node,
    }
});

cc.Class({
    extends: cc.Component,
    properties: {
        knife : cc.Node,
        scoreLabel : cc.Label,
        lifeG: {
            default: [],
            type: lifeG
        },
        fruitGroup : require('FruitGroup'),
        gameOverMask : cc.Node,
        bestScoreLabel : cc.Label,
        buttonClip : cc.AudioClip,
    },
    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        this.knifeMotionS = this.knife.getComponent(cc.MotionStreak);
    },
    start() {
        this.knifeMove();
        this.init();
    },
    init() {
        this.gameOver = false;
        this.score = 0;
        this.bestScore = 0;
        let max = cc.sys.localStorage.getItem("Best score");
        if (max) {
            this.bestScore = max;
            this.bestScoreLabel.string = "最佳分数 : " + this.bestScore;
        }
        this.life = 0;
        this.lifeG.forEach((a) => {
            a.lifeConsume.active = false;
        });
        this.upDateUi();
        this.fruitGroup.createFruitList();
    },
    knifeMove() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.endEvent, this);
    },
    startEvent(event) {
        let pos = this.node.convertToNodeSpaceAR(new cc.Vec2(event.getLocation()));
        this.knife.setPosition(pos);
        this.knife.group = 'knife';
        this.knifeMotionS.reset();
    },
    moveEvent(event) {
        let pos = this.node.convertToNodeSpaceAR(new cc.Vec2(event.getLocation()));
        this.knife.setPosition(pos);
    },
    endEvent(event) {
        this.knife.group = 'default';
    },
    updateScore(isHit, score) {
        if (this.gameOver) return;
        if (isHit) {
            this.score += score;
        } else {
            let penalty = score * Constants.SCORE.PENALTY_MULTIPLIER;
            if (this.score <= penalty) {
                this.loseLife();
                this.score = 0;
            } else {
                this.score -= penalty;
            }
        }
        this.upDateUi();
    },
    loseLife() {
        this.life++;
        if (this.life >= Constants.SCORE.MAX_LIVES) this.gameOverHandle();
    },
    upDateUi() {
        this.scoreLabel.string = "分数 : " + this.score;
        for (let i = 0; i < this.life; i++) {
            this.lifeG[i].lifeConsume.active = true;
        }
    },
    gameOverHandle() {
        this.gameOver = true;
        this.knife.group = 'default';
        if (this.score > this.bestScore) {
            this.bestScore = this.score;
            this.bestScoreLabel.string = '最佳分数 : ' + this.bestScore;
            cc.sys.localStorage.setItem("Best score", this.bestScore);
        }
        this.scheduleOnce(() => {
            this.showTheGameOverMask(true);
        }, Constants.TIMING.GAME_OVER_DELAY);
    },
    returnMenu() {
        cc.audioEngine.play(this.buttonClip, false, 1);
        cc.director.loadScene('Menu');
    },
    restartGame() {
        cc.audioEngine.play(this.buttonClip, false, 1);
        this.showTheGameOverMask(false);
        this.init();
    },
    showTheGameOverMask(bool) {
        if (bool) {
            this.gameOverMask.active = true;
            this.gameOverMask.opacity = 1;
            this.gameOverMask.scale = 0.95;
            cc.tween(this.gameOverMask).to(Constants.TIMING.GAME_OVER_TWEEN, { scale: 1, opacity: 255 }).start();
        } else {
            cc.tween(this.gameOverMask).to(Constants.TIMING.FADE_OUT_TWEEN, { opacity: 0 }).call(() => {
                this.gameOverMask.active = false;
            }).start();
        }
    },
});
