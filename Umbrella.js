class Umbrella{
    constructor(x, y)
    {
        var options = {
            isStatic: true,
            restitution: 0.1,
        }
        this.body = Bodies.circle(x, y, 10)
        this.image = loadAnimation('images/Walking Frame/walking_1.png', 'images/Walking Frame/walking_2.png', 'images/Walking Frame/walking_3.png', 'images/Walking Frame/walking_4.png', 'images/Walking Frame/walking_5.png', 'images/Walking Frame/walking_6.png', 'images/Walking Frame/walking_7.png', 'images/Walking Frame/walking_8.png');
        World.add(world, this.body, options)
    }

    display()
    {
        push();
        noStroke();
        fill('black')
        imageMode(CENTER)
        animation(this.image, 330, 400, 50, 50)
        pop();
    }
}