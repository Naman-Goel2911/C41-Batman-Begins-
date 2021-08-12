const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var rainDrops = [];
var maxDrops = 100;
var youngBruce, youngBruceImg;
var lighting, lightingImg1, lightingImg2, lightingImg3, lightingImg4;

function preload()
{
    lightingImg1 = loadImage('images/thunderbolt/1.png')
    lightingImg2 = loadImage('images/thunderbolt/2.png')
    lightingImg3 = loadImage('images/thunderbolt/3.png')
    lightingImg4 = loadImage('images/thunderbolt/4.png')
}

function setup()
{
   createCanvas(750, 750);

   engine = Engine.create();
   world = engine.world;

   drops = new Drops()
   umbrella = new Umbrella()
}

function draw()
{
    background("black");

    if(frameCount%60 === 0)
    {
        rainDrops.push(new Drops(random(0, 400), random(0, 400)));
        lighting = createSprite(random(0, 700), random(0, 10), 30, 50)
        lighting.addImage(lightingImg1)
        var rand = random(1, 5)
        switch(rand)
        {
            case 1: lighting.addImage('img1', lightingImg1)
            break;
            case 2: lighting.addImage('img2', lightingImg2)
            break;
            case 3: lighting.addImage('img3', lightingImg3)
            break;
            case 4: lighting.addImage('img4', lightingImg4)
            break;
        }

        lighting.scale = 0.5
        lighting.life = 10;
    }

    for (var i = 0; i < maxDrops; i++)
    {   
        rainDrops.push(new Drops(random(0, 400), random(0, 400)))
        rainDrops[i].display();
    }

    Engine.update(engine);

    umbrella.display()

    drawSprites();
}   

