const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var rainDrops = [];
var youngBruce, youngBruceImg;

function preload()
{
    youngBruceImg = loadAnimation('images/Walking Frame/walking_1.png', 'images/Walking Frame/walking_2.png', 'images/Walking Frame/walking_3.png', 'images/Walking Frame/walking_4.png', 'images/Walking Frame/walking_5.png', 'images/Walking Frame/walking_6.png', 'images/Walking Frame/walking_7.png', 'images/Walking Frame/walking_8.png');
}

function setup()
{
   createCanvas(400, 400);
   youngBruce = createSprite(200, 200);
   youngBruce.addImage("walking", youngBruceImg);

   engine = Engine.create();
   world = engine.world;
}

function draw()
{
    background("black");
    
    if(frameCount%60 === 0)
    {
        rainDrops.push(new Drops(random(0, 400), -10));
    }

    for (var i = 0; i < rainDrops.length; i++)
   {
     
     rainDrops[i].display();
     
   }

    drawSprites();
}   

