const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var engine , world;
var bodies; 
var boxes = [];
var gSlider;
var ground;
var rand;
var i = 0;
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine=Engine.create();
    world = engine.world ;  

    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,350,400,20);
    World.add(world,ground);
    console.log(ground);
}
 
function mousePressed() {
    rand = random(10,50);
    if (mouseY < 330) {
        // Every time a mouse press occures create a new box.
            boxes[i] = new Box(mouseX,mouseY,rand,rand+10);
            World.add(world,boxes);
            
            i=i+1;
           
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
  
    background("black");
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    console.log("MouseEvent" + MouseEvent);
    // Use a for loop to show all the boxes
    
    
    ground.display();
    for(var j = 0;j < i; j++){
        boxes[j].display();
    }
 Engine.update(engine);   
}

 

