
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1, dustbin2, dustbin3;
var ground;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(900, 660, 200, 20);
	dustbin2 = new Dustbin(800, 620, 20, 100);
	dustbin3 = new Dustbin(1000, 620, 20,100);

	ground = new Ground(800,680,2400,20);

	paper1 = new Paper(200, 375, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  text(mouseX + ";" + mouseY, 20, 20);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  ground.display();

  paper1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85});
	}
}



