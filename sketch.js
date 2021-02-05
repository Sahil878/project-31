const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World= Matter.World;

var engine, world, drop

/*function preload(){
    
}*/

function setup(){
   createCanvas(1200,600)
   engine = Engine.create();
   world = engine.world;

   drop = new Drop(random (0,400),random (0,400),PI/7)

   if(this.rain.position.y > height){
     Matter.Body.setPosition(this.rain,{x:random (0,400), y:random (0,400)})
   }
    
}

function draw(){
background(0)

    drop.display()
}   

