let xBall =  50;
let yBall = 50;
let xSpeed = (2, 5);
let ySpeed = (-5, -2);
let point = 0;


function setup() {
  createCanvas(800, 600);
}



function draw() {

  background(0,0,0);

  fill(255,255,255);
  rect(mouseX, 550, 180, 30);


  move();
  display();
  bounce();
  
  disk();

  
  fill(255,0,0);
  textSize(25);
  text("Point: " + point, 650, 25);
}

function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall < 15 ||
    xBall > 800 - 15) {
    xSpeed *= -1;
  }
  if (yBall < 15 ||
    yBall > 800 - 15) {
    ySpeed *= -1;
  }
}



function display() {
  fill(255,255,255);
  ellipse(xBall, yBall, 30, 30);
}


function disk() {
  if ((xBall > mouseX &&
      xBall < mouseX + 180) &&
    (yBall + 15 >= 550)) {
    xSpeed *= -1;
    ySpeed *= -1;
    point++;

  }
}


function keyPressed(){


    if(key == ' ') {
        xBall = x=random(50,width-20);
 yBall = 50;
 xSpeed = (2, 5);
 ySpeed = (-5, -2);
 point = 0;
    }
          
  }