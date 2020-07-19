const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var player1, player2, court, courtImg, ball, ground, basket;

function preload(){
    courtImg = loadImage("bbcourt.png");
}

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create(); 
    world = engine.world;

    player1 = new Player(displayWidth/2-50, displayHeight/2, 5, 5);
    player1.scale = 0.1;

    ball = new Ball(850, 600, 50);
    slingshot = new SlingShot(ball.body,{x:850, y:600});
    basket = new Basket(1500, 1000);
    ground = new Ground(900, height, 3000, 20);
    
  

}

function draw(){
    background(courtImg);
    Engine.update(engine);

    player1.display();
    player1.run();
    ball.display();
    basket.display();
    ground.display();

}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}