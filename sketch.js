const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world,engine,anything,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var anything_options = {
    isStatic: true
  }
  anything = Bodies.rectangle(200,390,400,50,anything_options);
  World.add(world,anything);
  var ball_options ={
    restitution: 1.0
  }
  ball = Bodies.circle(100,200,20,ball_options)
  World.add(world,ball)
  console.log(ball)

}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  rect(anything.position.x,anything.position.y,200,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}