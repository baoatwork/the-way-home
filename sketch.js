let b = 1;
let height =235;

function preload() {
	soundFormats('mp3', 'ogg');
	mySound = loadSound('drops');
  }


function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(1);
    background(250);
    walls(500, 300);
    machine(570);

 }
  
 function walls(x, y) {
    strokeWeight(1);
    line(x,100,x,400);
    line(x,400,400,500);
    line(x+y,100,x+y,400);
    line(x+y,400,900,500);
    line(x,400,x+y,400);
    noFill();
    rect(x+25,155,30,30);
    
 }

 function machine(left){
    strokeWeight(2);
	fill(83, 89, 83);
	rect(left, 120, 160, 90);
	rect(left, 290, 160, 160);
	fill(145, 152, 159);
	rect(left + 10, 210, 140, 80);
	noFill();
	arc(left, 170, 60, 60, HALF_PI, PI);
	fill(28, 28, 28);
	circle(left - 30, 170, 12);
	rect(left + 75, 210, 10, 15);
	rect(left, 140, 100, 45);
	fill(203, 27, 69);
	circle(left + 130, 160, 10);
    strokeWeight(0.5);
    
 }


 

 function mousePressed() {
     console.log(1);
	let d = dist(mouseX, mouseY, 700, 160);
	if (d < 5) {
		if (b == 1) {
            fill(129, 199, 212);
			ellipse(650, height, 8, 10);
	        ellipse(650, height + 15, 8, 10);
	        ellipse(650, height + 30, 8, 10);
			b = 2;
		}else{
			height = -100;
			b =1;
		}

	}
}