
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var roofObject;
function preload()
{
	
}

function setup() {
	createCanvas(900, 500);
	
rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	roofObject = new Roof(width/2,height/4,width/2,40)

	bobDiameter=60;

	startBobPositionX=width/2;
	startBobPositionY=height/4+300;

	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bobObject2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)

	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter)

	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	bobObject6 = new Bob(startBobPositionX-bobDiameter*3,startBobPositionY,bobDiameter)
	bobObject7 = new Bob(startBobPositionX+bobDiameter*3,startBobPositionY,bobDiameter)

    rope1Object = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2Object = new Rope(bobObject2.body,roofObject.body,-bobDiameter,0)
	rope3Object = new Rope(bobObject3.body,roofObject.body,0,0)
	rope4Object = new Rope(bobObject4.body,roofObject.body,bobDiameter,0)
	rope5Object = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0)
	rope6Object = new Rope(bobObject6.body,roofObject.body,-bobDiameter*3,0)
	rope7Object = new Rope(bobObject7.body,roofObject.body,bobDiameter*3,0)

}


function draw() {
  rectMode(CENTER);
  background(255);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  bobObject7.display();
  rope1Object.display();
  rope2Object.display();
  rope3Object.display();
  rope4Object.display();
  rope5Object.display();
  rope6Object.display();
  rope7Object.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject6.body,bobObject6.body.position,{x:-50,y:-70});

  
	}
}