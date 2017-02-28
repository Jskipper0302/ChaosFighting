
function Character(game, asset, playerNumber, characterNumber) {
    this.ai = false;
    this.playerNumber = playerNumber;
    this.characterNumber = characterNumber;
    this.goF = false;
    this.goB = false;
    this.jump = false;
    this.k = false;
    this.lightB = false;
    this.middleB = false;
    this.h = false;
    this.sup = false;
    this.g = false;
    this.opponent = null;
    this.healthPoint = 100;
    this.power = 100;
    this.speed = 500;
    this.game = game;
    this.ctx = game.ctx;
    this.hitSound = new Audio("./img/hit.mp3");
    this.sound = new Audio("./godzilla/superSound.mp3");
    if (characterNumber == 0){
        this.ai = true;
        var a = Math.random();
        if (a < 0.33){
            this.characterNumber = 1;
        } else if (a < 0.66){
            this.characterNumber = 2;
        } else {
            this.characterNumber = 3;
        }
    }
    if (this.characterNumber == 1){
        this.sound = new Audio("./godzilla/superSound.mp3");
        this.width = 65*3.8;
        this.attackRange = 14 * 3.8;
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./godzilla/right/wait.png"), 70, 63, 1, 0.10, 1, true, 3.8);
            this.goForward = new Animation(asset.getAsset("./godzilla/right/goForward.png"), 72, 63, 3, 0.25, 3, true, 3.8);
            this.goBack = new Animation(asset.getAsset("./godzilla/right/goBack.png"), 72, 63, 3, 0.25, 3, true, 3.8);
            this.lightBoxing = new Animation(asset.getAsset("./godzilla/right/lightBoxing.png"), 84, 62, 2, 0.12, 2, false, 3.8);
            this.middleBoxing = new Animation(asset.getAsset("./godzilla/right/heavyBoxing.png"), 88, 48, 3, 0.1, 3, false, 4.8);
            this.jumpUp = new Animation(asset.getAsset("./godzilla/right/jumpUp.png"), 70, 65, 2, 0.18, 2, false, 3.8);
            this.guard = new Animation(asset.getAsset("./godzilla/right/guard.png"), 73, 47, 1, 0.12, 1, true, 5);
            this.hit = new Animation(asset.getAsset("./godzilla/right/hit.png"), 60, 64, 1, 0.12, 1, true, 3.8);
            this.ki = new Animation(asset.getAsset("./godzilla/right/ki.png"), 70, 65, 2, 0.12, 2, true, 3.7);
            this.super = new Animation(asset.getAsset("./godzilla/right/super.png"), 79, 60, 5, 0.25, 5, false, 4);
            this.flash = new Flash(this.game, asset.getAsset("./godzilla/right/superFlash.png"), 2000, 1000);
            this.x = 220;
            this.y = 400;
        } else{
            this.animation = new Animation(asset.getAsset("./godzilla/left/wait.png"), 70, 63, 1, 0.10, 1, true, 3.8);
            this.goForward = new Animation(asset.getAsset("./godzilla/left/goForward.png"), 72, 63, 3, 0.25, 3, true, 3.8);
            this.goBack = new Animation(asset.getAsset("./godzilla/left/goBack.png"), 72, 63, 3, 0.25, 3, true, 3.8);
            this.lightBoxing = new Animation(asset.getAsset("./godzilla/left/lightBoxing.png"), 84, 62, 2, 0.12, 2, false, 3.8);
            this.middleBoxing = new Animation(asset.getAsset("./godzilla/left/heavyBoxing.png"), 88, 48, 3, 0.1, 3, false, 4.8);
            this.jumpUp = new Animation(asset.getAsset("./godzilla/left/jumpUp.png"), 70, 65, 2, 0.18, 2, false, 3.8);
            this.guard = new Animation(asset.getAsset("./godzilla/left/guard.png"), 73, 47, 1, 0.12, 1, true, 5);
            this.hit = new Animation(asset.getAsset("./godzilla/left/hit.png"), 60, 64, 1, 0.12, 1, true, 3.8);
            this.ki = new Animation(asset.getAsset("./godzilla/left/ki.png"), 70, 65, 2, 0.12, 2, true, 3.7);
            this.super = new Animation(asset.getAsset("./godzilla/left/super.png"), 79, 60, 5, 0.25, 5, false, 4);
            this.flash = new Flash(this.game, asset.getAsset("./godzilla/left/superFlash.png"), 2000, 1000);
            this.x = 1000;
            this.y = 400;
        }
    } else if (this.characterNumber == 2){
        this.sound = new Audio("./goku/superSound.mp3");
        this.width = 48*3;
        this.attackRange = 39 * 3;
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./goku/right/wait.png"), 48, 86, 2, 0.10, 2, true, 3);
            this.goForward = new Animation(asset.getAsset("./goku/right/goForward.png"), 76, 79, 2, 0.25, 2, true, 3.2);
            this.goBack = new Animation(asset.getAsset("./goku/right/goBack.png"), 57, 78, 2, 0.25, 2, true, 3.2);
            this.lightBoxing = new Animation(asset.getAsset("./goku/right/lightBoxing.png"), 87, 78, 2, 0.1, 2, false, 3.2);
            this.middleBoxing = new Animation(asset.getAsset("./goku/right/heavyBoxing.png"), 80, 89, 2, 0.12, 2, false, 2.9);
            this.jumpUp = new Animation(asset.getAsset("./goku/right/jumpUp.png"), 40, 91, 3, 0.18, 3, false, 3);
            this.guard = new Animation(asset.getAsset("./goku/right/guard.png"), 37, 88, 1, 0.12, 1, true, 2.9);
            this.hit = new Animation(asset.getAsset("./goku/right/hit.png"), 56, 91, 1, 0.12, 1, true, 2.8);
            this.ki = new Animation(asset.getAsset("./goku/right/ki.png"), 60, 96, 2, 0.12, 2, true, 2.7);
            this.super = new Animation(asset.getAsset("./goku/right/super.png"), 53, 77, 13, 0.13, 13, false, 3.3);
            this.flash = new Flash(this.game, asset.getAsset("./goku/right/superFlash.png"), 2000, 1000);
            this.x = 220;
            this.y = 400;
        } else {
            this.animation = new Animation(asset.getAsset("./goku/left/wait.png"), 48, 86, 2, 0.10, 2, true, 3);
            this.goForward = new Animation(asset.getAsset("./goku/left/goForward.png"), 76, 79, 2, 0.25, 2, true, 3.2);
            this.goBack = new Animation(asset.getAsset("./goku/left/goBack.png"), 57, 78, 2, 0.25, 2, true, 3.2);
            this.lightBoxing = new Animation(asset.getAsset("./goku/left/lightBoxing.png"), 87, 78, 2, 0.1, 2, false, 3.2);
            this.middleBoxing = new Animation(asset.getAsset("./goku/left/heavyBoxing.png"), 80, 89, 2, 0.12, 2, false, 2.9);
            this.jumpUp = new Animation(asset.getAsset("./goku/left/jumpUp.png"), 40, 91, 3, 0.18, 3, false, 3);
            this.guard = new Animation(asset.getAsset("./goku/left/guard.png"), 37, 88, 1, 0.12, 1, true, 2.9);
            this.hit = new Animation(asset.getAsset("./goku/left/hit.png"), 56, 91, 1, 0.12, 1, true, 2.8);
            this.ki = new Animation(asset.getAsset("./goku/left/ki.png"), 60, 96, 2, 0.12, 2, true, 2.7);
            this.super = new Animation(asset.getAsset("./goku/left/super.png"), 53, 77, 12, 0.13, 12, false, 3.3);
            this.flash = new Flash(this.game, asset.getAsset("./goku/left/superFlash.png"), 2000, 1000);
            this.x = 1000;
            this.y = 400;
        }
    } else if (this.characterNumber == 3){
        this.sound = new Audio("./itachi/superSound.mp3");
        this.width = 29*3.5;
        this.attackRange = 38*3.5 - 30;
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./itachi/right/wait.png"), 29, 65, 4, 0.10, 4, true, 3.5);
            this.goForward = new Animation(asset.getAsset("./itachi/right/goBack.png"), 36, 29, 3, 0.25, 3, true, 2.5);
            this.goBack = new Animation(asset.getAsset("./itachi/right/goBack.png"), 36, 29, 3, 0.25, 3, true, 2.5);
            this.lightBoxing = new Animation(asset.getAsset("./itachi/right/lightBoxing.png"), 67, 64, 2, 0.12, 2, false, 3.5);
            this.middleBoxing = new Animation(asset.getAsset("./itachi/right/heavyBoxing.png"), 64, 61, 4, 0.08, 4, false, 3.5);
            this.jumpUp = new Animation(asset.getAsset("./itachi/right/jumpUp.png"), 56, 61, 3, 0.18, 3, false, 3.5);
            this.guard = new Animation(asset.getAsset("./itachi/right/guard.png"), 26, 55, 1, 0.12, 1, true, 4);
            this.hit = new Animation(asset.getAsset("./itachi/right/hit.png"), 40, 57, 1, 0.12, 1, true, 3.8);
            this.ki = new Animation(asset.getAsset("./itachi/right/ki.png"), 50, 63, 1, 0.12, 1, true, 3.6);
            this.super = new Animation(asset.getAsset("./itachi/right/super.png"), 50, 63, 25, 0.06, 25, false, 3.5);
            this.flash = new Flash(this.game, asset.getAsset("./itachi/right/superFlash.png"), 2000, 1000);
            this.x = 220;
            this.y = 425;
        } else {
            this.animation = new Animation(asset.getAsset("./itachi/left/wait.png"), 29, 65, 4, 0.10, 4, true, 3.5);
            this.goForward = new Animation(asset.getAsset("./itachi/left/goBack.png"), 36, 29, 3, 0.25, 3, true, 2.5);
            this.goBack = new Animation(asset.getAsset("./itachi/left/goBack.png"), 36, 29, 3, 0.25, 3, true, 2.5);
            this.lightBoxing = new Animation(asset.getAsset("./itachi/left/lightBoxing.png"), 67, 64, 2, 0.12, 2, false, 3.5);
            this.middleBoxing = new Animation(asset.getAsset("./itachi/left/heavyBoxing.png"), 64, 61, 4, 0.08, 4, false, 3.5);
            this.jumpUp = new Animation(asset.getAsset("./itachi/left/jumpUp.png"), 56, 61, 3, 0.18, 3, false, 3.5);
            this.guard = new Animation(asset.getAsset("./itachi/left/guard.png"), 26, 55, 1, 0.12, 1, true, 4);
            this.hit = new Animation(asset.getAsset("./itachi/left/hit.png"), 40, 57, 1, 0.12, 1, true, 3.8);
            this.ki = new Animation(asset.getAsset("./itachi/left/ki.png"), 50, 63, 1, 0.12, 1, true, 3.6);
            this.super = new Animation(asset.getAsset("./itachi/left/super.png"), 50, 63, 25, 0.06, 25, false, 3.5);
            this.flash = new Flash(this.game, asset.getAsset("./itachi/left/superFlash.png"), 2000, 1000);
            this.x = 1000;
            this.y = 425;

        }
    }
    this.originalY = this.y;

    this.point1 = new Point(this.game, asset.getAsset("./img/point.png"), 0, 620);
    this.point2 = new Point(this.game, asset.getAsset("./img/point.png"), 0, 620);
    this.point3 = new Point(this.game, asset.getAsset("./img/point.png"), 0, 620);
    this.game.addEntity(this.flash);
    this.game.addEntity(this.point1);
    this.game.addEntity(this.point2);
    this.game.addEntity(this.point3);
    this.sound.loop = false;
    this.hitSound.loop = false;
}

Character.prototype.setOpponent = function(opponent) {
    this.opponent = opponent;
};

Character.prototype.draw = function () {
    var n;
    if (this.playerNumber == 1) {
        n = 0;
    } else {
        n = 3;
    }
    if (this.h){
        this.hit.drawFrame(this.game.clockTick, this.ctx, this.x - this.jumpUp.frameWidth * n, this.y);
    }else if (this.middleB){
        this.middleBoxing.drawFrame(this.game.clockTick, this.ctx, this.x - this.middleBoxing.frameWidth * n, this.y);
    }else if (this.sup){
        this.super.drawFrame(this.game.clockTick, this.ctx, this.x - this.super.frameWidth * n, this.y);
    }else if (this.g){
        this.guard.drawFrame(this.game.clockTick, this.ctx, this.x - this.guard.frameWidth * n, this.y);
    }else if (this.lightB){
        this.lightBoxing.drawFrame(this.game.clockTick, this.ctx, this.x - this.lightBoxing.frameWidth * n, this.y);
    }else if (this.k){
        this.ki.drawFrame(this.game.clockTick, this.ctx, this.x - this.ki.frameWidth * n, this.y);
    }else if (this.jump){
        this.jumpUp.drawFrame(this.game.clockTick, this.ctx, this.x - this.goBack.frameWidth * n, this.y);
    }else if (this.goF){
        this.goForward.drawFrame(this.game.clockTick, this.ctx, this.x - this.goForward.frameWidth * n, this.y);
    }else if (this.goB){
        this.goBack.drawFrame(this.game.clockTick, this.ctx, this.x - this.goBack.frameWidth * n, this.y);
    }else {
        this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.animation.frameWidth * n, this.y);
    }
};


Character.prototype.canAction = function(){
    return !(this.h || this.k || this.sup || this.g || this.jump || this.lightB || this.middleB);
};

Character.prototype.canMove = function(){
    return !(this.h || this.k || this.sup || this.g || this.lightB || this.middleB);
};

Character.prototype.update = function () {
    if (this.playerNumber == 1){
        if (this.canAction()) {

            if (this.game.s){
                this.k = true;
            }
            if (this.game.w){
                this.jump = true;
            }
            if (this.game.j){
                this.lightB = true;
            }
            if (this.game.k){
                this.middleB = true;
            }
            if (this.game.u){
                this.g = true;
            }
            if (this.game.i && this.power >= 100){
                this.sup = true;
            }
        }
        if (this.canMove()){
            if (this.game.d){
                this.goF = true;
                if (this.animation.elapsedTime < this.animation.totalTime && this.x + this.width < this.opponent.x - this.opponent.width)
                    this.x += this.game.clockTick * this.speed;
            } else {
                this.goF = false;
            }
            if (this.game.a){
                this.goB = true;
                if (this.animation.elapsedTime < this.animation.totalTime && this.x > 0)
                    this.x -= this.game.clockTick * this.speed;
            } else {
                this.goB = false;
            }

        }

        if (!this.game.u){
            this.g = false;
        }

        if (!this.game.s){
            this.k = false;
        }
    } else {
        if (this.canAction()) {
            if (this.game.down){
                this.k = true;
            }
            if (this.game.up){
                this.jump = true;
            }
            if (this.game.num1){
                this.lightB = true;
            }
            if (this.game.num2){
                this.middleB = true;
            }
            if (this.game.num4){
                this.g = true;
            }
            if (this.game.num5 && this.power >= 100){
                this.sup = true;
            }
        }
        if (this.canMove()){
            if (this.game.left){
                this.goF = true;
                if (this.animation.elapsedTime < this.animation.totalTime && this.x - this.width > this.opponent.x + this.opponent.width)
                    this.x -= this.game.clockTick * this.speed;
            } else {
                this.goF = false;
            }
            if (this.game.right){
                this.goB = true;
                if (this.animation.elapsedTime < this.animation.totalTime && this.x < 1280)
                    this.x += this.game.clockTick * this.speed;
            } else {
                this.goB = false;
            }

        }

        if (!this.game.num4){
            this.g = false;
        }

        if (!this.game.down){
            this.k = false;
        }
    }

    if (this.power < 300 && this.k){
        this.power += 1;
    }
    if (this.sup) {
        if (this.super.elapsedTime < 0.1){
            this.sound.play();
        }
        if (this.super.isDone()) {
            this.super.elapsedTime = 0;
            this.sup = false;
            this.power -=100;
            this.flash.x = 2000;
            this.flash.y = 1000;
        }
        //change Flash x and y
        if (this.characterNumber == 1){
            if (this.super.currentFrame() > 0){
                if (this.playerNumber == 1){
                    this.flash.x = this.x + 310 ;
                    this.flash.y = this.y + 20;
                } else {
                    this.flash.x = this.x - 170 - this.super.frameWidth * 3 ;
                    this.flash.y = this.y + 20;
                }
            }
        } else if (this.characterNumber == 2){
            if (this.super.currentFrame() > 2){
                if (this.playerNumber == 1){
                    this.flash.x = this.x + 150 ;
                    this.flash.y = this.y;
                } else {
                    this.flash.x = this.x - 350 - this.super.frameWidth * 3 ;
                    this.flash.y = this.y;
                }
            }
        } else if (this.characterNumber == 3){
            if (this.super.currentFrame() > 8) {
                if (this.playerNumber == 1) {
                    this.flash.x = this.x + 150;
                    this.flash.y = this.y - 50;
                } else {
                    this.flash.x = this.x - 300 - this.super.frameWidth * 3;
                    this.flash.y = this.y - 50;
                }
            }
        }
    }
    if (this.lightB) {
        if (this.lightBoxing.isDone()) {
            this.lightBoxing.elapsedTime = 0;
            this.lightB = false;
        }
    }
    if (this.middleB) {
        if (this.middleBoxing.isDone()) {
            this.middleBoxing.elapsedTime = 0;
            this.middleB = false;
        }
    }
    if (this.jump) {
        if (this.jumpUp.isDone()) {
            this.jumpUp.elapsedTime = 0;
            this.jump = false;
        }
        var jumpDistance = this.jumpUp.elapsedTime / this.jumpUp.totalTime;
        var totalHeight = 300;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        this.y = this.originalY - totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
    }
    if (this.h){
        this.super.elapsedTime = 0;
        this.sup = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        this.lightBoxing.elapsedTime = 0;
        this.middleBoxing.elapsedTime = 0;
        this.jumpUp.elapsedTime = 0;
        this.jump =false;
        this.y = this.originalY;
    }

    if (Math.abs(this.x - this.opponent.x) < this.width + this.opponent.width + this.attackRange && Math.abs(this.y - this.opponent.y) < 150 && (this.lightB || this.middleB)){
        if (this.lightB){
            if (this.opponent.g){
                this.opponent.healthPoint -= 0.08;
                if (this.opponent.hitSound.currentTime < 0.2){
                    this.opponent.hitSound.play();
                }
                this.power += 0.25;
            } else {
                this.opponent.healthPoint -= 0.15;
                if (this.opponent.hitSound.currentTime < 0.2){
                    this.opponent.hitSound.play();
                }
                this.power += 0.5;
                this.opponent.h = true;
            }
        }
        if (this.middleB){
            if (this.opponent.g){
                this.opponent.healthPoint -= 0.15;
                if (this.opponent.hitSound.currentTime < 0.2){
                    this.opponent.hitSound.play();
                }
                this.power += 0.5;
            } else {
                this.opponent.healthPoint -= 0.3;
                if (this.opponent.hitSound.currentTime < 0.2){
                    this.opponent.hitSound.play();
                }
                this.opponent.h = true;
                this.power += 1;
            }
        }

    } else if (this.flash.x != 2000 && Math.abs(this.flash.x + this.flash.spritesheet.width - this.opponent.x) < 350 && Math.abs(this.y - this.opponent.y) < 150){
        if (this.opponent.g){
            this.opponent.healthPoint -= 0.2;
        } else {
            this.opponent.healthPoint -= 0.4;
            this.opponent.h = true;
        }
    }else {
        this.opponent.h = false;
        this.opponent.hitSound.pause();
        this.opponent.hitSound.currentTime = 0;
    }

    if (this.power >= 300 ){
        if (this.playerNumber == 1){
            this.point1.x = 160;
        } else {
            this.point1.x = 1020;
        }
        this.point1.y = 620;
    }else {
        this.point1.x = 1280;
        this.point1.y = 720;
    }
    if (this.power >= 200 ){
        if (this.playerNumber == 1){
            this.point2.x = 100;
        } else {
            this.point2.x = 1080;
        }
        this.point2.y = 620;
    } else {
        this.point2.x = 1280;
        this.point2.y = 720;
    }
    if (this.power >=100){
        if (this.playerNumber == 1){
            this.point3.x = 40;
        } else {
            this.point3.x = 1140;
        }
        this.point3.y = 620;
    } else {
        this.point3.x = 1280;
        this.point3.y = 720;
    }


    if (this.ai){
        if (Math.abs(this.x - this.opponent.x) < this.width + this.opponent.width + this.attackRange){
            var a = Math.random();
            if (a < 0.1) {
                this.game.num2 = false;
                this.game.num1 = true;
            } else if (a >= 0.1 && a < 0.2) {
                this.game.num1 = false;
                this.game.num2 = true;
            } else {
                this.game.num1 = false;
                this.game.num2 = false;
            }

        } else {
            if (this.game.num1) {
                this.game.num1 = false;
            }
            if (this.game.num2) {
                this.game.num2 = false;
            }
            if (this.x > 200){
                if (this.game.right) {
                    this.game.right = false;
                }
                this.game.left = true;
            } else {
                this.game.left = false;
            }
        }
    }

    if (this.healthPoint < 0 || this.opponent.healthPoint < 0){
        if (this.opponent.healthPoint < 0){
            localStorage.setItem("playerNumber", this.playerNumber);
            localStorage.setItem("characterNumber", this.characterNumber);
        } else {
            localStorage.setItem("playerNumber", this.opponent.playerNumber);
            localStorage.setItem("characterNumber", this.opponent.characterNumber);
        }
        window.location.href = "gameover.html";
    }
};


function Flash(game, spritesheet, x, y) {
    this.x = x;
    this.y = y;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
}

Flash.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.spritesheet.width * 2, this.spritesheet.height * 2);
};

Flash.prototype.update = function () {
};

function Point(game, spritesheet, x, y) {
    this.x = x;
    this.y = y;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    console.log("add Flash");
}

Point.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.spritesheet.width, this.spritesheet.height);
};

Point.prototype.update = function () {
};