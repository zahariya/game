var gameState = "serve";
var gameLevel = "end";
var speedImg,scooterImg,color1,wasteImg,wasteImg1;
var tagGroup,win1,winImg1,win2,winImg2,win3,winImg3,orangeimg,virusImg,virusImg1,virusImg2;
var dustbin,dustbinImg,l = 2, h1 = 1;
var germsGroup,hurdlesGroup, backImage,vmc,vmcImg,music,building,buildImg,invisibleGround,l,priceGroup,ground,obstacleGroup;
var textImg,textImg1,textImg2,textImg3,textImg4,textImg5,textImg6,textImg7,textImg8,textImg9;
var scores,scoresImg,newImg, hospitalImg;
var life,lifeImg,rickshawImg,carImg,boy,boyImg,boyPic,trash1,trash2,trash3,tag,tagImg, rahul,rahulImg;

var y,t,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,d_img1,d_img2,d_img3,d_img4,d_img5,starImg,menImg,men;
var trashGroup,trash1Group,germ1,germ2,germ3,germ4,sec;

var germGroup, noImg1,noImg2,noImg3,game,gameImg, greenImg;

var score = 0,lives,sprite1,noImg,bImg,h = 3,home,homeImg, brokenH,invisibleBar,sImg,rImg;
var music;
var safety,safety1,safety2,sp,sprite;


function preload(){
  music = loadSound("0119. Vacation - AShamaluevMusic.mp3");
  boyImg = loadImage("Boy2.png");
  wasteImg = loadImage("trash.png");
  wasteImg1 = loadImage("rubbish.png");
  color1 = loadImage("yellow.png");
  trash1 = loadImage("T2.0.png");
  newImg = loadImage("tree1.png");
  trash2 = loadImage("garbage.png");
  winImg1 = loadImage("win1.png");
  winImg2 = loadImage("win2.png");
  vmcImg = loadImage("vmc.png");
  buildImg  = loadImage("build.png");
  trash3 = loadImage("juice.png");
  scooterImg = loadImage("scooter.png");
  speedImg = loadImage("carS.png");
  boyPic = loadImage("Boy.png");
  winImg3 = loadImage("win3.png");
  tagImg = loadImage("267.png");
  backImage = loadImage("B2.png");
  homeImg = loadImage("house.jpg");
  dustbinImg = loadImage("dustbin.png");
  virusImg = loadImage("germ.png");
  virusImg1 = loadImage("germ1.png");
  virusImg2 = loadImage("germ2.png");
  hospitalImg = loadImage("hospital.jpg");
  lives = loadImage("Heart.png");
  starImg = loadImage("star.png");
  textImg1 = loadImage("text2p.png");
  orangeimg = loadImage("orange.jpg");
  gameImg = loadImage("game.png");
  textImg9 = loadImage("text8.png");
  textImg2 = loadImage("text3.png");
  noImg = loadImage("s-1.png");
  textImg7 = loadImage("text7R.png");
  l = loadImage("comic-yellow.jpg");
  textImg8 = loadImage("text8.png");
  noImg1 = loadImage("s-2.png");
  noImg2 = loadImage("s-3p.png");
  noImg3 = loadImage("s-4.png");
  rickshawImg = loadImage("rickshaw.png");
  carImg = loadImage("car2.png");
  textImg3 = loadImage("text4.png");
  textImg4 = loadImage("as.png");
  textImg5 = loadImage("t7.png");
  textImg6 = loadImage("note.png");
  textImg = loadImage("text1.png");
  lifeImg = loadImage("relief.png");
  brokenH = loadImage("Broken Heart.png");
  greenImg = loadImage("green.jpg");
  menImg = loadImage("kid.png");
  scoresImg = loadImage("score.png");
  sec = loadImage('C.jpg');
  rahulImg = loadImage("stroee.png");
  germsGroup = createGroup();
  trashGroup = createGroup();
  obstacleGroup = createGroup();
  hurdlesGroup = createGroup();
  priceGroup = createGroup();
  tagGroup = createGroup();
  trash1Group = createGroup();
 
}



function setup() {
  createCanvas(600,600);
  
// Creating ground
ground = createSprite(200,200);
ground.addImage(backImage);
ground.scale = 1.6;
ground.velocityX = -5;
ground.visible = false;
  
home = createSprite(200,200);
home.addImage(homeImg);
home.scale = 3.3;
home.velocityX = -5;
home.visible = false;
  
game = createSprite(300,295);
game.addImage(gameImg);
game.scale = 0.1;
game.visible = false;
  
 
win1 = createSprite(290,340);
win1.addImage(winImg1);
win1.scale = 0.1;
win1.visible = false;
  
sp = createSprite(200,200);
sp.addImage(color1);
sp.scale = 4.2;
sp.visible = false;
  
win2 = createSprite(320,390);
win2.addImage(winImg2);
win2.scale = 0.087;
win2.visible = false;
  
win3 = createSprite(330,440);
win3.addImage(winImg3);
win3.scale  = 0.087;
win3.visible = false;
  
vmc = createSprite(310,100);
vmc.addImage(vmcImg);
vmc.scale = 0.2;
vmc.visible = false;
  
 
sprite1 = createSprite(540,25);
  
sprite1.addImage(noImg);
sprite1.scale = 0.1;
sprite1.visible = false;
  
building = createSprite(310,200);
building.addImage(buildImg);
building.scale = 0.5;
building.visible = false;
  
d_img1 = createSprite(370,150);
d_img1.addImage(rickshawImg);
d_img1.scale = 0.044;
d_img1.visible = false;
  
d_img2 = createSprite(530,150);
d_img2.addImage(carImg);
d_img2.scale = 0.044;
d_img2.visible = false;
  
d_img3 = createSprite(50,340);
d_img3.addImage(trash1);
d_img3.scale = 0.069;
d_img3.visible = false;
  
d_img4 = createSprite(190,340);
d_img4.addImage(trash2);
d_img4.scale = 0.069;
d_img4.visible = false;
  
d_img5 = createSprite(50,420);
d_img5.addImage(trash3);
d_img5.scale = 0.069;
d_img5.visible = false;
  
life = createSprite(65,25);
life.addImage(lifeImg);
life.scale = 0.1;
life.visible = false;
  
scores = createSprite(360,25);
scores.addImage(scoresImg);
scores.scale = 0.40;
scores.visible = false;
    
men = createSprite(50,480);
men.addImage(menImg);
men.scale = 0.4;  
    
invisibleGround = createSprite(5,595,600,10);
invisibleGround.shapeColor = "black";
invisibleGround.scale = 1.5;
invisibleGround.visible = false;
  
rahul = createSprite(170,150);
rahul.addImage(textImg);
rahul.scale = 0.1;
rahul.visible = false;
  

img1 = createSprite(120,150);
img1.addImage(boyImg);
img1.scale = 0.4;
img1.visible = false;
  
img2 = createSprite(370,150);
img2.addImage(textImg1);
img2.scale = 1;
img2.visible = false;
  
img3 = createSprite(520,160);
img3.addImage(textImg2);
img3.scale = 0.1;
img3.visible = false;
  
img4 = createSprite(320,350);
img4.addImage(textImg3);
img4.scale = 0.1;
img4.visible = false;

img5 = createSprite(570,370);
img5.addImage(textImg4);
img5.scale = 0.1;
img5.visible = false;
  
img6 = createSprite(460,500);
img6.addImage(textImg5);
img6.scale = 0.1;
img6.visible = false;
  
img7 = createSprite(445,560);
img7.addImage(textImg6);
img7.scale = 0.1;
img7.visible = false;
  
img8 = createSprite(290,250);
img8.addImage(textImg7);
img8.scale = 0.3;
img8.visible = false;
  
img9 = createSprite(300,320);
img9.addImage(textImg8);
img9.scale = 0.1;
img9.visible = false;
  
img10 = createSprite(290,250);
img10.addImage(textImg9);
img10.scale = 0.1;
img10.visible = false;
  
img11 = createSprite(300,320);
img11.addImage(textImg8);
img11.scale = 0.1;
img11.visible = false;
  
boy1 = createSprite(70,50);
boy1.addImage(boyImg);
boy1.scale = 0.1;
boy1.depth = building.depth+1;
boy1.visible = false;
  
boy1.setCollider("circle",0,0,100);
boy1.debug = false;
  
dustbin = createSprite(boy1.x,550);
dustbin.addImage(dustbinImg);
dustbin.scale = 0.1;
dustbin.visible = false;
  
sprite = createSprite(200,200);
sprite.scale = 8;
sprite.shapeColor = "black";
sprite.visible = false;

  
safety = createSprite(120,27);
safety.addImage(lives);
safety.scale = 0.014;
safety.visible = false;
  

safety1 = createSprite(150,27);
safety1.addImage(lives);
safety1.scale = 0.014;
safety1.visible = false;

safety2 = createSprite(180,27);
safety2.addImage(lives);
safety2.scale = 0.014;
safety2.visible = false;
  

  
invisibleBar = createSprite(300,470,600,10);
invisibleBar.shapeColor = "black";
invisibleBar.visible = false;


}


function draw() {
  
boy1.collide(invisibleGround);
boy1.collide(invisibleBar);
  
  
  if(gameState==="serve"){
    background(greenImg);
    fill("black");
    stroke("black");
    textSize(20);
    text("HI ! FRIENDS , I AM RAHUL. I AM LIVING IN VADODARA",30,100);
    text("BUT HERE IS A MAJOR PROBLEM THAT HERE THERE IS SO ",25,160);
    text("MUCH LAND POLLUTION AND DUE TO THAT THE GERMS",30,220);
    text("ARE SPREADING IN A LARGE SCALE. SO WILL YOU HELP",30,280);
    text("ME IN CLEANING THE ROADS ?",30,340);
    text("PRESS 'RIGHT ARROW KEY' TO GO FORWARD",130,430);
    text("STORY",250,30);

  }
  
      
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(home.x<0){
    home.x = home.width/2;
  }
  
  if(score === 10){
    background(orangeimg);
    h1 = h1+1;
    safety1.visible = true;
    win1.visible = true;
    win2.visible = true;
    win3.visible = true;
    boy1.y = 250;
    boy1.x = 260
    vmc.visible = true;
    ground.visible = false;
    trashGroup.destroyEach();
    obstacleGroup.destroyEach();
    building.visible = true;
  }
  
  
  if(h1 === 0){
    safety2.addImage(brokenH);
    score = 0;
    background(l);
    ground.visible = false;
    safety.visible = false;
    safety1.visible = false;
    safety2.visible = false;
    sprite1.visible = false;
    life.visible = false;
    scores.visible = false;
    game.visible = true;
    boy1.visible = false;
  }
  
  
  
  if(keyCode === 73){
    boy1.y = 550;
    boy1.x = 70;
    win1.visible = false;
    win2.visible = false;
    win3.visible = false;
    building.visible = false;
    vmc.visible = false;
    l = 2;
    home.visible = true;
    ground.visible = false;
    score = 0;
  }
  
  if(trashGroup.isTouching(boy1)){
    trashGroup.destroyEach();
    score = score+1;
  }
  
  if(trash1Group.isTouching(boy1)){
    trash1Group.destroyEach();
    score = score+1;
  }
  
  
  
  if(hurdlesGroup.isTouching(boy1)){
    l = l-1;
  }
  
  if(l === 1){
    safety.addImage(brokenH);
    
  }
  
  if(l === 0){
    boy1.visible = false;
    sp.visible = true;
    ground.visible = false;
    home.visible = false;
    safety1.addImage(brokenH);
  }
  
  if(obstacleGroup.isTouching(boy1)){
    h1 = h1-1;
    obstacleGroup.destroyEach();
  }
  
    
  if(keyDown("space")){
     boy1.velocityY = -4;
  }
  
  if(keyCode === 39){
    rahul.visible = true;
    men.visible = false;
    img1.visible = true;
    img2.visible = true;
    img3.visible = true;
    img4.visible = true;
    img6.visible = true;
    img7.visible = true;
    d_img1.visible = true;
    d_img2.visible = true;
    d_img3.visible = true;
    d_img4.visible = true;
    d_img5.visible = true;
    img5.visible = true;
    background(sec);
  }
  
   
  if(keyCode === 13){
    music.play();
    boy1.scale = 0.2;
    ground.visible = true;
    safety.visible = true;
    sprite1.visible = true;
    scores.visible = true;
    trashGroup.visible = true;
    boy1.visible = true;
    img1.visible = false;
    rahul.visible = false;
    img2.visible = false;
    img3.visible = false;
    img4.visible = false;
    img6.visible = false;
    img7.visible = false;
    life.visible = true;
    d_img1.visible = false;
    d_img2.visible = false;
    d_img3.visible = false;
    d_img4.visible = false;
    d_img5.visible = false;
    img5.visible = false;
    start();
  }
  
  if(home.visible === true){
    avoid();
    waste();
  }
            
  if(score === 1){
    sprite1.addImage(noImg1);
  }
  
  if(score === 2){
    sprite1.addImage(noImg2);
  }
  
  if(score === 3){
    sprite1.addImage(noImg3);
  }
  
  if(ground.visible === true){
    trashes();
    obstacles();
    
  }
          
  boy1.velocityY = boy1.velocityY + 1.2 
   
  drawSprites();
  
  fill("blue");
  stroke("blue");
  textSize(15);
  text("" + score,540,25);
  
  fill("maroon");
  stroke("black");
  textSize(19);     
  text("LIVES : " + h,660,34);
  
}

function trashes(){
  if(frameCount%80===0){
    var garbage = createSprite(600,random(470,550));
    garbage.velocityX = -11;
    garbage.scale = 0.034;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1 : garbage.addImage(trash1);
        break;
      case 2 : garbage.addImage(trash2);
        break;
      case 3 : garbage.addImage(trash3);
        break;
    }
     trashGroup.add(garbage);
     
    
  }
  
   }

function waste(){
  if(frameCount%80===0){
  var dust = createSprite(600,random(470,550));
  dust.scale = 0.044;
  dust.velocityX = -13;
  var f = Math.round(random(1,2));
  switch(f){
    case 1 : dust.addImage(wasteImg);
      break;
      case 2 : dust.addImage(wasteImg1);
      break;
  }
      trash1Group.add(dust);
  }
}

function obstacles(){
  if(frameCount%140===0){
    var block = createSprite(600,random(538,560));
    block.scale = 0.033;
    block.velocityX = -8;
    var b =  Math.round(random(1,2));
    switch(b){
      case 1 : block.addImage(rickshawImg);
        break;
      case 2 : block.addImage(carImg);
        break;
     
    }
      obstacleGroup.add(block); 
    
      
  }
}

function avoid(){
  if(frameCount%140===0){
    var hurdle = createSprite(600,random(519,560));
    hurdle.scale = 0.1;
    hurdle.velocityX = -8;
    var n = Math.round(random(1,2));
    switch(n){
      case 1 : hurdle.addImage(speedImg);
        break;
        case 2 : hurdle.addImage(scooterImg);
        break;
    }
    
      hurdlesGroup.add(hurdle);
  }
}

function viruses(){
  if(frameCount%80===0){
  var germ = createSprite(600,random(470,550));
  germ.velocityX = -6;
  germ.scale = 0.010;
  var a = Math.round(random(1,3))
    switch(a){
      case 1 : germ.addImage(virusImg);
        break;
        case 2 : germ.addImage(virusImg1);
        break;
        case 3 : germ.addImage(virusImg2);
        break;
    }
       germsGroup.add(germ);
}
}

function intro(){
    background(sec);     
  
}

function start(){
  boy1.y = 520;
}











