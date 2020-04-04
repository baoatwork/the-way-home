let r,g,b;
let myLight = 255;
let myLightNow = true;
let petals = []; 

function preload(){
  bgm = loadSound("resource/flower-bgm.mp3");
  back = loadImage("resource/backgroundblank.jpg");
  wind = loadSound("resource/wind.mp3");
  boat = loadImage("resource/boat.png");
  myMouse = loadImage("resource/click.png");
  sun = loadImage("resource/sun.png");
  bird = loadSound("resource/bird.mp3");
  song = loadSound("resource/song.mp3");
}

function setup() {

  createCanvas(2000, 1000);


  
  noCursor();
  noStroke();

  
  userStartAudio();
  bgm.loop(); 

  
}

function draw() {
  let mymousex = myMouseX();
  let mymousey = myMouseY();
  let boatx = boatX();
  let size = mySize();

  tint(myLight);
  background(back);

  colorDecide();
  fill(r,g,b);

  

  image(boat,boatx,880,120,70);
  
  image(sun,1400,60,150,150);

  


  
  let t = frameCount / 60; 
  //console.log(t);

 
  for (let i = 0; i < random(2); i++) {
    petals.push(new petal()); 
  }

  
  for (let p of petals) {
    p.update(t); 
    p.display(); 
  }

  
 
  
  image(myMouse,mymousex,mymousey,size,size);
}


function petal() {
 
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size1 = random(2, 5);
  this.size2 = random(2,5);
  this.shape =random(0,3);
  

 
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    
    this.posY += pow(this.size2, 0.5);


    //delete
    if (this.posY > height) {
      let index = petals.indexOf(this);
      petals.splice(index, 1);
    }
  };

  //draw
  this.display = function() {
    if (this.shape>=2){
      ellipse(this.posX, this.posY, this.size1,this.size2);
      
    }else if(this.shape <1){
      arc(this.posX, this.posY, this.size1,this.size2,0,HALF_PI + QUARTER_PI,OPEN);
      
    }else{
      arc(this.posX, this.posY, this.size1,this.size2,0,PI + QUARTER_PI,OPEN);
      
    }
    
  };
}


function colorDecide(){
  
  if (wind.isPlaying()){
    r = 255;
    g = 38;
    b = 38;
  }else{
    r=245;
    g=150;
    b=170;
  }

}

function mousePressed(){
	let d = dist(mouseX, mouseY, 850,630);
	if (d <= 200){
		if (wind.isPlaying() == true){

		}else{
			wind.play();
		}
	}
  
  
  if (mouseX >= 500 && mouseX <= 620 && mouseY >=880 && mouseY <= 950){
    if (song.isPlaying() == true){

		}else{
			song.play(0,1,0.6);
		}
  }

  if (mouseX >= 330 && mouseX <= 830 && mouseY >=160 && mouseY <= 330){
    if (bird.isPlaying() == true){

		}else{
			bird.play();
		}
  }

  let d1 = dist(mouseX, mouseY, 1475,135);
	if (d1 <= 150){
		if (myLightNow == true){
      myLight = 100;
      myLightNow = false;
		}else{
      myLight = 255;
      myLightNow = true;
		}
	}
}

function myMouseX(){
  if (mouseIsPressed == true){
    return mouseX -60;
  }else{
    return mouseX -50;
  }
}

function myMouseY(){
  if (mouseIsPressed == true){
    return mouseY -60;
  }else{
    return mouseY -50;
  }
}

function mySize(){
  if (mouseIsPressed == true){
    return 120;
  }else{
    return 100;
  } 
}

function boatX(){
  if (song.isPlaying() == true){
    if (song.currentTime()>16){
      return 500;
    }else if (song.currentTime()<7.5){
      return 500 + 30 * song.currentTime();
    }else if(song.currentTime()>=7.5 && song.currentTime()<= 8.5){
      return 725;
    }else{
      return 500 + 30 * (16 - song.currentTime());
    }
  }else{
    return 500;
  }
}