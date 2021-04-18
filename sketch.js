
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper,trashCan1,trashCan2,trashCan3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1920, 1080);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper = new Paper(300,250,30,30);
	ground = new Ground(800,390,1600,20);
	//trashCan1= new TrashCan(1090,290,20,180);
	trashCan2 = new TrashCan(960,290,280,10);
	//trashCan3= new TrashCan(800,290,20,180);
}

function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
 // trashCan1.display();
  trashCan2.display();
 // trashCan3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-160});

	}
}



