/* There are a bunch of special variables and functions.
 Here are some notable ones, but there are many more:
 setup, draw, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT
 */
var bkInfo = {
    "name": "background",
    "x": 0,
    "y": 0,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 640,
    "height" : 480
};
var bk2Info = {
    "name": "background2",
    "x": -640,
    "y": 0,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 640,
    "height" : 480
};
var tigerInfo = {
    "name": "tiger1",
    "x": 400,
    "y": 430,
    "xSpeed": -2,
    "ySpeed": 0,
    "width" : 90,
    "height" : 49
};
var redpandaInfo = {
    "name": "redpanda1",
    "x": 110,
    "y": 450,
    "xSpeed": -3,
    "ySpeed": 0,
    "multiAnim": 0,
    "stillAnim": 0,
    "animState": "still",
    "width" : 51.75,
    "height" : 25
};

var elephantInfo = {
    "name": "elephant1",
    "x": 400,
    "y": 400,
    "xSpeed": -4,
    "ySpeed": 0,
    "width" : 99,
    "height" : 90
};

var beardedDragonInfo = {
    "name": "beardeddragon1",
    "x": 500,
    "y": 420,
    "xSpeed": -3,
    "ySpeed": 0,
    "width" : 45,
    "height" : 35
};

//***************************************************************************************************************************
var treeFrogInfo = {
    "name": "treefrog1",
    "x": 300,
    "y": 180,
    "xSpeed": -1,
    "ySpeed": -1,
    "stillAnim": "treefrog1",
    "multiAnim": "jumpFrog1",
    "animState": "still",
    "health": 21,
    "score": 0,
    "width" : 91,
    "height" : 35
};
//***************************************************************************************************************************



var pieSmall1Info = {
    "name": "pieSmall1",
    "x": 45,
    "y": Math.random() * 380,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 37.5,
    "height" : 28
};
var pieSmall2Info = {
    "name": "pieSmall2",
    "x": 240,
    "y": Math.random() * 380,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 37.5,
    "height" : 28
};

var pieSmall3Info = {
    "name": "pieSmall3",
    "x": 157,
    "y": Math.random() * 380,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 37.5,
    "height" : 28
};

var pieSmall4Info = {
    "name": "pieSmall4",
    "x": 400,
    "y": Math.random() * 380,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 37.5,
    "height" : 28
};

var pieSmall5Info = {
    "name": "pieSmall5",
    "x": 200,
    "y": Math.random() * 380,
    "xSpeed": 2,
    "ySpeed": 0,
    "width" : 37.5,
    "height" : 28
};


var bomb1Info = {
    "name": "bomb1",
    "x": 100,
    "y": Math.random() * 380,
    "xSpeed": 3,
    "ySpeed": 0,
    "width" : 40,
    "height" : 40
};
var bomb2Info = {
    "name": "bomb2",
    "x": 200,
    "y": Math.random() * 380,
    "xSpeed": 3,
    "ySpeed": 0,
    "width" : 40,
    "height" : 40
};
var bomb3Info = {
    "name": "bomb3",
    "x": 300,
    "y": Math.random() * 380,
    "xSpeed": 3,
    "ySpeed": 0,
    "width" : 40,
    "height" : 40
};
var bomb4Info = {
    "name": "bomb4",
    "x": 200,
    "y": Math.random() * 380,
    "xSpeed": 3,
    "ySpeed": 0,
    "width" : 40,
    "height" : 40
};
var bomb5Info = {
    "name": "bomb5",
    "x": 500,
    "y": Math.random() * 380,
    "xSpeed": 3,
    "ySpeed": 0,
    "width" : 40,
    "height" : 40
};
var bomb6Info = {
    "name": "bomb6",
    "x": 550,
    "y": Math.random() * 380,
    "xSpeed": 3,
    "ySpeed": 0,
    "width" : 40,
    "height" : 40
};

var multichamellionInfo = {
    "name": "multichamellion1",
    "x": 150,
    "y": 400,
    "xSpeed": -2,
    "ySpeed": 0,
    "width" : 114,
    "height" : 49
};
var parrotInfo = {
    "name": "parrot1",
    "x": 150,
    "y": 2,
    "xSpeed": -2,
    "ySpeed": 0,
    "width" : 111,
    "height" : 36
};

var tigerHeadInfo = {
    "name": "tigerHead1",
    "x": 490,
    "y": 0,
    "xSpeed": 0,
    "ySpeed": 0,
    "width" : 191,
    "height" : 480
};
var piesDictionary = {
    "pieSmall1": pieSmall1Info,
    "pieSmall2": pieSmall2Info,
    "pieSmall3": pieSmall3Info,
    "pieSmall4": pieSmall4Info,
    "pieSmall5": pieSmall5Info

};
var bombsDictionary = {
    "bomb1": bomb1Info,
    "bomb2": bomb2Info,
    "bomb3": bomb3Info,
    "bomb4": bomb4Info,
    "bomb5": bomb5Info,
    "bomb6": bomb6Info

};

var splashScreenInfo = {
    "name": "splashScreen1",
    "x": 0,
    "y": 0,
    "xSpeed": 0,
    "ySpeed": 0,
    "width" : 640,
    "height" : 480
};
var instructionsInfo = {
    "name": "instructions1",
    "x": 0,
    "y": 0,
    "xSpeed": 0,
    "ySpeed": 0,
    "width" : 640,
    "height" : 480
};
var gameOverInfo = {
    "name": "gameOver1",
    "x": 0,
    "y": 0,
    "xSpeed": 0,
    "ySpeed": 0,
    "width" : 640,
    "height" : 480
};
var winnerInfo = {
    "name": "winner1",
    "x": -700,
    "y": -700,
    "xSpeed": 0,
    "ySpeed": 0,
    "width" : 640,
    "height" : 480
};

var magicFlyInfo = {
    "name": "magicFly",
    "x": -100,
    "y": Math.random() * 380,
    "xSpeed": 0,
    "ySpeed": 0,
    "width" : 40,
    "height" : 41

};
var setup = function() {
    var splashScreenAnim = newGQAnimation("img/MysticalFrogAdventure.png");
    var instructionsAnim = newGQAnimation("img/Instructions.png");
    var gameOverAnim = newGQAnimation("img/End2.png");
    var winnerAnim = newGQAnimation("img/winning-screen.png");
    var backgroundAnim = newGQAnimation("img/BK2.png");
    var tigerHeadAnim = newGQAnimation("img/TigerH2.png");
    var tigerAnim = newGQAnimation("img/TigerActual2.png");
    var redpandaMultiAnim = newGQAnimation("img/RedPandamultiframe2.png", 4, 51.75, 330, $.gQ.ANIMATION_HORIZONTAL);
    var redpandaAnim = newGQAnimation("img/RedPanda.png");
    redpandaInfo["multiAnim"] = newGQAnimation("img/RedPandamultiframe2.png", 4, 51.75, 330, $.gQ.ANIMATION_HORIZONTAL);
    redpandaInfo["stillAnim"] = newGQAnimation("img/RedPanda.png");
    var elephantAnim = newGQAnimation("img/elephant2.png");
    var pieSmallMultiAnim = newGQAnimation("img/pie-multiframe2.png", 4, 37.5, 250, $.gQ.ANIMATION_HORIZONTAL);
    var beardeddragonAnim = newGQAnimation("img/BeardedDragon2.png");
    var chamellionAnim = newGQAnimation("img/Chamellion.png");
    var treefrogAnim = newGQAnimation("img/treefrog-copy-3Small.png");
    var jumpFrogAnim = newGQAnimation("img/JumpFrogTight.png");
    var bombAnim = newGQAnimation("img/bomb.png");
    treeFrogInfo["stillAnim"] = newGQAnimation("img/treefrog-copy-3Small.png");
    treeFrogInfo["multiAnim"] = newGQAnimation("img/JumpFrogTight.png");
    var chamellionMultiAnim = newGQAnimation("img/MultiColoured-Chamellion.png", 4, 114, 500, $.gQ.ANIMATION_HORIZONTAL);
    var parrotAnim = newGQAnimation("img/parrot.png");
    var magicFlyAnim = newGQAnimation("img/magicFly.png");
    var backgroundGroupName = "backgroundgroup"; //full
    var frontGroupName = "frontgroup"; //full
    var biganimalsGroupName = "biganimalsgroup"; //full
    var reptileanimalsGroupName = "reptileanimalsGroupName"; //full
    var mediumanimalsGroupName = "mediumanimalsgroup"; //full
    var birdsGroupName = "birdsgroup"; //full
    var foodGroupName = "foodsgroup"; //full
    var bombGroupName = "bombgroup";
    var specialGroupName = "specialGroup";

    createGroupInPlayground(backgroundGroupName); 
    createGroupInPlayground(foodGroupName);
    createGroupInPlayground(bombGroupName);
    createGroupInPlayground(specialGroupName);
    createGroupInPlayground(biganimalsGroupName);
    createGroupInPlayground(birdsGroupName); 
    createGroupInPlayground(mediumanimalsGroupName); 
    createGroupInPlayground(reptileanimalsGroupName);
    createGroupInPlayground(frontGroupName);

    createSpriteInGroup(frontGroupName, "instructions1", instructionsAnim, bkInfo["width"], bkInfo["height"] );
    createSpriteInGroup(frontGroupName, "splashScreen1", splashScreenAnim, splashScreenInfo["width"], splashScreenInfo["height"]);
    createSpriteInGroup(frontGroupName, "gameOver1", gameOverAnim, gameOverInfo["width"], splashScreenInfo["height"]);
    createSpriteInGroup(frontGroupName, "winner1", winnerAnim, winnerInfo["width"], winnerInfo["height"]);
    spriteSetX("winner1", -700);
    spriteSetY("winner1", -700);
    
    spriteSetX("gameOver1", -700);
    spriteSetY("gameOver1", -700);
    createSpriteInGroup(backgroundGroupName, "background", backgroundAnim,  bkInfo["width"], bkInfo["width"]);
    createSpriteInGroup(backgroundGroupName, "background2", backgroundAnim, bk2Info["width"], bk2Info["width"]);
    createSpriteInGroup(backgroundGroupName, "health", {width: 100, height: 75 });
    createSpriteInGroup(backgroundGroupName, "score", {width: 200, height: 75 });
    createSpriteInGroup(frontGroupName, "endScore", {width: 300, height: 300});
    createSpriteInGroup(frontGroupName, "winScore", {width: 300, height: 300});

    createSpriteInGroup(birdsGroupName, "tigerHead1", tigerHeadAnim, tigerHeadInfo["width"], tigerHeadInfo["height"]);
    spriteSetX("tigerHead1", 490);
    spriteSetY("tigerHead1", 0);
    createSpriteInGroup(specialGroupName, "magicFly", magicFlyAnim, magicFlyInfo["width"], magicFlyInfo["height"]);
    createSpriteInGroup(bombGroupName, "bomb1", bombAnim, bomb1Info["width"], bomb1Info["height"]);
    createSpriteInGroup(bombGroupName, "bomb2", bombAnim, bomb2Info["width"], bomb2Info["height"]);
    createSpriteInGroup(bombGroupName, "bomb3", bombAnim, bomb3Info["width"], bomb3Info["height"]);
    createSpriteInGroup(bombGroupName, "bomb4", bombAnim, bomb4Info["width"], bomb4Info["height"]);
    createSpriteInGroup(bombGroupName, "bomb5", bombAnim, bomb5Info["width"], bomb5Info["height"]);
    createSpriteInGroup(bombGroupName, "bomb6", bombAnim, bomb6Info["width"], bomb6Info["height"]);    
    createSpriteInGroup(foodGroupName, "pieSmall1", pieSmallMultiAnim, pieSmall1Info["width"], pieSmall1Info["height"]);
    createSpriteInGroup(foodGroupName, "pieSmall2", pieSmallMultiAnim, pieSmall2Info["width"], pieSmall2Info["height"]);
    createSpriteInGroup(foodGroupName, "pieSmall3", pieSmallMultiAnim, pieSmall3Info["width"], pieSmall3Info["height"]);
    createSpriteInGroup(foodGroupName, "pieSmall4", pieSmallMultiAnim, pieSmall4Info["width"], pieSmall4Info["height"]);
    createSpriteInGroup(foodGroupName, "pieSmall5", pieSmallMultiAnim, pieSmall5Info["width"], pieSmall5Info["height"]);
    createSpriteInGroup(mediumanimalsGroupName, "tiger1", tigerAnim, tigerInfo["width"], tigerInfo["height"]);
    createSpriteInGroup(mediumanimalsGroupName, "redpanda1",  redpandaMultiAnim, redpandaInfo["width"], redpandaInfo["height"]);
    createSpriteInGroup(biganimalsGroupName, "elephant1", elephantAnim, elephantInfo["width"], elephantInfo["height"]);
    createSpriteInGroup(reptileanimalsGroupName, "beardeddragon1", beardeddragonAnim, beardedDragonInfo["width"], beardedDragonInfo["height"]);
    createSpriteInGroup(reptileanimalsGroupName, "treefrog1", treefrogAnim, treeFrogInfo["width"], treeFrogInfo["height"]);
    createSpriteInGroup(birdsGroupName, "multichamellion1", chamellionMultiAnim, multichamellionInfo["width"], multichamellionInfo["height"]);
    createSpriteInGroup(birdsGroupName, "parrot1", parrotAnim, parrotInfo["width"], parrotInfo["height"]);
}; // end of setup() function. Notice the braces match!
var bounceSprite = function(spriteInfo) {

    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xSpeed"];
    if (spriteInfo["x"] < 0) {
        spriteInfo["xSpeed"] = -1 * spriteInfo["xSpeed"];
    } else if (spriteInfo["x"] > PLAYGROUND_WIDTH - spriteGetWidth(spriteInfo["name"])) {
        spriteInfo["xSpeed"] = -1 * spriteInfo["xSpeed"];
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);

//vertical bounce movement

    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["ySpeed"];
    if (spriteInfo["y"] < 0) {
        spriteInfo["ySpeed"] = -1 * spriteInfo["ySpeed"];
    } else if (spriteInfo["y"] > PLAYGROUND_HEIGHT - spriteGetHeight(spriteInfo["name"])) {
        spriteInfo["ySpeed"] = -1 * spriteInfo["ySpeed"];
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};
var moveSprite = function(spriteInfo) {

    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xSpeed"];
    if (spriteInfo["x"] < -spriteGetWidth(spriteInfo["name"])) {
        spriteInfo["x"] = PLAYGROUND_WIDTH;
    } else if (spriteInfo["x"] >= PLAYGROUND_WIDTH) {
        spriteInfo["x"] = -spriteGetWidth(spriteInfo["name"]);
    }
    spriteSetX(spriteInfo["name"], spriteInfo["x"]);

    //vertical movement

    spriteInfo["y"] = spriteInfo["y"] + spriteInfo["ySpeed"];
    if (spriteInfo["y"] < -spriteGetHeight(spriteInfo["name"])) {
        spriteInfo["y"] = PLAYGROUND_HEIGHT;
    } else if (spriteInfo["y"] > PLAYGROUND_HEIGHT) {
        spriteInfo["y"] = -spriteGetHeight(spriteInfo["name"]);
    }
    spriteSetY(spriteInfo["name"], spriteInfo["y"]);
};
var ijklukeyboardControlledSprite = function(spriteInfo) {
    if (getKeyState(76)) { //L
        spriteInfo["xSpeed"] = spriteInfo["xSpeed"] + 1;

        if (spriteInfo["animState"] != "movingRight") {
            spriteInfo["animState"] = "movingRight";
            spriteSetAnimation(spriteInfo["name"], spriteInfo["multiAnim"]);
        }
    }
    if (spriteInfo["xSpeed"] > 5) {
        spriteInfo["xSpeed"] = 5;

    } else if (spriteInfo["xSpeed"] < -5) {
        spriteInfo["xSpeed"] = -5;
    }
    if (getKeyState(74)) { //J
        spriteInfo["xSpeed"] = spriteInfo["xSpeed"] - 1;

        if (spriteInfo["animState"] != "movingLeft") {
            spriteInfo["animState"] = "movingLeft";
            spriteSetAnimation(spriteInfo["name"], spriteInfo["multiAnim"]);
        }

    }
    if (spriteInfo["xSpeed"] > 5) {
        spriteInfo["xSpeed"] = 5;

    } else if (spriteInfo["xSpeed"] < -5) {
        spriteInfo["xSpeed"] = -5;
    }

    if (getKeyState(73)) { //I
        spriteInfo["ySpeed"] = spriteInfo["ySpeed"] - 1;

        if (spriteInfo["animState"] != "movingUp") {
            spriteInfo["animState"] = "movingUp";
            spriteSetAnimation(spriteInfo["name"], spriteInfo["multiAnim"]);
        }

    }
    if (spriteInfo["ySpeed"] > 5) {
        spriteInfo["ySpeed"] = 5;

    } else if (spriteInfo["ySpeed"] < -5) {
        spriteInfo["ySpeed"] = -5;
    }

    if (getKeyState(75)) { //K
        spriteInfo["ySpeed"] = spriteInfo["ySpeed"] + 1;

        if (spriteInfo["animState"] != "movingDown") {
            spriteInfo["animState"] = "movingDown";
            spriteSetAnimation(spriteInfo["name"], spriteInfo["multiAnim"]);
        }

    }
    if (spriteInfo["ySpeed"] > 5) {
        spriteInfo["ySpeed"] = 5;

    } else if (spriteInfo["ySpeed"] < -5) {
        spriteInfo["ySpeed"] = -5;
    }
    if (getKeyState(85)) { //U
        spriteInfo["xSpeed"] = 0;
        spriteInfo["ySpeed"] = 0;

    }


    if (!getKeyState(76) && !getKeyState(74) && !getKeyState(73) && !getKeyState(75) && !getKeyState(85)) {

        if (spriteInfo["animState"] != "still") {
            spriteInfo["animState"] = "still";
            spriteSetAnimation(spriteInfo["name"], spriteInfo["stillAnim"]);
            spriteInfo["xSpeed"] = 0;
            spriteInfo["ySpeed"] = 0;
        }
    }


};
var spaceBarMoveSprite = function(spriteInfo) {
    if (getKeyState(32)) { //spaceBar
        spriteInfo["x"] = -700;
        spriteInfo["y"] = -700;
        spriteSetX(spriteInfo["name"], spriteInfo["x"]);
        spriteSetY(spriteInfo["name"], spriteInfo["y"]);
    }
};
var enterKeyMoveSprite = function(spriteInfo) {
    if (getKeyState(13)) { //enter
        spriteInfo["x"] = -700;
        spriteInfo["y"] = -700;
        spriteSetX(spriteInfo["name"], spriteInfo["x"]);
        spriteSetY(spriteInfo["name"], spriteInfo["y"]);
        gameStarted = true;
    }
};
var treeFrogTigerHeadCollision = function() {
    //consolePrint("collision completed");
    treeFrogInfo["ySpeed"] = -1 * treeFrogInfo["ySpeed"];
    treeFrogInfo["xSpeed"] = -1 * treeFrogInfo["xSpeed"];

    //redpandaInfo["xSpeed"] = redpandaInfo["xSpeed"] + 21;

};
var magicFlyLivesCollision = function(spriteInfo) {
    
        magicFlyInfo["x"] = 700;
        magicFlyInfo["y"] = 700;
        magicFlyInfo["xSpeed"] = 0;
        magicFlyInfo["ySpeed"] = 0;
        
        treeFrogInfo["health"] = treeFrogInfo["health"] + 1;

};
var magicFlyLife = function() {
    if (treeFrogInfo["health"] == 10) {
        
        magicFlyInfo["x"] = -40;
        magicFlyInfo["y"] = Math.random() * 380;
        magicFlyInfo["xSpeed"] = 3;
//        treeFrogInfo["health"] = treeFrogInfo["health"] + 1;
    }
    magicFlyInfo["x"] = magicFlyInfo["x"] + magicFlyInfo["xSpeed"];
    spriteSetXY(magicFlyInfo["name"], magicFlyInfo["x"], magicFlyInfo["y"]);

};
var newPosMoveSprites = function(spriteInfo) {
    spriteInfo["x"] = spriteInfo["x"] + spriteInfo["xSpeed"];
    if (spriteInfo["x"] < -spriteGetWidth(spriteInfo["name"])) {
        spriteInfo["x"] = Math.random() * -100; // a random numberX
        spriteInfo["y"] = Math.random() * 380; // a random numberY
    } else if (spriteInfo["x"] >= PLAYGROUND_WIDTH + spriteGetWidth(spriteInfo["name"])) {
        spriteInfo["x"] = Math.random() * -100 - spriteGetWidth(spriteInfo["name"]); // a different random numberX
        spriteInfo["y"] = Math.random() * 380 - spriteGetWidth(spriteInfo["name"]); // a different random numberY
    }
    spriteSetXY(spriteInfo["name"], spriteInfo["x"], spriteInfo["y"]);
};
var gameOverScreenAppear = function() {
    if (treeFrogInfo["health"] == 0 ) {
        gameOverInfo["x"] = 0;
        gameOverInfo["y"] = 0;
        spriteSetXY(gameOverInfo["name"], gameOverInfo["x"], gameOverInfo["y"]);
        gameStarted = false;
        spriteSetXY("endScore", 230, 300);
        sprite("endScore").text("Score:" + treeFrogInfo["score"]);
        sprite("endScore").css("color", "black");
        sprite("endScore").css("font-size", "40pt");
        sprite("endScore").css("font-family", "cracked");
    }
};
var winnerScreenAppear = function() {
    if (treeFrogInfo["score"] >= 2000) {
        winnerInfo["x"] = 0;
        winnerInfo["y"] = 0;
        spriteSetXY(winnerInfo["name"], winnerInfo["x"], winnerInfo["y"]);
        gameStarted = false;
        spriteSetXY("winScore", 200,10);
        sprite("winScore").text("Score:" + treeFrogInfo["score"]);
        sprite("winScore").css("color", "Green");
        sprite("winScore").css("font-size", "40pt");
        sprite("winScore").css("font-family", "Synchro LET");
     
    }
};
var treeFrogBombCollision = function(collIndex, hitSprite) {
    var nameOfTheSprite = spriteId(hitSprite);
    bombsDictionary[nameOfTheSprite]["x"] = PLAYGROUND_WIDTH;
    bombsDictionary[nameOfTheSprite]["y"] = Math.random() * 380;
    treeFrogInfo["health"] = treeFrogInfo["health"] - 1;
};
var treeFrogSmallPiesCollision = function(collIndex, hitSprite) {

    var nameOfTheSprite = spriteId(hitSprite);
    piesDictionary[nameOfTheSprite]["x"] = PLAYGROUND_WIDTH - 10;
    piesDictionary[nameOfTheSprite]["y"] = Math.random() * 380;
    treeFrogInfo["score"] = treeFrogInfo["score"] + 12;
};
var gameStarted = false;
var draw = function() {
    if (gameStarted == false) {
        for (counter = 0; counter < 3; counter = counter + 1) {
            spaceBarMoveSprite(splashScreenInfo);
            enterKeyMoveSprite(instructionsInfo);
        }
    }
    if (gameStarted == true) {
        spriteSetX("health", 510);
        sprite("health").text("Lives:" + treeFrogInfo["health"]);
        sprite("health").css("color", "white");
        sprite("health").css("font-size", "19pt");
        sprite("health").css("font-family", "Impact");

        spriteSetX("score", 0);
        sprite("score").text("Score:" + treeFrogInfo["score"]);
        sprite("score").css("color", "white");
        sprite("score").css("font-size", "16pt");
        sprite("score").css("font-family", "Impact");
        moveSprite(bkInfo);
        moveSprite(bk2Info);
        moveSprite(tigerInfo);
        moveSprite(redpandaInfo);
        ijklukeyboardControlledSprite(treeFrogInfo);
        moveSprite(parrotInfo);
        moveSprite(elephantInfo);
        moveSprite(beardedDragonInfo);
        bounceSprite(treeFrogInfo);
        newPosMoveSprites(pieSmall1Info);
        newPosMoveSprites(pieSmall2Info);
        newPosMoveSprites(pieSmall3Info);
        newPosMoveSprites(pieSmall4Info);
        newPosMoveSprites(pieSmall5Info);
        newPosMoveSprites(bomb1Info);
        newPosMoveSprites(bomb2Info);
        newPosMoveSprites(bomb3Info);
        newPosMoveSprites(bomb4Info);
        newPosMoveSprites(bomb5Info);
        newPosMoveSprites(bomb6Info);
        moveSprite(multichamellionInfo);
        gameOverScreenAppear();
        winnerScreenAppear();

        forEachSpriteGroupCollisionDo(treeFrogInfo["name"], "foodsgroup", treeFrogSmallPiesCollision);
        forEachSpriteGroupCollisionDo(treeFrogInfo["name"], "bombgroup", treeFrogBombCollision);
        forEachSpriteSpriteCollisionDo(treeFrogInfo["name"], tigerHeadInfo["name"], treeFrogTigerHeadCollision);
        magicFlyLife();
        forEachSpriteSpriteCollisionDo(treeFrogInfo["name"], magicFlyInfo["name"], magicFlyLivesCollision);
    }
}; // end of draw() function. Notice the braces match!