
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	bob1 = new Bob (500,410,20,20)

	roof=createSprite(600,180,270,20)

	var options = {
	bodyA: roof,
	bodyB: bob1,
	stiffness: 0.04,
	length: 10,

	}

	var chain = Constraint.create(options);
  World.add(world. chain)
}


function draw() {
  rectMode(CENTER);
  background("white");


  ball.display();
  
  drawSprites();
 
}



