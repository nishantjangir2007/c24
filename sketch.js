const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var logx,link,pig8,link1;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    logx = new Log(200,100,150, PI/2);
    bird = new Bird(100,400);
    pig8 = new Pig(410, 220);
    link1=new Link(bird.body,pig8.body)
    var link_options ={
        bodyA: bird.body,
        bodyB: logx.body,
        length: 100,
        stiffness:0.2
    }
 //link= Constraint.create(link_options);
 //World.add(world,link);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
 //line(bird.body.position.x,bird.body.position.y,
   // logx.body.position.x,logx.body.position.y)
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    link1.display();
    box5.display();
    log4.display();
    log5.display();
    logx.display();
    pig8.display();
    bird.display();
    platform.display();
}
