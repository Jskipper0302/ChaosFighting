var AM = new AssetManager();
var playerOne, playerTwo;
function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);


    ctx.drawImage(this.spriteSheet,
        xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
        this.frameWidth, this.frameHeight,
        x, y,
        this.frameWidth * this.scale,
        this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.ctx = game.ctx;
    var a = Math.random();
    if (a < 0.33){
        this.spritesheet = AM.getAsset("./assets/bg1.jpg");
    } else if (a < 0.66){
        this.spritesheet = AM.getAsset("./assets/bg2.jpg");
    } else {
        this.spritesheet = AM.getAsset("./assets/bg3.jpg");
    }
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.spritesheet.width, this.spritesheet.height);
};

Background.prototype.update = function () {
};

function Bar(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Bar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        (100 - playerOne.healthPoint) * 5.7, 0,
        this.spritesheet.width - (200 - playerOne.healthPoint - playerTwo.healthPoint) * 5.7, this.spritesheet.height,
        (100 - playerOne.healthPoint) * 5.7, this.y,
        this.spritesheet.width - (200 - playerOne.healthPoint - playerTwo.healthPoint) * 5.7, this.spritesheet.height);
};

Bar.prototype.update = function () {
    // test health Point
    // if (this.game.num9){
    //     playerOne.healthPoint--;
    //     playerTwo.healthPoint--;
    // } else if (this.game.num8){
    //     playerOne.healthPoint++;
    //     playerTwo.healthPoint++;
    // }
};

function StartButton(game, spritesheet) {
    this.x = 1280/2 - 452/2;
    this.y = 720/2 - 200/2;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

StartButton.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
};

StartButton.prototype.update = function () {
    if (localStorage.getItem("game") == 0){
        this.x = 1280/2 - 452/2;
        this.y = 720/2 - 200/2;
    }else {
        this.x = 1280;
        this.y = 720;
    }
};

AM.queueDownload("./godzilla/right/jumpUp.png");
AM.queueDownload("./godzilla/right/heavyBoxing.png");
AM.queueDownload("./godzilla/right/lightBoxing.png");
AM.queueDownload("./godzilla/right/goBack.png");
AM.queueDownload("./godzilla/right/goForward.png");
AM.queueDownload("./godzilla/right/wait.png");
AM.queueDownload("./godzilla/right/guard.png");
AM.queueDownload("./godzilla/right/hit.png");
AM.queueDownload("./godzilla/right/ki.png");
AM.queueDownload("./godzilla/right/super.png");
AM.queueDownload("./godzilla/right/superFlash.png");
AM.queueDownload("./godzilla/superSound.mp3");

AM.queueDownload("./godzilla/left/jumpUp.png");
AM.queueDownload("./godzilla/left/heavyBoxing.png");
AM.queueDownload("./godzilla/left/lightBoxing.png");
AM.queueDownload("./godzilla/left/goBack.png");
AM.queueDownload("./godzilla/left/goForward.png");
AM.queueDownload("./godzilla/left/wait.png");
AM.queueDownload("./godzilla/left/guard.png");
AM.queueDownload("./godzilla/left/hit.png");
AM.queueDownload("./godzilla/left/ki.png");
AM.queueDownload("./godzilla/left/super.png");
AM.queueDownload("./godzilla/left/superFlash.png");

AM.queueDownload("./goku/right/jumpUp.png");
AM.queueDownload("./goku/right/heavyBoxing.png");
AM.queueDownload("./goku/right/lightBoxing.png");
AM.queueDownload("./goku/right/goBack.png");
AM.queueDownload("./goku/right/goForward.png");
AM.queueDownload("./goku/right/wait.png");
AM.queueDownload("./goku/right/guard.png");
AM.queueDownload("./goku/right/hit.png");
AM.queueDownload("./goku/right/ki.png");
AM.queueDownload("./goku/right/super.png");
AM.queueDownload("./goku/right/superFlash.png");
AM.queueDownload("./goku/right/superFlash1.png");
AM.queueDownload("./goku/right/superFlash2.png");
AM.queueDownload("./goku/superSound.mp3");

AM.queueDownload("./goku/left/jumpUp.png");
AM.queueDownload("./goku/left/heavyBoxing.png");
AM.queueDownload("./goku/left/lightBoxing.png");
AM.queueDownload("./goku/left/goBack.png");
AM.queueDownload("./goku/left/goForward.png");
AM.queueDownload("./goku/left/wait.png");
AM.queueDownload("./goku/left/guard.png");
AM.queueDownload("./goku/left/hit.png");
AM.queueDownload("./goku/left/ki.png");
AM.queueDownload("./goku/left/super.png");
AM.queueDownload("./goku/left/superFlash.png");
AM.queueDownload("./goku/left/superFlash1.png");
AM.queueDownload("./goku/left/superFlash2.png");

AM.queueDownload("./itachi/left/jumpUp.png");
AM.queueDownload("./itachi/left/heavyBoxing.png");
AM.queueDownload("./itachi/left/lightBoxing.png");
AM.queueDownload("./itachi/left/goBack.png");
AM.queueDownload("./itachi/left/wait.png");
AM.queueDownload("./itachi/left/guard.png");
AM.queueDownload("./itachi/left/hit.png");
AM.queueDownload("./itachi/left/ki.png");
AM.queueDownload("./itachi/left/super.png");
AM.queueDownload("./itachi/left/superFlash.png");
AM.queueDownload("./itachi/left/superFlash1.png");
AM.queueDownload("./itachi/left/superFlash2.png");
AM.queueDownload("./itachi/superSound.mp3");

AM.queueDownload("./itachi/right/jumpUp.png");
AM.queueDownload("./itachi/right/heavyBoxing.png");
AM.queueDownload("./itachi/right/lightBoxing.png");
AM.queueDownload("./itachi/right/goBack.png");
AM.queueDownload("./itachi/right/wait.png");
AM.queueDownload("./itachi/right/guard.png");
AM.queueDownload("./itachi/right/hit.png");
AM.queueDownload("./itachi/right/ki.png");
AM.queueDownload("./itachi/right/super.png");
AM.queueDownload("./itachi/right/superFlash.png");
AM.queueDownload("./itachi/right/superFlash1.png");
AM.queueDownload("./itachi/right/superFlash2.png");

AM.queueDownload("./pain/right/jumpUp.png");
AM.queueDownload("./pain/right/heavyBoxing.png");
AM.queueDownload("./pain/right/lightBoxing.png");
AM.queueDownload("./pain/right/goBack.png");
AM.queueDownload("./pain/right/goForward.png");
AM.queueDownload("./pain/right/wait.png");
AM.queueDownload("./pain/right/guard.png");
AM.queueDownload("./pain/right/hit.png");
AM.queueDownload("./pain/right/ki.png");
AM.queueDownload("./pain/right/super.png");
AM.queueDownload("./pain/right/superFlash.png");

AM.queueDownload("./pain/left/jumpUp.png");
AM.queueDownload("./pain/left/heavyBoxing.png");
AM.queueDownload("./pain/left/lightBoxing.png");
AM.queueDownload("./pain/left/goBack.png");
AM.queueDownload("./pain/left/goForward.png");
AM.queueDownload("./pain/left/wait.png");
AM.queueDownload("./pain/left/guard.png");
AM.queueDownload("./pain/left/hit.png");
AM.queueDownload("./pain/left/ki.png");
AM.queueDownload("./pain/left/super.png");
AM.queueDownload("./pain/left/superFlash.png");
AM.queueDownload("./pain/superSound.mp3");

AM.queueDownload("./piccolo/right/jumpUp.png");
AM.queueDownload("./piccolo/right/heavyBoxing.png");
AM.queueDownload("./piccolo/right/lightBoxing.png");
AM.queueDownload("./piccolo/right/goBack.png");
AM.queueDownload("./piccolo/right/goForward.png");
AM.queueDownload("./piccolo/right/wait.png");
AM.queueDownload("./piccolo/right/guard.png");
AM.queueDownload("./piccolo/right/hit.png");
AM.queueDownload("./piccolo/right/ki.png");
AM.queueDownload("./piccolo/right/super.png");
AM.queueDownload("./piccolo/right/superFlash.png");

AM.queueDownload("./piccolo/left/jumpUp.png");
AM.queueDownload("./piccolo/left/heavyBoxing.png");
AM.queueDownload("./piccolo/left/lightBoxing.png");
AM.queueDownload("./piccolo/left/goBack.png");
AM.queueDownload("./piccolo/left/goForward.png");
AM.queueDownload("./piccolo/left/wait.png");
AM.queueDownload("./piccolo/left/guard.png");
AM.queueDownload("./piccolo/left/hit.png");
AM.queueDownload("./piccolo/left/ki.png");
AM.queueDownload("./piccolo/left/super.png");
AM.queueDownload("./piccolo/left/superFlash.png");

AM.queueDownload("./ultraman/right/jumpUp.png");
AM.queueDownload("./ultraman/right/heavyBoxing.png");
AM.queueDownload("./ultraman/right/lightBoxing.png");
AM.queueDownload("./ultraman/right/goBack.png");
AM.queueDownload("./ultraman/right/goForward.png");
AM.queueDownload("./ultraman/right/wait.png");
AM.queueDownload("./ultraman/right/guard.png");
AM.queueDownload("./ultraman/right/hit.png");
AM.queueDownload("./ultraman/right/ki.png");
AM.queueDownload("./ultraman/right/super.png");
AM.queueDownload("./ultraman/right/superFlash.png");

AM.queueDownload("./ultraman/left/jumpUp.png");
AM.queueDownload("./ultraman/left/heavyBoxing.png");
AM.queueDownload("./ultraman/left/lightBoxing.png");
AM.queueDownload("./ultraman/left/goBack.png");
AM.queueDownload("./ultraman/left/goForward.png");
AM.queueDownload("./ultraman/left/wait.png");
AM.queueDownload("./ultraman/left/guard.png");
AM.queueDownload("./ultraman/left/hit.png");
AM.queueDownload("./ultraman/left/ki.png");
AM.queueDownload("./ultraman/left/super.png");
AM.queueDownload("./ultraman/left/superFlash.png");

AM.queueDownload("./nagato/right/jumpUp.png");
AM.queueDownload("./nagato/right/heavyBoxing.png");
AM.queueDownload("./nagato/right/lightBoxing.png");
AM.queueDownload("./nagato/right/goBack.png");
AM.queueDownload("./nagato/right/goForward.png");
AM.queueDownload("./nagato/right/wait.png");
AM.queueDownload("./nagato/right/guard.png");
AM.queueDownload("./nagato/right/hit.png");
AM.queueDownload("./nagato/right/ki.png");
AM.queueDownload("./nagato/right/super.png");
AM.queueDownload("./nagato/right/superFlash.png");
AM.queueDownload("./nagato/right/superFlash1.png");
AM.queueDownload("./nagato/right/superFlash2.png");

AM.queueDownload("./nagato/left/jumpUp.png");
AM.queueDownload("./nagato/left/heavyBoxing.png");
AM.queueDownload("./nagato/left/lightBoxing.png");
AM.queueDownload("./nagato/left/goBack.png");
AM.queueDownload("./nagato/left/goForward.png");
AM.queueDownload("./nagato/left/wait.png");
AM.queueDownload("./nagato/left/guard.png");
AM.queueDownload("./nagato/left/hit.png");
AM.queueDownload("./nagato/left/ki.png");
AM.queueDownload("./nagato/left/super.png");
AM.queueDownload("./nagato/left/superFlash.png");
AM.queueDownload("./nagato/left/superFlash1.png");
AM.queueDownload("./nagato/left/superFlash2.png");

AM.queueDownload("./assets/bg1.jpg");
AM.queueDownload("./assets/bg2.jpg");
AM.queueDownload("./assets/bg3.jpg");
AM.queueDownload("./assets/bar.gif");
AM.queueDownload("./assets/point.png");
AM.queueDownload("./assets/start.png");
AM.queueDownload("./assets/hit.mp3");
AM.queueDownload("./assets/bgm1.mp3");
AM.queueDownload("./assets/bgm2.mp3");
AM.queueDownload("./assets/bgm3.mp3");
AM.queueDownload("./assets/bgm4.mp3");
AM.queueDownload("./assets/bgm5.mp3");
AM.queueDownload("./assets/bgm6.mp3");
AM.queueDownload("./assets/bgm7.mp3");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine));
    playerOne = new Character(gameEngine, AM, 1, localStorage.getItem("selection1"));
    playerTwo = new Character(gameEngine, AM, 2, localStorage.getItem("selection2"));
    playerOne.setOpponent(playerTwo);
    playerTwo.setOpponent(playerOne);
    if (localStorage.getItem("selection2") == 0){
        gameEngine.ai = true;
    }
    gameEngine.addEntity(playerOne);
    gameEngine.addEntity(playerTwo);
    gameEngine.addEntity(new Bar(gameEngine, AM.getAsset("./assets/bar.gif")));
    gameEngine.addEntity(new StartButton(gameEngine, AM.getAsset("./assets/start.png")));

    console.log("All Done!");
});