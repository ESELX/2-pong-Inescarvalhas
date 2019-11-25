//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
  background(220); //podem apagar esta linha
}

let posX, posY;
let velX, velY;
let padWidth, padHeight;
let diamBall;
let points;
let vel;

function setup() {
  createCanvas(300, 200);
  posX = random(width);
  posY = 20;
  vel = 4;
  velX = vel;
  velY = vel;
  padWidth = 70;
  padHeight = 10;
  diamBall = 20;
  points=0;
}

function draw() {
  //desenha
  background(168,243,192);
  textSize(20);
  text(points,100,20);
  posX = posX + velX;
  posY = posY + velY;
  stroke(145,239,154)
  fill(245, 239, 154)
  circle(150,100,125)
  stroke(250, 250, 250)
  fill(250, 250, 250)
  ellipse(130, 90, 20,30)
  fill(0)
  ellipse(130, 90, 12,17)
  stroke(250, 250, 250)
  fill(250, 250, 250)
  ellipse(170, 90, 20,30)
  fill(0)
  ellipse(170, 90, 12,17)
  stroke (255, 185, 192)
   fill(255, 185, 192)
  ellipse(180, 115, 15,7)
  stroke (255, 185, 192)
   fill(255, 185, 192)
  ellipse(120, 115, 15,7)
  stroke (195, 0, 21)
   fill(195, 0, 21 )
  ellipse(150, 130, 20,7)
  stroke (250,250,250)
  fill(250,250,250)
  ellipse(posX,posY,diamBall);
    fill(250,250,250)
  rectMode(CENTER);
  rect(mouseX,height-10,padWidth,padHeight);

  //calcula
  if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width) {
    velX = velX*-1;
  }
  if (posY-diamBall/2 <= 0) {
    velY = velY*-1;
  }
  fill(250,250,250)

  if (posY+diamBall/2 >= height){
    fill(250,250,250)
    textSize(40)
    text("Try Again!", height-135, width-240)
    print("Try Again!");
    velX = 0;
    velY = 0;
    points = "Game Over";
  }

  if (velX != 0 && posX >= mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height-10-padHeight/2){
    velY = -random(vel-3,vel);
    velX =random(-vel,vel);
    points++;
  }

}
