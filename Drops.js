class Drops
{
    constructor(x, y)
    {
        var options = {
            friction: 0.4
        }
        this.body = Bodies.circle(x, y, 5)
        World.add(world, this.body, options)
    }

    display()
    {
        push();
        noStroke();
        fill('blue')
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    updatePosition()
    {
        if(this.body.position.y > 400)
        {
           Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)})
        }
    }
}

