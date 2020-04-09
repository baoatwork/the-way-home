let currentScene=0;
let currentChat = 0;
let die=0;


//the game values
let energy = 5;
let knowledge = 5;
let sanity = 5;


let currentContent1 ="Umm...";
let currentContent2 ="";


//check if the game is over
let stillPlaying = true;

//check if it's time to play the catching flower game
let playFlower = false;

//check if it's time to throw the dice
let readyToGo = false;

//check if it's someone speaking
let showBody = true;
let whoSpeaks = "Bai";

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


//open world

let encounterVolcano =0;

//the text content
textStuff =[
    [
        {
            "line1": "Where ... am I?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "This morning, when you open your eyes, you find",
            "line2": "yourself somewhere unfamiliar.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is blowing so hard that you can't even ",
            "line2": "stand up.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind can't send me here... Can it?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Strangely, you don't panic at all.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Although you don't know what is going on, one thing",
            "line2": "is sure: you need to go home.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Which direction should I go?",
            "line2": "Ah! Morning stars!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "According to the morning stars, you are now",
            "line2": "somewhere far west from your home.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Then I need to go that way... Here we go! ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Well... I have to say this place looks pretty cool.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is no trace of living things around, not even ",
            "line2": "a thing besides rocks or lavas.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Is there anyone here? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No one replys.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I should have thought that. Such an unknown place...",
            "line2": "How did I get here anyway?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Keep walking, you notice some rocks are floating",
            "line2": "right above your head.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is not weakening, but the floating rocks ",
            "line2": "stay stable in the air.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's weird... I have never read about anywhere ",
            "line2": "like here before.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After I get home, I am definitely going to record this ",
            "line2": "place on my travel notes!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Well... I have to say this place looks pretty cool.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is no trace of living things around, not even ",
            "line2": "a thing besides rocks or lavas.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Is there anyone here? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No one replys.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I should have thought that. Such an unknown place...",
            "line2": "How did I get here anyway?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Keep walking, you notice some rocks are floating",
            "line2": "right above your head.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is not weakening, but the floating rocks ",
            "line2": "stay stable in the air.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's weird... I have never read about anywhere ",
            "line2": "like here before.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After I get home, I am definitely going to record this ",
            "line2": "place on my travel notes!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I'm tired... How long have I walked on this land?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You carefully take steps, avoiding the hot lavas and ",
            "line2": "ground seams.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Suddenly, a clap of thunder ring in the distance.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It greatly startles you as you nearly fall down.",
            "line2": " ",
            "someonespeaking": false
        },
        {
            "line1": "A few seconds later, the lightning shows up in the ",
            "line2": "sky.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "What the heck... The thunder comes first?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Is this the real world? Or am I in a dream? I shall not",
            "line2": "be dead right?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "... I miss a good breakfast.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is still nothing familiar in sight. You begin to ",
            "line2": "feel scared and tired gradually.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Anyway, I can't stay here. Keep moving, Bai!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Sanity decreased, energy decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Well... I have to say this place looks pretty cool.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is no trace of living things around, not even ",
            "line2": "a thing besides rocks or lavas.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Is there anyone here? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No one replys.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I should have thought that. Such an unknown place...",
            "line2": "How did I get here anyway?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Keep walking, you notice some rocks are floating",
            "line2": "right above your head.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is not weakening, but the floating rocks ",
            "line2": "stay stable in the air.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's weird... I have never read about anywhere ",
            "line2": "like here before.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After I get home, I am definitely going to record this ",
            "line2": "place on my travel notes!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I'm tired... How long have I walked on this land?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You carefully take steps, avoiding the hot lavas and ",
            "line2": "ground seams.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Suddenly, a clap of thunder ring in the distance.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It greatly startles you as you nearly fall down.",
            "line2": " ",
            "someonespeaking": false
        },
        {
            "line1": "A few seconds later, the lightning shows up in the ",
            "line2": "sky.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "What the heck... The thunder comes first?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Is this the real world? Or am I in a dream? I shall not",
            "line2": "be dead right?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "... I miss a good breakfast.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is still nothing familiar in sight. You begin to ",
            "line2": "feel scared and tired gradually.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Anyway, I can't stay here. Keep moving, Bai!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Sanity decreased, energy decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Ah~ Ah~ ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "After some time, a faint voice appears. It sounds like",
            "line2": "singing and calling out to you.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "As you keep walking, the sound becomes clearer",
            "line2": "and you now recognizes it's a lady's voice.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's creepy! Where does this sound come from?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Well, I can't get out of here anyway. Let me try if I",
            "line2": "can get some help from this person.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Hi! Can you hear me? Who are you? Do you know ",
            "line2": "how can I leave here? I want to go home...",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "The voice seems to be shocked and pauses. You",
            "line2": "know that's a sign that she heard your words.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Can you help me? I don't know why but I was here",
            "line2": "this morning when I woke up.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You don't belong here... I know the way to send you",
            "line2": "back to where you're from.",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "The voice replys in a while. She sounds like a nice",
            "line2": "guy, and you try to believe her.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "But before that, I hope you can come here and do",
            "line2": "me a favor.",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "But where are you? I can't see you!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Close your eyes and think about my voice, and the",
            "line2": "wind will lead you here.",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "That's a weird instruction. You follow what she said",
            "line2": "and close your eyes.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "All of a sudden, you are lifted by a gust of wind.",
            "line2": "It's so strong that you can't even open your eyes.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Sanity decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Your head spins dizzily as soon as you land. You are",
            "line2": "now at a new place nothing like before.",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],[],[],[],[]
]
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
    myHand = loadImage("resource/pic/hand.png")
    myCanvas = loadImage("resource/pic/gamecanvas.png")
    anim = loadAnimation("resource/assets/asterisk_normal0001.png",
    "resource/assets/asterisk_normal0002.png",
    "resource/assets/asterisk_normal0003.png");
    anim2 = loadAnimation("resource/assets/ghost_standing0001.png",
    "resource/assets/ghost_standing0002.png","resource/assets/ghost_standing0003.png")
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
    for (var i = 0; i < 7; i++) {
      var c = createSprite(random(250, 950),random(170, 330),10, 10);
      //c.shapeColor = color(255, 255, 0);
      c.addAnimation("default",anim);
      coins.add(c);
    }
    for (var i = 0; i < 4; i++) {
      var d = createSprite(random(250, 950),random(170, 350),10, 10);
      //c.shapeColor = color(255, 255, 0);
      d.addAnimation("default",anim2);
      coins2.add(d);
    }
    //user's block
    player = createSprite(600, 600, 10, 10);
    player.addImage("default",myHand);

}

function draw(){
    if (stillPlaying == true){
        

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

        fill(250,250,250);
        rect(1050,450,100,100);

        dice();

        

        //catching flower
        if (playFlower == true){
            gameCanvas();
            catchingFlower();
            
        }

    }else{
        //game over
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
    text("Wit", 110, 64);
    text("Sanity", 110, 94);



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
        if (readyToGo == false && playFlower == false){
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
            }
            

        }
    }


    //for the dice
    if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 450 && mouseY <= 550){
        if (readyToGo == true){
            readyToGo = false;
            currentChat = 0;
            var randomValue = random();
            if (currentScene<=17){
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
                //currentScene ++;
            }

            currentChat = 0;
            if (currentScene == 2 || currentScene == 3){
                if (encounterVolcano == 1){
                    currentChat = 11;
                }else if (encounterVolcano == 2){
                    currentChat = 23;
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
    currentScene =30;
    stillPlaying = false;

  }


  //canvas for the game
function gameCanvas(){
    image(myCanvas,100,100,1000,300);
}