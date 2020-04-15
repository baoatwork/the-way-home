let currentScene=0;
let currentChat = 0;
let die=1;



//the game values
let energy = 5;
let knowledge = 3;
let sanity = 5;


let currentContent1 ="Umm...";
let currentContent2 ="";


//check if the game is over
let playMode = 1;

//check if it's time to play the catching flower game
let playFlower = false;

//check if it's time to shout
let playShout = false;

//check if it's time to play with rabbits
let playRabbit =false;

//check if it's time to make a choice
let makingChoice = false;

//check if it's time to throw the dice
let readyToGo = false;

//check if it's someone speaking
let showBody = true;
let whoSpeaks = "Bai";

//canvas size
let cnv;


//catching flower
let coins;
let coins2;
var player;
var score = 0;
var spr;
var anim;
var anim2;
let startFlower=0;
let flowerCatched=false;


//shout
let song, analyzer;

//rabbit
var rabbitpic;
var rabbitgroup;
let rabbit;
let rabbitFinal;
let rabbitplayer;


//open world

let encounterVolcano =0;
let encounterGrassland = 0;
let worldName = false;

//the text content
let textStuff;


// set the canvas at the center of the page
function centerCanvas(){
    let x = (windowWidth - width)/2;
    let y = (windowHeight - height)/2;
    cnv.position(x,y);
}

function preload(){
    //ui sound
    buttonSound =loadSound("resource/sound/press.mp3");
    turnPage = loadSound("resource/sound/turnpage.mp3");
    diceSound = loadSound("resource/sound/dicesound.mp3");

    //welcome page
    welcome = loadSound("resource/sound/welcome.mp3");
    welcomeBai = loadImage("resource/pic/welcomebai.png");
    buttonBg = loadImage("resource/pic/buttonbg.png");

    //gameover page
    restart = loadImage("resource/pic/restart.png");

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
    house = loadImage("resource/pic/house.png");

    headIcon = loadImage("resource/pic/head.png");
    bodyIcon = loadImage("resource/pic/body.png");

    chatFont = loadFont('resource/fonts/ComicNeue-Regular.ttf');
    nameFont = loadFont('resource/fonts/ComicNeue-Bold.ttf');

    //choices
    yesAnswer = loadImage("resource/pic/right.png");
    noAnswer = loadImage("resource/pic/wrong.png");

    //catching flower
    myHand = loadImage("resource/pic/hand.png");
    myCanvas = loadImage("resource/pic/gamecanvas.png");
    anim = loadAnimation("resource/assets/asterisk_normal0001.png",
    "resource/assets/asterisk_normal0002.png",
    "resource/assets/asterisk_normal0003.png");
    anim2 = loadAnimation("resource/assets/ghost_standing0001.png",
    "resource/assets/ghost_standing0002.png","resource/assets/ghost_standing0003.png")

    //rabbit
    rabbitpic = loadImage("resource/assets/rabbit.png");
    littleBai = loadImage("resource/assets/littlebai.png");
    littleHouse = loadImage("resource/assets/littlehouse.png");

    textStuff = loadJSON("data.json");
}



function setup(){
    cnv = createCanvas(1200,600);
    centerCanvas();

    noStroke();


    userStartAudio();
    welcome.loop();

    //shout
    song=new p5.AudioIn();
    song.start();
    analyzer = new p5.Amplitude();
    analyzer.setInput(song);

    //catching flower
    coins = new Group();
    coins2 = new Group();
    for (var i = 0; i < 7; i++) {
      var c = createSprite(random(250, 950),random(170, 330),10, 10);
      //c.shapeColor = color(255, 255, 0);
      c.addAnimation("default",anim);
      coins.add(c);
    }
    for (var i = 0; i < 5; i++) {
      var d = createSprite(random(250, 950),random(170, 350),10, 10);
      //c.shapeColor = color(255, 255, 0);
      d.addAnimation("default",anim2);
      coins2.add(d);
    }
    //user's block
    player = createSprite(600, 600, 10, 10);
    player.addImage("default",myHand);

    rabbit=new Group();
    for (var i = 0; i < 5; i++) {
        var r = createSprite(random(270, 930),random(120, 350),10, 10);
        r.addImage("default",rabbitpic);
        rabbit.add(r);
    }  

    rabbitP = new Group();
    //rabbit player
    rabbitplayer = createSprite(230, 200, 10, 10);
    rabbitplayer.addImage("default",littleBai);

    //rabbit home
    rabbitFinal = createSprite(960, 200, 60, 60);
    rabbitFinal.addImage("default",littleHouse);

    rabbitP.add(rabbitplayer);
    rabbitP.add(rabbitFinal);
    

}

function draw(){



    if (playMode == 2){
        

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
        

        //coordinate of the character
        myCoordinate();
        image(house,1100,5,100,100);

        

        dice();

        

        

        //catching flower
        if (playFlower == true){
            gameCanvas();
            catchingFlower();
            
        }

        //make choice
        if (makingChoice == true){
            image(yesAnswer,yesAnswerX(),yesAnswerY(),yesAnswerSize(),yesAnswerSize());
            image(noAnswer,noAnswerX(),noAnswerY(),noAnswerSize(),noAnswerSize());
        }

        //shout game
        if (playShout == true){
            gameCanvas();
            shout();
        }

        //rabbit game
        if(playRabbit){
            gameCanvas();
            rabbitGame();
        }
        
        

    }else if(playMode == 3){
        //game over
        background(28,28,28);

        textSize(72);
        textAlign(CENTER, CENTER);
        fill("red");
        text("GAME OVER",width/2, height/2);

        image(restart,restartX(),restartY(),restartSize(),restartSize());

    }else if (playMode == 1){
        //welcome page
        background(255);

        push();
        translate(600,220);
        rotate(frameCount * PI /540);
        image(welcomeBai,-180,-180,360,360);
        pop();

        tint(255,buttonT1());
        image(buttonBg,20,175,360,180);
        tint(255,buttonT2());
        image(buttonBg,790,175,360,180);


        textSize(40);
        textFont(chatFont);
        text("Start Game",110,270);
        text("More Info",880,270);

        textSize(60);
        textFont(nameFont);
        text("The Way Home",400,500);

        tint(255,255);
        


    }


}


//draw the game value bars
function threeEnergy(){
    

    fill("white");
    textSize(15);
    text("Energy", 110, 34);
    text("Wit", 110, 64);
    text("Sanity", 110, 94);



    fill(0,150,120);
    rect(165,24,energy * 15,15,2);
    fill(0,98,132);
    rect(165,54,knowledge * 15,15,2);
    fill(181,73,91);
    rect(165,84,sanity * 15,15,2);
}

function step(){
    i=1;
    while(i<=17){
    
    fill(234,233,216,180);
    quad(280+i*45,90,320+i*45,90,345+i*45,50,305+i*45,50);
    i=i+1;
    }
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

    fill(230,230,230);

    rect(1050,450,100,100,20);

    if(die==1){
        fill(173,0,0);
        circle(1100,500,40);

    }
    else if(die==2){
        fill("black");
        circle(1080,500,22);
        circle(1120,500,22);
    }
    else if(die==3){
        fill("black");
        circle(1070,500,20);
        circle(1100,500,20);
        circle(1130,500,20);
    }

}



//mousePressed inteaction
function mousePressed() {

    //For the update of the chatbox
    if (mouseX >= 200 && mouseX <= 1000 && mouseY >= 400 && mouseY <= 580){
        if (!readyToGo && !playFlower  && !makingChoice && !playShout && !playRabbit && playMode == 2){
            turnPage.play(0,1,0.6);
            checkMode();
            let nowStuff = textStuff[currentScene][currentChat];
                currentChat ++;
                showBody = nowStuff.someonespeaking;
                whoSpeaks = nowStuff.whospeaking;
                currentContent1 = nowStuff.line1;
                currentContent2 = nowStuff.line2;
            if (currentScene == 0){
                
                if(currentChat == 10){
                    readyToGo = true;
                }

            }else if (currentScene == 1 ){
                if (currentChat == 11){
                    
                    knowledge ++;
                    encounterVolcano ++;
                    readyToGo = true;
                    
                }
            }else if (currentScene == 2 ){
                if (currentChat == 11){
                    
                    knowledge ++;
                    encounterVolcano ++;
                    readyToGo = true;
                    
                }else if(currentChat == 23){
                    sanity = sanity - 1;
                    energy = energy - 1;
                    encounterVolcano ++;
                    readyToGo = true;
                }
            }else if (currentScene == 3 ){
                if (currentChat == 11){
                    
                    knowledge ++;
                    encounterVolcano ++;
                    readyToGo = true;
                    
                }else if(currentChat == 23){
                    sanity = sanity - 1;
                    energy = energy - 1;
                    encounterVolcano ++;
                    readyToGo = true;
                }else if(currentChat == 40){
                    sanity = sanity - 1;
                    
                    currentScene = 7;
                    currentChat = 0;

                    volcano.stop();
                    forest.loop();
                }
            }else if(currentScene == 4){

                if (currentChat == 11){
                    makingChoice = true;
                }else if(currentChat == 32){
                    energy = energy + 1;
                    encounterGrassland ++;
                    readyToGo = true;
                    worldName = true;
                }
            }else if(currentScene == 5){
                if (currentChat == 24){
                    
                    knowledge ++;
                    sanity = sanity -1;
                    encounterGrassland ++;
                    readyToGo = true;
                    worldName = true;
                    
                }
                
            }else if(currentScene == 6){
                if (currentChat == 18){
                    
                    if (worldName == true){
                        makingChoice = true;
                    }
                    
                }else if(currentChat == 25){
                    energy =energy -1;
                    sanity = sanity -1;
                    encounterGrassland ++;
                    readyToGo = true;
                }else if(currentChat == 32){
                    knowledge ++;
                    sanity ++;
                    readyToGo = true;
                    encounterGrassland ++;
                }
                
            }else if(currentScene == 7){
                if(currentChat == 20){
                    playFlower = true;
                }else if(currentChat == 28){
                    sanity = sanity + 1;
                    knowledge ++;
                    
                    currentScene = 10;
                    currentChat = 0;

                    forest.stop();
                    river.loop();
                }else if(currentChat == 37){
                    sanity = sanity - 2;
                    energy = energy -1;
                }else if(currentChat == 38){
                    currentScene = 10;
                    currentChat = 0;

                    forest.stop();
                    river.loop();
                }
                
            }else if(currentScene == 8){
                if (currentChat == 3){
                    
                    currentScene = 7;
                    currentChat = 1;
                    
                }
            }else if(currentScene == 9){
                if (currentChat == 3){
                    
                    currentScene = 7;
                    currentChat = 1;
                    
                }
            }else if(currentScene == 10){
                if(currentChat == 8){
                    makingChoice = true;
                }else if(currentChat == 13){

                    energy = energy -1;
                    sanity = sanity -1;
                }else if(currentChat == 18){

                    playShout =true;
                }else if (currentChat == 21){
                    energy = energy -1;
                    knowledge ++;

                    currentChat =0;
                    currentScene = 12;
                }
            }else if(currentScene == 11){
                if(currentChat == 2){
                    volcano.stop();
                    grassland.stop();
                    forest.stop();
                    river.stop();
                    village.stop();

                    failure.loop();
                    playMode =3;
                }
            }else if(currentScene == 12){
                if(currentChat == 11){
                    makingChoice =true;
                }else if(currentChat == 23){
                    energy = energy +2;
                    knowledge ++;
                }else if(currentChat == 26){
                    readyToGo = true;
                }else if(currentChat == 30){
                    readyToGo =true;
                }
            }else if(currentScene == 15){
                if(currentChat == 10){
                    playRabbit =true;
                }else if(currentChat == 12){
                    energy =energy -1;
                    knowledge ++;
                }else if(currentChat == 14){
                    currentChat =0;
                    currentScene =16;
                }else if(currentChat == 17){
                    energy = energy -1;
                    sanity = sanity -2;
                }else if(currentChat == 19){
                    currentChat =0;
                    currentScene =16;
                }
            }else if(currentScene == 16){
                if(currentChat == 2){
                    if(knowledge >= 8){
                        currentChat = 19;
                    }
                }else if(currentChat == 19){
                    readyToGo =true;
                }else if(currentChat == 27){
                    readyToGo = true;
                }
            }

        }
    }


    //for the dice
    if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 450 && mouseY <= 550){
        if (readyToGo == true){
            
            readyToGo = false;
            currentChat = 0;

            if (currentScene != 12){
                var randomValue = random();
                if (currentScene < 16){
                    diceSound.play(0,1,1.2);
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
                    
                }else if(currentScene == 16){
                    currentScene = 14;
                    location.reload();
                }

            }else{
                diceSound.play(0,1,1.2);
                die =3;
                currentScene =currentScene +3;
            }

            


            if (currentScene == 2 || currentScene == 3){
                if (encounterVolcano == 1){
                    currentChat = 11;
                }else if (encounterVolcano == 2){
                    currentChat = 23;
                }
            }else if (currentScene == 4 || currentScene == 5 || currentScene == 6){
                if (volcano.isPlaying() == true){
                    volcano.stop();
                    grassland.loop();
                }

                if (encounterGrassland >= 1){
                    currentChat = 2;
                }
            }else if (currentScene == 7 || currentScene == 8 || currentScene == 9){
                if (grassland.isPlaying() == true){
                    grassland.stop();
                    forest.loop();
                }       
            }else if (currentScene == 15){
                if (river.isPlaying() == true){
                    river.stop();
                    village.loop();
                }  

            }
            let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
            
            

        }
    }



    //for the choice
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){

        if (makingChoice == true){
            buttonSound.play(0,1,1.5);

            let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
    
            makingChoice = false;
        }
        
    }
    
    
    if(mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        if (makingChoice == true){
            buttonSound.play(0,1,1.5);
            if (currentScene == 4){
                currentChat = 31;
                readyToGo = true;
                encounterGrassland ++;
            }else if(currentScene == 6){
                currentChat = 25;
            }else if(currentScene == 10){
                currentChat = 13;
            }else if(currentScene == 12){
                currentChat = 26;
            }

            let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
    
            makingChoice = false;
        }
        
    }
    

    if(mouseInRect(110,320,240,290)){

        if (playMode == 1){
            buttonSound.play(0,1,1.5);
            playMode =2;

            welcome.stop();
            volcano.loop();
        }
        
    }

    if(mouseInRect(870,1080,240,290)){
        if (playMode == 1){
            buttonSound.play(0,1,1.5);
            window.open("https://github.com/baoatwork/the-way-home");
        }
        
    }

    if (mouseInRect(1000,1080,50,130)){
        if(playMode == 3){
            buttonSound.play(0,1,1.5);
            location.reload();
        }
    }

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
        text(whoSpeaks,300,440);

        if (whoSpeaks == "Bai"){

            image(bodyIcon,20,300,280,280);
        }
        
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
    player.overlap(coins2,gameLose);

    flowerP =new Group();
    flowerP.add(player);

    flowerP.draw();
    coins.draw();
    coins2.draw();

    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    
    if (coins.length > 0) {
        if(playFlower){
            currentContent2 = "Your score:" + score;
        }else{
            currentContent2 = " "; 
        }
        
    }
    else {
        playFlower = false;
        currentChat = 20;
        let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
       
    }
}

function getCoin(player, coin) {
    coin.remove();
    score += 1;
  }

function gameLose(){
    playFlower = false;
    currentChat = 28;
    let nowStuff = textStuff[currentScene][currentChat];
     showBody = nowStuff.someonespeaking;
    currentChat ++;
    whoSpeaks = nowStuff.whospeaking;
     currentContent1 = nowStuff.line1;
    currentContent2 = nowStuff.line2;


}


  //canvas for the game
function gameCanvas(){
    image(myCanvas,100,100,1000,300);
}


//shout game
function shout(){
  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  
  
  // Draw an ellipse with size based on volume
  let a=5 + rms * 1300;
  console.log(rms);
  
  fill("white");
  rect(250,200,700,100,10);

  
  if (a<300){
 
  fill(129,199,212);
  rect(250, 200, a,100,10);
  }else if (a>=300 && a <600){
    fill(30,136,168);
    rect(250, 200, a,100,10);
    
  }else if(a >= 600 && a <700){
      fill(0,92,175);
      rect(250,200,a,100,10);
  }else if(a >= 700){
      playShout = false;

      currentChat = 18;
      let nowStuff = textStuff[currentScene][currentChat];
        showBody = nowStuff.someonespeaking;
        currentChat ++;
        whoSpeaks = nowStuff.whospeaking;
        currentContent1 = nowStuff.line1;
        currentContent2 = nowStuff.line2;
  }
}



//position of the choice buttons
function yesAnswerX(){
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){
        return 440;
    }else{
        return 450;
    }
}

function yesAnswerY(){
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){
        return 290;
    }else{
        return 300;
    }
}

function yesAnswerSize(){
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){
        return 100;
    }else{
        return 80;
    }
}

function noAnswerX(){
    if (mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        return 640;
    }else{
        return 650;
    }
}

function noAnswerY(){
    if (mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        return 290;
    }else{
        return 300;
    }
}

function noAnswerSize(){
    if (mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        return 100;
    }else{
        return 80;
    }
}

//return the opacity of the buttons on the welcome page
function buttonT1(){
    if(mouseInRect(110,320,240,290)){
        return 255;
    }else{
        return 0;
    }
}

function buttonT2(){
    if(mouseInRect(870,1080,240,290)){
        return 255;
    }else{
        return 0;
    }
}


//the restart button
function restartSize(){
    if(mouseInRect(1000,1080,50,130)){
        return 100;
    }else{
        return 80;
    }
}

function restartX(){
    if (mouseInRect(1000,1080,50,130)){
        return 990;
    }else{
        return 1000;
    }
}

function restartY(){
    if (mouseInRect(1000,1080,50,130)){
        return 40;
    }else{
        return 50;
    }
}

// check if game over
function checkMode(){
    if (energy <= 0 || sanity <= 0){
        if (currentScene != 11){
            currentScene = 11;
            currentChat =0;
        }
    }
}

//check if mouse in Rect
function mouseInRect(a,b,c,d){
    if(mouseX >= a && mouseX <= b && mouseY >= c && mouseY <= d){
        return true;
    }else{
        return false;
    }
}


//rabbit game
function keyPressed(){
    if (keyCode == RIGHT_ARROW) {
        rabbitplayer.setSpeed(2.2, 0);
      }
      else if (keyCode == DOWN_ARROW) {
        rabbitplayer.setSpeed(2.2, 90);
      }
      else if (keyCode == LEFT_ARROW) {
        rabbitplayer.setSpeed(2.2, 180);
      }
      else if (keyCode == UP_ARROW) {
        rabbitplayer.setSpeed(2.2, 270);
      }
      else if (key == ' ') {
        rabbitplayer.setSpeed(0, 0);
      }
      return false;
}

function rabbitGame(){
    for (var i = 0; i < rabbit.length; i++) {
        rabbit[i].position.y += 70 * 0.015;
    if (rabbit[i].position.y > 340) {
        rabbit[i].position.y = 130;
    }
  }

  if (rabbitplayer.position.x < 230){
      rabbitplayer.position.x =230;
  }else if(rabbitplayer.position.x > 980){
    rabbitplayer.position.x = 980;
  }

  if (rabbitplayer.position.y < 160){
    rabbitplayer.position.y =160;
  }else if(rabbitplayer.position.y > 330){
    rabbitplayer.position.y = 330;
  }

  rabbitplayer.overlap(rabbit,rabbitGameOver);
  rabbitplayer.overlap(rabbitFinal,rabbitGameWin);

  rabbit.draw();
  rabbitP.draw();
}

//rabbit game over
function rabbitGameOver(){
    playRabbit = false;
    currentChat = 14;
    let nowStuff = textStuff[currentScene][currentChat];
     showBody = nowStuff.someonespeaking;
    currentChat ++;
    whoSpeaks = nowStuff.whospeaking;
     currentContent1 = nowStuff.line1;
    currentContent2 = nowStuff.line2;
  }
  
//rabbit win
function rabbitGameWin(){
    playRabbit = false;
    currentChat = 10;
    let nowStuff = textStuff[currentScene][currentChat];
    showBody = nowStuff.someonespeaking;
    currentChat ++;
    whoSpeaks = nowStuff.whospeaking;
    currentContent1 = nowStuff.line1;
    currentContent2 = nowStuff.line2;
  }

