const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var log1;
var log2;
var log3;
var ground;



function setup() {
	createCanvas(1350, 655);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(250,610,20);
	log1 = new Dustbin(1150,620,150,20);
	log2 = new Dustbin (1070,555,20,150);
	log3 = new Dustbin (1230,555,20,150);
	ground = new Ground (630,640,1500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
 log1.display();
 log2.display();
 log3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	} 
}
