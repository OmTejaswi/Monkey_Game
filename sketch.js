
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //create monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //create ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x)
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

  createCanvas(400,400);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //jump when the space key is pressed
  if(keyDown("space")&& monkey.y >= 200) {
     monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    //collide monkey with ground
    monkey.collide(ground);
  
    //call food and obstacle functions in draw function
    food();
    obstacles();
  
   //to display sprites on canvas
   drawSprites();
  
   //create scoring system
   stroke("white");
   fill("white");
   textSize(20);
   text("score: " + score,500,50);
  
   stroke("Black");
   fill("Black");
   textSize(20);
   survivalTime = Math.ceil(frameCount/frameRate());
   text("Survival Time: " + survivalTime,100,50);
}

function food() {
  if(World.frameCount%80 === 0) {
 var banana = createSprite(400,200,20,20);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -5;
    
     banana.y = Math.round(random(120,200));
     banana.setLifetime = 400;
    
     foodGroup.add(banana);
  }
}


function obstacles() {
  if(World.frameCount%300 === 0) {
     var obstacle = createSprite(400,315,10,40);
         obstacle.velocityX = -8;
         obstacle.addImage(obstacleImage);
         obstacle.scale = 0.2;
    
         obstacle.setLifetime = 400;     
  }
}


