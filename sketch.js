
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new box(320,550,980,10);
   
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
box1.display();



  drawSprites();
 
}



