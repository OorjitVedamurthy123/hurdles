var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

//var hurdlesGroup
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var hurdles;
var hurdleGroup;
function preload(){
  track = loadImage("images/something2345678.jpg");
  car1_img = loadImage("images/runner.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  head = loadImage("images/hurdles.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  hurdleGroup = new Group();
}


function draw(){
  
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  
  spawnHurdles();
  hurdleGroup.collide(game.car1);
  drawSprites();
}
function spawnHurdles(){
if(World.frameCount % 60 === 0) {
    
  //creating the obstacles
  
  hurdles = createSprite(16000,565,10,40);
 
 //velocity of the obstacle
  hurdles.velocityX = 22;
  
  //generate random obstacles
  //different animations of different obstacles
  
  //var rand = randomNumber(1,6);
  hurdles.addImage("obstacle",head);
  
 // assign scale and lifetime to the obstacle           
  //obstacle.scale = 0.3;
  hurdles.lifetime = 90;
 // add each obstacle to the group
  hurdleGroup.add(hurdles);
}
}
