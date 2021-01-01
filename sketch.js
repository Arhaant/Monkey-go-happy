
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

var PLAY = 1
var END = 0
var gameState = 1

var survivalTime = 0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,600)
  
  monkey = createSprite(100,425,20,20)
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2
  
  ground = createSprite(300,500,600,5)
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
  
  

  
}


function draw() {
 background("turquoise")
  
  if(gameState === 1){
    monkey.velocityY = monkey.velocityY + 0.5
    monkey.collide(ground)
    
  }
  
  
  if(keyDown("space")){
    monkey.velocityY = -9
  }
  
  spawnObstacles();
  spawnBananas();
  
  stroke("white")
  textSize(20)
  fill("white")
  score = Math.round(frameCount/60)
  text("Score :"+ score, 500, 50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime :"+ survivalTime, 100, 50)
  
  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount% 300 === 0){
    obstacle = createSprite(600,460,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstaclesGroup.add(obstacle)
  }
}

function spawnBananas(){
  if(frameCount%80 === 0){
    banana = createSprite(600,350,10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    bananaGroup.add(banana)
  }
  
}






