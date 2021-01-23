
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

ball1 = new bob(260,200,35);
rope1 = new chain(ball1.body, {x: 260, y:80});

ball2 = new bob(330,200,35);
rope2 = new chain(ball1.body, {x: 330, y:80});

ball3 = new bob(400,200,35);
rope3 = new chain(ball1.body, {x: 400, y:80});

ball4 = new bob(470,200,35);
rope4 = new chain(ball1.body, {x: 470, y:80});

ball5 = new bob(540,200,35);
rope5 = new chain(ball1.body, {x: 540, y:80});



  
}


function draw() {
	background("black");
    Engine.update(engine);

    rope1.display();
    ball1.display();

    rope2.display();
    ball2.display();

    rope3.display();
    ball3.display();

    rope4.display();
    ball4.display();

    rope5.display();
    ball5.display();



  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



