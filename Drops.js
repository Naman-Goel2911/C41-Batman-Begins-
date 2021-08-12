class Drops
{
    constructor(x, y)
    {
        var options = {
            friction: 0.4,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, 1)
        World.add(world, this.body, options)
    }

    display()
    {
        push();
        noStroke();
        fill('blue')
        ellipseMode(RADIUS);
        ellipse(random(0,750), random(0, 750), 2, 2);
        pop();
    }

    updatePosition()
    {
        if(this.body.position.y > 750)
        {
           Matter.Body.setPosition(this.rain, {x: random(0, 750), y: random(0, 750)})
        }
    }
}

