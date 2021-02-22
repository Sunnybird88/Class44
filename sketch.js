
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var FlapyBird;
var ground;
var clouds;
var background1;
var obstaclesGroup1, obstaclesGroup2;
var gameState = 0;

function preload() {

	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//fill("lightblue");
	//background1 = createSprite(400, 350, 800, 700);
	fill("black");
	flappyBird = createSprite(400, 400, 20, 20);
	ground = createSprite(400, 680, 800, 40);

	obstaclesGroup1 = new Group();
	obstaclesGroup2 = new Group();
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background("lightblue");

	if (keyDown("space")) {

		flappyBird.velocityY = -7;
	}

	flappyBird.velocityY = flappyBird.velocityY + 0.2

	flappyBird.collide(ground);

	obstacles();
  
  drawSprites();
 
}

function obstacles() {
	if (frameCount % 80 === 0) {
		
		var obstacle1 = createSprite(700, 10, 50, 200);
		var obstacle2 = createSprite(600, 680, 50, 500);

		obstaclesGroup1.add(obstacle1);
		obstaclesGroup2.add(obstacle2);

		obstacle1.velocityX = -5
		obstacle2.velocityX = -5

		var rand = random(200, 500);

		obstacle1.height = rand;
		obstacle2.height = rand;

		flappyBird.collide(obstaclesGroup1);
		flappyBird.collide(obstaclesGroup2);

		if (obstaclesGroup1.isTouching(flappyBird) || obstaclesGroup2.isTouching(flappyBird)) {
			gameState = 1;
			textSize(45);
			text("Game Over!", 400, 400)
			obstaclesGroup1.destroy(Each);
			obstaclesGroup2.destroy(Each);
        }
		


		

	}

}

