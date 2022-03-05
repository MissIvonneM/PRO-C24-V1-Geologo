const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    // Crea un plane, iron, stone, rubber y hammer con las clases creadas
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    //muestra los objetos creados
    

 
}
