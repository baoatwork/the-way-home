let currentScene=0;
let currentChat = 0;
let die=0;


let currentContent1 ="hahaha";
let currentContent2 ="This is line 2";

//check if it's time to throw the dice
let readyToGo = true;

//check if it's someone speaking
let showBody = true;




var cnv;

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
}



function setup(){
    cnv = createCanvas(1200,600);
    centerCanvas();

    noStroke();


    userStartAudio();
    forest.loop();

}

function draw(){
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
    scene();

    fill(250,250,250);
    rect(1050,450,100,100);

    
}

function threeEnergy(){
    noStroke();

    fill("white");
    textSize(15);
    text("Energy", 60, 25);
    text("Power", 60, 55);
    text("Money", 60, 85);



    fill("pink");
    rect(120,20,180,15);
    fill("blue");
    rect(120,50,180,15);
    fill("red");
    rect(120,80,180,15);
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
function scene(){
    // if (yourpos==365+1*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence1", 600, 400);
    // }else if (yourpos==365+2*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence2", 600, 400);
    // }else if (yourpos==365+3*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence3", 600, 400);
    // }else if (yourpos==365+4*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence4", 600, 400);
    // }else if (yourpos==365+5*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence5", 600, 400);
    // }else if (yourpos==365+6*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence6", 600, 400);
    // }else if (yourpos==365+7*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence7", 600, 400);
    // }else if (yourpos==365+8*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence8", 600, 400);
    // }else if (yourpos==365+9*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence9", 600, 400);
    // }else if (yourpos==365+10*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence10", 600, 400);
    // }else if (yourpos==365+11*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence11", 600, 400);
    // }else if (yourpos==365+12*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence12", 600, 400);
    // }else if (yourpos==365+13*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence13", 600, 400);
    // }else if (yourpos==365+14*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence14", 600, 400);
    // }else if (yourpos==365+15*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence15", 600, 400);
    // }else if (yourpos==365+16*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence16", 600, 400);
    // }else if (yourpos==365+17*55){
    //     fill("white");
    //     textSize(50);
    //     text("scence17", 600, 400);
    // }
}


//mousePressed inteaction
function mousePressed() {

    //For the update of the chatbox
    if (mouseX >= 200 && mouseX <= 1000 && mouseY >= 400 && mouseY <= 580){
        if (readyToGo == true){
            currentContent1 = "hello world!"
        }
    }
    
    //for the dice
    if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 450 && mouseY <= 550){
        if (readyToGo == true){
            //readyToGo = false;
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
        }
    }


    
  }



//background music
function myBgm(){
    return river;
}

//background picture
function myBg(){
    return forestbg;
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