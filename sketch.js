const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10, Block11, Block12, Block13, Block14, Block15;
var py1, py2, py3, py4, py5;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  Block1 = new Block(400, 230, 50, 50);
  Block2 = new Block(450, 230, 50, 50);
  Block3 = new Block(500, 230, 50, 50);
  Block4 = new Block(550, 230, 50, 50);
  Block5 = new Block(600, 230, 50, 50);
  Block6 = new Block(425, 180, 50, 50);
  Block7 = new Block(475, 180, 50, 50);
  Block8 = new Block(525, 180, 50, 50);
  Block9 = new Block(575, 180, 50, 50);
  Block10 = new Block(450, 130, 50, 50);
  Block11 = new Block(500, 130, 50, 50);
  Block12 = new Block(550, 130, 50, 50);
  Block13 = new Block(475, 80, 50, 50);
  Block14 = new Block(525, 80, 50, 50);
  Block15 = new Block(500, 30, 50, 50);
  py1 = new Block(845, 150, 50, 50);
  py2 = new Block(895, 150, 50, 50);
  py3 = new Block(945, 150, 50, 50);
  py4 = new Block(870, 100, 50, 50);
  py5 = new Block(920, 100, 50, 50);
  py6 = new Block(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  Block1.display("pink", "yellow");
  Block2.display("pink", "yellow");
  Block3.display("pink", "yellow");
  Block4.display("pink", "yellow");
  Block5.display("pink", "yellow");
  Block6.display("cyan", "yellow");
  Block7.display("cyan", "yellow");
  Block8.display("cyan", "yellow");
  Block9.display("cyan", "yellow");
  Block10.display("green", "yellow");
  Block11.display("green", "yellow");
  Block12.display("green", "yellow");
  Block13.display("orange", "yellow");
  Block14.display("orange", "yellow");
  Block15.display("saffron", "yellow");
  py1.display(rgb(229, 116, 117), "green")
  py2.display(rgb(229, 116, 117), "green")
  py3.display(rgb(229, 116, 117), "green")
  py4.display(rgb(110, 71, 102), "green")
  py5.display(rgb(110, 71, 102), "green")
  py6.display(rgb(251, 189, 76), "green")
  sling.display("limegreen");
  stand1.display();
  stand2.display();
  ball.display("darkblue", "orange");
  textSize(35);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BlockES", 150, 385)
  fill("orange");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}