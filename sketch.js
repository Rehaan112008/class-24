const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var t
var y 
var o

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    o=new i(100,100)
    t=new Stone(200,200)
    y=new Rubber(600,600,20)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    

    plane.display();
    hammer.display();
     
    o.display()
    y.display()
    t.display()
 
}