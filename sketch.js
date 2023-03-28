// INSTRUCTIONS
// Choose a mode: either 1 or 2 players
// if you choose player 1 then you will play against the computer, use the mouse to move the paddle
// if you choose player 2 then use the a z and k m for controling the paddles
// after each game if finished you can either exit or play again


twoPlayermode = false;

var sound;

let pl1score = 0;
let pl2score = 0;

let gamemode;
let movepl1 = 100;
let movepl2 = 100;

pl1x = 0;
pl1y = 0;

ballx = 1000 / 2;
bally = 800 / 2;


ballmovex = 7;
ballmovey = 5; 

pl2x = 0;
pl2y = 0;

function preload()
{
  sound = loadSound("pong.mp3")
  
}
function setup() 
{
  createCanvas(1000, 800);
  Ty = 100;
  Rx = 0;
 
 
}


let Ty;
let Rx;

function start(){
  mode = mouseOver(10,410,10,400,400,800,0,400) 
  fill('#232017');
 
 

  if(mode == 2){
    gamemode = 1;
    
    
  }
  else if (mode == 3)
  { 
    
    gamemode = 2;
   
  }
 

}

function draw() {
  background(220);
  
  


  

  
  start();
  fill('#A62C21');
  
  
  
  rect(Rx,0,1000,1000);
  textSize(40);
  fill('#D9BD6A');
  text("1 PLAYER",150,Ty);
  text("2 PLAYER",650,Ty);
  
  
  fill('#D9BD6A');
  textSize(60);
  text(pl1score,430,75);
  text(pl2score,530,75);
  textSize(50);
  text('PONG GAME', width/2 - 155 , 400);
  
  for (var q = 0; q <width;q+=20)
  {
   stroke('#D9BD6A');
   strokeWeight(3);
   line(width/2,q,width/2,q+10);
  }
  strokeWeight(0);


  if(gamemode == 1)
   {
  
    Ty = -100;
    rx = -1100;
    rect(20,constrain(mouseY - 150/2, 10,640),15,150);
  
     
   let hitPart1 = circRect(ballx,bally,30, 20,constrain(mouseY - 150/2, 10,640),15,50);
   let hitPart2 = circRect(ballx,bally,30, 20,constrain(mouseY - 150/2, 10,640) + 50,15,50);
   let hitPart3 = circRect(ballx,bally,30, 20,constrain(mouseY - 150/2, 10,640) + 100,15,50); 
  
    if (hitPart1 == true)
    { 
      
      fill('#232017');
      rect(20,constrain(mouseY - 150/2, 10,640),15,50);
      
      ballmovex = -ballmovex;
      ballmovey = random(-5,-8);
      sound.play()
 
    } 
  else if (hitPart2 == true)
    { 

      fill('#232017');
      rect(20,constrain(mouseY - 150/2, 10,640) + 50,15,50);
      
      ballmovex = -ballmovex ;
      ballmovey = random(-2,3);
      sound.play()
      
     
    } 
  else if (hitPart3 == true)
    { 
     
      fill('#232017');
      rect(20,constrain(mouseY - 150/2, 10,640) + 100,15,50);
      
          
      ballmovex = -ballmovex;
      ballmovey = random(5,8);
      sound.play()
    
    } 
   
  if (hitPart1 != true || hitPart2 != true || hitPart3 != true){
     
    fill('#D9BD6A');
  
  }
  
  fill('#D9BD6A');
  rect(960,  constrain(bally - 150/2, 10,640) ,15,150);// ai paddle bottom
  
  

  
  
   let hitComp = circRect(ballx,bally,30, 960,constrain(bally - 150/2, 10,640),15,150); 
 
  if (hitComp == true)
    { 
       sound.play()
      
       offset = null;
     
  
  let Position = round(random(1,3));
   
  if(Position == 1){
     ballmovex = -ballmovex ;
      ballmovey = random(-2,3);
      
  }
  else if (Position == 2){
        ballmovex = -ballmovex;
      ballmovey = random(5,8);
      
      
  }
  else if (Position == 3){
        ballmovex = -ballmovex;
      ballmovey = random(-5,-8);
      
      
  }
  
     
    
      fill('#232017');
      rect(960,constrain(bally - 150/2, 10,640),15,150);
      
   
    
    } 
  
   
  if (hitComp != true){
      g = 0;
      fill('#D9BD6A');

    
  }
   

  

   ballx += ballmovex;
   bally += ballmovey;
  
 
    g = 0;
    w = 30;
  
  
   if ((bally >= (height - g - w)) || (bally <= (g + w  ))){
     ballmovey = -ballmovey;
    
  }
  
   ellipse(ballx ,bally , 40,40);
  
}
else if(gamemode == 2){
  Ty = -100;
  rx = -1100;
  fill('#D9BD6A');
  
  rect(960 ,constrain(movepl2, 10,640),15,150);


 
  
  

  if (movepl22 == 4){

    movepl2 += -10;
  }
  else if(movepl22 == 5)
  {
    movepl2 += 10;
  }
  else if (movepl22 == 3){
    
  } 
  else
  {}



  
     
  let hitPart1 = circRect(ballx,bally,30, 960,constrain(movepl2 , 10,640),15,50);
  let hitPart2 = circRect(ballx,bally,30, 960,constrain(movepl2 , 10,640) + 50,15,50);
  let hitPart3 = circRect(ballx,bally,30, 960,constrain(movepl2 , 10,640) + 100,15,50); 
   
    if (hitPart1 == true)
    { 
      sound.play()
      fill('#232017');
      rect(960,constrain(movepl2 , 10,640),15,50);
      
      ballmovex = -ballmovex;
      ballmovey = random(-5,-8);
    } 
     else if (hitPart2 == true)
    { 
      sound.play()
      fill('#232017');
      rect(960,constrain(movepl2 , 10,640) + 50,15,50);
      
      ballmovex = -ballmovex;
      ballmovey = random(-2,3);
    } 
    else if (hitPart3 == true)
    { 
      sound.play()
      fill('#232017');
      rect( 960,constrain(movepl2 , 10,640) + 100,15,50);
      
          
      ballmovex = -ballmovex;
      ballmovey = random(5,8);
      

    } 
  
    if (hitPart1 != true || hitPart2 != true || hitPart3 != true){
      g = 0;
      fill('#D9BD6A');
    }
  

  
    fill('#D9BD6A');
    rect(20,constrain(movepl1, 10,640),15,150);
    

    if (movepl11 == 1){

      movepl1 += -10;
    }
    else if(movepl11 == 2)
    {
      movepl1 += 10;
    }
    else if (movepl11 == 3){
      
    } 
    else{}


  
    let hitPart12 = circRect(ballx,bally,30, 20,constrain(movepl1, 10,640),15,50);
    let hitPart22 = circRect(ballx,bally,30, 20,constrain(movepl1 , 10,640) + 50,15,50);
    let hitPart32 = circRect(ballx,bally,30, 20,constrain(movepl1 , 10,640) + 100,15,50); 
 
   if (hitPart12 == true)
   { 
     sound.play()
     fill('#232017');
     rect(20,constrain(movepl1, 10,640),15,50);
     
     ballmovex = -ballmovex;
     ballmovey = random(-5,-8);
     
     
   } 
 else if (hitPart22 == true)
   { 
     sound.play()
     fill('#232017');
     rect(20,constrain(movepl1, 10,640) + 50,15,50);
     
     ballmovex = -ballmovex ;
     ballmovey = random(-2,3);
     
   
   } 
 else if (hitPart32 == true)
   { 
     sound.play()
     fill('#232017');
     rect( 20,constrain(movepl1 , 10,640) + 100,15,50);
     
         
     ballmovex = -ballmovex;
     ballmovey = random(5,8);
     
     
    
   } 
  
 if (hitPart12 != true || hitPart22 != true || hitPart32 != true){
    g = 0;
    fill('#D9BD6A');
  }
    ballx += ballmovex;
    bally += ballmovey;
  
 
    g = 0;
    w = 30;
  
  
   if ((bally >= (height - g - w)) || (bally <= (g + w  ))){
     ballmovey = -ballmovey;
    
  }
  
   ellipse(ballx ,bally , 40,40);
  


}
  

  
  // ball
  if (ballx < -100)
  {
  ballx = 1000 / 2;
  bally = 800 / 2;
  pl2score++;  
  ballrand();
  }
  
  if (ballx > 1100 )
  {  
  ballx = 1000 / 2;
  bally = 800 / 2;
  pl1score++;
  ballrand();
  }


 
  
  ballmovex = ballmovex * 1.001;

  let win = WinMode(pl1score,pl2score);
  if(win == true)
  {
  
    nextgame = mouseOver(10,410,500,1010,400,800,50,1000); 
    
    
    fill('#A62C21');
    rect(0,0,1000,1000);
    
    fill('#D9BD6A');
    text("EXIT",650,600);
    text("PLAY AGAIN",150,600);
    WinMode(pl1score,pl2score);

    if(nextgame == 2)
    
    {
      

      
        
      fill(100,100,100);
      pl1score = 0;
      pl2score = 0; // ball 

      ballx = 1000 / 2;
      bally = 800 / 2;


      ballrand();
      
      
    }
    else if (nextgame == 3)
    {
      remove();
    }
   
  }
  
}



function circRect(cx, cy, rad, rx, ry, rw , rh) {
  let testX = cx;
  let testY = cy;
  
  if (cx < rx)         
    testX = rx;      
  else if (cx > rx+rw) 
    testX = rx+rw;  
  if (cy < ry)         
    testY = ry;      
  else if (cy > ry+rh) 
    testY = ry+rh;   
  
  let d = dist(cx, cy, testX, testY);
  
    if (d <= rad) {
    return true;
  }
  return false;

}


function ballrand(){

  ballmovex = random(5, 8);
  ballmovey = random(0, 5);
  
}


function WinMode(pl1score,pl2score){

  if (pl1score >= 2){
  fill('#D9BD6A');
  textSize(50);
  text('Player 1 WON', width/2 - 150 , 700);
  return true;
    
  }
  else if(pl2score >= 2){
  fill('#D9BD6A');
  textSize(50);
  text('Player 2 WON', width/2 - 150 , 700);
  return true;
  
  }
  
  return false;
}



let movepl11;
let movepl22;
let stopmove;


function keyPressed(){ // for the two players  // dont call it from draw
  if (key == 'a'){
    movepl11 = 1;
    return movepl11;
    
  }else if (key == 'z'){
    movepl11 = 2;
    return movepl11;
  } 

  if (key == 'k'){
    movepl22 = 4;
    return movepl22;
    
  }else if (key == 'm'){
    movepl22 = 5;
    return movepl22;
  }
}


function keyReleased(){ // for the two players 
  if (key == 'a' || key == 'z' ){
    movepl11 = 3;
    
  }

  if (key == 'k' || key == 'm'){
    movepl22 = 3;
    
  }
  
}

function mouseOver(x1,x2,y1,y2,q1,q2,w1,w2)
{

 if (((mouseX > x1) && (mouseX < x2) && (mouseY > y1) && (mouseY < y2)))
  {

    if (mouseIsPressed == true)
    {
        
      return 2;

    }
      
    
  }
  else if ((mouseX > q1) && (mouseX < q2) && (mouseY > w1) && (mouseY < w2)) {

    if (mouseIsPressed == true)
    {
      return 3;
   
    }
  }

}