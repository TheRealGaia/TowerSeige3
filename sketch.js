const Engine = Matter.Engine;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box, slingshot, polygon, ground, stand1;

function setup(){
    createCanvas (1200, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,780, 1200, 20);
    box = new Ground(600, 600, 300, 20);

    polygon = new Polygon(200, 400, 20);

    stand1 = new Ground(200, 750, 100, 40);

    slingshot = new Slingshot(polygon.body, {x:200, y:400});

    //level one
    block1 = new Box(730,590,30,30);
    block2 = new Box(700,590,30,30);
    block3 = new Box(670,590,30,30);
    block4 = new Box(640,590,30,30);
    block5 = new Box(610,590,30,30);
    block6 = new Box(580,590,30,30);
    block7 = new Box(550,590,30,30);
    block8 = new Box(520,590,30,30);
    block9 = new Box(490,590,30,30);

    //level two
    block11 = new Box(715,550,30,30);
    block12 = new Box(695,550,30,30);
    block13 = new Box(655,550,30,30);
    block14 = new Box(625,550,30,30);
    block15 = new Box(595,550,30,30);
    block16 = new Box(565,550,30,30);
    block17 = new Box(525,550,30,30);
    block18 = new Box(500,550,30,30);

    //level three
    block22 = new Box(670,510,30,30);
    block23 = new Box(640,510,30,30);
    block24 = new Box(610,510,30,30);
    block25 = new Box(580,510,30,30);
    block26 = new Box(550,510,30,30);

    //level four
    block30 = new Box(610, 470, 50, 50);


}

function draw(){
    background("black");
    
    Engine.update(engine);

    ground.display();
    box.display();

    polygon.display();

    stand1.display();
    
    
    slingshot.display("white");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();

    block30.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body)
    }
}
