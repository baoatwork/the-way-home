let currentScene=0;
let currentChat = 0;
let die=0;


//the game values
let energy = 5;
let knowledge = 5;
let sanity = 5;


let currentContent1 ="Umm...";
let currentContent2 ="";
//check if game is over
let stillPlaying = true;

//check if it's time to play the catching flower game
let playFlower = false;

//check if it's time to throw the dice
let readyToGo = false;

//check if it's someone speaking
let showBody = true;

//canvas size
var cnv;


//catching flower
var coins;
var player;
var score = 0;
var spr;
var anim;
var anim2;
let startFlower=0;

// set the canvas at the center of the page
function centerCanvas(){
    let x = (windowWidth - width)/2;
    let y = (windowHeight - height)/2;
    cnv.position(x,y);
}

function preload(){
    forest = loadSound("resource/sound/forest.mp3");
    river = loadSound("resource/sound/river.mp3");
    village = loadSound("resource/sound/village.mp3");
    grassland = loadSound("resource/sound/grassland.mp3");
    volcano = loadSound("resource/sound/volcano.mp3");
    failure = loadSound("resource/sound/gameover.mp3");


    forestbg = loadImage("resource/pic/forestbg.png");
    villagebg = loadImage("resource/pic/villagebg.png");
    riverbg = loadImage("resource/pic/riverbg.png");
    volcanobg = loadImage("resource/pic/volcanobg.png");
    grasslandbg = loadImage("resource/pic/grasslandbg.png");

    coordinate = loadImage("resource/pic/coordinate.png");

    headIcon = loadImage("resource/pic/head.png");
    bodyIcon = loadImage("resource/pic/body.png");

    chatFont = loadFont('resource/fonts/ComicNeue-Regular.ttf');
    nameFont = loadFont('resource/fonts/ComicNeue-Bold.ttf');

//catching flower
    anim = loadAnimation("assets/asterisk_normal0001.png",
    "assets/asterisk_normal0002.png",
    "assets/asterisk_normal0003.png");
    anim2 = loadAnimation("assets/ghost_standing0001.png",
    "assets/ghost_standing0002.png","assets/ghost_standing0003.png")
}



function setup(){
    cnv = createCanvas(1200,600);
    centerCanvas();

    noStroke();


    userStartAudio();
    volcano.loop();

    //catching flower
    coins = new Group();
    coins2 = new Group();
    for (var i = 0; i < 10; i++) {
      var c = createSprite(random(100, width-100),random(200, height-100),10, 10);
      //c.shapeColor = color(255, 255, 0);
      c.addAnimation("default",anim);
      coins.add(c);
    }
    for (var i = 0; i < 10; i++) {
      var d = createSprite(random(100, width-100),random(200, height-100),10, 10);
      //c.shapeColor = color(255, 255, 0);
      d.addAnimation("default",anim2);
      coins2.add(d);
    }
    //user's block
    player = createSprite(50, 50, 60, 60);
    player.shapeColor = color("white");
    player.position.x = 1200;
    player.position.y = 600;

}

function draw(){
    if (stillPlaying == true){
        //find position
    console.log(mouseX,mouseY);

    //background picture
    background(myBg());

    //chatbox
    chatBox();
    rect(200,400,800,180,10);

    //the name & image of the character
    speakerName();

    //the text content
    chatContent();

    image(headIcon,20,20,80,80);

    threeEnergy();
    step();
    home();

    //coordinate of the character
    myCoordinate();
    dice();

    fill(250,250,250);
    rect(1050,450,100,100);

    //catching flower
    if (playFlower == true){
        catchingFlower();
    }
    }else{
        background(28,28,28);

        textSize(72);
        textAlign(CENTER, CENTER);
        fill("red");
        text("GAME OVER",width/2, height/2);

    }


}


//draw the game value bars
function threeEnergy(){
    

    fill("white");
    textSize(15);
    text("Energy", 110, 34);
    text("Power", 110, 64);
    text("Money", 110, 94);



    fill("pink");
    rect(165,24,energy * 15,15);
    fill("blue");
    rect(165,54,knowledge * 15,15);
    fill("red");
    rect(165,84,sanity * 15,15);
}

function step(){
    i=1;
    while(i<=17){
    noStroke();
    fill("white");
    quad(280+i*45,90,320+i*45,90,345+i*45,50,305+i*45,50);
    i=i+1;
    }
}

function home(){

    fill("pink");
    rect(1120,30,70,70);
}


//coordinate of the character
function myCoordinate(){


    yourpos=330+currentScene*45;
   image(coordinate,yourpos-20,myCoordinateY(),100,100);
}

function myCoordinateY(){

    return -10 + floor(frameCount/9)%3 *5;
}

function dice(){
    fill("white");
    rect(1280,700,70,70);
    if(die==1){
        fill("black");
        textSize(50);
        text("1", 1300, 760);
    }
    else if(die==2){
        fill("black");
        textSize(50);
        text("2", 1300, 760);
    }
    else if(die==3){
        fill("black");
        textSize(50);
        text("3", 1300, 760);
    }else{
        fill("black");
        textSize(46);
        text("Die", 1280, 760);
    }

}



//mousePressed inteaction
function mousePressed() {

    //For the update of the chatbox
    if (mouseX >= 200 && mouseX <= 1000 && mouseY >= 400 && mouseY <= 580){
        if (readyToGo == false){
            if (currentScene == 0){
                if (currentChat == 0){
                    currentChat ++;
                    currentContent1 = "Where ... am I?";
                    currentContent2 = "";
                }else if(currentChat == 1){
                    currentChat ++;
                    showBody = false;
                    currentContent1 = "This morning, when you open your eyes, you find";
                    currentContent2 = "yourself somewhere unfamiliar.";
                }else if(currentChat == 2){
                    currentChat ++;
                    currentContent1 = "The wind is blowing so hard that you can't even";
                    currentContent2 = "stand up.";
                }else if(currentChat == 3){
                    currentChat ++;
                    showBody = true;
                    currentContent1 = "The wind can't send me here... can it?";
                    currentContent2 = "";
                }else if(currentChat == 4){
                    currentChat ++;
                    showBody = false;
                    currentContent1 = "Strangely, you don’t panic at all.";
                    currentContent2 = "";
                }else if(currentChat == 5){
                    currentChat ++;
                    currentContent1 = "Although you don’t know what is going on, one thing";
                    currentContent2 = "is sure: you need to go home.";
                }else if(currentChat == 6){
                    currentChat ++;
                    showBody = true;
                    currentContent1 = "Which direction should I go?";
                    currentContent2 = "Ah! Morning stars!";
                }else if(currentChat == 7){
                    currentChat ++;
                    showBody = false;
                    currentContent1 = "According to the morning stars, you are now";
                    currentContent2 = "somewhere far west from your home.";
                }else if(currentChat == 8){
                    currentChat ++;
                    showBody = true;
                    currentContent1 = "Then I need to go that way… Here we go!";
                    currentContent2 = "";
                }else if(currentChat == 9){
                    currentChat ++;
                    showBody = false;
                    readyToGo = true;
                    currentContent1 = "(Throw the dice to move)";
                    currentContent2 = "";
                }

            }else if (currentScene == 1 || currentScene == 2 || currentScene == 3){
                if (currentChat == 0){
                    currentChat ++;
                    showBody = false;
                    readyToGo = true;
                    currentContent1 = "(Throw the dice to move)";
                }
            }else if (currentScene == 4 || currentScene == 5 || currentScene == 6){
                if (currentChat == 0){
                    currentChat ++;
                    showBody = false;
                    readyToGo = true;
                    currentContent1 = "(Throw the dice to move)";
                }
            }else if (currentScene == 7 || currentScene == 8 || currentScene == 9){
                if (currentChat == 0){
                    currentChat ++;
                    showBody = false;
                    playFlower = true;
                    currentContent1 = "(Do a Game)";
                }
            }

        }
    }

    //for the dice
    if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 450 && mouseY <= 550){
        if (readyToGo == true){
            readyToGo = false;
            currentChat = 0;
            var randomValue = random();
            if (yourpos<=1260){
                    if(randomValue < 0.3333){
                    die=1;
                    currentScene=currentScene+1;
                }
                    else if(randomValue < 0.6666 && randomValue>=0.3333){
                    die=2;
                    currentScene=currentScene+2;
                }
                    else{
                    die=3;
                    currentScene=currentScene+3;
                }
            }

            if (currentScene == 1 || currentScene == 2 || currentScene == 3){
                showBody = true;
                currentContent1 = "I just noticed that this place looks cool."
            }if (currentScene == 4 || currentScene == 5 || currentScene == 6){
                if (volcano.isPlaying() == true){
                    volcano.stop();
                    grassland.loop();
                }
                showBody = true;
                currentContent1 = "Finally I can see some plants!"
            }if (currentScene == 7 || currentScene == 8 || currentScene == 9){
                if (grassland.isPlaying() == true){
                    grassland.stop();
                    forest.loop();
                }
                showBody = true;
                currentContent1 = "Finally I can see more plants!"
            }

        }
    }



  }




//background music
function myBgm(){
    return river;
}

//background picture
function myBg(){
    if (volcano.isPlaying()){
        return volcanobg;
    }else if(grassland.isPlaying()){
        return grasslandbg;
    }else if(river.isPlaying()){
        return riverbg;
    }else if(forest.isPlaying()){
        return forestbg;
    }else if(village.isPlaying()){
        return villagebg;
    }

}

//reset the position of the canvas
function windowResized(){
    centerCanvas();
}

//color of the chatbox
function chatBox(){
    if (volcano.isPlaying()){
        fill(50,30,25,150);
    }else if(grassland.isPlaying()){
        fill(67,67,67,130);
    }else if(river.isPlaying()){
        fill(67,67,67,130);
    }else if(forest.isPlaying()){
        fill(28,40,28,150);
    }else if(village.isPlaying()){
        fill(50,28,28,150);
    }
}

//the speaker's name & body image
function speakerName(){
    if (showBody == true){
        fill(200,200,200);
        textFont(nameFont);
        textSize(30);
        text("Bai",300,440);

        image(bodyIcon,20,300,280,280);
    }



}

//the current showing chat content
function chatContent(){
    fill(200,200,200);
    textFont(chatFont);
    textSize(25);
    text(currentContent1,350,480);
    text(currentContent2,350,520);
}



//catching flower
function catchingFlower(){
    player.velocity.x = (mouseX-player.position.x)*0.1;
    player.velocity.y = (mouseY-player.position.y)*0.1;
    player.overlap(coins, getCoin);
    player.overlap(coins2,gameOver);
    drawSprites();
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    
    if (coins.length > 0) {
        currentContent2 = "Your score:" + score;
    }
    else {
        playFlower = false;
        currentContent1 = "You win!"
        currentContent2 = "";
    }
}

function getCoin(player, coin) {
    coin.remove();
    score += 1;
  }

  function gameOver(){
    volcano.stop();
    grassland.stop();
    forest.stop();
    river.stop();
    village.stop();

    failure.loop();
    stillPlaying = false;

  }
