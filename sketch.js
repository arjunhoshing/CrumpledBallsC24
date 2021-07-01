
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options = {
	restitution: 0.3,
	friction: 0.5,
	density: 1.2,
	setStatic:false
}
var ball = Matter.Bodies.circle(50,600,30,options);


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	World.add(world, ball);
	fill(255);
	
	dustbin1 = new Dustbin (650,660,200,20);
	dustbin2 = new Dustbin (550,633,20,75);
	dustbin3 = new Dustbin (750,633,20,75);
	ground = new Ground (300,680,1500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  drawSprites();

 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  circle(50,600,30);

  keyPressed();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:85});
	}
}



