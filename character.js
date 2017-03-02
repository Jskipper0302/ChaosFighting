
function Character(game, asset, playerNumber, characterNumber) {
    this.count = 0;
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
    this.hitSound = new Audio("./assets/hit.mp3");
    this.sound = new Audio("./godzilla/superSound.mp3");
    if (this.characterNumber == 0){
        this.ai = true;
        var a = Math.random();
        if (a < 0.25){
            this.characterNumber = 1;
            } else if (a < 0.50){
            this.characterNumber = 2;
        } else if (a < 0.75){
            this.characterNumber = 3;
        } else {
            this.characterNumber = 4;
        }
    }
    if (this.characterNumber == 1){
        this.sound = new Audio("./godzilla/superSound.mp3");
        this.width = 65 * 4;
        this.attackRangeL = 16 * 3.8;
        this.attackRangeM = 7 * 3.8;
        this.superAttack = 0.4;
        this.guardScale = 2;
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./godzilla/right/wait.png"), 70, 63, 1, 0.10, 1, true, 3.8);
            this.goForward = new Animation(asset.getAsset("./godzilla/right/goForward.png"), 72, 63, 3, 0.25, 3, true, 3.8);
            this.goBack = new Animation(asset.getAsset("./godzilla/right/goBack.png"), 72, 63, 3, 0.25, 3, true, 3.8);
            this.lightBoxing = new Animation(asset.getAsset("./godzilla/right/lightBoxing.png"), 84, 62, 2, 0.12, 2, false, 3.8);
            this.middleBoxing = new Animation(asset.getAsset("./godzilla/right/heavyBoxing.png"), 77, 63, 2, 0.1, 2, false, 3.8 );
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
            this.middleBoxing = new Animation(asset.getAsset("./godzilla/left/heavyBoxing.png"), 77, 63, 2, 0.1, 2, false, 3.8);
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
        this.width = 48 * 3;
        this.attackRangeL = 38 * 3;
        this.attackRangeM = 25 * 3;
        this.superAttack = 0.28;
        this.guardScale = 2;
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
            this.super = new Animation(asset.getAsset("./goku/right/super.png"), 53, 77, 13, 0.15, 13, false, 3.3);
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
            this.super = new Animation(asset.getAsset("./goku/left/super.png"), 53, 77, 12, 0.15, 12, false, 3.3);
            this.flash = new Flash(this.game, asset.getAsset("./goku/left/superFlash.png"), 2000, 1000);
            this.x = 1000;
            this.y = 400;
        }
    } else if (this.characterNumber == 3){
        this.sound = new Audio("./itachi/superSound.mp3");
        this.width = 29 * 3.5;
        this.attackRangeL = 38 * 3.5;
        this.attackRangeM = 30 * 3.5 ;
        this.superAttack = 0.32;
        this.guardScale = 2;
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
            this.super = new Animation(asset.getAsset("./itachi/right/super.png"), 50, 63, 25, 0.11, 25, false, 3.5);
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
            this.super = new Animation(asset.getAsset("./itachi/left/super.png"), 50, 63, 25, 0.11, 25, false, 3.5);
            this.flash = new Flash(this.game, asset.getAsset("./itachi/left/superFlash.png"), 2000, 1000);
            this.x = 1000;
            this.y = 425;

        }
    } else if (this.characterNumber == 4){
        this.sound = new Audio("./pain/superSound.mp3");
        this.width = 19 * 5.3;
        this.attackRangeL = 40 * 5.3;
        this.attackRangeM = 35 * 5.3;
        this.superAttack = 0.2;
        this.guardScale = 2;
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./pain/right/wait.png"), 19, 46, 4, 0.10, 4, true, 5.3);
            this.goForward = new Animation(asset.getAsset("./pain/right/goForward.png"), 36, 45, 3, 0.25, 3, true, 5.3);
            this.goBack = new Animation(asset.getAsset("./pain/right/goBack.png"), 31, 44, 4, 0.25, 4, true, 5.5);
            this.lightBoxing = new Animation(asset.getAsset("./pain/right/lightBoxing.png"), 54, 45, 2, 0.15, 2, false, 5.3);
            this.middleBoxing = new Animation(asset.getAsset("./pain/right/heavyBoxing.png"), 56, 64, 3, 0.10, 3, false, 5.3);
            this.jumpUp = new Animation(asset.getAsset("./pain/right/jumpUp.png"), 28, 46, 3, 0.18, 3, false, 5.3);
            this.guard = new Animation(asset.getAsset("./pain/right/guard.png"), 22, 45, 1, 0.12, 1, true, 5.3);
            this.hit = new Animation(asset.getAsset("./pain/right/hit.png"), 25, 43, 1, 0.12, 1, true, 5.3);
            this.ki = new Animation(asset.getAsset("./pain/right/ki.png"), 29, 45, 1, 0.12, 1, true, 5.3);
            this.super = new Animation(asset.getAsset("./pain/right/super.png"), 29, 45, 24, 0.09, 24, false, 5.3);
            this.flash = new Flash(this.game, asset.getAsset("./pain/right/superFlash.png"), 2000, 1000);
            this.x = 220;
            this.y = 405;
        } else {
            this.animation = new Animation(asset.getAsset("./pain/left/wait.png"), 19, 46, 4, 0.10, 4, true, 5.3);
            this.goForward = new Animation(asset.getAsset("./pain/left/goForward.png"), 36, 45, 3, 0.25, 3, true, 5.3);
            this.goBack = new Animation(asset.getAsset("./pain/left/goBack.png"), 31, 44, 4, 0.25, 4, true, 5.3);
            this.lightBoxing = new Animation(asset.getAsset("./pain/left/lightBoxing.png"), 54, 45, 2, 0.15, 2, false, 5.3);
            this.middleBoxing = new Animation(asset.getAsset("./pain/left/heavyBoxing.png"), 56, 64, 3, 0.10, 3, false, 5.3);
            this.jumpUp = new Animation(asset.getAsset("./pain/left/jumpUp.png"), 28, 46, 3, 0.18, 3, false, 5.3);
            this.guard = new Animation(asset.getAsset("./pain/left/guard.png"), 22, 45, 1, 0.12, 1, true, 5.3);
            this.hit = new Animation(asset.getAsset("./pain/left/hit.png"), 25, 43, 1, 0.12, 1, true, 5.3);
            this.ki = new Animation(asset.getAsset("./pain/left/ki.png"), 29, 45, 1, 0.12, 1, true, 5.3);
            this.super = new Animation(asset.getAsset("./pain/left/super.png"), 29, 45, 24, 0.09, 24, false, 5.3);
            this.flash = new Flash(this.game, asset.getAsset("./pain/left/superFlash.png"), 2000, 1000);
            this.x = 1000;
            this.y = 405;
        }
    }
    this.originalY = this.y;
    this.point1 = new Point(this.game, asset.getAsset("./assets/point.png"), 0, 620);
    this.point2 = new Point(this.game, asset.getAsset("./assets/point.png"), 0, 620);
    this.point3 = new Point(this.game, asset.getAsset("./assets/point.png"), 0, 620);
    this.game.addEntity(this.flash);
    this.game.addEntity(this.point1);
    this.game.addEntity(this.point2);
    this.game.addEntity(this.point3);
    this.sound.loop = false;
    this.hitSound.loop = false;
    if (this.playerNumber == 2){
        if (this.characterNumber == 1){
            this.bg = new Audio("./assets/bgm1.mp3");
        } else if (this.characterNumber == 2){
            this.bg = new Audio("./assets/bgm2.mp3");
        } else if (this.characterNumber == 3){
            this.bg = new Audio("./assets/bgm3.mp3");
        } else if (this.characterNumber == 4){
            this.bg = new Audio("./assets/bgm4.mp3");
        }
        this.bg.loop = true;
        this.bg.play();
    }
}

Character.prototype.setOpponent = function(opponent) {
    this.opponent = opponent;
};

Character.prototype.draw = function () {
    var n;
    if (this.playerNumber == 1) {
        n = 0;
    } else {
        if (this.characterNumber == 1){
            n = 3.8;
        } else if (this.characterNumber == 2){
            n = 3;
        } else if (this.characterNumber == 3){
            n = 3.5;
        } else if (this.characterNumber == 4){
            n = 5.3;
        }
    }
    if (this.h){
        this.hit.drawFrame(this.game.clockTick, this.ctx, this.x - this.hit.frameWidth * n, this.y);
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
        this.jumpUp.drawFrame(this.game.clockTick, this.ctx, this.x - this.jumpUp.frameWidth * n, this.y);
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
    if (localStorage.getItem("music") == 1){
        this.sound.volume = 1;
        this.hitSound.volume = 1;
        if(this.playerNumber == 2){
            this.bg.play();
        }
    } else {
        this.sound.volume = 0;
        this.hitSound.volume = 0;
        if(this.playerNumber == 2){
            this.bg.pause();
        }
    }
    if (localStorage.getItem("game") == 1){
        if (this.playerNumber == 1){
            if (this.canAction()) {

                if (this.game.s){
                    this.k = true;
                } else if (this.game.w){
                    this.jump = true;
                } else if (this.game.j){
                    this.lightB = true;
                } else if (this.game.k){
                    this.middleB = true;
                } else if (this.game.u){
                    this.g = true;
                } else if (this.game.i && this.power >= 100){
                    this.sup = true;
                    this.power -= 100;
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
                } else if (this.game.up){
                    this.jump = true;
                } else if (this.game.num1){
                    this.lightB = true;
                } else if (this.game.num2){
                    this.middleB = true;
                } else if (this.game.num4){
                    this.g = true;
                } else if (this.game.num5 && this.power >= 100){
                    this.sup = true;
                    this.power -= 100;
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
            if (this.super.isDone() || this.h) {
                this.super.elapsedTime = 0;
                this.sup = false;

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
                        this.flash.x = this.x - 470 ;
                        this.flash.y = this.y + 20;
                    }
                }
            } else if (this.characterNumber == 2){
                if (this.super.currentFrame() > 2){
                    if (this.playerNumber == 1){
                        this.flash.x = this.x + 150 ;
                        this.flash.y = this.y;
                    } else {
                        this.flash.x = this.x - 1360 ;
                        this.flash.y = this.y;
                    }
                }
            } else if (this.characterNumber == 3){
                if (this.super.currentFrame() > 8) {
                    if (this.playerNumber == 1) {
                        this.flash.x = this.x + 150;
                        this.flash.y = this.y - 50;
                    } else {
                        this.flash.x = this.x - 470;
                        this.flash.y = this.y - 50;
                    }
                }
            } else if (this.characterNumber == 4){
                if (this.super.currentFrame() > 2){
                    if (this.playerNumber == 1){
                        this.flash.x = this.x - 170 ;
                        this.flash.y = this.y - 125;
                    } else {
                        this.flash.x = this.x - 270;
                        this.flash.y = this.y - 125;
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

            if (jumpDistance > 0.5) {
                jumpDistance = 1 - jumpDistance;
            }
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

        if (this.lightB || this.middleB) {
            if (Math.abs(this.x - this.opponent.x) < this.width + this.opponent.width + this.attackRangeL
                && Math.abs(this.y - this.opponent.y) < 150 && this.lightB) {
                if (this.opponent.g) {
                    this.opponent.healthPoint -= 0.08;
                    if (this.opponent.hitSound.currentTime < 0.2) {
                        this.opponent.hitSound.play();
                    }
                    this.power += 0.25;
                } else {
                    this.opponent.healthPoint -= 0.15;
                    if (this.opponent.hitSound.currentTime < 0.2) {
                        this.opponent.hitSound.play();
                    }
                    this.power += 0.5;
                    this.opponent.h = true;
                    console.log(this.opponent.h);
                }
            }
            if (Math.abs(this.x - this.opponent.x) < this.width + this.opponent.width + this.attackRangeM
                && Math.abs(this.y - this.opponent.y) < 150 && this.middleB) {
                if (this.opponent.g) {
                    this.opponent.healthPoint -= 0.15;
                    if (this.opponent.hitSound.currentTime < 0.2) {
                        this.opponent.hitSound.play();
                    }
                    this.power += 0.5;
                } else {
                    this.opponent.healthPoint -= 0.3;
                    if (this.opponent.hitSound.currentTime < 0.2) {
                        this.opponent.hitSound.play();
                    }
                    this.opponent.h = true;
                    this.power += 1;
                }
            }

        }else if (this.flash.x != 2000){
            if (this.playerNumber == 1){
                if (this.opponent.x - this.flash.x - this.flash.spritesheet.width * 2 - this.opponent.width < 0 && Math.abs(this.y - this.opponent.y) < 150) {
                    if (this.opponent.characterNumber != 4 || !this.opponent.sup) {
                        if (this.opponent.g) {
                            this.opponent.healthPoint -= this.superAttack / 2;
                        } else {
                            this.opponent.healthPoint -= this.superAttack;
                            this.opponent.h = true;
                        }
                    }
                }
            } else {
                if (this.flash.x - this.opponent.x - this.opponent.width < 0 && Math.abs(this.y - this.opponent.y) < 150) {
                    if (this.opponent.characterNumber != 4 || !this.opponent.sup) {
                        if (this.opponent.g) {
                            this.opponent.healthPoint -= this.superAttack / 2;
                        } else {
                            this.opponent.healthPoint -= this.superAttack;
                            this.opponent.h = true;
                        }
                    }
                }
            }
        } else {
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
            this.game.num1 = false;
            this.game.num2 = false;
            this.game.num5 = false;
            this.game.up = false;

            if (this.opponent.sup){
                if (this.random > 0.5 && this.characterNumber != 4){
                    this.game.num4 = true;
                }
                if (this.characterNumber == 4) {
                    this.game.num5 = true;
                }
            } else {
                this.game.num4 = false;
                if (this.count <= 15){
                    this.count++;
                    if (this.count == 15){
                        this.count = 0;
                        this.game.left = false;
                        this.game.right = false;
                        this.game.down = false;
                        this.game.num4 = false;
                        this.random = Math.random();
                        if (Math.abs(this.x - this.opponent.x) < this.width + this.opponent.width + this.attackRangeL){
                            if (this.random < 0.35){
                                this.game.num1 = true;
                            } else if (this.random < 0.7){
                                this.game.num2 = true;
                            } else if (this.random < 0.75){
                                this.game.right = true;
                            } else if (this.random < 0.8){
                                this.game.num4 = true;
                            } else if (this.random < 0.85){
                                this.game.up = true;
                            } else if (this.power >= 100) {
                                if (this.characterNumber == 1) {
                                    this.game.num5 = true;
                                }
                                if (this.characterNumber == 2) {
                                    this.game.num5 = true;
                                }
                                if (this.characterNumber == 3) {
                                    this.game.num5 = true;
                                }
                                if (this.characterNumber == 4 && Math.abs(this.x - this.opponent.x) < 400) {
                                    this.game.num5 = true;
                                }
                            }
                        }  else {
                            if (this.power >= 100 && this.random < 0.3) {
                                if (Math.abs(this.x - this.opponent.x) < 600 && this.characterNumber == 1) {
                                    this.game.num5 = true;
                                }
                                if (Math.abs(this.x - this.opponent.x) < 2000 && this.characterNumber == 2) {
                                    this.game.num5 = true;
                                }
                                if (Math.abs(this.x - this.opponent.x) < 500 && this.characterNumber == 3) {
                                    this.game.num5 = true;
                                }
                                if (Math.abs(this.x - this.opponent.x) < 400 && this.characterNumber == 4) {
                                    this.game.num5 = true;
                                }
                            } else if (this.random < 0.7){
                                this.game.left = true;
                            } else if (this.power < 300){
                                this.game.down = true;
                            }
                        }
                    }
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