
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var backgroundImgS;
var invisibleGround;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImg = loadImage("Unlimited ground.png");
  //Loading the font
  calligraphy = loadFont("Monday-Personal Use.otf")
}



function setup() {
  var cnv = createCanvas(600,600);
  
  score = 0;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  backgroundImgS = createSprite(0,305,600,600);
  backgroundImgS.addImage(backgroundImg);
  backgroundImgS.scale = 0.6;
  
  monkey = createSprite(80,460,20,20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.19;
  
  invisibleGround = createSprite(200,510,800,10);
  invisibleGround.visible = false;
}


function draw() {
   background(255);
  
  // Moving ground
    backgroundImgS.velocityX = -9; 
  //making endless background
    if (backgroundImgS.x < -3600){
      backgroundImgS.x = 0;
    }
  
  
  
  //Jump if the space key is pressed
    if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -40;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 3;
  
  monkey.collide(invisibleGround);
  food();
  obstacle();
  drawSprites();
  
  //Displaying the score
    textFont(calligraphy);
    strokeWeight(3);
    stroke("black");
    textSize(45);
    fill(rgb(
227, 50, 50
));
    text("Survival Time : "+score, 250,50);
  
  //making the scoring system
  score = Math.ceil(frameCount/frameRate());
}

function food() {
  if (frameCount%80 === 0) {
      var fruit = createSprite(700,200,20,20);
      fruit.scale = 0.2;
      fruit.velocityX = -9;
      fruit.addImage(bananaImage);
      fruit.lifetime = 300;
      fruit.y = Math.round(random(120, 200));
    
      foodGroup.add(fruit);
  }
}

function obstacle() {
  if (frameCount%100 === 0) {
      var obstacle = createSprite(700,450,20,20);
      obstacle.scale = 0.2;
      obstacle.velocityX = -9;
      obstacle.addImage(obstaceImage);
      obstacle.lifetime = 300;
      obstacleGroup.add(obstacle);
  }
}


